import styled from 'styled-components'
import Body_name from '../body_name/body_name'

const Texto = styled.h3`
    color: var(--Verdeagua, #17D8D7);

    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    min-height:50px;

`
const Titulo = () =>{
    return(
        <Texto>Desenvolvedor Web</Texto>
    )
}


export default Titulo;
