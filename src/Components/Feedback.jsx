import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3006/feedback', formData);
      alert('Feedback submitted successfully!');
      setFormData({
        name: '',
        email: '',
        rating: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
//     <div style={{marginTop:"100px" ,
//     backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQ4RD6fsJCHgkTUe1TIT8c4MPDm6CrhZWFEbVph1w62RdssvWtHfSbZgxwGwJBEAnsA0&usqp=CAU")',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: '100vw', // Make the component width full viewport width
//     height: '100vh',
  

// }} >
    <Box
      sx={{
        background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("https://images.unsplash.com/photo-1582737571630-859c9fcc4f2d")',
        backgroundSize: 'cover',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <Box
        sx={{
          width: '300px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <Typography variant='h4' color="textSecondary" gutterBottom>
          Feedback Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Name'
            variant='outlined'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              marginBottom: '10px',
              '& .MuiInputBase-root': {
                transition: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                },
              },
            }}
          />
          <TextField
            label='Email'
            variant='outlined'
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              marginBottom: '10px',
              '& .MuiInputBase-root': {
                transition: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                },
              },
            }}
          />
          <Box   >
          <Rating
            name="rating"
          
            variant="outlined"
            value={parseInt(formData.rating)}
            onChange={(event, newValue) => handleChange({ target: { name: 'rating', value: newValue.toString() } })}
            required
            fullWidth
            
            sx={{
              marginBottom: '',
            }}
          />
          </Box>
          <TextField
            label='Message'
            variant='outlined'
            multiline
            
            rows={4}
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              marginBottom: '20px',
              '& .MuiInputBase-root': {
                transition: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                },
              },
            }}
          />
          <Button
            variant='contained'
            color='secondary'
            type="submit"
            fullWidth
          >
            Submit Feedback
          </Button><br></br><br></br>
       
        <Link to='/'style={{textDecoration:"none",color:"sandybrown",marginRight:'200px'}}>BACK</Link> 
        </form>
      </Box>
    </Box>
    // </div>
  );
};

export default Feedback;
