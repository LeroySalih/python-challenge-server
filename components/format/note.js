import styled from 'styled-components';

const Note = styled.div`
font-family : monospace;
                font-size: 1.4rem;
                color: #397300;
                background-color: yellow;
                padding: 1rem;
                margin: 1rem;

                & li  {
                    margin-bottom: 2rem;
                }
`

const Component = ({children}) => {
    return (
        <Note>
            Note:
            <span>{children}</span>
            <style jsx>{`
                
            `}</style>
        </Note>
    )
}

export default Component;