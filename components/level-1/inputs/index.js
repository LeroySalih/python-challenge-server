
import {motion} from 'framer-motion';

import {Page, 
    Lesson,
    Section, 
    SectionTitle, 
    SectionVideo, 
    SectionDescription, 
    SectionText, 
    KeyTerms,
    KeyTerm,
    KeyTermTitle,
    LessonHeader, 
    ContainerVariant,
    ItemVariant,
    Note
} from '../../format'

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../../code';
import { Code } from '@material-ui/icons';


const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
    <Section id="what-we-are-building" >
        <SectionTitle>What We're Building</SectionTitle>
        <SectionDescription>In this lesson you'll learn to use the input command to get data from the user (via the keyboard).</SectionDescription>
        <ConsoleOutput text={`
What is your name? Mr Salih\n\n
Hello Mr Salih\n\n
How old are you? 21\n\n
Next year you will be 22 years old.

`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Input">The process of getting data from the user via the keyboard.</KeyTerm>
            <KeyTerm index="1" term="Data Type">The data type of the variable returned by the input command.</KeyTerm>                
        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle >Getting Input</SectionTitle>
        <SectionText>
            <p>Till now, our programs have used variables and values that are specified when we write the program.</p>
            <CodeExample code={`print(10 + 5)`} output={`15`} />
            <p>Most programs will require us to process data provide when the program executes</p>
            <p>We think of this as three steps</p>
            <ul>
                <li>Input - Get the data to be processed.  This could be numebrs to add, a name to search for in a database, or a password to check.</li>
                <li>Process - Do somehting with the data.  This could be add the numbers, check the database, etc</li>
                <li>Output - Display the result.  </li>
            </ul>

            <p>Also, so far our programs have only used the console to output results of our programs, but there are many ways to input data and receive output</p>

            <table>
                <tr><th>(Some) Ways to Input Data</th><th>(Some) Ways to Output Results</th></tr>
                <tr><td>Keyboard</td><td>Console</td></tr>
                <tr><td>File</td><td>File</td></tr>
                <tr><td>Microphone</td><td>Speaker</td></tr>
                <tr><td>Touch Pad</td><td>Haptic</td></tr>
                <tr><td>Mouse</td><td>Printer</td></tr>
                <tr><td>Senor</td><td></td></tr>
            </table>

            <p>In this section, we will look at ways to input data from the keyboard using the <CodeInline>input</CodeInline> command.</p>

           

           
                    
            </SectionText>
        </Section>

        <Section>
            <SectionTitle>input</SectionTitle>
            <SectionText>
                <p>The <CodeInline>input</CodeInline> command is used to get data from the user using the keyboard.</p>
                <p>The user is given a message (usually telling the user what to input), and then the program will pause while the user enters data.</p>
                <p>The user completes the data when the <CodeInline>Enter</CodeInline> key is pressed. </p>
                <p>At which point, the program returns the data that the user entered and we can place the data in a variable to be used later.</p>
                <p><CodeInline>input</CodeInline>Will always return the value as a <CodeInline>string</CodeInline> and so we may also need to change it's data type if we want to use the variable as something other than a string, for instance a number.</p>
                <p>We can use the <CodeInline>input</CodeInline>in the following way</p>
                <CodeExample code={`pupil_name = input("Enter Your Name")`} output={`Enter Your Name`}>

                </CodeExample>
                <p>Here you should note the following:</p>
                <ul>
                    <li>The message that is in quotes will be displayed to the user</li>
                    <li>The program will pause while while the user enters their response</li>
                    <li>The program will continue when the user presses <CodeInline>enter</CodeInline></li>
                    <li>The value that the user entere will be <b>assigned</b> to the variable on the left of the equals sign </li>
                    <li>Thew data type of the variable will be a string.</li>
                </ul>
            
            </SectionText>
        </Section>


        <Activity repl="https://replit.com/@mrsalih/input-1#challenge.md" 
                          email={email} 
                          challengeName="level-1::input-1" 
                          pupilProgress={pupilProgress}
                          />

        <Activity repl="https://replit.com/@mrsalih/input-2#challenge.md" 
                          email={email} 
                          challengeName="level-1::input-2" 
                          pupilProgress={pupilProgress}
                          />


        <Section>
            <SectionTitle>Changing the Type</SectionTitle>
            <SectionText>
                <p>The variable that gets returned by the <CodeInline>input</CodeInline> command is a <b>string</b></p>
                <p>If we want to treat the variable as a number, then we need to change it's data type</p>
                <p>We can do this using</p>
                <ul>
                    <li><CodeInline>int()</CodeInline> to convert to an integer</li>
                    <li><CodeInline>float()</CodeInline> to convert to a float</li>
                    <li><CodeInline>bool()</CodeInline> to convert to a boolean</li>
                </ul>
                <p>To use these commands, we use:</p>
                <CodeExample code={`age = input("Enter your age:")\nprint(age + "1")\nage=int(age)\nprint(age + 1)`} output={`Enter your age: 13\n131\n14`}></CodeExample>
            </SectionText>
        </Section>

        <Activity repl="https://replit.com/@mrsalih/input-3#challenge.md" 
                          email={email} 
                          challengeName="level-1::input-3" 
                          pupilProgress={pupilProgress}
                          />


        

    </motion.div>);

export default MarkUp