
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
    <Section id="what-we-are-building" >            
        <SectionTitle>What We're Building</SectionTitle>
        <SectionDescription>In this lesson you'll learn to use SQL to delete records from your table.</SectionDescription>
        <ConsoleOutput text={`UPDATE Orders\nSET name='Jones'\nWHERE name='Smith'`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
            <SectionDescription>In this lesson</SectionDescription>
            <KeyTerms>
                <KeyTermTitle/>
                <KeyTerm index="0" term="UPDATE">Update a field where records match a given clause.</KeyTerm>
                
            </KeyTerms>                    
    </Section>
                
                

                


    
                <Section >
                    <SectionTitle >UPDATE matching Records</SectionTitle>
                    <SectionText>
                        
                        <p>To update records that match a given WHERE clause, use</p>
                        
                        <CodeExample 
                            code={`UPDATE Orders \nSET status='complete'\nWHERE OrderId=1`}
                            
                        />
                        <p>This will update the status fields of all records that match, i.e. where OrderId = 1.</p>
                    </SectionText>
                    
                </Section>
                
                <Activity repl="https://replit.com/@mrsalih/sql-1-update-records#main.py" 
                          email={email} 
                          challengeName="databases::update-records" 
                          pupilProgress={pupilProgress}
                          />
                
                
    </motion.div>);

export default MarkUp