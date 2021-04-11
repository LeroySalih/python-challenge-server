import Python from './python';
import ConsoleOutput from './console-output';

const Component = ({code, output}) => {
    return <>
    
    <div className="container">
        <Python code={code}/>
        <ConsoleOutput text={output}/>
    </div>
    <style jsx>{`
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 80%;
            grid-gap : 20px;
        }
    `}</style>
</>
}

export default Component;