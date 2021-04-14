import styled from 'styled-components';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import {useMsal, useAccount} from '@azure/msal-react'

import {useEffect, useState} from 'react'
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
    const email = account && account.username.toLowerCase();

    

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
        
        <LessonHeader title="Input Validation" lo="How do I validate data?"/>
        <Lesson>
            
                <section id="what-we-are-building" >
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap: "20px"}}>
                        <div>
                            <SectionTitle>What We're Building</SectionTitle>
                            <SectionDescription>In this lesson you'll practise validating data from a user va.</SectionDescription>
                            <ConsoleOutput text={`Enter a number between 1 and 10: -5\n
Incorrect value, please try again.\n
Enter a number between 1 and 10: 0\n
Incorrect value, please try again.\n
Enter a number between 1 and 10: 11\n
Incorrect value, please try again.\n
Enter a number between 1 and 10: 1\n
Thank you, please continue`}/>
                        </div>
                        <div>
                        <SectionTitle >Key Terms</SectionTitle>
                            <SectionDescription>In this lesson</SectionDescription>
                            <KeyTerms>
                                <KeyTermTitle/>
                                <KeyTerm index="0" term="Validate">Ensure that data is within expected range and format.</KeyTerm>
                                <KeyTerm index="1" term="">.</KeyTerm>
                                
                            </KeyTerms>
                        </div>
                    </div>
                    
                </section>
                
                

                <section>
                    <SectionTitle >What is Validation?</SectionTitle>
                    <SectionText>
                    <p>Validation means that the program will check that data is of a value and format that teh program expects.
                    </p>
                    <p>Typical example sof validation are:
                        <ul>
                            <li>Ensuring that only numbers are entered when required</li>
                            <li>Ensuring that a password meets criteria</li>
                            <li>Ensuring that a string is of a given length</li>
                            <li>Ensuring that a file exists and can be accessed by the computer.</li>
                        </ul>
                    </p>
                    <p>We validate data to prevent the program from producing incorrect output or worse still, crashing.  Remember the saying "Garbage in, garbage out"</p>
                    </SectionText>
                    
                </section>

                <section >
                    <SectionTitle >How Validation Works</SectionTitle>
                    <SectionText>
                        
                        <p>Validation will always follow the same pattern:</p>
                        <CodeExample 
                            code={`define the is_valid def
get the input
while not (data is valid)
    tell the user
    get the input
continue with the program
`}
                            
                        />
                        
                    </SectionText>
                    
                </section>

                <section >
                    <SectionTitle >Defining the is_valid def</SectionTitle>
                    <SectionText>
                        
                        <p>To define the valid data, we create a <CodeInline>def</CodeInline> that accepts the user input and returns a True (if input is valid) or False (if input is invalid).</p>
                        <p>The def is usually named as <CodeInline>is_valid_[...]</CodeInline>, such as 

                            <ul>
                                <li><CodeInline>is_valid_height</CodeInline> may check that the user has entered a height between 0 and 200 cms </li>
                                <li><CodeInline>is_valid_date</CodeInline> may check that the user has entered a valid date</li>
                                <li><CodeInline>is_valid_email</CodeInline> may check that the user has entered a valid email address</li>
                            </ul>
                        
                        </p>

                        <p>
                            An <CodeInline>is_valid def</CodeInline> will generally use boolean operators, such as <CodeInline>&nbsp;, nbsp;= == not, and </CodeInline>to determine whether the 
                            input data is valid or not.
                        </p>
                        <CodeExample 
                            code={`def is_valid_height(height):
    return 0 <= height <= 200

print(is_valid_height(-5))
print(is_valid_height(203))
print(is_valid_height(176))
    `}
                            output={`False
False
True`}
                        />
                    </SectionText>
                    
                </section>

                <section >
                    <SectionTitle >Full Validation Pattern</SectionTitle>
                    <SectionText>

                    <p>Validation will always follow the same pattern:</p>
                        <CodeExample 
                            code={`define the is_valid def
get the input
while not (data is valid)
    tell the user
    get the input
continue with the program
`}
                            
                        />
                    <p>
                        <ul>
                            <ol>First we define (and test) the <CodeInline>is_valid</CodeInline> def</ol>
                            <ol>Then we get the data.  If this is data from the user, it will probably use an <CodeInline>input()</CodeInline> command.  Other ways to get data may inlcude reading a file or accessign the internet.</ol>
                            <ol>Line 3 starts the while loop, which will execute while the data is <CodeInline>not valid</CodeInline></ol>
                            <ol>Line 4 is the first line fo the while loop, and informs the user of the error</ol>
                            <ol>Line 5 allows the user to re enter the data.  This is the end fo the while loop, so we return to line 3.</ol>
                            <ol>If the data is valid, then the while loop will return False, and so will not execute, allowing the program to continue.</ol>

                        </ul>
                    </p>
                    </SectionText>
                </section>

                <section>
                    <SectionTitle>Practice</SectionTitle>
                    <AuthenticatedTemplate>
                        <Activity email={email} activityId="level-2::input-validation"/>
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