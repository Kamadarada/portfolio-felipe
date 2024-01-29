import styled from 'styled-components'
import telefone from '../../images/telefone.png'
import github from '../../images/github.png'
import email from '../../images/email.png'
import linkedin from '../../images/linkedin.png'

const Contatos = [{
    nome: "(16) 99713-4563",
    logo: telefone
}, {
    nome: "Kamadarada",
    logo: github,
    link: "https://github.com/Kamadarada"
}, {
    nome: "felipekamada2@gmail.com",
    logo: email,
    link: "mailto:felipekamada2@gmail.com"
}, {
    nome: "Felipe de Castro Kamada",
    logo: linkedin,
    link: "https://www.linkedin.com/in/felipe-kamada/"
}]



const Texto = styled.h1`
    width: 287px;
    height: 39px;
    flex-shrink: 0;
    color:white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); /* Efeito de brilho */
    text-align:center;
    margin-left:41.5vw;
    margin-top:20vh;
`

const Contacts = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    text-align: center;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
`

const Contact = styled.h4`
    margin:5px;
    align-items:center;
    justify-content:center;
    color:white;
    transition:0.1s;
    display:flex;
`

const Img = styled.img`
    width:45px;
    height:45px;
    margin-top:15px;
`

const NomeProjeto = styled.h3`
    color:white;
    cursor:pointer;
    margin-top:15px;
    margin-left:15px;
`


const Contato = () => {
    return (
        <>
            <Texto>Contato</Texto>
            <Contacts>
                {Contatos.map((contato) => (
                    <Contact>
                        <Img src={contato.logo} />
                        <a href={contato.link} target='_blank'>
                        <NomeProjeto>{contato.nome}</NomeProjeto>                            
                        </a>
                    </Contact>
                ))}
            </Contacts>
        </>
    )
}


export default Contato