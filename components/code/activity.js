import {CodeInline} from '../code';
import Button from '@material-ui/core/Button';

const Component = ({code, email, activityId}) => {


    const cmdStart = (email, activityId) => (`python start.py ${email} ${activityId}`)
    const cmdTest = () => (`python ./tests`)

    return (<section>
   
    <p>To begin the activity, copy and paste the following command to the <u>shell</u> tab</p>
    <p>
        <Button onClick={() => {navigator.clipboard.writeText(cmdStart(email, activityId))}}>Copy</Button>
        <CodeInline>{cmdStart(email, activityId)}</CodeInline>
    </p>
    
    <div>To test your work, copy and paste the following command to the <u>shell</u> tab</div>
    <div>
        <Button onClick={() => {navigator.clipboard.writeText(cmdTest())}}>Copy</Button>
        <CodeInline>{cmdTest()}</CodeInline>
    </div>
    


    <iframe 
        height="400px" 
        width="100%" 
        src="https://replit.com/@mrsalih/Host?lite=true" 
        scrolling="no" 
        frameBorder="no" 
        allowtransparency="true" 
        allowFullScreen={true}
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals">

        </iframe>
    <style jsx>{`
    
    
    `}
    </style>

    </section>)
}

export default Component;