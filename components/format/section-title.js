const Component = ({children}) => {
    
    return (<>
        <div>{children}</div>
        <style jsx>{`
            .section-title {
                font-size: 4rem;
                font-family: 'Roboto Condensed', sans-serif;
                margin-bottom: 1rem;
            }
        `}</style>
        </>)
}


export default Component;