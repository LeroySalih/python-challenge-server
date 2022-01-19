
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
        <SectionDescription>In this lesson you'll learn to use SQL to create a table in SQL.</SectionDescription>
        <ConsoleOutput text={`DROP TABLE IF EXISTS Orders\n\nCREATE TABLE Orders(\n\tOrderId text,\n\tItem text,\n\tCost int,\n\tquantity int,\n)`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
            <SectionDescription>In this lesson</SectionDescription>
            <KeyTerms>
                <KeyTermTitle/>
                <KeyTerm index="0" term="DROP">Remove a table from the database.</KeyTerm>
                
            </KeyTerms>                    
    </Section>
                
                

                <Section>
                    <SectionTitle >Describing the Table</SectionTitle>
                    <SectionText>
                    <p>Databases are built on Tables, and each table contains multiple rows, each row representing 1 entity
                    </p>
                    <p>In this example, we are going to create a table that holds ToDo tasks.  The table will include the following fields
                        <ul>
                            <li><u>ToDoID</u>.  We will use this field to identify each todo.</li>
                            <li><u>Task</u>.  This field will hold a description of the todo task.</li>
                            <li><u>IsCompleted</u>. This field will hold information on whether the todo has been completed or not.</li>
                
                        </ul>
                    </p>
                    <p>In this example, all of the fields will have a data type of text.</p>

                    </SectionText>
                </Section>

                <Section >
                    <SectionTitle >Creating the Table</SectionTitle>
                    <SectionText>
                        
                        <p>To create the table using SQL, you can use the following command.</p>
                        
                        <CodeExample 
                            code={`CREATE TABLE Todos (\n\tToDoID text, \n\ttask text,\n\tisCompleted text)`}
                            
                        />

                        
                        
                        
                        
                        
                    </SectionText>
                    
                </Section>


                <Section >
                    <SectionTitle >DROP TABLE</SectionTitle>
                    <SectionText>
                        
                        <p>If you run your code to  create a table twice, the second time the code will produce an error, as you can not create a table when a table with the same name exists.  To correct this, before creating a table, you should drop any tables with the same name using the  <CodeInline>DROP TABLE IF EXISTS</CodeInline> command.</p>

                        <p>Before creating the ToDos table, add this code .</p>

                        <CodeExample 
                            code={`DROP TABLE IF EXISTS Todos`}
                            
                        />

                        
                        
                        
                    </SectionText>
                    
                </Section>

                

                
                <Activity repl="https://replit.com/@mrsalih/sql-1-create-tables#main.py" 
                          email={email} 
                          challengeName="databases::create-table" 
                          pupilProgress={pupilProgress}
                          />
                
                
    </motion.div>);

export default MarkUp