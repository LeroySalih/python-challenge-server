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
        <SectionDescription>In this challenge, you'll create a grade checker that can ensure that teachers are setting the correct grade for a given mark.</SectionDescription>
        <ConsoleOutput text={`Enter the grade: B\nEnter the mark: 55\nGrade is correct.`}/>
        <ConsoleOutput text={`Enter the grade: B\nEnter the mark: 5\nGrade is not correct.`}/>
    </Section>
    
            
    <Activity title="Grade Checker"
                repl="https://replit.com/@mrsalih/grade-checker#challenge.md" 
                email={email} 
                challengeName="level-3::grade-checker" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

