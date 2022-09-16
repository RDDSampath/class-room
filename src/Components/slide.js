import React from "react";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";
import Class from '../images/class.png';
import maths from '../images/maths.png';
import science from '../images/science.jpg';


function slide() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
<div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  return (
    <div className="slide" >
      <SliderWrapper>
        <Slider {...settings} ClassName="">
        
          <div className="testimoni--wrapper" >
            <div className="t1">Class Room</div><br/><br/><br/>
            <div className="p1">A classroom or schoolroom is a learning space in which both children and adults learn. Classrooms are found in educational institutions of all kinds, ranging from preschools to universities, and may also be found in other places where education or training is provided, such as corporations and religious and humanitarian organizations. The classroom provides a space where learning can take place uninterrupted by outside distractions.  <a href="#">~see more~...</a></div>
            <img src={Class} alt="class" className="img1" />
          </div>

          <div className="testimoni--wrapper" >
            <div className="t1">Science class</div><br/><br/><br/>
            <div className="p1">A classroom or schoolroom is a learning space in which both children and adults learn. Classrooms are found in educational institutions of all kinds, ranging from preschools to universities, and may also be found in other places where education or training is provided, such as corporations and religious and humanitarian organizations. The classroom provides a space where learning can take place uninterrupted by outside distractions.  <a href="#">~see more~...</a></div>
            <img src={science} alt="class" className="img1"/>
          </div>

          <div className="testimoni--wrapper" >
            <div className="t1">Maths Class</div><br/><br/><br/>
            <div className="p1">A classroom or schoolroom is a learning space in which both children and adults learn. Classrooms are found in educational institutions of all kinds, ranging from preschools to universities, and may also be found in other places where education or training is provided, such as corporations and religious and humanitarian organizations. The classroom provides a space where learning can take place uninterrupted by outside distractions.  <a href="#">~see more~...</a></div>
            <img src={maths} alt="class" className="img1"/>
          </div>
        </Slider>
      </SliderWrapper>
    </div>
  );
}

export default slide;
