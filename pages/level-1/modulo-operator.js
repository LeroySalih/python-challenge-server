import styled from 'styled-components';
import {useMsal, useAccount} from '@azure/msal-react'
import {useState, useEffect} from 'react'

import axios from 'axios'

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
    
    const [email, setEmail] = useState(null);
    const [pupilProgress, setPupilProgress] = useState(null);

    useEffect(async () => {
        
    
        if (account) {
          setEmail(account.username.toLowerCase())
          const {data} = await axios.get(`/api/watch-pupil/${account.username.toLowerCase()}`)
    
          setPupilProgress(data);
    
    
        } else {
          setEmail(null);
          setPupilProgress(null);
        }
        
      }, [account])
    

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
        
        <LessonHeader title="Modulo Operator" lo="How do I count in loops (1,2,3,4, 1,2,3,4)?"/>
        <Lesson>
            
                <Section id="what-we-are-building" >
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap: "20px"}}>
                        <div>
                            <SectionTitle>What We're Building</SectionTitle>
                            <SectionDescription>In this lesson you'll learn to use the module operator to count repetative loops.</SectionDescription>
                            <ConsoleOutput text={`0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3\n\n 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4\n\n 0, 1, 0, 1, 0, 1, 0, 1\n`}/>
                        </div>
                        <div>
                        <SectionTitle >Key Terms</SectionTitle>
                            <SectionDescription>In this lesson</SectionDescription>
                            <KeyTerms>
                                <KeyTermTitle/>
                                <KeyTerm index="0" term="Modulo (%)">The remainder when you divide 2 integer numbers.</KeyTerm>
                            </KeyTerms>
                        </div>
                    </div>
                    
                </Section>
                
                

                <Section>
                    <SectionTitle >Background: Dividing Numbers</SectionTitle>
                    <SectionText>
                    <p>In prep school, you would have learned that 5 ÷ 3 = 1 remainder 2</p>
                    <p>Although we dont use remainders in maths, they are used all the time in Computing.</p>
                    <p>In computing, we call the remainder a <bold>Modulo</bold> and we can calculate it using the <CodeInline>%</CodeInline> operator.</p>
                    

                    </SectionText>
                </Section>

                <Section>
                    <SectionTitle >Using the modulo operator</SectionTitle>
                    <SectionText>
                    <p>To use the modulo operator, we can use the <CodeInline>%</CodeInline> symbol.</p>
                    <p><CodeInline>6 % 4</CodeInline> can be read as <i>"How many times does 4 go into 6?", with the answer being 1 remainder 2.</i></p>
                    <p>So the result will be 2</p>
                    <CodeExample 
                        code={`print(6 % 4)`}
                        output={`2`}
                    />

                    </SectionText>
                </Section>

                <Section >
                    <SectionTitle >Using % to loop</SectionTitle>
                    <SectionText>
                        
                        <p>The modulo operator has an interesting effect.  Complete the following table to see the pattern.</p>

                        <table border="1" width="200px">
                            <tr><td>x</td><td>x % 3</td></tr>
                            <tr><td>3</td><td></td></tr>
                            <tr><td>4</td><td></td></tr>
                            <tr><td>5</td><td></td></tr>
                            <tr><td>6</td><td></td></tr>
                            <tr><td>7</td><td></td></tr>
                            <tr><td>8</td><td></td></tr>
                            <tr><td>9</td><td></td></tr>
                        </table>

                        <p>Remember that you can use python to help you calculate the result</p>
                        <CodeExample 
                            code={`print(0 % 3)\nprint(1 % 3)\nprint(2 % 3)\nprint(3 % 3)\nprint(4 % 3)\nprint(5 % 3)\n`}
                        />
                        

                        <p>What do you notice about the result of the modulo as x increases?</p>
                        <p>What happens when you change the 3 to 5?</p>

                        <CodeExample 
                            code={`print(5 % 5)\nprint(6 % 5)\nprint(7 % 5)\nprint(8 % 5)\nprint(9 % 5)\nprint(10 % 5)\n`}
                        />
                        
                    </SectionText>
                    
                </Section>


                <Section >
                    <SectionTitle >Using the Modulo</SectionTitle>
                    <SectionText>
                        
                        <p>From these results can should be able to see a pattern.    Using a modulo of 5, gives a repeating sequence of 0, 1, 2, 3, 4, 0, 1, 2, 3, 4</p>
                        <p>Using a modulo of 3, gives a repeating sequence of 0, 1, 2, 0, 1, 2, </p>

                        <p>Using the modulo operator on X, we can generate a sequence of numbers from 0 to x -1 </p>

                        <p>So we can combine the modulo with a looping structure (<CodeInline>for</CodeInline> or <CodeInline>while</CodeInline>) to produce a repeating sequence.</p>

                        <p>Lets imagine that we want a repeating sequence of 1, 2, 3, 1, 2, 3</p>

                        <CodeExample code={`for counter in range (0, 6):\n\tprint(counter, end=",")`}
                        output={`0, 1, 2, 3, 4, 5,`} />

                        <p>Now, instead of printing the counter, we are going to print modulo</p>

                        <CodeExample code={`for counter in range (0, 6):\n\tprint(counter % 3, end=",")`}
                        output={`0, 1, 2, 0, 1, 2,`} />

                        <p>Finally, we can change our sequence by adding 1 to each value</p>

                        <CodeExample code={`for counter in range (0, 6):\n\tprint((counter % 3) + 1, end=",")`}
                        output={`1, 2, 3, 1, 2, 3,`} />
                        
                    </SectionText>
                    
                </Section>


                <Section >
                    <SectionTitle >Testing number factors using Modulo</SectionTitle>
                    <SectionText>
                        
                        <p>Another use for the modulo operator is the test whether a number is factor of a second number</p>
                        <p>If a is a factor of b, then <CodeInline>(b % a) == 0</CodeInline></p>
                        <p>You can read this as <i>"If b divided by a gives a remainder of 0, then c is a factor of b"</i></p>
                        <p>Can can now test whether a number is a factor of another number using the following code</p>

                        <CodeExample 
                            code={`value = int(input("Enter a factor of 20"))\nif 20 % value == 0:\n\tprint("You are correct")\nelse:\n\tprint("You are not correct.")`}
                        /> 
                        
                    </SectionText>
                    
                </Section>

                

                

                
                <Activity repl="https://replit.com/@mrsalih/modulo#challenge.md" 
                          email={email} 
                          challengeName="level-1::modulo" 
                          pupilProgress={pupilProgress}
                          />
        </Lesson>
        
        </Page>
        
        </>
    )
}


export default ComponentPage;