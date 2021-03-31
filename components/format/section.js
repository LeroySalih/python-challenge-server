const Component = ({children}) => {
    return (
        <>
        <div className="section">
            {children}
        </div>
        <style jsx>{`
            .section {
                margin-bottom: 4rem;
            }
        `}</style>
        </>
    )
}

export default Component;