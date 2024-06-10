import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DataView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server endpoint
    axios.get('http://localhost:3006/view')
      .then(response => {
        setData(response.data); // Set fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {data.map(item => (
        <Card key={item._id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              width={'500px'}
              image={item.image}
              imgehight={'900px'}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
                <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </Stack>
              </Typography>
              <Button type='submit' variant='contained'Buttonsize="small" > <Link to='/AddCart'style={{textDecoration:"none",color:'black'}}>add to cart
</Link>   </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
            variant='contained'
            color='warning'
            type="submit"
           
          ><Link to='/Cardby'style={{textDecoration:"none",color:"sandybrown"}}>by now</Link> &nbsp;
         
          </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default DataView;