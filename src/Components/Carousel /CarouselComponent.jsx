import { Box, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarData } from "../CarData";
import './Carousel.css'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4.5,
  },
};

const Image=styled('img')`
    width:100%;
    height:280px;
`;
const CarouselComponent = () => {
  return (
    <div className="cards">
      <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true} 
        infinite={false}
        autoPlay={false}
        // autoPlaySpeed={5000}
        keyBoardControl={true}
        slidesToSlide={1}
        customTransition="all .2"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="carousel-item-padding-40-px"
      >
        {
            CarData.map((data) => (
              <div className="carousel" key={data.id}>
                <img className="carimg" src={data.img} alt="loading" />
                <p className="text">{data.title}</p>
              </div>
            ))
            
        }
      </Carousel> 
    </div>
  );
};

export default CarouselComponent;
 