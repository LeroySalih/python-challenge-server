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
        <SectionDescription>In this challenge, you'll create a simple, user configured display of a triangle.</SectionDescription>
        <ConsoleOutput text={`   *   \n *** \n*****\n`}/>
    </Section>
    
            
    <Activity title="Triangles"
                repl="https://replit.com/@mrsalih/triangles#main.py" 
                email={email} 
                challengeName="level-3::triangles" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

