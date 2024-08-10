import { useGSAP } from "@gsap/react"
import React from "react"
import gsap from "gsap"

const Features = () => {

  useGSAP(() => {
    gsap.fromTo(".featuresSection", {
        opacity: 0
    },
    {
        scrollTrigger: {
            trigger: ".featuresSection",
            start: "top center",
            end: "top top",
            scrub: true
        },
        opacity: 1,
    }

)
  })


    return (
        <div className='featuresSection h-[100vh]  px-2 flex items-center justify-center gap-20'>
            <div className='w-[30rem] lg:text-right text_black'>
                <div>EXPLORE KEY FEATURES</div>
                <div className='header pb-10'>FEATURES</div>
                <div>
                    <div className='font-bold'>GAMING MODES</div>
                    Details on different modes available (e.g., multiplayer, solo practice, tournaments).
                    <br />
                    <br />
                    <br />
                    <div className='font-bold'>CUSTOMIZATION</div>
                    Information on player avatars, gear, and court customization.
                    <br />
                    <br />
                    <br />
                    <div className='font-bold'>REALISM & IMMERSION</div>
                    Explain how the game replicates real-life basketball through VR.  </div>
            </div>
            <div className='w-[30rem]'></div>

        </div>
    )
}

export default Features