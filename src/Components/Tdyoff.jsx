import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, AppBar, Avatar, Box, Button, CardActionArea, CardActions, Divider, IconButton, ListItemIcon, Menu, MenuItem, Rating, Stack, Toolbar, Tooltip } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
const  Tdyoff= () => {
  return (
    <div style={{
    backgroundImage: 'url("https://a-static.besthdwallpaper.com/blue-fractal-wallpaper-1024x576-7372_44.jpg")',
    imagemarginTop:"50px" ,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw', // Make the component width full viewport width
    height: '150vh'
   

}} >
<AppBar   color="secondary">
    <Toolbar>
    <IconButton
    size="medium"
    edge="start"
    color='inherit'
    aria-label="open drawer"
    sx={{ mr: 4 }}
    component={Link}
    
    to="/Cards"
  >
    <HomeIcon/>
    
  </IconButton>
  <Typography style={{marginLeft:'450px'}} variant='h3'align='center' color={'ActiveBorder'} >  ROYAL CHEF </Typography>
    </Toolbar>
</AppBar>


<Card sx={{ maxWidth: 345,height:'480px',position:"",marginTop:'200px',marginLeft:'980px'}}  >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB3cb3eTDDgtM4knMc1hJ-7MwTLGL5HOoiw&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Sandwich
            </Typography>
            <Typography variant="body2" color="text.secondary">
           offer rating:15%
            <br></br><br></br>
            <Stack spacing={1} style={{marginLeft:'+200px'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </Stack>
            <div style={{color:"black", variant:'h1'}} > PRICE:90</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        {/* <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack> */}
   <Button type='submit' variant='contained'Buttonsize="small" marginLeft='10px'> <Link to='/AddCart'style={{textDecoration:"none",color:'black'}}>add to cart
</Link>   </Button>

          <Button type='submit' variant='contained'style={{marginLeft:'80px'}} color='warning'><Link to='/Cardby'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
           
          </Button>
         
        </CardActions>
      </Card><br></br><br></br>
      

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
      </Card><br></br><br></br>
      
      <Card sx={{ maxWidth: 345,position:"top",height:'480px',marginTop:'-525px',marginLeft: '220px' }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-fish-curry-1823a09.jpg?quality=90&webp=true&resize=300,272"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Fish Moilee
           
            </Typography>
            <Typography variant="body2" color="text.secondary">
            offer rating:8%
            <br></br> <br></br>
            <Stack spacing={1} style={{marginLeft:'+200px'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </Stack>
            <div style={{color:"black", variant:'h1'}} > PRICE:450</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button type='submit' variant='contained'Buttonsize="small" marginLeft='10px'style={{marginTop:'18px'}}> <Link to='/AddCart'style={{textDecoration:"none",color:'black'}}>add to cart
</Link>     </Button>
          <Button type='submit' variant='contained'style={{marginLeft:'80px',marginTop:'+20px'}} color='warning'><Link to='/Cardby'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      

      <Card sx={{ maxWidth: 345 ,position:"top",height:'520px',marginTop:'-10px',marginLeft: '982px'  }}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="250"
            image="https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Thalassery Biryani
            </Typography>
            <Typography variant="body2" color="text.secondary">
            offer rating:5%
            <br></br> <br></br>
            <Stack spacing={1} style={{marginLeft:'+200px'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </Stack>
            <div style={{color:"black", variant:'h1'}} > PRICE:200</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button type='submit' variant='contained'Buttonsize="small"style={{marginTop:'18px'}} marginLeft='10px'> <Link to='/AddCart'style={{textDecoration:"none",color:'black'}}>add to cart
</Link>   </Button>
          <Button  type='submit' variant='contained'style={{marginLeft:'80px',marginTop:'+20px'}} color='warning'><Link to='/Cardby'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          </Button>
        </CardActions>
      </Card><br></br><br></br>

      <Card sx={{ maxWidth: 345 ,position:"top",height:'520px',marginTop:'-560px',marginLeft: '599px'}}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="250"
            image="https://wallpapercave.com/wp/wp6734913.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dosa
            </Typography>
            <Typography variant="body2" color="text.secondary">
            
            offer rating:16%
            <br></br> <br></br>
            <Stack spacing={1} style={{marginLeft:'+200px'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </Stack>
            <div style={{color:"black", variant:'h1'}} > PRICE:50</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button type='submit' variant='contained'Buttonsize="small" marginLeft='10px'> <Link to='/AddCart'style={{textDecoration:"none",color:'black'}}>add to cart
</Link>   </Button>
          <Button  type='submit' variant='contained'style={{marginLeft:'80px'}} color='warning'><Link to='/Cardby'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          </Button>
        </CardActions>
      </Card><br></br><br></br>
      
      <Card sx={{ maxWidth: 345,position:"top",height:'520px',marginTop:'-560px',marginLeft: '220px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://t3.ftcdn.net/jpg/05/81/88/00/240_F_581880037_UUUdWpzct0wAGWRE9CbrEt0jhFOk8Jlx.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Idili
            </Typography>
            <Typography variant="body2" color="text.secondary">
            offer rating:20%
            <br></br> <br></br>
            <Stack spacing={1} style={{marginLeft:'+200px'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </Stack>
            <div style={{color:"black", variant:'h1',marginLeft:'-20px'}} > PRICE:50</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button type='submit' variant='contained'Buttonsize="small" marginLeft='40px'style={{marginTop:'18px'}}> <Link to='/AddCart'style={{textDecoration:"none",color:'black'}}>add to cart
</Link>   </Button>
          <Button type='submit' variant='contained'style={{marginLeft:'80px',marginTop:'+10px'}} color='warning'><Link to='/Cardby'style={{textDecoration:"none",color:'black'}}>Buy Now
</Link>
          </Button>  
        </CardActions>
      </Card>
      
    </div>
  )
}


export default Tdyoff