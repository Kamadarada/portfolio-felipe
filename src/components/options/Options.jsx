import styled from 'styled-components'


const opcoes = ['SOBRE', 'HABILIDADES', 'PROJETOS', 'CONTATO']

const Choices = styled.ul`
    display:flex;
    text-align:center;
    margin-left:25vh;
 
`
const Choice = styled.h3`
    display:flex;
    margin:5px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    color:white;
    min-width:120px;
    
`

const Option = () => {
    return (
        <Choices>
            {opcoes.map((choice, index) => (
                <Choice key={index}>{choice}</Choice>
            ))}
        </Choices>
    )
}

export default Option;