import React from "react";

import Footprint from "./Footprint";
import Exclusive from "./Exclusive";
import ExamplesFoot from "./Examples";
import RoadMap from "./RoadMap";
import Faq from "./Faq";
import Footer from "../Footer";

const index = () => {
  return (
    <div>
      <Footprint />
      <Exclusive />
	    <ExamplesFoot />
      <RoadMap />
      <Faq />
    </div>
  );
};

export default index;
