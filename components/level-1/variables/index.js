
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
    ItemVariant, Note
} from '../../format'

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../../code';


const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
    <Section id="what-we-are-building" >
        <SectionTitle>What We're Building</SectionTitle>
        <SectionDescription>In this lesson you'll learn to use and output variables in calculations.</SectionDescription>
        <ConsoleOutput text={`num1 = 10\nnum2 = 8\nnum3 = num1 + num2\n`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Variable">A box we use to store information.</KeyTerm>
            <KeyTerm index="1" term="Name">The name of the box we are using.</KeyTerm>        
            <KeyTerm index="2" term="Value">The value that is inside the box.</KeyTerm>        
            <KeyTerm index="3" term="Data Type">The size and shape of the box.</KeyTerm>   
            <KeyTerm index="4" term="Declare a Variable">Tell the program to create a box.</KeyTerm>     
            <KeyTerm index="5" term="Assign a Value">Put a value in the box.</KeyTerm>     
        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle >Variables</SectionTitle>
        <SectionText>
            <p>We we are using a calculator, we sometimes need to store the results of a calculation to use later.</p>
            <p>In class, we may use a notebook to write an answer to be used later, in programming, we use a <CodeInline>Variable</CodeInline></p>
            <p>You can think of a <CodeInline>variable</CodeInline> as a box, that we put a value inside. </p>
        </SectionText>
    </Section>
    <Section>
        <SectionTitle>Properties of a Variable</SectionTitle>
        <SectionText>
            <p>We say that a variable has three variables:</p>
            <ul>
                <li><b>Name</b> - This is the name of the variable, and we use it to tell the program which "box" we are referring to.</li>
                <li><b>Value</b> - This is the value that we are putting in the box.</li>
                <li><b>Data Type</b> -  You can think of this as the size and shape of the box.</li>
            </ul>
        </SectionText>
    </Section>
    <Section>
        <SectionTitle>Data Types</SectionTitle>
        <SectionText>
            <p>We can think of the data type as the shape and size of the box.</p>
            <p>Imagine putting a pair of shoes in a box, if the box is too small, the shoes wont fit.</p>
            <p>If the box is too large, then there is a lot of wasted space.</p>
            <p>The same applies when we are using variables.  We need to tell the computer to create a box of the right size of the data we are going to store.</p>
        
            <p>In python, the datatypes we can use are:</p>
            <ul>
                <li><b>Integer</b> - Used to store whole numbers.</li>
                <li><b>Float</b> - Used to store decimal numbers.</li>
                <li><b>String</b> - Used to store characters, letters, words and text.</li>
            </ul>
        </SectionText>
    </Section>
    <Section>
        <SectionTitle>Declaring a Variable</SectionTitle>
        <SectionText>
            <p>When we declare a variable, we tell the computer to create a box that we are going to use to store a value.</p>
            <p>In python, we declare a variable by using this code:</p>
            <Python code={"teacher_name = \"Mr Salih\"\npupils_in_class = 34"}></Python>
        
            <p>Here, we have declared 2 variables</p> 
            <ul>
                <li>the first has a name of <b>teacher_name</b>, value of Mr Salih.  As the value is text (and has quotes), the data type is <CodeInline>string</CodeInline></li>
                <li>the second has a name of <b>pupils_in_class</b>, value of 34.  As the value is a whole number, the data type is <CodeInline>integer</CodeInline></li>
            </ul>

            <Note>
                <ul>
                    <li>A variable that has a value that is in quotes is always a string.</li>
                </ul>
            </Note>
            
        </SectionText>
        
    </Section>

    <Section>
        <SectionTitle>Assigning a Variable</SectionTitle>
        <SectionText>
            <p>When we assign a variable, we put a value in the box.</p>
            <p>In python, the code we use to assign a variable is the same as the code we use to declare a variable</p>
            <Python code={"pupils_in_class = 34\npupils_in_class = 35"}></Python>
        
            <p>Here, we have:</p> 
            <ul>
                <li>declared a variable with a name of <b>pupils_in_class</b>, the value is 34 and the data type is <CodeInline>integer</CodeInline></li>
                <li>next we assign a new value to <b>pupils_in_class</b>, value of 35.  As the value is a whole number, the data type remains a <CodeInline>integer</CodeInline></li>
            </ul>
            
        </SectionText>
        
    </Section>
    
    <Section>
        <SectionTitle>Using Variables</SectionTitle>
        <SectionText>In python, if we want to refer to a variable, we can use it's name.</SectionText>
        <Python code={"age = 12\nage_next_year = age + 1\nprint(\"Age next year is\", age_next_year)"}/>
        <SectionText>
            Here we have:
            <ul>
                <li>Line 1 - Declare a variable, name is age, value is 12, data type is integer</li>
                <li>Line 2 - Declare a variable, name is age_next_year, value is 13 (12 + 1), data type is integer</li>
                <li>Line 3 - Output the value of age_next_year.</li> 
            </ul>
            <ConsoleOutput text="Age next year is 13"/>
        </SectionText>
        <Note>
            <ul>
                <li>When you see the = symbol, think of it as Assign, not equals.</li>
                <li>The = symbol will evaluate the right hand side first, then assign the result to the variable on the left.</li>
            </ul>
        </Note>
    </Section>

        <Activity repl="https://replit.com/@mrsalih/variables-1#challenge.md" 
                          email={email} 
                          challengeName="level-1::variables-1" 
                          pupilProgress={pupilProgress}
                          />

        <Activity repl="https://replit.com/@mrsalih/variables-2#challenge.md" 
                          email={email} 
                          challengeName="level-1::variables-2" 
                          pupilProgress={pupilProgress}
                          />

        <Activity repl="https://replit.com/@mrsalih/variables-3#challenge.md" 
                          email={email} 
                          challengeName="level-1::variables-3" 
                          pupilProgress={pupilProgress}
                          />

    </motion.div>);

export default MarkUp