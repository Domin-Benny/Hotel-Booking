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
        <li className=" text-2xl font-extrabold " >Partners</li>
        <li>Tripadvisor</li>
        <li>Booking.com</li>
        <li>Airbnb</li>
        <li>Agoda.com</li>
      </div>
      <div className=" w-1/4 flex flex-col justify-center items-center gap-3 list-none ">
        <li className=" text-2xl font-extrabold text-blue-950 select-none " >.</li>
        <li>About Us</li>
        <Link href={'/contact-us'}>Contact Us</Link>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </div>
      <div className=" w-1/4 flex flex-col justify-center items-center gap-3 list-none ">
        <li className=" text-2xl font-extrabold " >Follow Us</li>
        <Link href={"/"}>
          <FaFacebook />
        </Link>
        <Link href={"/"}>
          <FaXTwitter />
        </Link>
        <Link href={"/"}>
          <FaInstagram />
        </Link>
        <Link href={"/contact-us"}>
          <FaEnvelope />
        </Link>
      </div>

    </div>
  )
}

export default FooterComponents