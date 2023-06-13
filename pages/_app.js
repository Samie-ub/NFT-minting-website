import { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/styles.scss";
import "../src/Components/MintingProcess/styles.css";
import "../src/Components/LandingPage/slider.css";
import store from ".././src/redux/store";
import { Provider } from "react-redux";

export const ActiveContext = createContext();

function MyApp({ Component, pageProps }) {
  const [active, setActive] = useState(1);
  const [initialValue, setInitialValue] = useState(1);
  const [value, setValue] = useState(20);
  const [backgroundColor, setBackGround] = useState();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Provider store={store}>
      <ActiveContext.Provider
        value={{
          active,
          setActive,
          setBackGround,
          backgroundColor,
          setInitialValue,
          initialValue,
          setValue,
          value,
        }}
      >
        <Component {...pageProps} />
      </ActiveContext.Provider>
    </Provider>
  );
}

export default MyApp;
