import React from 'react'
import InnerMap from './inner.map'
import Image from 'next/image'
import Link from 'next/link'

const InnerHome = () => {
    return (
        <div className="w-screen bg-blue-100 py-4 flex flex-col items-center justify-center ">
            <div className="w-screen h-max gap-5 flex flex-col items-center justify-center ">
                {
                    InnerMap.map((i, index) => (
                        <div key={i.key} className="w-full h-[70vh]  overflow-hidden ">
                            <div className={`w-full h-[70vh] flex items-center justify-between gap-5 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Image Section */}
                                <Image 
                                    src={i.image} 
                                    width={500} 
                                    height={500} 
                                    className="w-[50%] h-auto object-cover" 
                                    alt="img" 
                                />
                                <div className={`w-[50%] h-max flex flex-col justify-center ${index % 2 === 0 ? 'items-start' : 'items-end'} `}>
                                    <p className={`w-10/12 text-blue-900 text-2xl ${index % 2 === 0 ? "text-left" : "text-right"} `}>
                                        {i.description.repeat(5)}
                                    </p>
                                    <Link 
                                        className="bg-blue-900 rounded text-white hover:bg-blue-800 transition duration-300 ease-linear w-52 h-12 flex items-center justify-center font-extrabold" 
                                        href={i.link}
                                    >
                                        {i.redirect}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

              <div className=" w-full h-[40vh] gap-10 flex flex-col items-center justify-center ">
                <h1 className=" text-2xl font-extrabold text-blue-900 uppercase underline decoration-double " >or Book Using</h1>
                <div className=" w-full h-max flex justify-evenly items-center ">
                <Link href={""} >
                    <Image className=" w-40 h-auto " src={"/images/book/booking.com.png"} width={100} height={100} alt="Booking.com" />
                  </Link>
                  <Link href={""} >
                    <Image className=" w-40 h-auto " src={"/images/book/tripadvisor.png"} width={100} height={100} alt="Tripadvisor" />
                  </Link>
                </div>
              </div>

            </div>
        </div>
    )
}

export default InnerHome
