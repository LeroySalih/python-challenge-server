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
        <SectionDescription>In this challenge, you'll solve a simple increment / decrement problem.</SectionDescription>
        <ConsoleOutput text={`Enter your code: ((()\nYour elevator will be on floor 2`}/>
    </Section>


    <Section>
        <SectionTitle>What to build:</SectionTitle>    
        <SectionText>
            <p>Your program will receive a series of instructions from the user in the format of a string containing a number of bracket symbols.</p>
            <p>left bracket, <CodeInline>(</CodeInline> means that the elevator must travel up one floor.  Each <CodeInline>)</CodeInline> symbol means that the elevator must travel down 1 floor.  In this building, the first floor is 0, and there are an infinite number of floors both above and below ground level so we dont need to be concerned about limits.</p> 
            <p>
                Your program will write a def called <CodeInline>calculate_floor</CodeInline>that accepts a string containing a number of brackets, <CodeInline>((()))(((</CodeInline>, and assuming the elevator starts at zero, return the final resting floor of the elevator.
            </p>
        </SectionText>
    </Section> 
    
    <Section>
        <SectionTitle>Example</SectionTitle>
        <SectionDescription>
            <CodeExample code={`floors="((()"\nresult = calculate_floors(floors)\nprint(result)`} output={`2`}/>

        </SectionDescription>

    </Section>
            
    <Activity title="elevator-control"
                repl="https://replit.com/@mrsalih/elevator-control#main.py" 
                email={email} 
                challengeName="level-3::elevator-control" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

