
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
            <KeyTerm index="0" term="Character">Any text based symbol.  Includes (A to Z, a to z, 0 to 9, *#@:, etc)</KeyTerm>        
            <KeyTerm index="1" term="String">A collection of 1 or more characters, enclosed. with a quote. 'Salih', 'salih@bisak.org', '12345' are all strings</KeyTerm>        
            <KeyTerm index="2" term="Index">The position of a character in a string (starts at Zero)</KeyTerm>
            <KeyTerm index="3" term="Index">The position of a character in a string (starts at Zero)</KeyTerm>
            <KeyTerm index="4" term="+">The append operator.  Joins two strings together.</KeyTerm> 
            <KeyTerm index="5" term="*">The multiply operator.  Repeats characters multiple times</KeyTerm> 
            <KeyTerm index="6" term="[]">The index operator.  Returns the character specified </KeyTerm>        
            
            
        </KeyTerms>
    </Section>
    <Section>
        <SectionTitle >Declaring Strings</SectionTitle>
        <SectionText>
            <p>To declare a string variable, use quotes.</p>
            
            <Python code={`name = "John Smith"`}></Python>
            <p>Python also allows you to declare strings using the single quote <CodeInline>'</CodeInline>.</p>
            <Python code={`name = 'John Smith'`}/>
            
        
            </SectionText>
        </Section>

        <Section>
            <SectionTitle><CodeInline>len</CodeInline> Command</SectionTitle>
            <SectionText>
                <p>The <CodeInline>len</CodeInline> command will return the number of characters in a given string.  This can be used to test that a password contains a certain number of characters, or some other form of validation.</p>

                <CodeExample code={`print("There are ", len("Salih"), "charcters in 'Salih'")`}
                      output={`There are 5 characters in 'Salih'`}
                ></CodeExample>
            </SectionText>
        </Section>

        <Section>
            <SectionTitle><CodeInline>+ (Append)</CodeInline> Operator</SectionTitle>
            <SectionText>
                <p>The <CodeInline>+</CodeInline> operator will return a new string that is 2 strings joined together.</p>

                <CodeExample code={`print("Mr" + "Salih")`}
                      output={`Mr Salih`}
                ></CodeExample>
            </SectionText>
        </Section>

        <Section>
            <SectionTitle><CodeInline>* (Repeat)</CodeInline> Operator</SectionTitle>
            <SectionText>
                <p>The <CodeInline>*</CodeInline> operator will return a new string that is the first string repeated a number of times.</p>

                <CodeExample code={`print('*' * 5)\nprint("ABC" * 3)`}
                      output={`*****\nABCABCABC`}
                ></CodeExample>
            </SectionText>
        </Section>
        
        <Section>
            <SectionTitle>Index Operator <CodeInline>[]</CodeInline></SectionTitle>
            <SectionText>
                <p>The <CodeInline>[]</CodeInline>index operator will return a section of a string; either a single character, or a selection of characters from the string.</p>
                <p>The first character is at index 0, and the last character is at index 4.  The index of the last character can be calculated using <CodeInline>len(string) - 1</CodeInline></p>
                <p>Python strings can also be indexed from the end of the string using the reversal index.   This starts at -1, indicating the last character, and decreases as you move towards the start of the string.</p>
                <p>Using the code <CodeInline>name = "Salih"</CodeInline></p>

                <p>
                    <table>
                        <tr>
                            <td>Index</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Reverse Index</td>
                            <td>-5</td>
                            <td>-4</td>
                            <td>-3</td>
                            <td>-2</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td>Character</td>
                            <td>S</td>
                            <td>a</td>
                            <td>l</td>
                            <td>i</td>
                            <td>h</td>
                        </tr>
                    </table>
                </p>
                

            </SectionText>
        </Section>
        <Section>
            <SectionTitle>Index Ranges</SectionTitle>
            <SectionText>
            <p>We can also use the colon symbol with in the index operator to indicate a range of characters.</p>
            <p>The code is written as <CodeInline>[start:end]</CodeInline> where the start is included, but the end is not included.</p>
            <p>The following table shows several examples of the index, reverse index and range operators</p>
            <p>Using the code <CodeInline>name = "Salih"</CodeInline></p>
            <table>
                <tr><td>Index operator</td><td>Result</td></tr>
                <tr><td>name[0]</td><td>S</td></tr>
                <tr><td>name[1]</td><td>a</td></tr>
                <tr><td>name[2]</td><td>l</td></tr>
                <tr><td>name[0:2]</td><td>Sa</td></tr>
                <tr><td>name[1:4]</td><td>ali</td></tr>
                <tr><td>name[-1]</td><td>h</td></tr>
                <tr><td>name[-4]</td><td>a</td></tr>
                <tr><td>name[-4:]</td><td>alih</td></tr>
                <tr><td>name[-4:-1]</td><td>ali</td></tr>
            </table>
            </SectionText>
            
        </Section>

        <Activity repl="https://replit.com/@mrsalih/operators-strings#challenge.md" 
                          email={email} 
                          challengeName="level-1::operators-string" 
                          pupilProgress={pupilProgress}
                          />

    </motion.div>);

export default MarkUp