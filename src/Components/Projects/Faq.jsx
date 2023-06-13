import React from "react";

const Faq = () => {
  return (
    <div className="faq" >
      <div className="faq__title" data-aos="fade-up">
        FAQ
      </div>
      <div className="faq__content" data-aos="fade-up">
        <div className="faq__width">
          <div className="faq__question">What is DFT?</div>
          <div className="faq__continue">...</div>
          <div className="faq__subtitle">
	          It is a collection of 10,000 original customNFTs that have a home on the Oasis blockchain.
          </div>
          <div className="faq__answer">
	          DFT is MORE than NFT art; it is a community. As a DFT holder, you gain membership access to an exclusive community whose benefits increase over time. Your DFT opens a world of opportunities, like participation in exclusive Spring NFT marketplace deals and DiamondDAO Community management. We have established multiple plans to connect to revenue-generating businesses that will engage and sustainably reward our community members.
          </div>
        </div>
        <div className="faq__width">
          <div className="faq__question">How will DFT NFTs be launched?</div>
          <div className="faq__continue">...</div>
          <div className="faq__answer">
	          For updates on the project, join our Discord channel or follow our team on Twitter. We will announce official updates on these channels first. When it's launch time, you buy NFTs and join the community on Diamondfoot.io
          </div>
          <div className="faq__question">How much does each DFT cost?</div>
          <div className="faq__continue">...</div>
          <div className="faq__answer">
	          The price is 888 Rose per NFT + gas fee (Max 15 NFTs per address)
          </div>
          <div className="faq__question">
            {" "}
            Is there a time limit to how long I can take to choose my options when designing my DFT NFT?
          </div>
          <div className="faq__continue">...</div>
          <div className="faq__answer">
	          There is no time limit, though this is subject to change. Join our discord and follow us on Twitter for any updates.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
