
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
        <SectionDescription><p>In this lesson you'll learn to use the <CodeInline>for</CodeInline>and <CodeInline>range</CodeInline> commands to create loops.</p></SectionDescription>
        <ConsoleOutput text={`
Where shall I start? 1\n\n
Where shall I end? 5\n\n
Printing 1
Printing 2
Printing 3
Printing 4
Printing 5
`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="for">A command that loops through a list of items.</KeyTerm>
            
        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle ><CodeInline>for</CodeInline>Command</SectionTitle>
        <SectionText>
            <p>We use the for command to loop a defined number of times.</p>
            <p><CodeInline>for</CodeInline>loops work with lists, and will run their code once for each item in the list.</p>
            <p>The variable in the <CodeInline>for</CodeInline>command, is assigned the value of the current item in the list.  This value is updated each time the list moves on to the next item.</p>

            <CodeExample code={`for id in range(0, 5, 1):
    print("Printing", id)`} output={`Printing 0\nPrinting 1\nPrinting 2\nPrinting 3\nPrinting 4\n`}>

                </CodeExample>
                <p>Here you should note the following:</p>
                <ul>
                    <li>The <CodeInline>range</CodeInline> command produces a list that the <CodeInline>for</CodeInline> command loops through.</li>
                    <li>The <CodeInline>for</CodeInline> command includes a variable <CodeInline>id</CodeInline>that will be updated each time the loop runs with the next value from the list.</li>
                    <li>There is a colon (:) at the end of the <CodeInline>for</CodeInline>command.</li>
                    <li>There is an indentation to show the code that is looped through.</li>
    
                </ul>
                <p>Within each loop, the variable (in this case id) is updated with each item, and can be used in the loop code.</p>
            
            </SectionText>
        </Section>


        <Section>
            <SectionTitle>Using <CodeInline>for</CodeInline> with other types of lists</SectionTitle>
            <SectionText>
                <p>The <CodeInline>for</CodeInline> command can be used to loop through any list of items. </p>

                <CodeExample code={`for item in range(0, 5, 1):\n\tprint(item)`} output={`0\n1\n2\n3\n4\n`}></CodeExample>


                <CodeExample code={`for name in ['Alfred', 'Bob', 'Charlie']:\n\tprint("Hello", name)`} output={`Hello Alfred\nHello Bob\nHello Charlie`}></CodeExample>

                <CodeExample code={`total = 0\nfor item in [1, 5, 7, 0]:\n\ttotal = total + item\nprint(total)`} output={`13\n`}></CodeExample>

                <CodeExample code={`for letter in "Salih":\n\tprint(letter)`} output={`S\na\nl\ni\nh`}></CodeExample>
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

    </motion.div>);

export default MarkUp