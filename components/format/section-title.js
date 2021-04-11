const Component = ({children}) => {
    
    return (<>
        <div className="section-title">{children}</div>
        <style jsx>{`
            .section-title {
                
                font-size: 2rem;
                font-family: 'Roboto Condensed', sans-serif;
                margin-bottom: 1rem;
                color: #35276d;
            }
        `}</style>
        </>)
}


export default Component;