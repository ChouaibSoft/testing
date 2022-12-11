import { TextField } from '@mui/material'

export default function CodeScanner() {
  return (
    <TextField id="code" sx={{background: 'white', width: '400px'}} autoFocus size="medium" variant='filled' label="Code" placeholder='Scan or enter code'/>
  )
}
