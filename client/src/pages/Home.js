import React, { useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
function Home() {
  const getdata = async () => {
    try {
      const response = await axios.post("/api/user/getuserinfo",{},
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      getdata();
    })();
  }, []);
  return <Layout><h1>Homepage</h1></Layout>
}
export default Home;
