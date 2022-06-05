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
        <SectionDescription>In this challenge, you'll print the lyrics to the song "Bottles of Pepsi"</SectionDescription>
        <ConsoleOutput text={`Enter number 1: 7\nEnter number 2: 9\nHighest: 9`}/>

    </Section>
    
            
    <Activity title="IO"
                repl="https://replit.com/@mrsalih/skills-io" 
                email={email} 
                challengeName="skills-io" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

