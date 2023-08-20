
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
} from '../../format'

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../../code';


const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
    
                <Section >
                    <SectionTitle >Rearrange Code Questions 2</SectionTitle>
                    <SectionText>
                        
                        <p>A popular style of exam question is the <b>REARRANGE CODE</b> question.</p>
                        <p>In this question, you are presented with a program, where each line of code is syntacically correct, but placed in an incorrect order.</p>
                        <p>Your task is to correct the order of the lines of code.</p>
                        
                    </SectionText>
                    
                </Section>


                <Activity repl="https://replit.com/@mrsalih/rearrange-code-2" 
                          email={email} 
                          challengeName="gcse-practice::rearrange-code-2" 
                          pupilProgress={pupilProgress}
                          />
                
                
    </motion.div>);

export default MarkUp