import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap"

const About = () => {

    useGSAP(() => {
        gsap.fromTo(".box", {
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: ".box",
                start: "top 80%",
                end: "top 20%", 
                scrub: true,
                stagger: 1,
            },
            opacity: 1,
            duration: 2,
            ease: "power1.inOut",
            
        })
    })

    return (
        <div className=' h-[100vh] px-2 flex items-center justify-center gap-20'>
            <div className='lg:w-[30rem] w-[100%] text-left lg:text-right lg:text_black'>
                <div className='box'>DISCOVER OUR JOURNEY</div>
                <div className='box header pb-10'>ABOUT US</div>
                <div className='box'>
                    Since our October 2022 launch, we've become the #1 sports game on the Meta Quest Store, uniting players worldwide.
                    <br />
                    <br />
                    <br />
                    Backed by over $8M from top investors, including the NBA, we're more than a game—we're a global community.
                    <br />
                    <br />
                    <br />
                    Join us and experience the future of basketball.
                </div>
            </div>
            <div className='lg:w-[30rem] w-0'></div>

        </div>
    )
}

export default About