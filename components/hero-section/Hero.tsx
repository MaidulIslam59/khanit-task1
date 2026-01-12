import React from 'react'

const Hero = () => {
  return (
     <section className="px-4 py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          {/* Left Column - Headline and CTA */}
          <div className="flex flex-col justify-center">
            hero
          </div>

          {/* Right Column - Stats, Track Record, Video, and Review */}
          <div className="space-y-6">
            {/* Top: Stats Card */}
            <div className="flex justify-center md:justify-end">
              hero
            </div>

            {/* Middle: Track Record Card and Video */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex justify-center md:justify-end">
                hero
              </div>
              <div className="flex justify-center md:justify-start">
                Hero
              </div>
            </div>

            {/* Bottom: Review Card */}
            <div className="flex justify-center md:justify-end">
              Hero
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero