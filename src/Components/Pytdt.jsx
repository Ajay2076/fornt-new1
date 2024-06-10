import * as React from 'react';
import Box from '@mui/material/Box';
import { Autocomplete, Button,   FormControl,  InputLabel,  MenuItem,  OutlinedInput,  Select,  TextField,  useTheme } from '@mui/material';
import { Link } from 'react-router-dom';







export default function BoxSystemProps() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase() ;
    <div   sx={{ width: 300, Color:'white' }} ></div>
    return {
    
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
   
  });
  
   
  return (
<div>

      
    <Box  marginTop={"200px"} marginLeft= '460px'
    height={250}
    width={450}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={5}
    p={9}
    bgcolor="InfoBackground" 
    boxShadow={8}
    borderRadius={5}
    
>  <div>
<Autocomplete
        id="grouped-demo"
        
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter)) }
      
        getOptionLabel={(option) => option.title}
        sx={{ width: 400, }}
      
       style={{marginTop:'-34px',marginLeft:'35px',}} 
        renderInput={(params) => <TextField {...params} label="Payment method" />}
      
      />
    </div>

    <Button variant='contained' color='inherit' ><Link to='/Cardby'style={{textDecoration:"none",color:"black" }}>back</Link></Button>
 <Button variant='contained' color='warning'>continue </Button>

          
    </Box>
    </div>
  );
}

const top100Films = [ 
  {  title: 'UPI' },
  { title: 'CASH ON DELIVERY' },
  {  title: 'EMI' },
  {  title: 'Credit/Debit/ATM Card' },
  {  title: 'Net Banking' },
  ];

