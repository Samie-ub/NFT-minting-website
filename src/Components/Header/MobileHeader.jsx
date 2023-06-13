import { useRouter } from "next/router";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { connect } from "../../redux/blockchain/blockchainActions";
import AppButton from '../common/AppButton';



const MobileHeader = () => {
  
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleLink = (link) => {
    router.push(link);
    setIsOpenMenu(false)

  };
  return (
    <>
      <div className="mobile-header">
	      <div className="header-logo">
		      <img src="web/logo_white.png" onClick={() => handleLink("/")} />
        </div>
        <img
          src="web/menu-white.svg"
          className="header-hamberg"
          onClick={() => setIsOpenMenu(true)}
        />
      </div>
      <Menu
        right
        width={"100%"}
        id="mbl-menu"
        className="mbl-menu"
        overlayClassName="mbl-menu-overlay"
        isOpen={isOpenMenu}
        onClose={() => {
          setIsOpenMenu(false);
        }}
        onStateChange={(state) => setIsOpenMenu(state.isOpen)}
      >
        <div className="menu-items">
          <div className="mobile__top">

            <img src="svgs/logo.svg" onClick={() => handleLink("/")} className="header-logo" />
            <div>BACK TO HOME</div>
            <img
              src="web/menu.svg"
              alt="menu-logo"
              className="header-hamberg"
              onClick={() => setIsOpenMenu(false)}
            />
          </div>
          <div className="menu-buttons">
            <div onClick={() => handleLink("/")} className="page-links ">
              HOME
            </div>

            <div onClick={() => handleLink("/aboutus")} className="page-links ">
              ABOUT US
            </div>
            <div onClick={() => handleLink("/team")} className="page-links ">
              TEAM
            </div>
            <div onClick={() => handleLink("/projects")} className="page-links ">
              PROJECT
            </div>
            <div onClick={() => handleLink("/roadmap")} className="page-links ">
              ROADMAP
            </div>

	          <div onClick={connect} className="page-links ">
		          Connect
	          </div>

            <div className="social-link">
              <a className="link" href="https://twitter.com/DiamondFoot_NFT" target="_blank">
                <img className="link__icon" src="svgs/blacktwitter.svg" />
              </a>
              <a className="link" href="https://discord.gg/6e9mb&ZD" target="_blank">
                <img className="link__icon" src="svgs/blackdiscord.svg" />
              </a>
              <a className="link" href="https://www.instagram.com/diamondfoot_dft/" target="_blank">
          <img className="link__icon" src={router.pathname !== "/" ? `svgs/instagram.svg` : `svgs/instagram.svg`} />
        </a>
            </div>
            <button className="banner__button" onClick={() => handleLink("/mintingprocess")}>Mint mintpass</button>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default MobileHeader;
