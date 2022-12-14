import { Button, Typography } from '@mui/material'
import useConfig from '../../hooks/useConfig';
import React from 'react'
import { useIntl } from 'react-intl'; 

export default function Footer() {
  const intlk = useIntl()
  const {i18n, onChangeLocalization} = useConfig()

  const changeLang = () => {
    onChangeLocalization(i18n === 'ar' ? 'fr' : 'ar')
  }
  return (
    <footer className={`app__footer ${i18n === 'ar' ? 'app__footer--ar': null}`}>
      <Button onClick={changeLang} variant='text'>
        <Typography variant='caption'>
        {
          i18n === 'ar' ? 'Fraçais' : 'عربية'
        }
        </Typography>
      </Button>
      <Typography variant='caption' dangerouslySetInnerHTML={{__html: intlk.formatMessage({id: 'footer_copyright'})}}>
        </Typography>
    </footer>
  )
}
