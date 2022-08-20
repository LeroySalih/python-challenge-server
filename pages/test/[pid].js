
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'

export default function Home() {

    const router = useRouter();
    const {pid} = router.query
    const [flag, setFlag] = useState(false)

    console.log("pid", pid)
    
    useEffect(() => {
        console.log("Fired!")
        setFlag(true)
      }, [router.isReady]);
    
    

    return <h1>Test Page v2 {pid}{JSON.stringify(flag)}</h1>
}