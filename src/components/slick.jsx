import React, { Component } from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne  from "../assets/images/projects/dance1.jpeg";
import imageTwo  from "../assets/images/projects/dance1.jpeg";
import imageThree  from "../assets/images/projects/dance1.jpeg";
export default class AutoPlay extends Component {
  render() {

    return (
     <Carousel
     
  autoPlay={2000}
  animationSpeed={1000}
  infinite
>
     
<img src={imageOne} />
        <img src={imageTwo} />
        <img src={imageThree} />
     
       </Carousel>
    );
  }
}