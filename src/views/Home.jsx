import React from 'react'
import { Testemonials } from '../containers/Testemonials'
import { Hero } from '../containers/Hero'
import { MenuList } from '../containers/MenuList'
import { Cta1 } from '../containers/Cta1'
import { Cta2 } from '../containers/Cta2'
import { Footer } from '../containers/Footer'

export function Home() {

  return (
    <div className="home">
      <Hero />
      <Testemonials />
      <MenuList />
      <Cta1 />
      <Cta2 />
      <Footer />
    </div>
  )
}
