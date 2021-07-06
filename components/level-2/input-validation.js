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
    ItemVariant
} from '../format'

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../code';

const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
    <Section id="what-we-are-building" >
        <SectionTitle>What We're Building</SectionTitle>
        <SectionDescription>In this lesson you'll practise validating data from a user.</SectionDescription>
        <ConsoleOutput text={`Enter a number between 1 and 10: -5\n
Incorrect value, please try again.\n
Enter a number between 1 and 10: 0\n
Incorrect value, please try again.\n
Enter a number between 1 and 10: 11\n
Incorrect value, please try again.\n
Enter a number between 1 and 10: 1\n
Thank you, please continue`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Validate">Ensure that data is within expected range and format.</KeyTerm>
            <KeyTerm index="1" term="Boolean Operator">An operator that returns <CodeInline>True</CodeInline> or <CodeInline>False</CodeInline>.</KeyTerm>
            <KeyTerm index="2" term="is_valid def">A <CodeInline>def</CodeInline> that we define to determine whether data is valid (True) or not (False).</KeyTerm>                    
        </KeyTerms>
    </Section>
                
    <Section>
        <SectionTitle >What is Validation?</SectionTitle>
        <SectionText>
            <p>Validation means that the program will check that data is of a value and format that teh program expects.</p>
            <p>Typical example sof validation are:</p>
            <ul>
                <li>Ensuring that only numbers are entered when required</li>
                <li>Ensuring that a password meets criteria</li>
                <li>Ensuring that a string is of a given length</li>
                <li>Ensuring that a file exists and can be accessed by the computer.</li>
            </ul>
            <p>We validate data to prevent the program from producing incorrect output or worse still, crashing.  Remember the saying "Garbage in, garbage out"</p>
        </SectionText>
    </Section>

    <Section >
        <SectionTitle >How Validation Works</SectionTitle>
        <SectionText>
            <p>Validation will always follow the same pattern:</p>
            <CodeExample code={`define the is_valid def
get the input
while not (data is valid)
    tell the user
    get the input
continue with the program
`}/>
            </SectionText>
                    
    </Section>

    <Section >
        <SectionTitle >Defining the is_valid def</SectionTitle>
        <SectionText>
                        
            <p>To define the valid data, we create a <CodeInline>def</CodeInline> that accepts the user input and returns a True (if input is valid) or False (if input is invalid).</p>
            <p>The def is usually named as <CodeInline>is_valid_[...]</CodeInline>, such as: </p>

            <ul>
                <li><CodeInline>is_valid_height</CodeInline> may check that the user has entered a height between 0 and 200 cms </li>
                <li><CodeInline>is_valid_date</CodeInline> may check that the user has entered a valid date</li>
                <li><CodeInline>is_valid_email</CodeInline> may check that the user has entered a valid email address</li>
            </ul>
            
            <p>
                An <CodeInline>is_valid def</CodeInline> will generally use boolean operators, such as <CodeInline>&nbsp;, nbsp;= == not, and </CodeInline>to determine whether the 
                input data is valid or not.
            </p>
            <CodeExample code={`def is_valid_height(height):
    return 0 <= height <= 200

print(is_valid_height(-5))
print(is_valid_height(203))
print(is_valid_height(176))
    `} output={`False
False
True`}/>
        </SectionText>
    </Section>

    <Section >
        <SectionTitle >Full Validation Pattern</SectionTitle>
        <SectionText>

            <p>Validation will always follow the same pattern:</p>
            <CodeExample code={`define the is_valid def
get the input
while not (data is valid)
    tell the user
    get the input
continue with the program
`} />
            
            <ul>
                <ol>First we define (and test) the <CodeInline>is_valid</CodeInline> def</ol>
                <ol>Then we get the data.  If this is data from the user, it will probably use an <CodeInline>input()</CodeInline> command.  Other ways to get data may inlcude reading a file or accessign the internet.</ol>
                <ol>Line 3 starts the while loop, which will execute while the data is <CodeInline>not valid</CodeInline></ol>
                <ol>Line 4 is the first line fo the while loop, and informs the user of the error</ol>
                <ol>Line 5 allows the user to re enter the data.  This is the end fo the while loop, so we return to line 3.</ol>
                <ol>If the data is valid, then the while loop will return False, and so will not execute, allowing the program to continue.</ol>
            </ul>
        </SectionText>
    </Section>
    <Section>                
        <Activity title="Input Validation"
            repl="https://replit.com/@mrsalih/input-validation" 
            email={email} 
            challengeName="level-2::input-validation" 
            pupilProgress={pupilProgress}
            />
    </Section>
</motion.div>)


export default MarkUp;

