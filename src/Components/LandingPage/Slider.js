import React, {useState, useEffect} from "react";
import FirstSlide from "../FirstSlide";
import SecondSlide from "../SecondSlide";
import ThirdSlide from "../ThirdSlide";
import FourthSlide from "../FourthSlide";
import FifthSlide from "../FifthSlide";
import Layout from "../Layout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
var timer;

const Slider = () => {

  const [slideIndex, setSlide] = useState(0);


	const mouseWheel = (e,slideIndex) => {
	  clearTimeout(timer);
		timer = setTimeout(function() {

			if (e.deltaY > 0){
			  if (slideIndex === 4){
				  setSlide(0);
			  } else{
				  setSlide(slideIndex + 1);
			  }
		  } else if (e.deltaY < 0){
			  if (slideIndex === 0){
				  setSlide(4);
			  } else{
				  setSlide(slideIndex - 1);
			  }
		  }
	  }, 250);
  };


	useEffect(()=> {
		window.addEventListener("wheel", e => mouseWheel(e,slideIndex));
		return () => {
			window.removeEventListener('resize', mouseWheel);
		}
	},[slideIndex]);

	return (
     <div>
      <Layout>
        <AwesomeSlider bullets={false} buttons={true} mobileTouch={true} selected={slideIndex} onTransitionEnd={e => setSlide(e.currentIndex)}>
          <div className="slider-container">
            <FirstSlide />
          </div>
          <div className="slider-container">
            <SecondSlide />
          </div>
          <div className="slider-container">
            <ThirdSlide />
          </div>
          <div className="slider-container">
            <FourthSlide />
          </div>
          <div className="slider-container">
            <FifthSlide />
          </div>
        </AwesomeSlider>
      </Layout>
    </div>
   )
}

export default Slider;
