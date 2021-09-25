import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import {useMsal, useAccount} from '@azure/msal-react'

import OutputMarkUp from '../components/level-1/output';
import OperatorsNumericMarkUp from '../components/level-1/operators-numeric';
import InputsMarkUp from '../components/level-1/inputs';
import VariablesMarkUp from '../components/level-1/variables';
import DecisionMarkUp from '../components/level-1/decisions';
import OperatorsStringMarkUp from '../components/level-1/operators-string';
import OperatorsBooleanMarkUp from '../components/level-1/operators-boolean';

import InputValidationMarkUp from '../components/level-2/input-validation';
import OddsOrEvensMarkUp from '../components/level-2/odds-or-evens';

import LetterCountMarkUp from '../components/level-3/letter-count';
import TransposeMarkUp from '../components/level-3/transpose';
import TrianglesMarkUp from '../components/level-3/triangles';

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
    LessonHeader} from '../components/format'

import {CodeExample, 
    Python, 
    CodeInline, 
    ConsoleOutput,
    Activity} from '../components/code';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';

const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 200px auto;
    grid-template-areas: "levels task" "tasks task";
    height: calc(100vh-100px;);
`

const Levels = styled.div`
    grid-area: levels;
`
const Tasks = styled.div`
    grid-area: tasks;
`
const Task = styled.div`
    grid-area: task;
    overflow-y: scroll;
    height: calc(100vh - 100px);
`


const LevelsPage = () => {
    
    const { instance, accounts, inProgress } = useMsal();

    const account = useAccount(accounts[0] || {});
    
    const [task, setTask] = useState(0);
    const [email, setEmail] = useState('');
    const [pupilProgress, setPupilProgress] = useState([]);

    const generateMarkUp = (email) => ({
        Learn : [
            {title: "Output", markup: <OutputMarkUp email={email} />},
            {title: "Operators - Numeric", markup: <OperatorsNumericMarkUp email={email} />},
            {title: "Variables", markup: <VariablesMarkUp email={email}/>},
            {title: "Inputs", markup: <InputsMarkUp email={email}/>},
            {title: "Operators - Strings", markup: <OperatorsStringMarkUp email={email}/>},
            {title: "Operators - Booleans", markup: <OperatorsBooleanMarkUp email={email}/>},
            {title: "Decisions", markup: <DecisionMarkUp email={email} />}
        ],
           
            /*
            Variables
            Input
            Data Types
            Operators - String
            Operators - Logical
            Decisions - IF
            Decisions - IF ELSE
            Decisions - IF ELIF ELSE
            Loops - For
            Loops - While
            Defs - No params
            Defs - Params
            Defs - Return
            */

        Algorithms : [
            {title: "Input Validation", markup: <InputValidationMarkUp email={email} />},
            // Play again Loop

            {title: "Odds or Evens", markup: <OddsOrEvensMarkUp email={email} />}
        ],
        Challenges: [
            // {title: "Temperature Converter - detect that the user has entered F or C and convert "}
            {title: "Letter Count ", markup: <LetterCountMarkUp email={email} />},
            {title: "Transpose", markup: <TransposeMarkUp email={email} />},
            {title: "Triangle", markup: <TrianglesMarkUp email={email}/>}
            // Pasword Generator
            // Find First in List
            // Find Highest in List
            // Is each item in a correct position (items to the left are lower, items to the right are higher)
        ],

    })

    const [markUp, setMarkUp] = useState(generateMarkUp(email, pupilProgress));

    const [level, setLevel] = useState(Object.keys(markUp)[0]);

    useEffect(async () => {
        
    
        if (account) {
          setEmail(account.username.toLowerCase())
          
          setMarkUp(generateMarkUp(email));
    
        } else {
          setEmail(null);
          
        }
        
      }, [account])

      


    return <PageLayout>
                <Levels>
                    <h1>Levels</h1>
                    <DisplayLevels level={level} levels={Object.keys(markUp)} onClick={(l) => {setLevel(l); setTask(0);}}/>
                </Levels>
                <Tasks>
                    <h1>Tasks</h1>
                    <DisplayTasks task={task} tasks={markUp[level]} onClick={(i)=>setTask(i) }/>
                </Tasks>
                <Task>
                    <h1>{level}:{markUp[level][task].title}</h1>
                    {markUp[level][task].markup}
                </Task>
            </PageLayout>
}



const DisplayLevels = ({levels, onClick}) => {
    const ContainerVariants = {
        hidden: {},
        show: {transition: {delay: 2, staggerChildren : 0.2}}
    }
    
    const ItemVariants = {
        hidden : {opacity: 0, x: 50},
        show: { opacity: 1, x: 0}
    }

    return (<motion.div variants={ContainerVariants} initial="hidden" animate="show">
        {
            levels.map((l, i) => <motion.div key={`DL${i}`} onClick={()=> onClick(l)}
                variants={ItemVariants}
            >{l}</motion.div>)
        }
    </motion.div>);
}


const DisplayTasks = ({tasks, task, onClick}) => {
    const ContainerVariants = {
        hidden: {},
        show: {transition: {delay: 2, staggerChildren : 0.2}}
    }
    
    const ItemVariants = {
        hidden : {opacity: 0, x: 50},
        show: { opacity: 1, x: 0}
    }

    return (<motion.div variants={ContainerVariants} initial="hidden" animate="show">
        {
            tasks.map((t, i) => <motion.div key={`DT${i}`} onClick={()=>onClick(i)}variants={ItemVariants}>{t.title}</motion.div>)
        }
    </motion.div>)  
}


export default LevelsPage;