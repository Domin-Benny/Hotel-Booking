import React from 'react'
import InnerMap from './inner.map'
import Image from 'next/image'
import Link from 'next/link'

const InnerHome = () => {
    return (
        <div className="w-screen h-max bg-blue-100 ">
            <div className="w-screen h-max m-6">
                {
                    InnerMap.map((i, index) => (
                        <div key={i.key} className="w-screen h-[70vh] m-5 ">
                            <div className={`w-full h-[70vh] flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Image Section */}
                                <Image 
                                    src={i.image} 
                                    width={500} 
                                    height={500} 
                                    className="w-[40%] h-auto object-cover" 
                                    alt="img" 
                                />
                                {/* Description Section */}
                                <div className={`w-[55%] h-max flex flex-col justify-center ${index % 2 === 0 ? 'items-start' : 'items-end'} `}>
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
            </div>
        </div>
    )
}

export default InnerHome
