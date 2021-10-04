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
        <SectionDescription>In this challenge, you'll create a program, that can help people prioritise giving first aid in an emergancy situation.</SectionDescription>
        <SectionDescription>In a real emergency, always consult a responsible adult.</SectionDescription>
        <ConsoleOutput text={`Is the area safe?y\nIs the victim breathing?y\nIs the victim bleeding?n\nIs the victim burned?y\nApply Cooling Dressing\nCall for 911`}/>
        
    </Section>
    
            
    <Activity title="Grade Checker"
                repl="https://replit.com/@mrsalih/emergency-response#challenge.md" 
                email={email} 
                challengeName="level-3::emergency-response" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

