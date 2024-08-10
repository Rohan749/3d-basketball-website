"use client"

import About from "../Components/About";
import BallModel from "../Components/BallModel";
import CommonBg from "../Components/CommonBg";
import Credits from "../Components/Credits";
import Download from "../Components/Download";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Image from "next/image";
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from "../Components/Header";
import { useGSAP } from "@gsap/react";

export default function Home() {


  gsap.registerPlugin(ScrollTrigger, useGSAP)

  return (
    <>

      <div className="relative z-10 ">
        <CommonBg />
      </div>
      <div className="relative z-20 ">
        <Header />
      </div>
      <div className="relative z-10">
        <BallModel />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
      <div className="relative z-10">
        <About />
      </div>
      <div className="relative z-10">
        <Features />
      </div>
      <div className="relative z-10">
        <Download />
      </div>
      <div className="relative z-10">
        <Credits />
      </div>
    </>
  );
}
