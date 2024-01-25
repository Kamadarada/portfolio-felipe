import Name from "../name/Name";
import Bandeiras from "../bandeiras/Bandeiras";
import Option from "../options/Options";
import styled from 'styled-components'


const HeaderPortfolio = styled.header`
  display:flex;
  background: #1B325B;
  box-shadow: 0px 1px 40px 0px rgba(0, 0, 0, 0.25);
  height:90px;
  
`

const Header = () =>{
    return(
        <HeaderPortfolio>
            <Name>Felipe Kamada</Name>
            <Bandeiras/>
            <Option/>
        </HeaderPortfolio>
    )
}

export default Header;