import React from "react";
import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";
import PostInfo from "../components/PostInfo";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

function Post() {
  return (
    <div dir="rtl">
      <Navbar />
      <PostInfo />
    </div>
  );
}

export default withUrqlClient(createUrqlClient)(Post);
