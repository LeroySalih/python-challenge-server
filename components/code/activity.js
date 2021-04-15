import {CodeInline} from '../code';
import Button from '@material-ui/core/Button';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import {Page, 
    Section, 
    SectionTitle, 
    SectionVideo, 
    SectionDescription, 
    SectionText, 
    LessonHeader} from '../../components/format'

const Component = ({repl, email, title}) => {

    const cmdTest = () => (`python ./tests ${email}`)

    return (<section>
        <SectionTitle>Practice: {title}</SectionTitle>
        
        <AuthenticatedTemplate>
            <p>Instructions:</p>
            <ul>
                <li>Fork this <a href={repl}>repl</a></li>
                <li>Complete the exercise in the challenge.md file</li>
                <li>To submit your work, type <CodeInline>{cmdTest()}</CodeInline><Button variant="outlined" onClick={() => {navigator.clipboard.writeText(cmdStart(email, activityId))}}>Copy</Button> in the <b>shell</b> window</li>
            </ul>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <div>You are not logged in.  Please log in to complete the practice section.</div>
        </UnauthenticatedTemplate>
    </section>)
}

export default Component;