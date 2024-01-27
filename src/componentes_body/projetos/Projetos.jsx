import styled from 'styled-components'
import gatito from '../../images/gatito.png'
import coffebreak from '../../images/coffebreak.png'
import solcar from '../../images/solcar.png'
import acerteNumero from '../../images/acerte-o-numero.png'

const MeusProjetos = [{
    nome: "CoffeBreak",
    logo: coffebreak,
    link: "https://github.com/Psykka/CoffeeBreak"
}, {
    nome: "Corretora de seguros",
    logo: solcar,
    link: "https://github.com/Kamadarada/Projeto_Corretora_Seguros"
}, {
    nome: "Acerte o número secreto",
    logo: acerteNumero,
    link: "https://github.com/Kamadarada/Acerte-numero-secreto"
}, {
    nome: "Dashboard - Gatito's PetShop",
    logo: gatito,
    link: "https://github.com/Kamadarada/Gatito-s-BI"
}]

const ProjetosContainer = styled.div`
    margin-top:20vh;
    margin-left:9vw; 
`
const NomeProjeto = styled.h3`
    color:white;
    cursor:pointer;
    margin-top:10px;
`
const Texto = styled.h1`    
    flex-shrink: 0;
    color:white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);

`
const SubTitulo = styled.p`
    color: var(--gray-300, #979797);
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    margin-top:15px;
`
const Projects = styled.ul`
    display:flex;
    text-align:center;
    margin-top:60px;
    align-items:center;
    justify-content:center;
    margin-right:11vw;
`
const Project = styled.h4`
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
    width:350px;
    height:180px;
    margin-top:15px;
    border-radius:20px;
`

const Projetos = () => {
    return (
        <ProjetosContainer>
            <Texto>Projetos</Texto>
            <SubTitulo>Aqui está alguns projetos que já <strong>Desenvolvi</strong> e <strong>Participei</strong></SubTitulo>
            <Projects>
                {MeusProjetos.map((projeto, index) => (
                    <Project>
                        <a href={projeto.link} target='_blank'>
                            <Img src={projeto.logo} link={projeto.link} />
                        </a>
                        <NomeProjeto>{projeto.nome}</NomeProjeto>

                    </Project>
                ))}
            </Projects>
        </ProjetosContainer>
    )
}



export default Projetos;