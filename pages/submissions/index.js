import { getSubmissionByReplName } from "../api/submissions";




    const submissions = JSON.parse(submissionStr);

    return (
        <div>
            {submissions && submissions.map((sub, i) => (
                <div key={i}>{sub.replName}
                    <ul>
                        {sub.owners && sub.owners.map((o, ownerIndex) => (
                            <li className="displayOwner">
                                {o.ownerDetails && <span className="owner">{o.ownerDetails.firstName} {o.ownerDetails.familyName}</span>}
                                {!o.ownerDetails && <span className="owner not-registered">{o.owner}</span>}
                                <span className="progress">{parseInt(o.submissions[0].progress).toFixed(0)}%</span>
                            </li>))}
                    </ul>
                </div>
            ))}
        <style jsx>{`
            .displayOwner {
                display: grid;
                grid-template-columns: 200px 200px
            }
            .owner {
                font-size: 0.8rem;
            }
            .progress {
                font-size: 0.8rem;
            }
            .not-registered {
                color: red;
            }
        `}</style>
        </div>
    );
}

export default SubmissionsIndex;



export async function getStaticProps (context) {

    // list of challenges
    
    const submissions = await getSubmissionByReplName();
    const submissionStr = JSON.stringify(submissions);

    return {
        props : {
            submissionStr
        }
    }
}