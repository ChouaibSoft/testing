import { Box } from '@mui/system'
import CodeScanner from 'components/codeScanner'
import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

import './home.css'


export default function index({spectatorInfo, fetchRecu}: any) {
  return (
    <section className='app__home'>
     <Header />
     <Box className="app__content">
       {
        !spectatorInfo ? <CodeScanner fetchRecu={fetchRecu} /> : null
       }
     </Box>
     <Footer></Footer>
    </section>
  )
}
