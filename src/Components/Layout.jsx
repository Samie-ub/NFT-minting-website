import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { ActiveContext } from "../../pages/_app";
import Footer from "./Footer";
import Header from "./Header/Header";
import Head from 'next/head'

const Layout = ({ children }) => {
  const { active, setActive, initialValue, setInitialValue, value, setValue } =
    useContext(ActiveContext);
  const router = useRouter();

  const handleMinus = () => {
    if (initialValue > 1) {
      setInitialValue(initialValue - 1);
      setValue(value - 20);
      setActive(active - 1);
    }
  };
  const handlePlus = () => {
    if (initialValue < 4) {
      setInitialValue(initialValue + 1);
      setValue(value + 20);
      setActive(active + 1);
    }
  };
  // const getClasses = {
  //   1: "first-slide-bg ",
  //   2: "second-slide-bg ",
  //   3: "third-slide-bg ",
  //   4: "fourth-slide-bg ",
  // };
  console.log({ active });

  return (
    // <div className={getClasses[active]}>
    <div className="layout-main-container">
	    <Head>
		    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		    <link rel="preconnect" href="https://fonts.googleapis.com"/>
			    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				    <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"/>
	    </Head>
      <Header />
      {children}
      {router.pathname !== '/' && <Footer />}
      {/* {showProgres[active] && (
        <div className="progress__element">
            <div
              onClick={handleMinus}
              className="element__text mr--6"
            >{`0${initialValue}`}</div>
            <progress max="100" value={value}></progress>
            <div onClick={handlePlus} className="element__text ml--6">
              05
            </div>
          </div>
      )} */}
    </div>
    // </div>
  );
};

export default Layout;
