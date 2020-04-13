import React, { Component } from "react";
import Slider from "react-slick";
import { withRouter } from "react-router";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 2000,
      autoplaySpeed: 2500,
      // cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
       {this.props.sliderData.map(element => {
         return(
           <div style={{
             display: "flex",
             justifyContent: "center",
                                      alignItems: "center",
           }}>
             <center>
            <img src={element.url} 
            onClick={()=>this.props.onClick(element.videoURL)}
            style={{
              cursor: "pointer",
             border: "solid",
            borderRadius: "20px",
            borderColor: "#eee",
            borderWidth: "5px",
            maxWidth: "210px",
          }}
/>
         <p  >{element.title}</p>
         
         </center>


</div>
         )
         
       })}
        </Slider>
      </div>
 
    );
  }
}