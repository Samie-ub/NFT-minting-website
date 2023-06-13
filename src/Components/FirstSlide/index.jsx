import React,{useState, useEffect} from "react";
import { useRouter } from "next/router";

const index = ({ ref, onClick }) => {

	const router = useRouter();

	const [isMobile, setMobile] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined" && window.innerWidth <= 900)
			setMobile(true);
	}, [typeof window]);

  return (

    <div className="page-home" ref={ref}>
		    <video className="home_video" controls={false} autoPlay loop playsInline muted>
			    {isMobile ? <source src="/video/DFT-mobile.mp4"  type="video/mp4"/> : <source src="/video/DFT-PC.mp4"  type="video/mp4"/>}
		    </video>
        <div className="home__content" data-aos="fade-up" data-aos-delay="500">
	        <div className="mob_swipe">
		        Swipe <span>&#10230;</span>
	        </div>
          <div className="content__heading" onClick={onClick}>
	          Leave a permanent <br/>shoe print on web 3.0
            <br />
          </div>
          <div className="content__desc">
	          Genesis NFT collection for Spring, the first decentralized NFT marketplace, powered by Oasis blockchain.
          </div>
          <div className="content__details" onClick={() => router.push("/aboutus")}>
            <img className="details__logo" src="web/plus.png" />
	          LEARN MORE
          </div>
          {/* <div className="content_scroll">
            <img src="web/home-flick.png" className="scroll__img" />
            <div className="scroll__text">Keep scrolling</div>
          </div> */}
        </div>
    </div>
  );
};

export default index;
