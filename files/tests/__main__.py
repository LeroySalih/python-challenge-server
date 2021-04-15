from subprocess import run

import os,sys,inspect
import requests 
import json 

#print(colour.red(os.getenv("REPL_OWNER")))
#print(os.getenv("REPL_SLUG"))

#this variable gets replaced by the API
challenge_name = "level-1::input-validation"
email = sys.argv[1]


# Add the parent directory to the current path so the main file can be found
currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0,parentdir) 


from colour import red, green

#import the main file
from main import *
from tests import *

# Use this code to configure the tests from the environment variables
# print("*" * 20)
# print(f"Testing Pod {os.environ['POD_ID']} for {os.environ['APP_EMAIL']}")
# print("*" * 20)

    



def textReset():
    print(u"\u001b[0m", end="")

def textGreen():
    print(u"\u001b[32m", end="")

def textRed():
    print(u"\u001b[31m", end="")

def agg(results):
    success = 0
    fails = 0

    for result in results:
        
        if result['status'] == 'passed':
            success = success + 1
        else:
            fails = fails + 1

    
    return success, fails

def createTestSuite (engine):
    
    # Run all tests
    results = engine.run()

    #Posting Results to Server
    #params = {
    #    "email": os.environ["APP_EMAIL"],
    #    "podId": os.environ["POD_ID"],
    #    "results" : json.dumps(results)
    #}

    #result = requests.post(
    #    "https://3000-ab155182-05d4-4bf5-b47e-2b757b153877.ws-eu01.gitpod.io/api/test-result",
    #    # "https://python-code-test-server.herokuapp.com/api/test-result",
    #    data=params
    #    )

    
    print(f"Running tests for {engine.label}")
    for result in results:
        print("")
        if (result["status"] == "passed"):
            textGreen()
            print(u'\u2714', end=" ")
            textReset()
            print("{0}......{1}".format(result["name"], green("Passed")))
        else:
            textRed()
            print(u'\u2718', end=" ")
            textReset()
            print ("{0}.....{1}".format(result["name"], red("Failed")))
            print("\tExpected")
            print("\t========")
            print("\t", result['expected'])
            print("")
        
            print("\tActual")
            print("\t========")
            print("\t", result['actual'])
        
        textReset()

    success, fail = agg(results)

    progress = (float(success) / len(engine.getTests()) * 100.0)
    print (f"{success} Successes")
    print (f"{fail} Fails")
    print(f"{engine.label} is {progress:.2f} % complete.")
    print("")
    print("")

    return results, success, fail, progress  

if __name__ == "__main__":

    

    engine = MainTestEngine("main.py")
    results, success, fail, progress = createTestSuite(engine)

    print("Posting Results to server.")


    mainFile = open("main.py", "r")
    mainText = mainFile.read()

    data = {
        "email" : email,
        "challenge_name" : challenge_name,
        "repl_owner" : os.getenv("REPL_OWNER"),
        "repl_slug" : os.getenv("REPL_SLUG"),
        "results" : json.dumps(results), 
        "successes" : success,
        "fails" : fail,
        "progress" : progress,
        "main" : mainText
    }

    headers = {"Content-Type":"multipart/form-data"}

    
    url = f"https://3000-crimson-earwig-bzsjx0xu.ws-eu03.gitpod.io/api/submit"
    
    result = requests.post(url, data=data)

    print(result.status_code)