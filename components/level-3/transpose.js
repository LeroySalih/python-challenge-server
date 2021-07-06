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
        <SectionDescription>In this lesson you'll learn to encrypt and decrypt text using a Transpose algorithm.</SectionDescription>
        <ConsoleOutput text={`plain text: Hello World\nTransposed: eHll ooWlrd`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Transpose">To transpose a string of text means to swap each letter with its neighbour.  ABCD becomes BADC.</KeyTerm>
        </KeyTerms>
    </Section>
                
    <Section>
        <SectionTitle >Transpose Cypher</SectionTitle>
        <SectionText>
        <p>We can use the <CodeInline>print</CodeInline> command to display numbers, text and characters to the 
        console.  In text based programs, the console is the main interface that we use to 
        allow our program to interact with the user. Other ways that we interact with users include sound and files, but we will deal with these in later lessons.
        </p>
        <p>Typical uses for the <CodeInline>print</CodeInline> command inlude:</p>
        <ul>
            <li>Letting the user know the result of a calculation</li>
            <li>Giving the user an update on a long running operation</li>
            <li>Letting the user know something has gone wrong</li>
            <li>Letting the user know that the program has ended.</li>
        </ul>
        

        <p>To use the <CodeInline>print</CodeInline> command, type:</p>


        <Python code={`print(<something to output to console>)`}/>
        
        
        <p>Some examples are:</p>
        <CodeExample 
            code={`print("Hello World")\nprint(10 + 5)`}
            output={`Hello World\n15`}
        />
        
        </SectionText>
    </Section>

    <Section >
        <SectionTitle >Printing Numbers</SectionTitle>
        <SectionText>
            
            <p>To print a number simply put the number between the brackets</p>
            <CodeExample 
                code={`print(10)\nprint(0.5)\nprint(0.1234567)`}
                output={`10\n0.5\n0.1234567`}
            />
            
        </SectionText>
        
    </Section>
            
    <Activity title="Transpose Cypher"
                repl="https://replit.com/@mrsalih/transpose#challenge.md" 
                email={email} 
                challengeName="level-3::transpose" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

