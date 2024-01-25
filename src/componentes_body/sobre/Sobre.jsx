import styled from 'styled-components'


const Texto = styled.h1`
    width: 287px;
    height: 39px;
    flex-shrink: 0;
    color:white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Efeito de brilho */

`
const Descricao = styled.p`
    color: var(--gray-300, #979797);
    font-family: Nunito;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.72px;
    margin-top:15px;
`
const SobreDiv = styled.div`
    margin-left:20vh;
    margin-top:13vw;
`
const Sobre = () => {
    return (
        <SobreDiv>
            <Texto>Sobre mim</Texto>
            <Descricao>
                Sou um estudante de Tecnologia em Análise e Desenvolvimento<br /> de Sistemas motivado e entusiasmado com tecnologia.<br />
                Possuo conhecimento de tecnologias atuais e uma sólida base em programação,<br /> banco de dados e desenvolvimento web.
                Busco uma oportunidade para<br /> aplicar meus conhecimentos e habilidades, ao mesmo tempo em que desenvolvo<br /> minhas soft skills em um ambiente colaborativo.
            </Descricao>
        </SobreDiv>
    )

}

export default Sobre;