const Component = ({children}) => {
    return (
        <>
            <span>{children}</span>
            <style jsx>{`
                font-family : monospace;
                
                font-size: 1.4rem;
                color: #397300;
                background-color: #f0f0f0;
                padding: 3px;
            `}</style>
        </>
    )
}

export default Component;