import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [oname, setOname] = useState("");
  const [opass, setOpass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3006/login', {
      oname,
      opass
    });
    if (response.data === "success") {
      setMessage("Login successful");
      navigate('/Cards');
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div style={{marginTop:"100px" ,
      backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw', // Make the component width full viewport width
      height: '100vh',
      position: 'fixed',

  }} >
    <div>
      <Box
        style={{ marginTop: "100px", marginLeft: '550px' }}
        height={430}
        width={350}
        my={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={2}
        sx={{ border: '10px solid black', backgroundColor: 'rgba(300, 300, 355, 0.9)' }}
      >
        <Typography variant="h4">Login Page</Typography>
        <form onSubmit={handleSubmit} style={{ color: '#000000' }}>
          <TextField
            label="Username"
            variant='outlined'
            
            value={oname}
            onChange={(e) => setOname(e.target.value)}
          /><br /><br />
          <TextField
            label="Enter password"
            type='password'
            variant='outlined'
            value={opass}
            onChange={(e) => setOpass(e.target.value)}
          /><br /><br />
          <Button type="submit" variant='contained' color='success'>Login</Button><br /><br />
          Not a Member? <Link to='/signin' style={{ textDecoration: "none", color: "sandybrown" }}>Sign Up</Link>
        </form>
        {message && <Typography>{message}</Typography>}
      </Box>
      </div>
    </div>
  );
}

export default Login;
