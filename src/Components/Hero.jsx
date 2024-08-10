import { useGSAP } from "@gsap/react"
import React from "react"
import gsap from "gsap"

const Hero = () => {

  useGSAP(() => {

    const tl = gsap.timeline({duration: 1.5, delay: 0.6})

    tl.to(".heroSection", {opacity: 1})

    tl.to(".heroSection", {
      scrollTrigger: {
        trigger: ".heroSection",
        scrub: 2,
        start: "center 40%",
        end: "center top"
      },
      y: '-15rem',
      // opacity: 0,

    })
  })

  return (
    <div className='heroSection h-[100vh] flex items-center flex-col gap-3 justify-center text-center opacity-0'>
        <div className='mainTitle '>GYMCLASS VR</div>
        <div className='font-bold desc'>
            NBA SPORTS GAME
        </div>
    </div>
  )
}

export default Hero