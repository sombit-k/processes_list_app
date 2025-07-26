"use server"
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
        <div className="px-4 md:px-8 lg:px-16 bg-gray-300 pt-20 mb-10">
        <h2 className="text-2xl font-bold mt-6">What Our Users Say</h2>
        <AnimatedTestimonialsDemo />
        </div>
        {/* Call to action */}



      </div>
    </>
  )
}

export default LandingPage