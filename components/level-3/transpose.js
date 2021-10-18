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
        <SectionDescription>In this lesson you'll learn to encrypt and decrypt text using a Transpose algorithm.</SectionDescription>
        <ConsoleOutput text={`plain text: Hello World\nTransposed: eHll ooWlrd`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Transpose">To transpose a string of text means to swap each letter with its neighbour.  ABCD becomes BADC.</KeyTerm>
        </KeyTerms>
    </Section>
                
    
    <Activity title="Transpose Cypher"
                repl="https://replit.com/@mrsalih/transpose#challenge.md" 
                email={email} 
                challengeName="level-3::transpose" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

