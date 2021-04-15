import styled from 'styled-components'

export const KeyTerms = styled.div`
    display: grid;
    grid-template-columns : 100px auto;
    grid-row-gap: 20px;
    margin: 20px;
`

export const KeyTermTitle = () => (
    [<div key="ktt0" style={
        {
            fontWeight: 'bold',
            borderBottom: 'dashed silver 1px'
        }
        }>Term</div>, <div key="ktt1" style={
            {fontWeight: 'bold', 
            borderBottom: 'dashed silver 1px'
        }
        }>Description</div>]
)

const KeyTermStyled = styled.div`
    font-weight: bold;
`

export const KeyTerm = ({term, index, children}) => (
    [
        <KeyTermStyled key={`kts${index}`}>{term}</KeyTermStyled>,
        <div key={`kt${index}`}>{children}</div>
    ]
)

