import React, { useContext, useState, useEffect } from 'react'
import BottomNav from '../BottomNav/BottomNav'
import SearchBar from 'material-ui-search-bar';
import { CarData } from '../CarData'
import './HomePage.css'
import CarouselComponent from '../Carousel /CarouselComponent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BigCarousel from '../Carousel /BigCarousel';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [isPlay, setIsPlay] = useState(true)
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1500)
    }, [])

    return (
        <>
            <Navbar />
            {
                loading
                    ?
                    <Box className="spin">
                        <CircularProgress />
                    </Box>
                    :
                    <div className='home'>
                        <div className='deliver'>
                            <LocationOnOutlinedIcon />
                            <p className='text1'> Deliver to Pune - 411012</p>
                        </div>
                        <CarouselComponent />
                        {/* <BigCarousel /> */}
                        <div className='track'>
                            <video className='video' src="/assets/video.mp4" autoPlay muted loop></video>
                            <h4 className='video-text'>AJIO</h4>
                        </div>
                        <Products />
                    </div>

            }
            <BottomNav />
        </>

    )
}

export default HomePage