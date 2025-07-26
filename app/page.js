import React from 'react'
import Hero from '@/components/hero'
import { CarouselDemo } from '@/components/carousel'
import { AnimatedTestimonialsDemo } from '@/components/testimonials'
const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero />

        {/* carousel */}
        <CarouselDemo />

        {/* Testimonials */}
        <AnimatedTestimonialsDemo/>
        {/* Buttons */}

      </div>
    </>
  )
}

export default LandingPage