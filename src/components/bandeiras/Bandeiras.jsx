import bandeira_brasil from '../../images/brasil.png'
import bandeira_eua from '../../images/estados-unidos.png'
import styled from 'styled-components'

const bandeiras = [bandeira_brasil,bandeira_eua]

const Images = styled.ul`
    display:flex;
    text-align:center;
    margin-left:50vh;
    align-items:center;
    justify-content:center;
`

const Image = styled.img`
    width:45px;
    height:45px;
    margin:5px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    display:flex;
`


const Bandeiras = () =>{
    return(
        <Images>
            {bandeiras.map((bandeira,index)=>(
                <Image key={index} src={bandeira} alt='bandeira-pais'/>
            ))}
        </Images>
    )
}


export default Bandeiras