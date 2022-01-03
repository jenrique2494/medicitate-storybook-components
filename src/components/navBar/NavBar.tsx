import * as React from 'react';
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import themeTeal from '../../themes/themeTeal';
import themeTealDark from '../../themes/themeTealDark';
import { Button } from '@mui/material';


export interface NavBarProps{
    /**
     * El src de la imagen
    */
    imageSrc?:string;
    /**
     * el Auth del menu
    */
    auth?:boolean;
    /**
     * El color del Navbar
    */
    color?:"primary" | "secondary" | "inherit" | "transparent" | "default" | undefined
    /**
     * Variante de la tarjeta
    */
    position?:'absolute' | 'fixed'  | 'relative'  | 'static'  | 'sticky'
    /**
     * modo oscuro
    */
    darkMode?:boolean;
    /**
     * El color de la letra
    */
    fontColor?:string;
    /**
     * El color del fondo
    */
    backgroundColor?:string;

}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
}));

export const  NavBar=({
    imageSrc,
    auth=false,
    color='primary',
    position='fixed',
    fontColor,
    backgroundColor='',
    darkMode=false,
    }:NavBarProps
)=> {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={(!darkMode)?themeTeal:themeTealDark} >
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color={color} position={position} style={{color:fontColor,backgroundColor}} enableColorOnDark={darkMode}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" >
                  Medicitate
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex'}}>
                  {auth && (
                      <div>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                      </div>
                    )}
                    {!auth && (
                        <div>
                          <Button variant='text' color="inherit">
                            Iniciar Sesion
                          </Button>
                          <Button variant='text' color="inherit">
                            Registrarse
                          </Button>
                        </div>
                    )}
                  </Box>
              </Toolbar>
            </AppBar>
        </Box>                
    </ThemeProvider>
  );
}
export default NavBar;