import { Alert, CircularProgress, Snackbar, TextField } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import { useState } from 'react'

import NumberFormat from 'react-number-format';



export default function CodeScanner({fetchRecu}: any) {
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>('not_exist')
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleChange = (e: any) => {
    setValue(e.value)
    setOpen(false)
    if(e.value.length === 6){
      setLoading(true)
      fetchRecu(e.value, () => {
        setLoading(false)
        setError('unknonw_error')
       setOpen(true)
      })
    }
  }


  

  return (
    <Box>
       <NumberFormat format="######" mask="_"  value={value} onValueChange={handleChange} autoFocus  sx={{background: 'black', width: '400px'}} fullWidth customInput={TextField} placeholder="Scan or enter code" />
       {
        loading ?
        <CircularProgress sx={{position: 'relative', left: '-3rem', top: '.8rem'}} />
        : null
       }
       {open ? "true " :"flase"}
       {
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={() => setOpen(false)}
            sx={{mt: '2rem'}}
            TransitionComponent={transition}
          >
            <Alert severity="error">This is an error message!</Alert>
          </Snackbar>
       }
    </Box>
  )
}
