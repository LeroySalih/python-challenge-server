
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
        <SectionDescription><p>In this lesson you'll learn to use the <CodeInline>range</CodeInline> commands to produce a list of numbers.</p></SectionDescription>
        <ConsoleOutput text={`[1,2,3,4,5]\n[5,4,3,2,1]`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="start">The first number of the list that is returned by range.</KeyTerm>
            <KeyTerm index="1" term="stop">The last number of that is used by the range.  This number is not included in the list.</KeyTerm>
            <KeyTerm index="2" term="step">The increment of the list.</KeyTerm>

        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle ><CodeInline>range()</CodeInline>Command</SectionTitle>
        <SectionText>
            <p>The <CodeInline>range()</CodeInline> command produces a list of numbers.  The command takes 3 parameters, <CodeInline>start</CodeInline>, <CodeInline>stop</CodeInline> and <CodeInline>step</CodeInline>.</p>
            <p></p>
            <ul>
                <li>start - The first number included in the list.  </li>
                <li>stop - The last number (this is exclusive, i.e. this number is not included in the list)</li>
                <li>step - The number of numbers incremented each time.</li>
            </ul>

            <p>We can see the <CodeInline>range</CodeInline> command in action by combining it with a <CodeInline>list()</CodeInline> command.  We have not yet discussed lists, but we will cover them in a future lesson. </p>
            
            <p>Below you can see some examples of using the <CodeInline>range</CodeInline> and <CodeInline>list</CodeInline>commands.</p>

            <CodeExample code={`ids = list(range(0, 5, 1))\nprint(ids)`} output={`[0, 1, 2, 3, 4]`}>

            </CodeExample>

            <p>In the following example, we will change the start paramter</p>
            <CodeExample code={`ids = list(range(3, 5, 1))\nprint(ids)`} output={`[3, 4]`}>

            </CodeExample>

            <p>In the following example, we will change the step paramter</p>
            <CodeExample code={`ids = list(range(0, 10, 2))\nprint(ids)`} output={`[0, 2, 4, 6, 8]`}>

            </CodeExample>

            <p>In the following example, we will change start, stop and step parameters to count backwards.  Notice how the stop command is still the next number in the sequence.</p>
            <CodeExample code={`ids = list(range(5, 0, -1))\nprint(ids)`} output={`[5,4,3,2,1]`}>

            </CodeExample>

           

           
                    
            </SectionText>
        </Section>

       


        <Activity repl="https://replit.com/@mrsalih/range-1#tests/tests.py" 
                          email={email} 
                          challengeName="level-1::range-1" 
                          pupilProgress={pupilProgress}
                          />

        <Activity repl="https://replit.com/@mrsalih/range-2#tests/tests.py" 
                                email={email} 
                                challengeName="level-1::range-2" 
                                pupilProgress={pupilProgress}
                                />

        <Activity repl="https://replit.com/@mrsalih/range-3#tests/tests.py" 
                                        email={email} 
                                        challengeName="level-1::range-3" 
                                        pupilProgress={pupilProgress}
                                        />

        
        


        

    </motion.div>);

export default MarkUp