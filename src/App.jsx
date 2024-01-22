import styled from 'styled-components'
import Name from './components/name/Name'
import Bandeiras from './components/bandeiras/Bandeiras'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(#295C9E, #28426e, #1B325B 50%);
  font-family:Arial, Helvetica, sans-serif;
`




function App() {

  return (
    <AppContainer>
      <Name>Felipe Kamada</Name>
      <Bandeiras/>
    </AppContainer>
  )
}

export default App
