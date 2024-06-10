import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {
  
  const [inputs, setInputs] = useState({
    oname: "",
    opass: "",
    omail: "",
    onumber: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = () => {
    console.log("button clicked");
    axios.post("http://localhost:3006/add", inputs)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{marginTop:"80px" ,backgroundImage: 'url("https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw', // Make the component width full viewport width
    height: '100vh', 
    position: 'fixed',

    
    
    }}>
     <Box style={{marginTop:"50px",marginLeft:'558px'}}
      height={600}
      width={300}
      my={4}
      position= 'revert-layer'
      display="drop"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '10px solid black',backgroundColor: '  rgba(255, 255, 255, 10)' }}
    >
     <br></br><br></br>
        <Typography variant='h3'>Signin</Typography><br></br><br></br>
     <TextField name='oname' onChange={inputHandler} value={inputs.oname}label="First name" variant='outlined'/><br></br><br></br>
     {/* <TextField label="Last name" variant='outlined'/><br></br><br></br> */}
     <TextField name='omail' onChange={inputHandler} value={inputs.omail}label="Email id" variant='outlined'/><br></br><br></br>
     <TextField name='opass' onChange={inputHandler} value={inputs.opass} label="Password" type='password' variant='outlined'/><br></br><br></br>
     <TextField label="Conform password" variant='outlined'/><br></br><br></br><br></br>

    <Button onClick={addHandler} variant='contained' color='success'>Sign Up
      {/* <Link to='/Cards'style={{textDecoration:"none",color:"white"}}>Sign Up</Link> */}
      </Button><br></br><br></br>
    Already have an account?<Link to='/Login'style={{textDecoration:"none",color:"darkblue"}}>Log In</Link>
</Box>

    </div>
  )
}

export default Signin