
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
    ItemVariant,
    Note
} from '../../format'

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../../code';
import { Code } from '@material-ui/icons';


const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
    
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson:</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="def">A command that allows you to group repeated commands together.</KeyTerm>
            <KeyTerm index="1" term="parameter">A value that is passed to the def that can be used to modify behaviour.</KeyTerm>
            <KeyTerm index="2" term="return">A way to pass values out from the def, back to the calling program.</KeyTerm>
        </KeyTerms>
    </Section>
    
    

        <Activity repl="https://replit.com/@mrsalih/def-1#main.py" 
                          email={email} 
                          challengeName="level-1::def-1" 
                          pupilProgress={pupilProgress}
                          />

        <Activity repl="https://replit.com/@mrsalih/def-2#main.py" 
                          email={email} 
                          challengeName="level-1::def-2" 
                          pupilProgress={pupilProgress}
                          />
        
        <Activity repl="https://replit.com/@mrsalih/def-3#main.py" 
                          email={email} 
                          challengeName="level-1::def-3" 
                          pupilProgress={pupilProgress}
                          />
                          
        <Activity repl="https://replit.com/@mrsalih/def-4#main.py" 
                          email={email} 
                          challengeName="level-1::def-4" 
                          pupilProgress={pupilProgress}
                          />

        
    </motion.div>);

export default MarkUp