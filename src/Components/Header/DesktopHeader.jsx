import React, { useContext, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import AppButton from "../common/AppButton";
import { ActiveContext } from "../../../pages/_app.js";
import { useRouter } from "next/router";
import { transform } from "framer-motion";
import store from "../../redux/store";
import { Provider } from "react-redux";

const DesktopHeader = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  console.log("data Header=>", data);
    // INTRACTING WITH SMART CONTRACT FUNCTION

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    // getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  // ON SCROLL FUNCTION
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  const { active, setActive, setBackGround, backgroundColor } =
    useContext(ActiveContext);
  const router = useRouter();

  const handleLink = (link, bgColor) => {
    router.push(link);
     setBackGround({ backgroundColor: "transparent" });
  };
  const getClasses = (params) => {
    let classes = "right__text";
    if (router.pathname === params) classes = `${classes} color__Black`;
    return classes;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && router.pathname === "/") {
      setBackGround({ backgroundColor: "transparent" });
    } else {
      setBackGround({ backgroundColor: "transparent" });
    }
  }, [router.pathname]);

  return (
    <Provider store={store}>
      <div
        className={color ? "header header_bg" : "header"}
        style={backgroundColor}
      >
        <div
          className="header__left"
          onClick={() => handleLink("/", "transparent")}
          data-aos="fade-up"
        >
          <div className="left__logo">
            <img
              src={
                router.pathname !== "/"
                  ? `web/logo_white.png`
                  : "web/logo_green.png"
              }
            />
          </div>
        </div>
        <div className="header__right" data-aos="fade-right">
          <div
            onClick={() => handleLink("/aboutus", "rgb(0, 248, 87)")}
            className={
              router.pathname !== "/"
                ? `right__text  cursor`
                : `right__text cursor`
            }
          >
            ABOUT US
          </div>
          <div
            onClick={() => handleLink("/team", "rgb(0, 248, 87)")}
            className={
              router.pathname !== "/"
                ? `right__text  cursor`
                : `right__text cursor`
            }
          >
            TEAM
          </div>

          <div
            onClick={() => handleLink("/projects", "rgb(0, 248, 87)")}
            className={
              router.pathname !== "/"
                ? `right__text  cursor`
                : `right__text cursor`
            }
          >
            PROJECT
          </div>

          <div
            onClick={() => handleLink("/roadmap", "rgb(0, 248, 87)")}
            className={
              router.pathname !== "/"
                ? `right__text cursor`
                : `right__text cursor`
            }
          >
            ROADMAP
          </div>
          {blockchain.account === "" || blockchain.smartContract === null ? (
            // FIRST CONDITION
            <div className="right__connect">
              <AppButton
                title="Connect"
                selectedClass={
                  router.pathname !== "black--button--two" &&
                  `black--button--two`
                }
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }}
              />
            </div>
          ) : (
            // SECOND CONDITION
            <div className="right__connect">
              <AppButton
                title="connected"
                selectedClass={
                  router.pathname !== "black--button--two" &&
                  `black--button--two`
                }
              />
            </div>
          )}

          <a
            className="right__link"
            href="https://twitter.com/DiamondFoot_NFT"
            target="_blank"
          >
            <img
              className="link__icon"
              src={
                router.pathname !== "/"
                  ? `svgs/twitter.svg`
                  : `svgs/twitter.svg`
              }
            />
          </a>
          <a
            className="right__link"
            href="https://discord.gg/6e9mb&ZD"
            target="_blank"
          >
            <img
              className="link__icon"
              src={
                router.pathname !== "/"
                  ? `svgs/discord.svg`
                  : `svgs/discord.svg`
              }
            />
          </a>

          <a
            className="right__link"
            href="https://www.instagram.com/diamondfoot_dft/"
            target="_blank"
          >
            <img
              className="link__icon"
              src={
                router.pathname !== "/"
                  ? `svgs/instagramlight.svg`
                  : `svgs/instagramlight.svg`
              }
            />
          </a>

          {router.pathname !== "/mintingprocess" && (
            <div className="right__mint">
              <AppButton
                title="GET MINTPASS"
                selectedClass={router.pathname !== "/" && `black--button`}
                onClick={() => handleLink("/mintingprocess", "rgb(0, 248, 87)")}
              />
            </div>
          )}
        </div>
      </div>
    </Provider>
  );
};

export default DesktopHeader;
