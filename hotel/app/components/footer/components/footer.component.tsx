import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const FooterComponents = () => {
  return (
    <div className=" w-[96vw] flex justify-between items-center mb-5 ">

      <div className=" w-1/4 flex flex-col justify-center items-center gap-3 list-none ">
        <li className=" text-2xl font-extrabold " >Services</li>
        <li>Events</li>
        <li>Conference</li>
        <li>Lodge</li>
        <li>Restaurant</li>
      </div>
      <div className=" w-1/4 flex flex-col justify-center items-center gap-3 list-none ">
        <li className=" text-2xl font-extrabold " >Header</li>
        <li>Text 1</li>
        <li> Text 2</li>
        <li>Text 3</li>
        <li>Text 4</li>
      </div>
      <div className=" w-1/4 flex flex-col justify-center items-center gap-3 list-none ">
        <li className=" text-2xl font-extrabold " >Header</li>
        <li>Text 1</li>
        <li> Text 2</li>
        <li>Text 3</li>
        <li>Text 4</li>
      </div>
      <div className=" w-1/4 flex flex-col justify-center items-center gap-3 list-none ">
        <li className=" text-2xl font-extrabold " >Header</li>
        <Link href={"/"}>
          <FaFacebook />
        </Link>
        <Link href={"/"}>
          <FaXTwitter />
        </Link>
        <Link href={"/"}>
          <FaInstagram />
        </Link>
        <Link href={"/"}>
          <FaEnvelope />
        </Link>
      </div>

    </div>
  )
}

export default FooterComponents