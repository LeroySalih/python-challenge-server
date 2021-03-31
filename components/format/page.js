const Component = ({children}) => {
    return (<>
    <div className="container">{children}</div>
    <style jsx>{`
        .container {
            width: 80%
        }
    `}</style>
    </>)
}

export default Component;