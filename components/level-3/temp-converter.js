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
        <SectionDescription>In this challenge, you'll create a simple temperature converter that can convert Centigrade to fahrenheit.</SectionDescription>
        <ConsoleOutput text={`Enter the temp: 0C\nThis is 32F`}/>
        <ConsoleOutput text={`Enter the temp: 10F\nThis is -12.2C`}/>
    </Section>
    
            
    <Activity title="Temperature Converter"
                repl="https://replit.com/@mrsalih/temp-converter#challenge.md" 
                email={email} 
                challengeName="level-3::temp-converter" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

