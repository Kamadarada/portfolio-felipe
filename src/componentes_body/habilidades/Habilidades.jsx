import styled from 'styled-components'
import nodejs from '../../images/nodejs-original.svg'
import javascript from '../../images/javascript-original.svg'
import mysql from '../../images/mysql-original.svg'
import csharp from '../../images/csharp-original.svg'
import react from '../../images/react-original.svg'


const tecnologias = [{
    nome: "Node.js",
    logo: nodejs
},{
    nome:"React",
    logo:react
},{
    nome:"JavaScript",
    logo:javascript
},{
    nome:"MySQL",
    logo:mysql
},{
    nome:"CSharp",
    logo:csharp
}]

const Texto = styled.h1`
    width: 287px;
    height: 39px;
    flex-shrink: 0;
    color:white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Efeito de brilho */
    text-align:center;
    margin-left:41.5vw;
    margin-top:20vh;
`

const NomeTecnologias = styled.h3`

    color:white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Efeito de brilho */

`

const Conhecimentos = styled.ul`
    display:flex;
    text-align:center;
    margin-top:60px;
    align-items:center;
    justify-content:center;
    margin-right:1.5vw;
`

const Conhecimento = styled.h4`
    margin:5px;
    align-items:center;
    justify-content:center;
    color:white;
    min-width:100px;
    transition:0.1s;

    &:hover {
    transform: scale(1.2); /* Aumenta a escala em 20% */
    }
`

const Img = styled.img`
    width:45px;
    height:45px;
    margin-top:15px;
`

const Habilidades = () =>{
    return(
        <>
            <Texto>Habilidades</Texto>
            <Conhecimentos>
                {tecnologias.map((tecnologia,index)=>(
                    <Conhecimento>
                        <NomeTecnologias>{tecnologia.nome}</NomeTecnologias>
                        <Img src={tecnologia.logo} />
                    </Conhecimento>
                ))}
            </Conhecimentos>
        </>
    )
}


export default Habilidades