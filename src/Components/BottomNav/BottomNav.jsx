import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import './BottomNav.css';

const StyledBadge = styled(Badge)(({ theme, value }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
export default function BottomNav() {
    const [value, setValue] = React.useState('home');

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
                icon={<CategoryIcon />}
            />
            <BottomNavigationAction
                onClick={()=>Navigate('/cart')}
                label="Cart"
                value="cart"
                icon={  <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
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