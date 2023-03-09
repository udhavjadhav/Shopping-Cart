import React, { useContext } from 'react'
import BottomNav from '../BottomNav/BottomNav'
import SearchBar from 'material-ui-search-bar';
import { CarData } from '../CarData'
import './HomePage.css'
import CarouselComponent from '../Carousel /CarouselComponent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BigCarousel from '../Carousel /BigCarousel';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products'
const HomePage = () => {
    
    return (
        <div className='home'>
                <Navbar/>
                <div className='deliver'>
                    <LocationOnOutlinedIcon />
                    <p className='text1'> Deliver to Pune - 411012</p>
                 </div>
            <CarouselComponent />
            <BigCarousel/>
            <Products/>
            <BottomNav />
        </div>

    )
}

export default HomePage