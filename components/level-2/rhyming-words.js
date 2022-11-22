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
        <SectionDescription>In this session you'll practise using string operators and a simple set of rules to determine whether two words rhyme.  This challenge was written by <b>Ethan Lopez</b></SectionDescription>
        <ConsoleOutput text={`Cat and Hat rhyme\n`}/>
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

    <Activity title="Package Sorter" 
        repl="https://replit.com/@mrsalih/rhyming-words-1#main.py" 
        email={email} 
        challengeName="level-2::rhyming-words-1" 
        pupilProgress={pupilProgress}
        />


<Activity title="Package Sorter" 
        repl="https://replit.com/@mrsalih/rhyming-words-2#main.py" 
        email={email} 
        challengeName="level-2::package-sorter-2" 
        pupilProgress={pupilProgress}
        />

<Activity title="Package Sorter" 
        repl="https://replit.com/@mrsalih/rhyming-words-3#main.py" 
        email={email} 
        challengeName="level-2::package-sorter-3" 
        pupilProgress={pupilProgress}
        />

    
</motion.div>)


export default MarkUp;

