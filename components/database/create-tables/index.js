
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
                    <SectionTitle >Using IF THEN ELIF ELSE Decisions</SectionTitle>
                    <SectionText>
                        
                        <p>We can chose between more than 2 paths by using the <CodeInline>elif</CodeInline> command.</p>

                        <p>When we group elif paths, the program .</p>

                        <CodeExample 
                            code={`if age > 12:\n\tprint("Too young for this film!")\nelif age == 12:\n\tprint("Perfect age for the film")\nelse:\n\tprint("You are too old enough to watch the film.")`}
                            
                        />

                        <p>When the program finds an IF-THEN-ELIF-ELSE decision
                            <ul>
                                <li>If the condition is true, then</li>
                                <li>run the first commands</li>
                                <li>If the next condition is true, then</li>
                                <li>run the command</li>
                                <li>If the next condition is true, then</li>
                                <li>run the command</li>
                                
                                <li>else (if none of the conditions were true)</li>
                                <li>run the else commands</li>
                            </ul>
                        </p>
                        
                        

                        <p>Again, remember that the commands to be executed must be properly indented.</p>
                        
                        
                        
                        
                    </SectionText>
                    
                </Section>

                

                
                <Activity repl="https://replit.com/@mrsalih/decisons-1-IF-THEN#main.py" 
                          email={email} 
                          challengeName="level-1::decisions-1" 
                          pupilProgress={pupilProgress}
                          />
                
                <Activity repl="https://replit.com/@mrsalih/decisons-2-IF-THEN-ELSE#challenge.md" 
                          email={email} 
                          challengeName="level-1::decisions-2" 
                          pupilProgress={pupilProgress}
                          />
                
                <Activity title="Decisions: IF-THEN-ELIF-ELSE (Delivery Charges)"
                          repl="https://replit.com/@mrsalih/decisons-3-IF-THEN-ELIF-ELSE-1#challenge.md" 
                          email={email} 
                          challengeName="level-1::decisions-3" 
                          pupilProgress={pupilProgress}
                          />

                <Activity title="Decisions: IF-THEN-ELIF-ELSE (Traffic Light)"
                          repl="https://replit.com/@mrsalih/decisons-4-IF-THEN-ELIF-ELSE-2#main.py" 
                          email={email} 
                          challengeName="level-1::decisions-4" 
                          pupilProgress={pupilProgress}
                          />

    </motion.div>);

export default MarkUp