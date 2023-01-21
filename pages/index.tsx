import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import Footer from "../components/Footer";

function index() {
  return (
    <div className="flex flex-col text-white h-screen justify-around font-inter">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default withUrqlClient(createUrqlClient, { ssr: true })(index);
