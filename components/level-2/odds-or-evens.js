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
        <SectionDescription>In this lesson you'll practise using the modulo operator to find if a number is odd or even.</SectionDescription>
        <ConsoleOutput text={`IsEven(4) #True\nIsEven(2) #False`}/>
    </Section>
    <Section>
    <SectionTitle >Key Terms</SectionTitle>
        <SectionDescription>In this lesson</SectionDescription>
        <KeyTerms>
            <KeyTermTitle/>
            <KeyTerm index="0" term="Even">An even number is a number that has a factor of 2.</KeyTerm>
            <KeyTerm index="0" term="Odd">An odd number is a number that does not have a factor of 2.</KeyTerm>
            
        </KeyTerms>
    </Section>       

    <Section >
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
        
    </Section>

    <Activity title="Odds or Evens"
        repl="https://replit.com/@mrsalih/odds-or-evens" 
        email={email} 
        challengeName="level-2::odds-or-evens" 
        pupilProgress={pupilProgress}
        />
                        
                

</motion.div>)


export default MarkUp;

