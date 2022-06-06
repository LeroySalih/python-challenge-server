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
        <SectionDescription>In this challenge, you'll use while loops to calculate the mean of a set of numbers.</SectionDescription>
        <ConsoleOutput text={`Enter number : 7\nplay again? y\nEnter a number : 9\nplay again? n\nMean: 8`}/>

    </Section>
    
            
    <Activity title="IO"
                repl="https://replit.com/@mrsalih/skills-while-loop#challenge.md" 
                email={email} 
                challengeName="skills-while-loops" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

