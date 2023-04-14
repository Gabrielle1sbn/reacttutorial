import Box from '@mui/material/Box'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Alert from '../components/Alert'
import SampleUserState from '../components/SampleUserState'

const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
      }}>
          <Sidebar />
          
          <Content title="Home">
              <Alert type="success" >
                Deu certo!
              </Alert>
              <br />
              <Alert type="error">
                Deu Erro!
              </Alert>
              <br />
              <Alert type="info">
                Info!
              </Alert>
              <br />
              <Alert type="warning">
                Warning!
              </Alert> 
            </Content >

          <SampleUserState />
        </Box>
      <Footer />
    </>
  )
}

export default Home