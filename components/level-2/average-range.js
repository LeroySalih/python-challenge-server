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
        <SectionDescription>In this lesson you'll practise combining ranges, for loops and operators to calculate the average of a range of numbers.</SectionDescription>
        <ConsoleOutput text={`Enter the start:-5\n
Enter the max:5\n
The average is 0
`}/>
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
        <SectionTitle >What is a Running Total?</SectionTitle>
        <SectionText>
            <p>To create a running total, we use a variable to continuously add values, thus calculating a sum of a range.</p>

            <CodeExample code={`total=0\nfor num in range(0, 10, 1):\n\ttotal = total + num\nprint(num)`}/>
            <p>By always adding the new number to the total variable, we are creating the running total.</p>
        </SectionText>
    </Section>

    

    

    
    <Section>                
        <Activity title="Mean Range"
            repl="https://replit.com/@mrsalih/average-range#main.py" 
            email={email} 
            challengeName="level-2::average-main" 
            pupilProgress={pupilProgress}
            />
    </Section>
</motion.div>)


export default MarkUp;

