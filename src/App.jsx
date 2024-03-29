import styled from 'styled-components'
import Header from './components/header/Header'
import Body from './componentes_body/body/Body'
import Footer from './components/footer/Footer'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(#295C9E, #28426e, #1B325B 50%);
  font-family: 'Heebo', sans-serif;
  overflow-y: auto;
  
`



function App() {
  return (
    <AppContainer>
      <Header/>
      <Body/>
      <Footer> UX/UI - Kauan Boaro  Dev - Felipe Kamada</Footer>
    </AppContainer>
  )
}

export default App
