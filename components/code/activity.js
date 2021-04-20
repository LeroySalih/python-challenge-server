import {CodeInline} from '../code';
import Button from '@material-ui/core/Button';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import {DateTime} from 'luxon'
import {Page, 
    Section, 
    SectionTitle, 
    SectionVideo, 
    SectionDescription, 
    SectionText, 
    LessonHeader} from '../../components/format'

const Component = ({repl, email, title, challengeName, pupilProgress}) => {

    const cmdTest = () => (`python ./tests ${email}`)

    const displayRepls = (challengeName, pupilProgress) => {

        if (!pupilProgress)
            return <div>No history found</div>


        const activityHistory = pupilProgress.filter(h => h._id.challenge_name == challengeName);
        const displayCreatedDate = (dt) => DateTime.fromISO(dt).toFormat('dd LLL yyyy')

        return <>
            <div className="history-grid">
                <div>Repl</div>
                <div>Last Tested</div>
                <div>Progress</div>
                {activityHistory.map(ah => 
                    [<div><a target="_new" href={`https://replit.com/@${ah._id.repl_owner}/${ah._id.repl_slug}`}>{ah._id.repl_slug}</a></div>,
                    <div>{ah.submissions && ah.submissions[0] && displayCreatedDate(ah.submissions[0].created)}</div>,
                    <div>{ah.submissions && ah.submissions[0] && ah.submissions[0].progress} %</div>]

                )}
            </div>
            <style jsx>{`
                .history-grid {
                    display: grid;
                    grid-template-columns : 1fr 1fr 1fr;
                }
            `}</style>
            
            </>

    }
    return (<section>
        <SectionTitle>Practice: {challengeName}</SectionTitle>
        
        <AuthenticatedTemplate>
            <h3>Instructions:</h3>
            <ul>
                <li>Fork this <a href={repl}>repl</a></li>
                <li>Complete the exercise in the challenge.md file</li>
                <li>To submit your work, type <CodeInline>{cmdTest()}</CodeInline><Button variant="outlined" onClick={() => {navigator.clipboard.writeText(cmdTest())}}>Copy</Button> in the <b>shell</b> window</li>
            </ul>
            <h3>Your repls:</h3>
            <p>Here is a list of repls you have proviously used</p>
            <div style={{marginBottom: "4rem"}}>{displayRepls(challengeName, pupilProgress)}</div>
            
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <div>You are not logged in.  Please log in to complete the practice section.</div>
        </UnauthenticatedTemplate>
    </section>)
}

export default Component;