
import {getRegistrations} from '../api/registrations';
import {DateTime} from 'luxon';

const ChallengeIndex =  ({registrationsStr}) => {

    const registrations = JSON.parse(registrationsStr);

    return <div className="container">
                <h1>Registrations</h1>
                <div className="registration">
                    {registrations && registrations.map((r, i) => (
                    <div>
                        <div key={i}>{r.firstName}</div>
                        <div key={i}>{r.familyName}</div>
                        <div key={i}>{r.repl_owner}</div>
                        <div key={i}>{DateTime.fromISO(r.created).toLocaleString(DateTime.DATETIME_MED)}</div>
                    </div>
                    
                ))}
                </div>
                <style jsx>{`
                    .registration {
                        width: 200px;
                        border: solid silver 1px;
                        padding: 5px;
                        border-radius: 5px;
                    }
                `}
                </style>
            </div>
}

export default ChallengeIndex;



export async function getStaticProps (context) {

    // list of challenges
    const registrations = await getRegistrations();

    const registrationsStr = JSON.stringify(registrations);
    return {
        props : {
            registrationsStr
        }
    }
}