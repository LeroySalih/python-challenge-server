
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
        <ConsoleOutput text={`DELETE FROM Orders\nWHERE name='Jones'`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
            <SectionDescription>In this lesson</SectionDescription>
            <KeyTerms>
                <KeyTermTitle/>
                <KeyTerm index="0" term="DELETE">Remove all rows matching a given WHERE clause.</KeyTerm>
                
            </KeyTerms>                    
    </Section>
                
                

                <Section>
                    <SectionTitle >DELETE (removing) Records</SectionTitle>
                    <SectionText>
                    <p>To remove ALL rows from a table, use the DELETE command
                    </p>
                    <p>
                        <CodeExample code={`DELETE FROM <table>\n`}/>
                    </p>
                    </SectionText>
                </Section>

                <Section >
                    <SectionTitle >DELETE matching Records</SectionTitle>
                    <SectionText>
                        
                        <p>To remove records that match a given WHERE clause, use</p>
                        
                        <CodeExample 
                            code={`DELETE FROM Orders \nWHERE hair='brown'`}
                            
                        />
                        <p>This will remove all records that match, i.e. where hair is brown.</p>
                    </SectionText>
                    
                </Section>


                
            

                

                
                <Activity repl="https://replit.com/@mrsalih/sql-1-delete-records#main.py" 
                          email={email} 
                          challengeName="databases::delete-records" 
                          pupilProgress={pupilProgress}
                          />
                
                
    </motion.div>);

export default MarkUp