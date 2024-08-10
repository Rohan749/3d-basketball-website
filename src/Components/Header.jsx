import { useGSAP } from '@gsap/react'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import gsap from "gsap"

const Header = () => {

  const [isOpen, setOpen] = useState(false)

  useGSAP(() => {
     gsap.to(".heading", {top: 0, ease: "back.inOut"})
  })

  return (
    <div>
          <div className='heading fixed py-5 px-2 sm:px-14 w-[100%] top-[-3rem] flex items-center justify-between '>
            <div className='text-[#090f19] font-bold '>
                GYMCLASS VR
            </div>
            <div className='items-center gap-10 lg:flex hidden'>
                <div>__________</div>
                <div>HOME</div>
                <div>ABOUT</div>
                <div>FEATURES</div>
                <div>DOWNLOAD</div>
            </div>
            <div className='lg:hidden flex'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
    </div>
  )
}

export default Header