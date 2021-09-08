
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


const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
    <Section id="what-we-are-building" >
        <SectionTitle>What We're Building</SectionTitle>
        <SectionDescription>In this lesson you'll learn to use operators to perform calculations.</SectionDescription>
        <ConsoleOutput text={`
#Finding the first letter
What is your name?Salih\n\n
There are 5 letters in your name
The first letter is S
The last letter is h
The middle letter is l
`}/>
    </Section>
    <Section>
        <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Boolean Operator">An operator that takes 2 boolean values, and returns a boolean result.</KeyTerm>        
            <KeyTerm index="1" term="and">Returns true if and only if all values are true.</KeyTerm>        
            <KeyTerm index="2" term="or">Returns true if any of the values are true.</KeyTerm>
            <KeyTerm index="3" term="not">Returns true if the value is false.</KeyTerm>
            <KeyTerm index="4" term=">=, >, <, <=">Returns true if the left hand value is (greater than/less than) the right hand value.</KeyTerm>
            <KeyTerm index="5" term="==">Returns true if the left hand value is equal to the right hand value.</KeyTerm>
            <KeyTerm index="6" term="!=">Returns true if the left hand value is not equal to the right hand value.</KeyTerm>

                     
        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle >Boolean Operators</SectionTitle>
        <SectionText>
            <p>To declare a string variable, use quotes.</p>
            
            <Python code={`age = 18\npermission = true\nallowed = (age >= 18) and permission\nprint(allowed)`}></Python>
            
            
        
            </SectionText>
        </Section>

        <Section>
            <SectionTitle><CodeInline>or</CodeInline> Operator</SectionTitle>
            <SectionText>
                <table>
                    <tr><td>Input A</td><td>Input B</td><td>Result</td></tr>
                    <tr><td>False</td><td>False</td><td>False</td></tr>
                    <tr><td>False</td><td>True</td><td>True</td></tr>
                    <tr><td>True</td><td>False</td><td>True</td></tr>
                    <tr><td>True</td><td>True</td><td>True</td></tr>

                </table>
            </SectionText>
        </Section>

        <Section>
            <SectionTitle><CodeInline>and</CodeInline> Operator</SectionTitle>
            <SectionText>
                <table>
                    <tr><td>Input A</td><td>Input B</td><td>Result</td></tr>
                    <tr><td>False</td><td>False</td><td>False</td></tr>
                    <tr><td>False</td><td>True</td><td>False</td></tr>
                    <tr><td>True</td><td>False</td><td>False</td></tr>
                    <tr><td>True</td><td>True</td><td>True</td></tr>

                </table>
            </SectionText>
        </Section>

        <Section>
            <SectionTitle><CodeInline>not</CodeInline> Operator</SectionTitle>
            <SectionText>
                <table>
                    <tr><td>Input A</td><td>Result</td></tr>
                    <tr><td>False</td><td>True</td></tr>
                    <tr><td>True</td><td>False</td></tr>
                    

                </table>
            </SectionText>
        </Section>

        

        
        
        

        <Activity repl="https://replit.com/@mrsalih/operators-booleans#challenge.md" 
                          email={email} 
                          challengeName="level-1::operators-booleans" 
                          pupilProgress={pupilProgress}
                          />

    </motion.div>);

export default MarkUp