import React, { useState } from 'react'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import { Outlet } from 'react-router-dom'


const Root = () => {

  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Root
