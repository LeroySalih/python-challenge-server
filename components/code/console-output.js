const Component = ({text}) => {
    return (<>
            
            <div className="console">
                <pre>{text}</pre>
            </div>
            <style jsx>{`
                .console {
                    background-color: black;
                    border-radius: 5px;
                    color: white;
                    padding: 20px;
                    line-height: 1.5rem;
                    font-family: 'Source InlineCode Pro', monospace;;
                    font-weight: bold;
                    font-size: 1.2rem;
                    width: 80%;
                }
            `}
            </style>
        </>
    )
}

export default Component;