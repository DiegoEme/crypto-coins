import { useEffect, useState, useRef } from "react";
import axios from "axios";

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let offset = 0;
  const getCoins = async () => {
    console.log("me llamaron?");
    setIsLoading(true);
    const url = `https://api.coinstats.app/public/v1/coins?skip=${offset}&limit=25&currency=USD`;

    try {
      const results = await axios.get(url);
      if (results) {
        const data = results.data;
        setCoins((prevCoins) => [...prevCoins, ...data.coins]);
        setIsLoading(false);
        offset += 25;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      getCoins();
    }
  };

  useEffect(() => {
    console.log("i fired once");
    getCoins();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return { coins, isLoading };
};

export default useCoins;
