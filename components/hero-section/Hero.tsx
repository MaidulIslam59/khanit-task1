"use client"
import { BsArrowUp } from 'react-icons/bs'
import { FaPause, FaPlay, FaStar, FaUserSecret } from 'react-icons/fa'
import { FiTarget, FiZap } from 'react-icons/fi'
import { LuQuote } from 'react-icons/lu'
import logo from '../../public/assets/walton-seeklogo 1.png'
import Image from 'next/image'
import { useState } from 'react'

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    const iframe = document.getElementById('video-iframe') as HTMLIFrameElement
    if (iframe) {
      if (isPlaying) {
        const src = iframe.src
        iframe.src = src
      } else {
        const src = iframe.src
        if (!src.includes('autoplay=1')) {
          iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1'
        }
      }
      setIsPlaying(!isPlaying)
    }
}
  return (
    <div className='bg-linear-to-r from-[#ecf9fd] to-[#fdf7f7]'>
     <section className="py-4">
      <div className="container mx-auto w-full px-8">
        <div className="grid grid-cols-1 md:gap-2 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
           <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl text-balance mb-6">
        Digital Marketing Agency in Bangladesh
      </h1>

      <p className="text-base text-slate-600 leading-relaxed max-w-md mb-6">
        Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150% 
        more leads and 2.5x higher conversions through integrated digital 
        marketing and web design.
      </p>

      <div className="pt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
          Book Your Free Consultation
        </button>
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-6">
         <div className='grid grid-cols-1 w-full md:w-1/2'>
            <div className="bg-linear-to-r from-[#ecf9fd] to-[#fdf7f7] rounded-3xl p-4 shadow-sm  h-64 justify-center">
             <div className="items-start gap-3 mb-3">
          <div className="text-5xl mb-4">🚀</div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-slate-900">200%</span>
            <BsArrowUp className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <p className="font-semibold text-slate-900 mb-1">More Conversions</p>
        <p className="text-sm text-slate-600">Than Industry Average</p>
      </div>

      <div className="justify-center rounded-4xl">
        <div className="relative w-full h-57 bg-linear-to-br from-cyan-500 via-blue-100 to-purple-500 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center group">
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent">
          <iframe 
            id="video-iframe"
            className="w-full h-full"
            src="https://www.youtube.com/embed/Td8Xwr2PioI" 
            title="Khan IT - Digital Marketing Agency in Bangladesh" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>

        <button 
          onClick={toggleVideo}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          {isPlaying ? (
            <FaPause className="w-8 h-8 text-white fill-white" />
          ) : (
            <FaPlay className="w-8 h-8 text-white fill-white ml-1" />
          )}
        </button>

        <div className="absolute bottom-4 left-4 text-white z-20">
          <p className="text-sm font-semibold">Watch Case Study</p>
          <p className="text-xs opacity-80">2:45 min</p>
        </div>
      </div>
     </div>
    </div>

    <div className="grid grid-cols-1 justify-center md:ml-4 gap-4 w-full md:w-1/2">
    <div>
    <div className="bg-blue-100 rounded-2xl p-6 mt-0 md:mt-8 shadow-sm">
        <div className="mb-6">
          <p className="text-sm font-bold text-slate-900">Our Track Record</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-[#f0f5fb] rounded-lg p-3">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <FaUserSecret className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900 whitespace-nowrap">500+ <span className="text-xs text-slate-600">Clients</span></p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#f0f5fb] rounded-lg p-3">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <FiTarget className="w-5 h-5 text-blue-600" />
            </div>
            <div>
             <p className="font-bold text-slate-900 whitespace-nowrap">98% <span className="text-xs text-slate-600">Success</span></p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#f0f5fb] rounded-lg p-3">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <FiZap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
            <p className="font-bold text-slate-900 whitespace-nowrap">24h <span className="text-xs text-slate-600">Support</span></p>
            </div>
          </div>
        </div>
      </div>
            </div>
            <div className="flex justify-end">
            <div className="bg-orange-50 rounded-2xl shadow-sm p-4 w-full">
        <div className="flex justify-between items-start mb-6">
          <div className="w-20 h-16 rounded flex items-center justify-center">
            <div className="text-slate-900 font-bold text-xs text-center">
            <Image src={logo} alt="Logo"  />  
            </div>
          </div>

          <LuQuote className='text-5xl text-orange-500 -scale-y-100'/>
        </div>

        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
          ))}
        </div>
        <p className="text-slate-900 font-medium text-sm leading-relaxed">
          "Their marketing strategies are simply outstanding"
        </p>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Hero