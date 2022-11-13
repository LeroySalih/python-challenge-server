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
        <SectionDescription>In this session you'll practise using the index operator to examine characters of a code and calculate the value of a card.</SectionDescription>
        <ConsoleOutput text={`5H #Has a value of 5\nAH #Has a value of 10\n3D #3 of Diamonds`}/>
    </Section>
     

    <Section >
        <SectionTitle >Reminder: Accessing Characters in a string</SectionTitle>
        <SectionText>
            
            <p>We can use the index (<CodeInline>[ ] </CodeInline>) operator to access the individual characters of a string.</p>
            <p>Given a string <CodeInline>name = Steve Jobs</CodeInline>, we can access individual characters using </p>
            <CodeExample
                code={`name="Steve Jobs"
firstLetter = name[0]
print(firstLetter)
`}>
            </CodeExample>
            <p>We can also use the firstLetter is decisions or loops</p>
            <CodeExample
                code={`if name[0]=='S':
    print("The first letter is 's')`}
                output={`The first letter is 's'`}
            />
            
        </SectionText>
        
    </Section>

    <Activity title="Card Converter 1" 
        repl="https://replit.com/@mrsalih/card-converter-1" 
        email={email} 
        challengeName="level-2::card-converter-1" 
        pupilProgress={pupilProgress}
        />

    <Activity title="Card Converter 2" 
        repl="https://replit.com/@mrsalih/card-converter-2" 
        email={email} 
        challengeName="level-2::card-converter-2" 
        pupilProgress={pupilProgress}
        />              
    
    <Activity title="Card Converter 3" 
        repl="https://replit.com/@mrsalih/card-converter-3" 
        email={email} 
        challengeName="level-2::card-converter-3" 
        pupilProgress={pupilProgress}
        />
                

</motion.div>)


export default MarkUp;

