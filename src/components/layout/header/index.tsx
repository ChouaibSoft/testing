import React from 'react';
import { Box } from '@mui/system';
import useConfig from '../../../hooks/useConfig';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import { Typography } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web';
import jwt_decode from 'jwt-decode';
import { FormattedMessage } from 'react-intl';


export default function Header() {
  // const { keycloak } = useKeycloak()
  // console.log(keycloak.token)
  //@ts-ignore
  const {i18n} = useConfig()
  return (
    <header className='app__header'>
        <Box sx={{px: 2}}>
          <Typography variant='h5'><FormattedMessage id="header_wicket" /> : Alger centre</Typography>
          {/* <Typography variant='h6'><FormattedMessage id="header_agent" /> : {`${decodedToken.family_name} ${decodedToken.given_name}`}</Typography> */}
        </Box>
        <Box sx={{px: 2}} className="time">
            {/* <Moment format='LL' locale={i18n === 'ar' ? 'ar-dz':  i18n}>{new Date()}</Moment>  {"   /  "} */}
            {/* <Clock className='clock' format={'HH:mm'} ticking={true} timezone={'EN'} /> */}
        </Box>
    </header>
  )
}
