import React, {useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import './BottomNav.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const StyledBadge = styled(Badge)(({ theme, value }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
export default function BottomNav({count}) {
    // const {user, setUser} = useContext(AppContext)

    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Navigate = useNavigate()

    return (
        <BottomNavigation className='nav' value={value} onChange={handleChange}>
            <BottomNavigationAction
                onClick={()=>Navigate('/')}
                label="Home"
                value="home"
                icon={<HomeIcon/>}
            />
            <BottomNavigationAction
                onClick={()=>Navigate('/category')}
                label="Categories"
                value="categories"
                icon={<StorefrontIcon/>}
            />
            <BottomNavigationAction
                onClick={()=>Navigate('/cart')}
                label="Cart"
                value="cart"
                icon={  <StyledBadge badgeContent={count} color="secondary">
                <ShoppingBagOutlinedIcon />
              </StyledBadge>}
            />
            <BottomNavigationAction
                onClick={()=>Navigate('/account')}
                label="Profile"
                value="profile"
                icon={<AccountCircleIcon />}
            />

        </BottomNavigation>
    );
}