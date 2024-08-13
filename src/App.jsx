import React from 'react'
import Header from './Components/Header'
import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './Components/Hero'
import Benefits from './Components/Benefits'
import Footer from './Components/Footer'
import Gall from './Components/Gall'
import ContactUs from './Components/Contact'
import Testimonial from './Components/Testimonial'
import Newsletter from './Components/Newsletter'
import Eventsection from './Components/Eventsection'

const App = () => {
  return (
    <>
    <div>
        <Header />
        <ButtonGradient/>
        <Hero />
        <Benefits/>
        {/* <Gall/>
        <Testimonial/>
        <Eventsection/>
        <ContactUs/>
        <Newsletter/> */}
        <ContactUs/>
        <Footer/>
    </div>
    </>
  )
}

export default App