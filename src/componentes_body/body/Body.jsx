import Titulo from "../titulo/Titulo";
import styled from 'styled-components'
import Body_name from "../body_name/body_name";
import Button from "../button/Button";
import arrow_down from '../../images/arrow_down.png'

const AppBody = styled.body`
    margin-left:20vh;
    margin-top:15vw;
`

const Image = styled.img`
    width:25px;
`

const Body = () => {
    return (
        <AppBody>
            <Titulo>Desenvolvedor Web</Titulo>
            <Body_name>Felipe Kamada</Body_name>
            <Button>Baixar currículo <Image src={arrow_down} alt="download-image" /></Button>
        </AppBody>
    )
}

export default Body;