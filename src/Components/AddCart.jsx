import { Button,  Card,  CardActionArea,  CardActions,  CardContent,  CardMedia,  Rating,  Stack,  Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AddCart = () => {
  return (
  <div>


<Card sx={{ maxWidth: 345,position:"top",height:'480px',marginTop:'-520px',marginLeft: '600px'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://pixelz.cc/wp-content/uploads/2018/07/hamburgers-uhd-4k-wallpaper.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Burger
            </Typography>
            <Typography variant="body2" color="text.secondary">
            offer rating:10%
           <br></br> <br></br>
           <Stack spacing={1} style={{marginLeft:'+200px'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </Stack>
            <div style={{color:"black", variant:'h1'}} > PRICE:500</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button type='submit' variant='contained'Buttonsize="small" marginLeft='10px'style={{marginTop:'18px'}}> <Link to='/AddCart'style={{textDecoration:"none",color:'black'}}>add to cart
</Link>   </Button>
          <Button  type='submit' variant='contained'style={{marginLeft:'80px' ,marginTop:'+20px'}} color='warning'><Link to='/Cardby'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          
          </Button>
        </CardActions>
      </Card>


  </div>
    
       
  
  )
}

export default AddCart