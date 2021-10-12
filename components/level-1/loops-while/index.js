
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
        <SectionDescription><p>In this lesson you'll learn to use the <CodeInline>while</CodeInline>command to create an idefinate loop.</p></SectionDescription>
        <ConsoleOutput text={`
Do you want a random number? y\n4
Do you want a random number? y\n4
Do you want a random number? n\n
Finished printing
`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="while">A command that loops while a given condition is true.</KeyTerm>
            <KeyTerm index="1" term="Indefinite Loop">A loop where the number of iterations can not be known at run time.</KeyTerm>
            <KeyTerm index="2" term="Definite Loop">A loop where the number of iterations is known at run time.</KeyTerm>
        </KeyTerms>
    </Section>
    
    <Section>
        <SectionTitle ><CodeInline>while</CodeInline>Command</SectionTitle>
        <SectionText>
            <p>The while command is used to loop while a condition is true.</p>
            
            <CodeExample code={`counter = 0\nwhile counter < 4:
    print("Counter is", counter)\n    counter = counter + 1`} output={`Counter is 0\nCounter is 1\nCounter is 2\nCounter is 3\n`}>

                </CodeExample>
                <p>Here you should note the following:</p>
                <ul>
                    <li>The <CodeInline>while</CodeInline> command needs a boolean condition to determine whether to loop or not.</li>
                    <li>There is a colon (:) at the end of the <CodeInline>while</CodeInline>command.</li>
                    <li>There is an indentation to group the code that is looped through.</li>
                    <li>The <CodeInline>while</CodeInline> command needs to update the variables to check.  Without this your program will be stuck in an infinite loop.</li>
                </ul>
            </SectionText>
        </Section>

        <Activity repl="https://replit.com/@mrsalih/while-1#main.py" 
                          email={email} 
                          challengeName="level-1::while-1" 
                          pupilProgress={pupilProgress}
                          />

        <Activity repl="https://replit.com/@mrsalih/while-2#main.py" 
                          email={email} 
                          challengeName="level-1::while-2" 
                          pupilProgress={pupilProgress}
                          />
        
        <Activity repl="https://replit.com/@mrsalih/while-3#main.py" 
                          email={email} 
                          challengeName="level-1::while-3" 
                          pupilProgress={pupilProgress}
                          />

        
    </motion.div>);

export default MarkUp