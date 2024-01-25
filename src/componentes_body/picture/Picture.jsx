import styled from 'styled-components'
import pfp from '../../images/mypfp.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'

const socialMedia = [github,linkedin,email]

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
`

const PictureDiv = styled.div`
    display:flex;
`
const Foto = styled.img`
    width:250px;
    height:250px;
    margin-top:21vh;
`

const Picture = () => {
    return (
        <PictureDiv>
            <Medias>
                {socialMedia.map((media, index) => (
                    <Media src={media} alt={index}/>
            ))}
            </Medias>

            <Foto src={pfp} alt='felipe-kamada' />
        </PictureDiv>
    )
}


export default Picture;