import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import {useMsal, useAccount} from '@azure/msal-react'

import OutputMarkUp from '../components/level-1/output';

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
            {title: "Output", markup: <OutputMarkUp email={email} />}],
        Blocks : [],
        Challenges: [],

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