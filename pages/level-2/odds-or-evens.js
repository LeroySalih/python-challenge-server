import styled from 'styled-components';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import {useMsal, useAccount} from '@azure/msal-react'

import {useEffect, useState} from 'react'
import axios from 'axios'

import Scrollspy from 'react-scrollspy'
import useScrollSpy from 'react-use-scrollspy';
import {useRef} from 'react';

import Button from '@material-ui/core/Button';

import Navbar from '../../components/navbar';
import Drawer from '@material-ui/core/Drawer';

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../../components/code';
import {Page, 
        Section, 
        SectionTitle, 
        SectionVideo, 
        SectionDescription, 
        SectionText, 
        LessonHeader} from '../../components/format'

const Lesson = styled.div`

`



const MainPage = styled.div`
    
    overflow-y: auto;
    height: calc(100vh - 100px)
`

const KeyTerms = styled.div`
    display: grid;
    grid-template-columns : 100px auto;
    grid-row-gap: 20px;
    margin: 20px;
`

const KeyTermTitle = () => (
    [<div key="ktt0" style={
        {
            fontWeight: 'bold',
            borderBottom: 'dashed silver 1px'
        }
        }>Term</div>, <div key="ktt1" style={
            {fontWeight: 'bold', 
            borderBottom: 'dashed silver 1px'
        }
        }>Description</div>]
)

const KeyTermStyled = styled.div`
    font-weight: bold;
`

const KeyTerm = ({term, index, children}) => (
    [
        <KeyTermStyled key={`kts${index}`}>{term}</KeyTermStyled>,
        <div key={`kt${index}`}>{children}</div>
    ]
)

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







const InlineCode = ({children}) => {
    return (<span>{children}</span>)
}

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

    
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
      ];
    
    const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -80,
      });
    

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
                    <li><a href="#print-command"><InlineCode>print</InlineCode> Command</a></li>
                    <li><a href="#printing-numbers">Printing numbers</a></li>
                    <li><a href="#printing-words">Printing Words</a></li>
                    <li><a href="#printing-emoji">Printing Emoji</a></li>
                    <li><a href="#what-can-go-wrong">What can go wrong?</a></li>
                    <li><a href="#practice">Practice</a></li>
                </ul>
                               

                <MeasuringProgress
                    bronze="I can displaymy name to the console."
                    silver="I can output numbers and text to the console."
                    gold="I can use the advanced options of <InlineCode>print</InlineCode>."
                    >
                </MeasuringProgress>

                <div>Module Plan</div>
                <ul>
                    <li>Output</li>
                    <li>Operators</li>
                </ul>
                
            
            

        </Drawer>

        <Page>
        
        <LessonHeader title="Odds or Evens" lo="How do I use the modulo operator?"/>
        <Lesson>
            
                <section id="what-we-are-building" >
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap: "20px"}}>
                        <div>
                            <SectionTitle>What We're Building</SectionTitle>
                            <SectionDescription>In this lesson you'll practise using the modulo operator to find if a number is odd or even.</SectionDescription>
                            <ConsoleOutput text={`IsEven(4) #True\nIsEven(2) #False`}/>
                        </div>
                        <div>
                        <SectionTitle >Key Terms</SectionTitle>
                            <SectionDescription>In this lesson</SectionDescription>
                            <KeyTerms>
                                <KeyTermTitle/>
                                <KeyTerm index="0" term="Even">An even number is a number that has a factor of 2.</KeyTerm>
                                <KeyTerm index="0" term="Odd">An odd number is a number that does not have a factor of 2.</KeyTerm>
                                
                            </KeyTerms>
                        </div>
                    </div>
                    
                </section>
                
                

                

                

                <section >
                    <SectionTitle >Reminder: Finding a factor with modulo</SectionTitle>
                    <SectionText>
                        
                        <p>We can use the modulo (<CodeInline>%</CodeInline>) operator to find out whether a number is a factor of another number.</p>
                        <p>To find whether 3 is a factor of 10, we can calculate <CodeInline>10 % 3</CodeInline>.</p>
                        <p>If this result is 0, then 3 is a factor of 10.  If it is any other number, then 3 is not a factor of 10</p>
                        <CodeExample
                            code={`print ((10 % 3) == 0)`}
                            output={`False`}
                        />
                        <p>
                            Here we can see that 3 is not a factor of 10.
                        </p>
                        <p>You can use this information to find whether a number is even or odd</p>
                    </SectionText>
                    
                </section>

                

                <section>
                    <SectionTitle></SectionTitle>
                    <AuthenticatedTemplate>
                        
                        <Activity title="Odds or Evens"
                          repl="https://replit.com/@mrsalih/odds-or-evens" 
                          email={email} 
                          challengeName="level-2::odds-or-evens" 
                          pupilProgress={pupilProgress}
                          />
                          
                    </AuthenticatedTemplate>
                    <UnauthenticatedTemplate>
                        <div>You are not logged in.  Please log in to complete the practice section.</div>
                    </UnauthenticatedTemplate>
                </section>

            
        </Lesson>
        
        </Page>
        <style jsx>{`
        
            section {
            
                margin-bottom: 30px;
                border: silver 1px solid;
                padding: 30px;
                border-radius: 10px;
                background-color: white;
                box-shadow: 0px 0px 10px 10px #e0e0e0;
            }
        
        `}</style>
        </>
    )
}


export default ComponentPage;