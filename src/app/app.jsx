import React from 'react'
import { About, Faqs, Footer, Hero, HowWeWorks, Map, Navbar, Portfolio, Pricing, Team, FooterSection } from "./index"
const App = () => {
  return (
    <div className='mx-auto w-full'>
      <header className="bg-[#232338] h-[1104px] w-[375px] md:w-[1440px] lg:w-[100%] md:h-[880px] ">
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <Hero />

      </header>

      <main className="bg-[#fdf0e9] md:w-[1440px] md:h-[8100px] lg:w-[100%]">

        {/* about and works section */}
        <section className="bg-[#fdf0e9] md:w-[1440px] lg:w-[100%] md:top-[880px]  ">

          {/* about */}
          <About />

          {/* how we works */}
          <HowWeWorks />
        </section>

        {/* portfolio and teams sectiom */}
        <section className="absolute md:w-[1440px] lg:w-[100%] md:h-[2742px] md:top-[3316px]  bg-[#28293e]">

          {/* portfolio */}
          <Portfolio />

          {/* team */}
          <Team />

        </section>

        {/* pricing and section */}
        <section >
          <Pricing />
        </section>

        {/* faq and map section */}
        <section className='lg:w-[100%]'>

          {/* Faqs */}
          <Faqs />

          {/* map */}
          <Map />

        </section>

      </main>


      {/* footer */}
      <footer>
        <FooterSection />
      </footer>
    </div>
  )
}

export default App
