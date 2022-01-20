
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
        <SectionDescription>In this lesson you'll learn to use SQL to insert records into your table.</SectionDescription>
        <ConsoleOutput text={`INSERT INTO Orders (id, name, value)\nVALUES (1, 'Mr Jones', 100)`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
            <SectionDescription>In this lesson</SectionDescription>
            <KeyTerms>
                <KeyTermTitle/>
                <KeyTerm index="0" term="INSERT">Insert a record into the table.</KeyTerm>
                
            </KeyTerms>                    
    </Section>
                
                

                <Section>
                    <SectionTitle >Inserting (Adding) Records</SectionTitle>
                    <SectionText>
                    <p>To add data to a data, we need to insert records.  
                    </p>
                    <p>For this, we need the INSERT COMMAND, which is structured as:
                        <CodeExample code={`INSERT INTO <table>(<fields>)\nVALUES (<values>)`}/>

                    </p>
                    

                    </SectionText>
                </Section>

                <Section >
                    <SectionTitle >INSERT INTO &lt;table&gt;(&lt;fields&gt;)</SectionTitle>
                    <SectionText>
                        
                        <p>The first part of the command tells the DB which table and fields that the records are going to ge inserted into.</p>
                        
                        <CodeExample 
                            code={`INSERT INTO ToDos (ToDoID, desc, status)`}
                            
                        />
                    </SectionText>
                    
                </Section>


                <Section >
                    <SectionTitle >VALUES (&lt;values&gt;)</SectionTitle>
                    <SectionText>
                        
                        <p>The VALUES section provides the data that will be inserted into the table.</p>


                        <p>When sepecifying the values, it is important to remember the following:</p>
                        <ol>
                            <li>You provide a value for every field that you have specified in the the fields section.</li>
                            <li>The order of the values, must match the order of the fields</li>
                            <li>Text values must have quotes</li>
                        </ol>
                        
                        <CodeExample 
                            code={`VALUES (1, "Collect the shopping", "Not Completed")`}
                            
                        />

                        
                        
                        
                    </SectionText>
                    
                </Section>

                

                
                <Activity repl="https://replit.com/@mrsalih/sql-1-insert#main.py" 
                          email={email} 
                          challengeName="databases::insert-record" 
                          pupilProgress={pupilProgress}
                          />
                
                
    </motion.div>);

export default MarkUp