import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BookComponent from './components/book.components'

const Book = () => {
  return (
    <div className=" w-screen h-max min-h  ">
      <Header />
      <BookComponent />
      {/* <div className=" text-black"> bpook</div> */}
      <Footer />
    </div>
  )
}

export default Book