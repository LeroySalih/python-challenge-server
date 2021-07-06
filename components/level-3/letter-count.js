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
        <SectionDescription>In this lesson you'll learn to count the number of times each letter occures in a string.</SectionDescription>
        <ConsoleOutput text={`plain text:ABBCC\nLetter Count: [1, 2, 2, ...]`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="index">The item of a list that we are editing.</KeyTerm>
            <KeyTerm index="1" term="index"><CodeInline>ord</CodeInline> a python def that returns the ASCII code for the character.</KeyTerm>
        </KeyTerms>
    </Section>
                
                

    <Section>
        <SectionTitle >Letter Count</SectionTitle>
        <SectionText>
            <p>Letter counting is one of the essential methods that cryptologists use to break a code.  <a href="https://www.rd.com/article/common-letters-english-language/" target="_new">We know (roughly) the number of times that each letter appears in a long block of text</a> and if we count the frequency of each letter, then it maybe possible to match an encrypted letter to plain text based on the number of times that a letter appears.</p>
            <p>The algorithm for letter counting is:</p>
            <ul>
                <li>Set up the list containing 26 0's</li>
                <li>Loop through the plain text</li>
                <li>Find the ord value of each letter</li>
                <li>Subtract 65, to map A to index 0.</li>
                <li>Increment the list at calculated index</li>
            </ul>
        </SectionText>
    </Section>
            
    <Activity title="Letter Count"
                repl="https://replit.com/@mrsalih/letter-count#challenge.md" 
                email={email} 
                challengeName="level-3::letter-count" 
                pupilProgress={pupilProgress}
                />
                        

</motion.div>)


export default MarkUp;

