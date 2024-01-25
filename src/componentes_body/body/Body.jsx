import Titulo from "../titulo/Titulo";
import styled from 'styled-components'
import Body_name from "../body_name/body_name";
import Button from "../button/Button";
import arrow_down from '../../images/arrow_down.png'
import logo from '../../images/logo-img.png'
import pdfFile from '../../../public/CV-Felipe Kamada.pdf'
import SobreSection from "../SobreSection/SobreSection";


const AppBody = styled.div`
    margin-left:20vh;
    margin-top:15vw;
`
const Image = styled.img`
    width:25px;
`
const Logo = styled.img`
    width: 350px;
    height: 300px;
    display:flex;
    margin-left:90vh;
    margin-top:11vw;
`
const AppContainer = styled.body`
    display:flex;
`

const Body = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = 'CV - Felipe de Castro Kamada';
        link.click();
    };
    return (
        <>
        <AppContainer>
            <AppBody>
                <Titulo>Desenvolvedor Web</Titulo>
                <Body_name>Felipe Kamada</Body_name>
                <Button onClick={handleDownload}>Baixar currículo <Image src={arrow_down} alt="download-image" /></Button>
            </AppBody>
            <Logo src={logo} alt="" />
        </AppContainer>
        <SobreSection/>
        </>
    )
}

export default Body;
