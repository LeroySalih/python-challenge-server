import Link from 'next/link'

const Component = ({href, title, challengeName, pupilProgress}) => {


    console.log(`Link received: `, pupilProgress)

    const displayProgress = () => {
        console.log('ChallengeName is', challengeName)
        const progressData = [...pupilProgress.filter(p => p._id.challenge_name == challengeName)]
        console.log('progress data is',progressData)

        const {progress} = (progressData && progressData.submissions && progressData.submissions[0]) || {progress : -1}
        console.log('Progress is', progressData && progressData[0] && progressData[0].submissions && progressData[0].submissions[0])
        
        return <span>{(progress * 100).toFixed(0)}%</span>
    }

    return <>
        <Link href={href}><span className="link">{title} {pupilProgress && displayProgress()}</span></Link>
        <style jsx>{` 
            .link {
                color: blue;
                cursor: pointer;
            }
            
            .link:hover {
                text-decoration : underline
            }
            
            `}</style>
    </>
}


export default Component