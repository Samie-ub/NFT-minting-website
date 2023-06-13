import { useEffect, useState } from "react";
import Slider from "../src/Components/LandingPage/Slider";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(true);
    }
  });
  return <div> {loading && <Slider />}</div>;
}
