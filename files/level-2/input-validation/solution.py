def is_valid(value):
    return 1 <= value <= 10


if __name__ == "__main__":
    choice = int(input("Enter a number between 1 and 10:"))

    while not (is_valid(choice)):
        print("Incorrect value, please try again.")
        choice = int(input("Enter a number between 1 and 10:"))

    print ("Thank you, please continue.")
