
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
        <SectionDescription>In this lesson you'll learn to use SELECT (read) rows from a table.</SectionDescription>
        <ConsoleOutput text={`SELECT *\nFROM Orders\n`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
            <SectionDescription>In this lesson</SectionDescription>
            <KeyTerms>
                <KeyTermTitle/>
                <KeyTerm index="0" term="SELECT">To read data from a table.</KeyTerm>
                <KeyTerm index="1" term="Filter">Show specific rows</KeyTerm>
                <KeyTerm index="2" term="Slice">Show specific fields</KeyTerm>
                <KeyTerm index="3" term="Sort">Show rows in a specific order</KeyTerm>

                
            </KeyTerms>                    
    </Section>
                
                

                <Section>
                    <SectionTitle >Selecting Records (Read)</SectionTitle>
                    <SectionText>
                    <p>To read data from a table, we can use the basic SQL.  
                    </p>
                    <p>For this, we need the INSERT COMMAND, which is structured as:
                        <CodeExample code={`SELECT *\nFROM Orders`}/>

                    </p>
                    <p> 
                        This SQL will produce a set of records that the table contains.  
                    </p>

                    <p>
                        The * means return all fields
                    </p>
                    <p>
                        FROM tells us which table to read data from.
                    </p>
                    

                    </SectionText>
                </Section>

                <Section >
                    <SectionTitle >Filtering</SectionTitle>
                    <SectionText>
                        
                        <p>Filtering means to only return rows that match a given criteria.</p>
                        <p>To apply a filter, we use the WHERE clause.</p>
                        <CodeExample 
                            code={`SELECT *\nFROM Orders\nWHERE OrderId = '1'`}
                        />
                        <p>This will return all rows that have an OrderId of 1.</p>
                    </SectionText>
                    
                </Section>

                <Section >
                    <SectionTitle >Slicing</SectionTitle>
                    <SectionText>
                        
                        <p>Slicing means to only return fields that match a given criteria.</p>
                        <p>To apply a slice, we change the SELECT cause.</p>
                        <CodeExample 
                            code={`SELECT OrderId, Date\nFROM Orders\n`}
                        />
                        <p>Note that this will return the fields specified in the order of the Select, not the order of the table.</p>
                    </SectionText>
                    
                </Section>


                <Section >
                    <SectionTitle >Sort </SectionTitle>
                    <SectionText>
                        
                        <p>Ordering means to return the rows in a specific order.</p>


                        <p>To specify an order, we can use the ORDER BY clause.  You can also order in ASC (lowest - highest) or DESC (Highest to lowest) order.</p>
                        
                        
                        <CodeExample 
                            code={`SELECT * \nFROM Orders\nORDER BY OrderId DESC`}
        
                        />

                        
                        
                        
                    </SectionText>
                    
                </Section>

                

                
                <Activity repl="https://replit.com/@mrsalih/sql-1-select-guess-who-single#main.py" 
                          email={email} 
                          challengeName="databases::select-single-table" 
                          pupilProgress={pupilProgress}
                          />
                
                
    </motion.div>);

export default MarkUp