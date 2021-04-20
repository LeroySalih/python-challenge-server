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
        console.log('Account logged in', account)
    
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
        
        <LessonHeader title="Transpose Cypher" lo="How do I implement the Transpose Cypher?"/>
        <Lesson>
            
                <Section id="what-we-are-building" >
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap: "20px"}}>
                        <div>
                            <SectionTitle>What We're Building</SectionTitle>
                            <SectionDescription>In this lesson you'll learn to encrypt and decrypt text using a Transpose algorithm.</SectionDescription>
                            <ConsoleOutput text={`plain text: Hello World\nTransposed: eHll ooWlrd`}/>
                        </div>
                        <div>
                        <SectionTitle >Key Terms</SectionTitle>
                            <SectionDescription>In this lesson</SectionDescription>
                            <KeyTerms>
                                <KeyTermTitle/>
                                <KeyTerm index="0" term="Transpose">To transpose a string of text means to swap each letter with its neighbour.  ABCD becomes BADC.</KeyTerm>
                                
                            </KeyTerms>
                        </div>
                    </div>
                    
                </Section>
                
                

                <Section>
                    <SectionTitle >Transpose Cypher</SectionTitle>
                    <SectionText>
                    <p>We can use the <CodeInline>print</CodeInline> command to display numbers, text and characters to the 
                    console.  In text based programs, the console is the main interface that we use to 
                    allow our program to interact with the user. Other ways that we interact with users include sound and files, but we will deal with these in later lessons.
                    </p>
                    <p>Typical uses for the <CodeInline>print</CodeInline> command inlude
                        <ul>
                            <li>Letting the user know the result of a calculation</li>
                            <li>Giving the user an update on a long running operation</li>
                            <li>Letting the user know something has gone wrong</li>
                            <li>Letting the user know that the program has ended.</li>
                        </ul>
                    </p>

                    <p>
                        To use the <CodeInline>print</CodeInline> command, type:
                    </p>


                    <Python code={`print(<something to output to console>)`}/>
                    
                    
                    <p>Some examples are:</p>
                    <CodeExample 
                        code={`print("Hello World")\nprint(10 + 5)`}
                        output={`Hello World\n15`}
                    />
                    
                    </SectionText>
                </Section>

                <Section >
                    <SectionTitle >Printing Numbers</SectionTitle>
                    <SectionText>
                        
                        <p>To print a number simply put the number between the brackets</p>
                        <CodeExample 
                            code={`print(10)\nprint(0.5)\nprint(0.1234567)`}
                            output={`10\n0.5\n0.1234567`}
                        />
                        
                    </SectionText>
                    
                </Section>

                

                

                
                <Activity title="Transpose Cypher"
                          repl="https://replit.com/@mrsalih/transpose#challenge.md" 
                          email={email} 
                          challengeName="level-3::transpose" 
                          pupilProgress={pupilProgress}
                          />
            
        </Lesson>
        
        </Page>
        
        </>
    )
}


export default ComponentPage;