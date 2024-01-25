import Sobre from "../sobre/Sobre";
import Picture from "../picture/Picture";
import styled from 'styled-components'

const SobreSectionDiv = styled.div`
    display:flex;
`

const SobreSection= () =>{
    return(
        <SobreSectionDiv>
            <Sobre/>
            <Picture/>
        </SobreSectionDiv>
        
    )
}

export default SobreSection;