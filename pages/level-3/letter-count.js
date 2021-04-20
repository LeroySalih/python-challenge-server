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
        
        <LessonHeader title="Letter Count" lo="How do I count the letters in a string?"/>
        <Lesson>
            
                <Section id="what-we-are-building" >
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap: "20px"}}>
                        <div>
                            <SectionTitle>What We're Building</SectionTitle>
                            <SectionDescription>In this lesson you'll learn to count the number of times each letter occures in a string.</SectionDescription>
                            <ConsoleOutput text={`plain text:ABBCC\nLetter Count: [1, 2, 2, ...]`}/>
                        </div>
                        <div>
                        <SectionTitle >Key Terms</SectionTitle>
                            <SectionDescription>In this lesson</SectionDescription>
                            <KeyTerms>
                                <KeyTermTitle/>
                                <KeyTerm index="0" term="index">The item of a list that we are editing.</KeyTerm>
                                <KeyTerm index="1" term="index"><CodeInline>ord</CodeInline> a python def that returns the ASCII code for the character.</KeyTerm>
                            </KeyTerms>
                        </div>
                    </div>
                    
                </Section>
                
                

                <Section>
                    <SectionTitle >Letter Count</SectionTitle>
                    <SectionText>
                    <p>Letter counting is one of the essential methods that cryptologists use to break a code.  <a href="https://www.rd.com/article/common-letters-english-language/" target="_new">We know (roughly) the number of times that each letter appears in a long block of text</a> and if we count the frequency of each letter, then it maybe possible to match an encrypted letter to plain text based on the number of times that a letter appears.
                    </p>
                    <p>The algorithm for letter counting is:
                        <ul>
                            <li>Set up the list containing 26 0's</li>
                            <li>Loop through the plain text</li>
                            <li>Find the ord value of each letter</li>
                            <li>Subtract 65, to map A to index 0.</li>
                            <li>Increment the list at calculated index</li>
                        </ul>
                    </p>

                    
                    
                    </SectionText>
                </Section>

                
                <Activity title="Letter Count"
                          repl="https://replit.com/@mrsalih/letter-count#challenge.md" 
                          email={email} 
                          challengeName="level-3::letter-count" 
                          pupilProgress={pupilProgress}
                          />
            
        </Lesson>
        
        </Page>
        
        </>
    )
}


export default ComponentPage;