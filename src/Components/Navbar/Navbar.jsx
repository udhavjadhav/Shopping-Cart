import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Button } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WatchIcon from '@mui/icons-material/Watch';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import DiamondIcon from '@mui/icons-material/Diamond';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { useNavigate } from 'react-router-dom';
import { CarData } from '../CarData';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '30%',
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
}));

export default function Navbar() {
  const Navigate = useNavigate()
  const [state, setState] = React.useState({
    left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{position:'sticky', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant='h5' style={{ display: 'flex', alignItems: 'center', padding: 20, fontWeight: "bolder" }}>
        <img style={{height:45, marginRight:10}} src="/assets/logo.jpg" alt="" />
        AJIO
      </Typography>
      <Divider />
      <List onClick={() => Navigate('/category')} style={{ fontFamily: 'Helvetica Neue”,Helvetica,Arial,sans-serif '}}>
        <ListItem>
          <ListItemIcon>
            < MaleIcon />
          </ListItemIcon>
          Men
        </ListItem>
        <ListItem>
          <ListItemIcon>
            < FemaleIcon />
          </ListItemIcon>
          Women
        </ListItem>
        <ListItem>
          <ListItemIcon>
            < ChildCareIcon />
          </ListItemIcon>
          Kids
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            < WatchIcon />
          </ListItemIcon>
          Watches
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HeadphonesIcon />
          </ListItemIcon>
          Accessories
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaceRetouchingNaturalIcon />
          </ListItemIcon>
          Beauty
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DiamondIcon />
          </ListItemIcon>
          Jewellery
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckroomIcon />
          </ListItemIcon>
          Winter Wear
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <OutdoorGrillIcon />
          </ListItemIcon>
          Home & Kitchen
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          Stores
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'sticky', marginTop: 2 }}>
        <Button variant='outlined' size='small' sx={{ mx: 1 }}>Login</Button>
        <Button variant='outlined' size='small'>Sign Up</Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, left: 0, right: 0, zIndex: 1, width: '100%' }}>
      <AppBar style={{backgroundColor:'#f3f4f7', borderRadius:'10px'}} position="static">
        <Toolbar>
          <div>
            {[''].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}
                  size="large"
                  edge="start"
                  color="black"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                  {anchor}
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          <Typography
            variant="h6"
            color='black'
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            AJIO
          </Typography>
          <Search sx={{backgroundColor:'#fff', borderRadius:'10px'}}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'black'}} />
            </SearchIconWrapper>
            <StyledInputBase sx={{color:'black'}}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>

    </Box>


  );
}