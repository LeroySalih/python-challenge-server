const Component = ({children}) => {
    return (
    <>
        <div className="text">{children}</div>
        <style jsx>{`
            .text {
                line-height : 1.8rem
                font-family : 'Open Sans'
            }

        `}</style>
    </>)
}

export default Component;