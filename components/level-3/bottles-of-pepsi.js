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
    ItemVariant
} from '../format'

import {CodeExample, 
        Python, 
        CodeInline, 
        ConsoleOutput,
        Activity} from '../code';

const MarkUp = ({email,  pupilProgress}) => (<motion.div variants={ContainerVariant} initial="hidden" animate="show">
   <Section id="what-we-are-building" >
        <SectionTitle>What We're Building</SectionTitle>
        <SectionDescription>In this challenge, you'll print the lyrics to the song "Bottles of Pepsi"</SectionDescription>
        <ConsoleOutput text={`99 bottles of pepsi on the wall.
99 bottles of pepsi.
Take one down, pass it around.
98 bottles of pepsi on the wall.

...

2 bottles of pepsi on the wall.
2 bottles of pepsi.
Take one down, pass it around.
1 bottle of pepsi on the wall.

1 bottle of pepsi on the wall.
1 bottle of pepsi.
Take one down, pass it around.
No more bottles of pepsi on the wall.
        
        `}/>

    </Section>
    
            
    <Activity title="Bottles Of Pepsi"
                repl="https://replit.com/@mrsalih/bottles-of-pepsi#main.py" 
                email={email} 
                challengeName="level-3::bottles-of-pepsi" 
                pupilProgress={pupilProgress}
                />
            

</motion.div>)


export default MarkUp;

