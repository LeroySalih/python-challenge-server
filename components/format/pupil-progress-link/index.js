import Link from 'next/link'

const Component = ({href, title, challengeName, pupilProgress}) => {


    

    const displayProgress = () => {
        
        const progressData = [...pupilProgress.filter(p => p._id.challenge_name == challengeName)]
        
        const {progress} = (progressData && progressData[0] && progressData[0].submissions && progressData[0].submissions[0] ) || {progress : 0}
        
        console.log(title, progressData)
        return <span>{parseFloat(progress).toFixed(1)}%</span>
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