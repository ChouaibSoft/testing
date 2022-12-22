import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import useConfig from '../../../hooks/useConfig';
import Clock from 'react-live-clock';
import Moment from 'react-moment';
import { Typography } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web';
import jwt_decode from 'jwt-decode';
import { FormattedMessage } from 'react-intl';
import api from 'utils/api';


export default function Header() {
  const { keycloak } = useKeycloak()
  const [addr, setAddr] = useState("");
  //@ts-ignore
  const decodedToken = jwt_decode(keycloak.token)
  const {i18n} = useConfig()

  useEffect(() => {
    //@ts-ignore
    api.get(`billet/pointRetrait/${decodedToken.preferred_username}`).then((r) => {
      setAddr(r.data)
    })
  }, [])

  return (
    <header className='app__header'>
        <Box sx={{px: 2}}>
          <Typography variant='h5'><FormattedMessage id="header_wicket" /> :{addr} </Typography>
          <Typography variant='h6'><FormattedMessage id="header_agent" /> : {
          //@ts-ignore
          `${decodedToken.family_name} ${decodedToken.given_name}`}</Typography>
        </Box>
        <Box sx={{px: 2}} className="time">
            <Moment format='LL' locale={i18n === 'ar' ? 'ar-dz':  i18n}>{new Date()}</Moment>  {"   /  "} 
            <Clock className='clock' format={'HH:mm'} ticking={true} timezone={'EN'} />
        </Box>
    </header>
  )
}
