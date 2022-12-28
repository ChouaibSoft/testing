import { Alert, CircularProgress, Snackbar, TextField } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl';

import NumberFormat from 'react-number-format';



export default function CodeScanner({ fetchRecu }: any) {
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('not_exist')
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleChange = (e: any) => {
    setValue(e.target.value)
    setOpen(false)
    if (e.target.value.length ===  14) {
      setLoading(true)
      fetchRecu(e.target.value, (error: string) => {
        setLoading(false)
        setError(error)
        setOpen(true)
      })
    }
  }




  return (
    <Box>
      <TextField  value={value} onChange={handleChange} autoFocus sx={{ background: 'white', borderRadius: '8px', width: '400px' }} fullWidth 
      placeholder={intl.formatMessage({id: 'placeholder_scan'})} />
      {
        loading ?
          <CircularProgress sx={{ position: 'relative', left: '-3rem', top: '.5rem' }} />
          : null
      }
      {
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          onClose={() => setOpen(false)}
          sx={{ mt: '2rem' }}
          TransitionComponent={transition}
        >
          <Alert severity="error">
            {
              error ?
                <FormattedMessage id={error} /> : null
            }
          </Alert>
        </Snackbar>
      }
    </Box>
  )
}
