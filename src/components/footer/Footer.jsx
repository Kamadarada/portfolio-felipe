import styled from 'styled-components'

const Rodape = styled.footer`
  margin-top:30vh;
  display:flex;
  padding:10px;
  box-shadow: 0px 1px 40px 0px rgba(0, 0, 0, 0.25);
  height:5vh;

`
const Div = styled.div`
    margin-left:37.5vw;
    display:flex;
    
`

const Texto = styled.p`
    color:white;
    display:flex;
    text-align:center;
    margin-top:15px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); /* Efeito de brilho */
    min-width:250px;
`

const Footer = () =>{
    return(
        <Rodape>
            <Div>
            <a href="https://www.linkedin.com/in/felipe-kamada/" target='_blank'><Texto>Developer - Felipe Kamada</Texto></a>
            <a href="https://www.linkedin.com/in/kauan-boaro-0a10b429b/" target='_blank'><Texto>UX/UI Kauan Boaro</Texto></a>
            </Div>
        </Rodape>
        
    )
}

export default Footer;