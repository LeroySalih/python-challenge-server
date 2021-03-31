
import styles from "../../styles/lesson.module.css"
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import {useEffect, useState} from 'react'
import Scrollspy from 'react-scrollspy'
import useScrollSpy from 'react-use-scrollspy';
import {useRef} from 'react';

import Button from '@material-ui/core/Button';

import Navbar from '../../components/navbar';
import Drawer from '@material-ui/core/Drawer';

import {CodeExample, Python, CodeInline} from '../../components/code';
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
        
        <LessonHeader title="Output" lo="How do I display data in the console?"/>
        <Lesson>
            
                <section id="what-we-are-building" >
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
                        <div>
                            <SectionTitle>What We're Building</SectionTitle>
                            <SectionVideo/>
                            <SectionText/>
                        </div>
                        <div>
                        <SectionTitle >Key Terms</SectionTitle>
                            <SectionDescription>In this lesson</SectionDescription>
                            <KeyTerms>
                                <KeyTermTitle/>
                                <KeyTerm index="0" term="Output">Displaying information in the console.</KeyTerm>
                                <KeyTerm index="1" term="Console">The area of the screen where we interact with the program.</KeyTerm>
                            </KeyTerms>
                        </div>
                    </div>
                    
                </section>
                
                

                <section>
                    <SectionTitle >Print Command</SectionTitle>
                    <SectionText>
                    <p>We can use the <CodeInline>print</CodeInline> command to display text to the 
                    console.  In text based programs, this is the main interface that we use to 
                    allow our program to interact with the user.  In text based programs, other ways that we interact with users include sound and files, but we will deal with these in later lessons.
                    </p>
                    <p>Typical uses for the <InlineCode>print</InlineCode> command inlude
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
                </section>

                <section >
                    <SectionTitle >Printing Numbers</SectionTitle>
                    <SectionDescription>

                    </SectionDescription>
                </section>

                <section >
                    <SectionTitle >Printing Formatted Numbers</SectionTitle>
                    <SectionDescription>

                    </SectionDescription>
                </section>

                <section >
                    <SectionTitle >Printing Words</SectionTitle>
                    <SectionDescription>

                    </SectionDescription>
                </section>

                <section >
                    <SectionTitle >Printing Emoji</SectionTitle>
                    <SectionDescription>

                    </SectionDescription>
                </section>

                <section >
                    <SectionTitle >What Can Go Wrong</SectionTitle>
                    <SectionDescription>

                    </SectionDescription>
                </section>

            
        </Lesson>
        
        </Page>
        </>
    )
}


export default ComponentPage;