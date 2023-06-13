import React from "react";

import plus from "../../assets/web/plus.png";

const index = ({ref}) => {
	return (
		<div className="slide4" ref={ref}>

			<div
				className="slide4__content"
				data-aos="fade-up"
				data-aos-delay="500"
			>
				{/*<div className="content__process">DIAMOND DAO (AKA. D-DAO)</div>*/}
				<div className="content__heading">
					More coming your way with <br/>DiamondDAO
				</div>

				<div className="content__desc">
					<div className="mb--5">
						Community members are the #1 focus of the DFT project. <br/>That’s why we’ve interlaced our vision with your
						contribution. <br/>We plan to support NFT Artworks, NFT projects and more by members, <br/>and build the
						community with YOUR input. <br/>As a diamondfooter, our team will listen to your ideas, <br/>and you will
						get to work closely <br/>with the rest of the community to build crazy-amazing ideas.
					</div>

				</div>
				<div className="content__details">
					<img className="details__logo" src="web/plus.png"/>
					LEARN MORE
				</div>
			</div>
		</div>
	);
};

export default index;
