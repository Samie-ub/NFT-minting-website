import React from "react";


const Footprint = () => {
  return (
    <div className="footprint">
      <div className="footprint__content">
        <div className="footprint__title" data-aos="fade-up" data-aos-delay="500">
          {/* Leave a<br /> footprint can <br /> never be erased. */}
	        Leveling Up the Power of Minters
        </div>
        <div className="footprint__text" data-aos="fade-up" data-aos-delay="500">
	        weMint allows minters to customize their favorite NFTs before minting. Here is how it works:<br />
	        <span className="color__green">1.   Minters receive randomly generated elements under each item category for their NFT.<br />
	        2.   Minters can then creatively combine these elements before their NFTs for minting.<br /></span>
        </div>
        <div className="footprint__text" data-aos="fade-up" data-aos-delay="500">
	        * Note to DFT NFT minters: Some elements are more rare than others, rarity will only be revealed after Mint, so pick wisely!
        </div>
      
      </div>
    </div>
  );
};

export default Footprint;
