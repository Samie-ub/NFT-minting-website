import React from "react";

import plus from "../../assets/web/plus.png";


const index = ({ ref }) => {
  return (
    <div className="slide5" ref={ref}>

        <div
          className="slide5__content"
        >
          <div className="contact_info">
	          <div data-aos="fade-up"
	               data-aos-delay="500">

		          <div className="content__heading">
			          CONTACT
		          </div>
		          <div className="content__desc">
			          <div className="mb--5">
				          hello@diamondfoot.io
			          </div>
		          </div>

		          <div className="content__heading">
			          FOLLOW US
		          </div>
							<div className="social_list">
								<a className="social_link" href="https://twitter.com/DiamondFoot_NFT" target="_blank">
									<img className="link__icon" src={`svgs/twitter-green.svg`} />
								</a>
								<a className="social_link" href="https://discord.gg/6e9mb&ZD" target="_blank">
									<img className="link__icon" src={`svgs/discord-green.svg`} />
								</a>
								<a href="https://www.instagram.com/diamondfoot_nft/" target="_blank" className="social_link">
									<img className="link__icon" src={`svgs/instagram-green.svg`} />
								</a>
							</div>
		          <div className="content__desc">
			          <div className="mb--5">
				          Terms of service <br/>
				          ©2022 DFT All rights reserved.
			          </div>
		          </div>
	          </div>

          </div>


        </div>
    </div>
  );
};

export default index;
