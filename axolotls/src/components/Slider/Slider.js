import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        };
        return (
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                    <img src="https://cosmos-magazine.imgix.net/file/spina/photo/10088/170424_Dolphin2_Full.jpg?fit=clip&w=835" alt=""/>
                </div>
                <div>
                    <h3>2</h3>
                    <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" alt=""/>
                </div>
                <div>
                    <h3>3</h3>
                    <img src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg" alt=""/>
                </div>
                <div>
                    <h3>4</h3>
                    <img src="https://i.pinimg.com/originals/5a/5d/52/5a5d52431ea19c03e5f4c0f3943ba52c.jpg" alt=""/>
                </div>
            </Slider>
        );
    }
}

export default SimpleSlider