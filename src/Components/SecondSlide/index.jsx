import React from "react";
import { useRouter } from "next/router";

const index = ({ ref }) => {

	const router = useRouter();

  return (
    <div className="project" ref={ref}>

	    <video className="project_video" controls={false} autoPlay loop playsInline muted>
		    <source src="/video/SLIDE2_BG.mp4" type="video/mp4"/>
	    </video>

        <div className="project__content" data-aos="fade-up" data-aos-delay="500">
          <div className="content__custamize">More power to minters</div>
          <div className="content__heading">
	          <span>
		          Unlock a New Minting Experience <br/>With weMint
	          </span>
	          <img src="web/SLIDE2_SHOE_GIF.gif" alt="" className="project_back"/>

          </div>


          <div className="content__desc">
	          Customize your favorite NFTs before mint and Earn a share in royalty fees.
          </div>
          <div className="content__details" onClick={() => router.push("/projects")}>
            <img className="details__logo" src="web/plus.png" />
            LEARN MORE
          </div>
        </div>
    </div>
  );
};

export default index;
