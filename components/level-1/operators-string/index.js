
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


const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
    <Section id="what-we-are-building" >
        <SectionTitle>What We're Building</SectionTitle>
        <SectionDescription>In this lesson you'll learn to use operators to perform calculations.</SectionDescription>
        <ConsoleOutput text={`
#Finding the first letter
What is your name?Salih\n\n
There are 5 letters in your name
The first letter is S
The last letter is h
The middle letter is l
`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Character">Any text based symbol.  Includes (A to Z, a to z, 0 to 9, *#@:, etc)</KeyTerm>        
            <KeyTerm index="1" term="String">A collection of 1 or more characters, enclosed. with a quote. 'Salih', 'salih@bisak.org', '12345' are all strings</KeyTerm>        
            <KeyTerm index="2" term="Index">The position of a character in a string (starts at Zero)</KeyTerm>
            <KeyTerm index="3" term="Index">The position of a character in a string (starts at Zero)</KeyTerm>
            <KeyTerm index="4" term="[]">The index operator.  Returns the character</KeyTerm>        
            
            
        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle >Declaring Strings</SectionTitle>
        <SectionText>
            <p>Perform a calculation in python takes 2 steps.</p>
            <ul>
                <li>Perform the calculation</li>
                <li>Display the result</li>
            </ul>
            <p>There are a number of different ways that we can execute both of these steps, but at first, we'll use the <CodeInline>print</CodeInline> command.</p>

            <p>When we use the <CodeInline>print</CodeInline> command, we can place the calculation we want to perform in the brackets.  The <CodeInline>print</CodeInline> command will perform the calculation and print the result to the console.</p>

            <Python code={`print(<Calculation to Perform>)`}/>

            <p>For Example.  To calcuate the sum of 2 and 5 (2 plus 5) and 3 squared, we type:</p>
                            
            <CodeExample 
                code={`print(2 + 5)\nprint(3 ** 2)`}
                output={`7\n9`}
            />

            <Note>
                <ul>
                    <li>There is no indentation infront of the <CodeInline>print</CodeInline> command</li>
                    <li>There are no quotes around the calculation being performed.</li>
                </ul>
            </Note>
                    
            </SectionText>
        </Section>

        <Section>
            <SectionTitle><CodeInline>len</CodeInline> Command</SectionTitle>
            <SectionText></SectionText>
        </Section>
        
        <Section>
            <SectionTitle>Index Operator <CodeInline>[]</CodeInline></SectionTitle>
            <SectionText></SectionText>
        </Section>

        <Activity repl="https://replit.com/@mrsalih/operations-numeric#challenge.md" 
                          email={email} 
                          challengeName="level-1::operations-numeric" 
                          pupilProgress={pupilProgress}
                          />

    </motion.div>);

export default MarkUp