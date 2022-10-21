import React from "react";
import AddTarheel from "../components/AddTarheel";
import Navbar from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

function add() {
  return (
    <div dir="rtl">
      <Navbar />
      <AddTarheel />
    </div>
  );
}

export default withUrqlClient(createUrqlClient)(add);
