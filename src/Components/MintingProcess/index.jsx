import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";
import { connect } from "../../redux/blockchain/blockchainActions";
import ProgressBar from "@ramonak/react-progress-bar";
import fromExponential from "from-exponential";
import MetaMaskAuth from "./metamaskauth";

const Index = () => {
  const [userAddress, setUserAddress] = useState("");
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  console.log("data=>", data);
  console.log("blockchain=>", blockchain);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  // CONFIGRATION INITIAL STATE
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  // CLAIM NFT FUNCTION
  const claimNFTs = () => {
    let cost = Number(data.PRICE);
    console.log("mintAmount: ", mintAmount);
    console.log("Cost: ", cost);
    console.log("PRICEcost * mintAmount", cost * mintAmount);
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = cost * mintAmount;
    let totalGasLimit = String(gasLimit * mintAmount);
    const costFinal = String(fromExponential(totalCostWei));
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: costFinal,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  // DECREMENT MINT AMOUNT FUNCTION
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  // INCREMENT MINT AMOUNT FUNCTION
  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  // INTRACTING WITH SMART CONTRACT FUNCTION
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      console.log("dispatch called...");
      dispatch(fetchData(blockchain.account));
    }
  };
  //  GETTING CONFIGURATION FROM CONFIG FILE
  const getConfig = async () => {
    console.log("data Here=>", data);
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();

    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="minting-process">
      <div className="process__content">
        {/* <h2 className="process__top"
	          data-aos="fade-up">Mintpass launch date</h2>
      <h1 className="process__title"
          data-aos="fade-up"
          data-aos-delay="500">Stealth Launch</h1>
      <h3 className="process__sub"
          data-aos="fade-up"
          data-aos-delay="500">(Join Discord For Announcement)</h3> */}
        <h2 className="process__top" data-aos="fade-up">
          Minting is live now{" "}
        </h2>

        {data.PRICE !== "" ? (
          // FIRST CONDITION
          <>
            <div className="mint-btn-container">
              <button
                className="app--button green--button"
                data-aos="fade-up"
                data-aos-delay="500"
                disabled={claimingNft ? 1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  incrementMintAmount();
                }}
              >
                +
              </button>

              <button
                className="app--button green--button"
                data-aos="fade-up"
                data-aos-delay="500"
                disabled={claimingNft ? 1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  claimNFTs();
                  getData();
                }}
              >
                {claimingNft ? "Minting" : "mint"} {mintAmount}
              </button>

              <button
                className="app--button green--button"
                data-aos="fade-up"
                data-aos-delay="500"
                disabled={claimingNft ? 1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  decrementMintAmount();
                }}
              >
                -
              </button>
            </div>

            <a
              href="https://tofunft.com/collection/diamondfoot/items"
              target="_blank"
              className="app--button green--button"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              VIEW MINTPASS
            </a>
            <div
              className="progressbar-container"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* PROGRESS BAR HERE */}
              <ProgressBar
                completed={data.totalSupply}
                maxCompleted={CONFIG.MAX_SUPPLY}
                bgColor="#10F861"
                height="10px"
                width="20rem"
                labelAlignment="outside"
                labelColor="#10F861"
                isLabelVisible={true}
                customLabel={
                  String(data.totalSupply) + "/" + String(CONFIG.MAX_SUPPLY)
                }
              />
            </div>
          </>
        ) : (
          // SECOND CONDITION
          <>
            <div className="mint-btn-container">
              <h3
                className="process__sub"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                CONNECT YOUR WALLET TO MINT
              </h3>
            </div>
            {blockchain.account === "" || blockchain.smartContract === null ? (
              <>
                <div className="">
                  <button
                    className="app--button green--button"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    CONNECT
                  </button>
                </div>
                <div className=" .banner__button">
                  {/* <Connect setUserAddress={setUserAddress} /> */}
                </div>
              </>
            ) : (
              <button
                className="app--button green--button"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                CONNECTED
              </button>
            )}
          </>
        )}

        <img
          src="/web/1000.gif"
          alt=""
          className="project_image"
          data-aos="fade-up"
          data-aos-delay="500"
        />
      </div>
    </div>
  );
};

export default Index;
