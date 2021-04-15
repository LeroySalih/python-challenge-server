const Component = ({children}) => {
    return (
        <>
        <div className="section">
            {children}
        </div>
        <style jsx>{`
            .section {
                
                margin-bottom: 30px;
                border: silver 1px solid;
                padding: 30px;
                border-radius: 10px;
                background-color: white;
                box-shadow: 0px 0px 10px 10px #e0e0e0;
            }
        `}</style>
        </>
    )
}

export default Component;