import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

function index() {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default withUrqlClient(createUrqlClient, { ssr: true })(index);
