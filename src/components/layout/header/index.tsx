import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useConfig from 'hooks/useConfig';
import Clock from 'react-live-clock';
import Moment from 'react-moment';


export default function Header() {
    const {i18n} = useConfig()
  return (
    <header className='app__header'>
        <Box className="time">
            <Moment format='LL' locale={i18n}>{new Date()}</Moment>  {"   /  "}
            <Clock className='clock'  format={'HH:mm:ss'} ticking={true} timezone={'EN'} />
        </Box>
        <Box>
        </Box>
    </header>
  )
}
