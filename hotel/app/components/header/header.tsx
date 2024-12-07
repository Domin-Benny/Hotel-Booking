import React from 'react'
import HeaderMap from './components/header.map'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=" w-screen h-[100px] flex justify-center items-center " >
      <div className=" relative flex justify-center items-center h-[100px] w-11/12 ">

        <div className="  absolute left-[1rem] w-max p-5 pb-3 rounded-b-2xl bg-white ">
          <Link href="/">
            <h1 className=" text-[4rem] text-black   font-04 ">Evita</h1>
            <h1 className=" text-[1.2rem] mt-[-2rem] text-black ml-[2.5rem]  ">Hotel</h1>
          </Link>
        </div>

        <div className="  absolute right-[1rem] h-[100px] top-0 w-max  p-5 flex items-end justify-center rounded-b-2xl bg-white ">
          <Link href="/booking" className=" text-black px-3 py-2 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out rounded-sm  ">
            <h1 className=" text-[1.2rem]  font-black bg-transparent uppercase ">Book</h1>
          </Link>
        </div>

        <nav className=" w-max flex h-[100px] justify-center items-center ">
          <div className=" w-full h-full flex justify-end items-center  ">
            {
              HeaderMap.map(
                (h) => (
                  <Link
                    key={h.key}
                    href={h.link}
                    className="mx-3 text-lg w-[8rem] h-12 border-2 border-white rounded-md flex justify-center items-center hover:bg-[#00000066] transition duration-300 ease-in-out"
                  >
                    {h.title}
                  </Link>

                )
              )
            }
          </div>
        </nav>

        <div className="  "></div>

      </div>
    </header>
  )
}

export default Header