import { ThemeProvider } from '@emotion/react'
import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, Button,  Fab,  Toolbar, Typography , NavigationIcon, Container, Tooltip, IconButton, Menu, MenuItem, } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navbar = () => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };




  return (
    <div >
       <AppBar color="warning" >
       <Container maxWidth="xl">

      
      
            <Toolbar  >
       

{/* <div style={{background:'url("https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg")'}}></div> */}


            <Button variant='text'sx={{ width: 56, height: 60,marginTop:2 }} ><Link to={'/'} state={{textDecoration:'none',color:'white'}}>
            <Avatar  sx={{ width: 56, height: 56 }}src="https://i.pinimg.com/200x150/5e/87/f2/5e87f26d3150a73aa6caf20634de26c6.jpg"/>&nbsp;&nbsp;
            </Link></Button>
                <Typography style={{marginLeft:'450px'}} variant='h3'align='center' color={'ActiveBorder'} >  ROYAL CHEF </Typography>&nbsp;&nbsp;
               
                <Button style={{marginLeft:'300px'}} variant='text' color='success'>
                  <Link to='/Login'style={{textDecoration:"none",color:"darkblue"}}>Log In</Link></Button>&nbsp;&nbsp;

                <Button variant='text' color='success'>
                  <Link to='/Signin'style={{textDecoration:"none",color:"sandybrown"}}>Sign Up</Link> </Button>&nbsp;
                    
                  <Box sx={{ flexGrow:5 }} style={{marginLeft:'60px'}}  >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography  sx={{textDecoration:'none'}}textAlign="center" component={Link} to={
                    setting=== 'profile' ? '/':
                    setting=== 'Account' ? '':
                    setting=== 'Feedback' ? '/':
                    setting=== 'Logout' ? '/':  '#'}>
                    
                    {setting}  
                    
                  </Typography>
0                </MenuItem>
              ))}
            </Menu>
          </Box>











      
            </Toolbar >
            </Container>
        
        </AppBar >
      
     
    </div>
   

  )
}

export default Navbar