import React from 'react'
import BottomNav from '../BottomNav/BottomNav'
import SearchBar from 'material-ui-search-bar';
import { CarData } from '../CarData'
import './HomePage.css'
import CarouselComponent from '../Carousel /CarouselComponent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BigCarousel from '../Carousel /BigCarousel';
const HomePage = () => {
    return (
        <div className='home'>
            <div className='search'>
                <SearchBar className='searchbar'
                    placeholder="Search here..."
                    autoFocus
                />
                <div className='deliver'>
                    <LocationOnOutlinedIcon />
                    <p className='text1'> Deliver to Pune - 411012</p>
                </div>
            </div>
            <CarouselComponent />
            <BigCarousel/>
            {
                CarData.map(item => {
                    return (
                        <div className='car'>
                            <img style={{ height: 100, width: 100 }} src={item.img} alt="" />
                            <p className='title'>{item.title}</p>
                            <p className='offer'>Top Offer | 50%  off</p>
                        </div>
                    )
                })
            }
            <BottomNav />
        </div>

    )
}

export default HomePage