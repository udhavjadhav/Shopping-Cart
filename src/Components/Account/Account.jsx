import React from 'react'
import './Account.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import BottomNav from '../BottomNav/BottomNav';

export default function Account(){
  const [checked, setChecked] = React.useState(['wifi', '']);
  const Navigate = useNavigate()
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper', cursor:'pointer' }}
        subheader={<ListSubheader sx={{fontWeight:'bolder', fontSize:'18px', mt:3, mb:1}}><ArrowBackIosIcon fontSize='small' onClick={()=>Navigate('/')}/>Profile</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <Person2OutlinedIcon className='icon shadow p-1' />
          </ListItemIcon>
          <ListItemText primary="Account" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem onClick={()=>Navigate('/subscriptions')}>
          <ListItemIcon>
            <AddShoppingCartOutlinedIcon className='icon shadow p-1'/>
          </ListItemIcon>
          <ListItemText primary="Your Orders" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon className='icon shadow p-1'/>
          </ListItemIcon>
          <ListItemText primary="Wishlist" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DarkModeOutlinedIcon  className='icon shadow p-1'/>
          </ListItemIcon>
          <ListItemText id="switch-list-label-darkmode" primary="Enable Dark Mode" />
          <Switch
            edge="end"
            onChange={handleToggle('darkmode')}
            checked={checked.indexOf('darkmode') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-darkmode',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DoNotDisturbIcon className='icon shadow p-1' />
          </ListItemIcon>
          <ListItemText id="switch-list-label-donotdisturb" primary="Do not disturb" />
          <Switch
            edge="end"
            onChange={handleToggle('donotdisturb')}
            checked={checked.indexOf('donotdisturb') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-donotdisturb',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SupportAgentIcon className='icon shadow p-1' />
          </ListItemIcon>
          <ListItemText primary="Help Center" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InfoOutlinedIcon className='icon shadow p-1'/>
          </ListItemIcon>
          <ListItemText primary="About" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LockOpenIcon className='icon shadow p-1' />
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GavelOutlinedIcon className='icon shadow p-1'/>
          </ListItemIcon>
          <ListItemText primary="Terms & Conditions" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
      </List>
      <ListSubheader color='primary' sx={{display:'flex',justifyContent:'center'}}>Version 1.0</ListSubheader>  
      <BottomNav />
    </>
  );
}