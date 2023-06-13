import React from "react";

import plus from "../../assets/web/plus.png";
import {useRouter} from "next/router";
const index = ({ ref }) => {

	const router = useRouter();

  return (
    <div className="minting" ref={ref}>

        <div
          className="minting__content"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="content__process">A gamified experience</div>
          <div className="content__heading">
	          Exclusive perks await <br/>the diamondfooted
          </div>

          {/*<div className="content__desc">*/}
            {/*<div className="mb--10">*/}
            {/*<span className="number">1)</span>  All DFT holders get to earn a percentage of all<br /> secondary sales generated from DFT NFT.<br />*/}
            {/*</div>*/}
            {/*<div className="mb--10">*/}
            {/*<span className="number">2)</span> Borrow from the DFT lending pool with<br /> collateral as low as $1 (In USDC, Rose, BTC or <br /> ETH).<br />*/}
            {/*</div>*/}
            {/*<div className="mb--10">*/}
            {/*<span className="number">3)</span> Join exclusive 1/1 NFT auctions from renowned <br /> artists or projects around the world<br />*/}
            {/*</div>*/}

          {/*</div>*/}
          <div className="content__details" onClick={() => router.push("/projects")}>
            <img className="details__logo" src="web/plus.png" />
            LEARN MORE
          </div>
        </div>
    </div>
  );
};

export default index;
