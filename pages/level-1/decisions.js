import styled from 'styled-components';
import {useMsal, useAccount} from '@azure/msal-react'
import {useState} from 'react'


import Navbar from '../../components/navbar';
import Drawer from '@material-ui/core/Drawer';

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../../components/code';

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
        LessonHeader} from '../../components/format'









const MeasuringProgress = ({bronze, silver, gold}) => (
    <>
        <div>Measuring Progress</div>
        <ul>
        <li dangerouslySetInnerHTML={{__html: bronze}}/>
        <li dangerouslySetInnerHTML={{__html: silver}}/>
        <li dangerouslySetInnerHTML={{__html: gold}}/>
        </ul>

    </>
)




const ComponentPage = () => {

    const { instance, accounts, inProgress } = useMsal();

    const account = useAccount(accounts[0] || {});
    const name = (account && account.name) || ""
    const email = account && account.username.toLowerCase();

    

    const handleDrawerClick = () => {
        setShowDraw(true);
    }

    const toggleDrawer = (state) => {
        setShowDraw(state)
    }

    const [showDraw, setShowDraw] = useState(false);

    return (
        <>
        <Navbar onClick={handleDrawerClick}></Navbar>
        <Drawer anchor="left" 
              open={showDraw} 
              onClose={() => toggleDrawer(false)}>

                <div>Activities</div>
                <ul>
                    <li><a href="#what-we-are-building">What we're building</a></li>
                    <li><a href="#key-terms">Key Terms</a></li>
                    <li><a href="#print-command"><CodeInline>print</CodeInline> Command</a></li>
                    <li><a href="#printing-numbers">Printing numbers</a></li>
                    <li><a href="#printing-words">Printing Words</a></li>
                    <li><a href="#printing-emoji">Printing Emoji</a></li>
                    <li><a href="#what-can-go-wrong">What can go wrong?</a></li>
                    <li><a href="#practice">Practice</a></li>
                </ul>
                               

                <MeasuringProgress
                    bronze="I can displaymy name to the console."
                    silver="I can output numbers and text to the console."
                    gold="I can use the advanced options of <CodeInline>print</CodeInline>."
                    >
                </MeasuringProgress>

                <div>Module Plan</div>
                <ul>
                    <li>Output</li>
                    <li>Operators</li>
                </ul>
                
        </Drawer>

        <Page>
        
        <LessonHeader title="Decisions" lo="How do I make my program chose between different paths?"/>
        <Lesson>
            
                <Section id="what-we-are-building" >
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap: "20px"}}>
                        <div>
                            <SectionTitle>What We're Building</SectionTitle>
                            <SectionDescription>In this lesson you'll learn to use decisions in your program.  Decisions mean that your program can decide between two (or more) options.</SectionDescription>
                            <ConsoleOutput text={`How old are you? 12\n👌 You are the right age for this ride.\n\nHow old are you? 13\n👎 You are too old for this ride.`}/>
                        </div>
                        <div>
                        <SectionTitle >Key Terms</SectionTitle>
                            <SectionDescription>In this lesson</SectionDescription>
                            <KeyTerms>
                                <KeyTermTitle/>
                                <KeyTerm index="0" term="Decision">Allow the program to choose between 2 or more options.</KeyTerm>
                                <KeyTerm index="1" term="Condition">The data that the program will use to choose.  This is usually a variable and a boolean operator.</KeyTerm>
                                <KeyTerm index="2" term="Path">The instructions that the program will execute.</KeyTerm>
                            </KeyTerms>
                        </div>
                    </div>
                    
                </Section>
                
                

                <Section>
                    <SectionTitle >What is a decision?</SectionTitle>
                    <SectionText>
                    <p>A decision allows the program to execute different commands based on some data.
                    </p>
                    <p>Some examples of how to use decisions are:
                        <ul>
                            <li>If the temperature is greater than 30C,then turn on a fan.</li>
                            <li>If the water has reached a depth, then turn off the tap, else keep the tap on.</li>
                            <li>If the car is going greater than 100KM/H then turn on the alarm, else press the accelerator.</li>
                
                        </ul>
                    </p>

                    </SectionText>
                </Section>

                <Section >
                    <SectionTitle >Using IF THEN Decisions</SectionTitle>
                    <SectionText>
                        
                        <p>To use the most simple decision in a program, we can use the <CodeInline>if</CodeInline> command.</p>
                        
                        <CodeExample 
                            code={`if condition:\n\trun_this_code`}
                            
                        />

                        <p>In the above code, if the condition is true, then the command <CodeInline>run_this_code()</CodeInline> will be executed.</p>
                        <p>In the example below, when the program detects a new player, the program will output a greeting.</p>
                        
                        <CodeExample 
                            code={`if player == "new":\n\tprint("Hello new player!")`}
                            
                        />

                        <p>This greeting will only run when the player is new.</p>
                        <p>Note that the commands that are executed when the condition is true are always indented to seperate them from the normal program.</p>

                    </SectionText>
                    
                </Section>


                <Section >
                    <SectionTitle >Using IF THEN ELSE Decisions</SectionTitle>
                    <SectionText>
                        
                        <p>The next type of decision that we can look at is the IF-THEN-ELSE decsions</p>

                        <p>An if then else decision has 2 possible paths that can be executed based on a condition.</p>

                        <p>When the program finds an IF-THEN-ELSE decision
                            <ul>
                                <li>If the condition is true, then</li>
                                <li>run the first commands</li>
                                <li>else</li>
                                <li>run the second commands</li>
                            </ul>
                        </p>
                        
                        <CodeExample 
                            code={`if age >= 12:\n\tprint("Too young for this film!")\nelse:\n\tprint("You are old enough to watch the film.")`}
                            
                        />

                        <p>Again, remember that the commands to be executed must be properly indented.</p>
                        
                        
                        
                        
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

                

                

                <Activity title="Decisions: IF-THEN-ELSE" repl="https://replit.com/@mrsalih/decisons-2-IF-THEN-ELSE#challenge.md" email={email}/>
                <Activity title="Decisions: IF-THEN-ELIF-ELSE" repl="https://replit.com/@mrsalih/decisons-3-IF-THEN-ELIF-ELSE-1#challenge.md" email={email}/>
            
        </Lesson>
        
        </Page>
        
        </>
    )
}


export default ComponentPage;