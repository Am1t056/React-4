import React, { useEffect } from 'react'
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import Jobs from './Components/Jobs'
import Browse from './Components/Browse'
import Testimonials from './Components/Testimonials'
import Client from './Components/Client'



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component loads
      }, []);
  return (
    <>
     <Hero/>
    <Categories/>
    <Jobs/>
    <Browse/>
    <Testimonials/>
    <Client/>
    </>
  )
}

export default Home;
