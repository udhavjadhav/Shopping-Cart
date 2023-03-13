import React, { useContext, useState, useEffect } from 'react'
import BottomNav from '../BottomNav/BottomNav'
import './HomePage.css'
import CarouselComponent from '../Carousel /CarouselComponent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
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
                            <LocationOnOutlinedIcon sx={{ml:2}}/>
                            <p className='text1'> Deliver to Pune - 411012</p>
                        </div>
                        <CarouselComponent />
                        {/* <BigCarousel /> */}
                        <div className='track'>
                            <video className='video' src="/assets/video.mp4" autoPlay muted loop></video>
                            <h4 className='video-text'>AJIO</h4>
                        </div>
                        <Products />
                        <Footer/>
                    </div>

            }
            <BottomNav />
        </>

    )
}

export default HomePage