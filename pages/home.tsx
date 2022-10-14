import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/index"

function home() {
  return (
    <div className="bg-primary h-screen text-white">
        <Navbar />
        <Hero />
    </div>
  );
}

export default home;
