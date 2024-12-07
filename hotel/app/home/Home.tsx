import React from 'react'
import BGCarousel from './components/bg.carousel'
import Header from '../components/header/header'
import Link from 'next/link'
import { FaArrowAltCircleDown } from 'react-icons/fa'

const _Home = () => {
  return (
    <div className=" w-screen h-screen flex flex-col  " >
      <div className="  ">
        <div className="  absolute -z-10 bg-[#00000066]  w-screen h-screen overflow-hidden " ></div>

        <div className=" absolute -z-20 w-screen h-screen overflow-hidden ">
          <BGCarousel />
        </div>
      </div>


      <Header />

      <div className=" h-screen w-screen flex justify-center items-center ">
        <div className="  w-[60%] h-[60%] flex justify-center flex-col items-end ">
          <div className="  w-full h-full flex justify-center items-center ">
            <div className=" w-40 h-[2px] bg-slate-400 "></div>
            <h1 className=" text-white text-2xl text-center ">Welcome to Evita Hotel <br /> Where our luxury meets your standard </h1>
            <div className=" w-40 h-[2px] bg-slate-400 "></div>
          </div>

          <div className=" w-full h-full flex justify-center items-center ">
            <Link href="/" className=" text-white flex justify-center p-5 items-center border-2 border-white rounded-full hover:bg-[#fff6] hover:text-white transition duration-300 ease-in-out ">
              <h1 className=" text-[1.2rem]  font-black bg-transparent uppercase ">
                <FaArrowAltCircleDown />
              </h1>
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default _Home