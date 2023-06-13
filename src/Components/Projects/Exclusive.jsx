import Link from "next/link";
import React from "react";
const Exclusive = () => {
  return (
    <div className="exclusive">
      <div className="exclusive__title" data-aos="fade-up">
	      Exclusive perks <br/>await the diamondfooted
      </div>
      <div className="exclusive__content" data-aos="fade-up">
        <div className="exclusive__width">
          <div className="exclusive__question">Join exclusive NFT launches on <br/>our upcoming DSpring NFT marketplace</div>
          <div className="exclusive__continue"></div>
          <div className="exclusive__answer">
	          DFT holders get the exclusive opportunity to join vetted <br/>NFT projects before they launch on the upcoming Spring <br/>NFT marketplace on Oasis blockchain.
          </div>
          <div className="exclusive__question">Join the NFT pool to earn <br/>a portion of secondary sales.</div>
          <div className="exclusive__continue"></div>
          <div className="exclusive__answer">
	          DFT Holders earn a percentage from secondary DFT NFT sales. <br/>
	          Other NFTs will get the chance to be voted in by users and DFT holders to open their own NFT pool for their community members. Votes by DFT NFT holders will be given more weight.
          </div>
        </div>
        <div className="exclusive__width">
	        <div className="exclusive__question">Stake and borrow <br/>from DFT pool</div>
	        <div className="exclusive__continue"></div>
	        <div className="exclusive__answer">
		        Borrow from the exclusive DFT lending pool with collateral as low as $1 (In USDC, Rose, BTC, or ETH). <br/>Leverage your time to exceed collateral by performing tasks required by the community, up to $1,000.00.

	        </div>
          <div className="exclusive__question">Participate in exclusive auctions</div>
          <div className="exclusive__continue"></div>
          <div className="exclusive__answer">
	          Gain exclusive access to 1/1 NFT auctions from world-renowned artists and NFT projects.
          </div>
        </div>
      </div>
     </div>
  );
};
export default Exclusive;