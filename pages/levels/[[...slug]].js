import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import {useMsal, useAccount} from '@azure/msal-react'

import {getLevels} from '../../components/data/levels';
import { useRouter } from 'next/router'


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

import {CodeExample, 
    Python, 
    CodeInline, 
    ConsoleOutput,
    Activity} from '../../components/code';
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

const LevelLink = styled(motion.div)`
    cursor: pointer;
    color: ${({selected}) => selected ? 'red;' : 'black;'}
    &:hover {text-decoration : underline}
`
const TaskLink = styled(motion.div)`
    cursor: pointer;

    color : ${({selected}) => selected ? 'red;' : 'black;'}
    &:hover {text-decoration : underline}
`

const LevelsPage = () => {
    
    const { instance, accounts, inProgress } = useMsal();

    const account = useAccount(accounts[0] || {});
    
    const [task, setTask] = useState(0);
    const [email, setEmail] = useState('');
    const [pupilProgress, setPupilProgress] = useState([]);

    
    const router = useRouter()
    const { slug } = router.query

    const [markUp, setMarkUp] = useState(getLevels(email, pupilProgress));

    // Set a default first level
    let firstLevel = Object.keys(getLevels(email, pupilProgress))[0];

    const [level, setLevel] = useState(firstLevel);

    useEffect(() => {
        // if a Level has been specified in the URL
        if (slug && slug.length > 0) {
            console.log("Slug detected", slug)

            // Find the index of the first slug in the keys of levels
            const result = Object.keys(getLevels(email, pupilProgress)).findIndex(e => e == slug[0])
            
            console.log("Result", result)
            
            // if the slug has been found, set firstLevel to matching index
            firstLevel = result > -1 ? result : 0
            
            setLevel(Object.keys(getLevels(email, pupilProgress))[firstLevel]);
        }

        if (slug && slug.length == 2) {
            // look for task 
            const tasks = getLevels(email, pupilProgress)[slug[0]]
            let result = (tasks && tasks.findIndex(e => e.title == slug[1])) || 0
            result = result == -1 ? 0 : result
            console.log("Tasks Found", tasks)
            setTask(result)
        }

    }, [slug])

    useEffect(() => {
        
        const loadData = async () => {

            if (account) {
                setEmail(account.username.toLowerCase())
                
                setMarkUp(getLevels(email));
          
              } else {
                setEmail(null);
                
              }
        }

        loadData();
    
        
        
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



const DisplayLevels = ({task, level, levels, onClick}) => {

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
            levels.map((l, i) => <TaskLink selected={level==l} key={`DL${i}`} onClick={()=> onClick(l)} variants={ItemVariants}>{l}</TaskLink>)
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

    return (
        <motion.div variants={ContainerVariants} initial="hidden" animate="show">
            {
                tasks.map((t, i) => <TaskLink key={`DT${i}`} selected={i == task} onClick={()=>onClick(i)}variants={ItemVariants}>{t.title}</TaskLink>)
            }
        </motion.div>
    )  
}


export default LevelsPage;