import * as React from 'react';
import { useState } from 'react';
import { Box, Button, TextField, Toolbar, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function BoxSystemProps() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/pay', {
        name,
        phoneNumber,
        address
      });
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
    <div>
      <Box
        marginTop={"200px"} marginLeft='460px'
        height={250} width={450}
        alignItems="center" justifyContent="center"
        gap={5} p={9}
        bgcolor="InfoBackground"
        boxShadow={5} borderRadius={14}
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' }
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button type="submit" variant="contained" color="inherit">
            <Link to='/Cards' style={{ textDecoration: "none", color: "black" }}>skip & continue</Link>
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="submit" variant="contained" color="warning">
            <Link to='/Pytdt' style={{ textDecoration: "none", color: "black" }}>continue payment</Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
