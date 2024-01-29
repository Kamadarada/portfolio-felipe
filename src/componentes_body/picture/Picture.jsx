import styled from 'styled-components'
import pfp from '../../images/mypfp.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'


const socialMedia = [{
    nome: "Kamadarada",
    logo: github,
    link: "https://github.com/Kamadarada"
},
{
    nome: "Felipe de Castro Kamada",
    logo:linkedin,
    link:"https://www.linkedin.com/in/felipe-kamada/"
},{
    nome: "felipekamada2@gmail.com",
    logo:email,
    link:"mailto:felipekamada2@gmail.com"
}]

const Medias = styled.ul`
    display:flex;
    text-align:center;
    margin-left:50vh;
    margin-right:40px;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-top:20vh;
`
const Media = styled.img`
    width:45px;
    height:45px;
    margin:5px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    display:flex;
    transition:0.1s;

    &:hover {
    transform: scale(1.2); /* Aumenta a escala em 20% */
}
    
`
const PictureDiv = styled.div`
    display:flex;
`
const Foto = styled.img`
    width:250px;
    height:250px;
    margin-top:21vh;
    transition: transform 1s ease-out; 

  &:hover {
    transform: rotate(360deg); 
  }
   
`

const Picture = () => {
    return (
        <PictureDiv>
            <Medias>
                {socialMedia.map((media, index) => (
                    <a href={media.link} target='_blank' title={media.nome}>
                    <Media src={media.logo}  alt={index}/>
                    </a>
                ))}
            </Medias>

            <Foto src={pfp} alt='felipe-kamada' title='Felipe de Castro Kamada'/>
        </PictureDiv>
    )
}


export default Picture;