const Component = ({children}) => {
    return (<>
    <div className="container">{children}</div>
    <style jsx>{`
        .container {
            margin-top: 80px;
            width: 80%
        }
    `}</style>
    </>)
}

export default Component;