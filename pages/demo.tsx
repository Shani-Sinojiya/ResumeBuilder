import axios from "axios";
import { useState, useEffect } from "react";

const demo = () => {
  const [iamge, setiamge] = useState("");
  useEffect(() => {
    async function data() {
      const res = await axios.get("/api/image");
      setiamge(res.data.url);
    }
    data()
  }, []);

  return (
    <div>
      <img src={iamge} />
    </div>
  );
};

export default demo;
