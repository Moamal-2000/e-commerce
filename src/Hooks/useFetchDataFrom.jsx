import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchDataFrom(options) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.request(options);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [options]);

  return {data, setData};
}
