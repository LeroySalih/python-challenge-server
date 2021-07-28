
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
#addition
10 + 2 = 12\n\n
#subtraction
10 - 2 = 8\n\n
#multiplication
10 * 3 = 30\n\n
#division
10 / 3 = 3.33333\n\n
#integer (whole number) division
10 // 3 = 3\n\n
#modulo (remainder)
10 % 3 = 1\n\n
#power of
10 ** 3 = 1000\n\n

`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Sum">Adding numbers (+)</KeyTerm>
            <KeyTerm index="1" term="Difference">Subtracting numbers (-).</KeyTerm>        
            <KeyTerm index="2" term="Product">Multiply numbers(*).</KeyTerm>        
            <KeyTerm index="1" term="Quotiant">Divide numbers (/).</KeyTerm>        
            <KeyTerm index="1" term="Integer">Whole Number Divide (ensure that the result is whole number).</KeyTerm>        
            <KeyTerm index="1" term="Modulo">Remainder.</KeyTerm>        
        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle >Performing calculations</SectionTitle>
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

        <Activity repl="https://replit.com/@mrsalih/operations-numeric#challenge.md" 
                          email={email} 
                          challengeName="level-1::operations-numeric" 
                          pupilProgress={pupilProgress}
                          />

    </motion.div>);

export default MarkUp