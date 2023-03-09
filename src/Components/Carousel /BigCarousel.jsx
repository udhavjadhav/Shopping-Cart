import { styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarData } from "../CarData";
import './BigCarousel.css'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const BigCarousel = () => {
    return (
        <div className="big
    cards">
            <Carousel responsive={responsive}
                swipeable={true}
                draggable={true}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                slidesToSlide={1}
                customTransition="all .2"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div><img className="images" src="/assets/car1.jpg" alt="loading" /></div>
                <div><img className="images" src="/assets/car2.jpg" alt="loading" /></div>
                <div><img className="images" src="/assets/car5.jpg" alt="loading" /></div>
                <div><img className="images" src="/assets/car4.jpg" alt="loading" /></div>
                
            </Carousel>
        </div>
    );
};

export default BigCarousel;
