import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CodeScanner from 'components/codeScanner'
import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

import './home.css'
import {Ticket} from 'components/ticket'


export default function index() {
  return (
    <section className='app__home'>
     <Header />
     <Box className="app__content">
       <CodeScanner />
       {/* <Ticket></Ticket> */}
     </Box>
     <Footer></Footer>
    </section>
  )
}
