import React from 'react'


const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="w-screen h-[50vh] flex flex-col justify-center items-center bg-blue-950 ">
        <div className="w-10/12  border-t border-gray-400 border-d "></div>
        <footer className="w-10/12 h-[70px] flex justify-between items-center" >
            <p className="text-gray-400 text-sm">Copyright &copy; {year} </p>
            <i className=" not-italic " >
              <p className="text-gray-400  text-[40px] font-04 ">Evita </p>
              <p className="text-gray-400 text-[13px] -mt-5 ml-6 ">Hotel </p>
            </i>
        </footer>
    </div>
  )
}

export default Footer