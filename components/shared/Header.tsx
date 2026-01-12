"use client"

import Link from "next/link"
import { useState } from "react"
import { HiOutlineBars3BottomRight } from "react-icons/hi2"
import { HiPhone } from "react-icons/hi"
import logo from "../../public/assets/Khan-IT-BD-Logo.png"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "SEO Case study" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-linear-to-r from-[#ecf9fd] to-[#fdf7f7] z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
           
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={logo} alt="Logo"  />
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm lg:text-base text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href="tel:+8801404282727"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                <HiPhone className="h-5 w-5" aria-hidden="true" />
                <span>+8801404282727</span>
              </a>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <a
                href="tel:+8801404282727"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <HiPhone className="h-5 w-5" aria-hidden="true" />
              </a>
              <button
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <HiOutlineBars3BottomRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMenu} />}

      <div
        className={`fixed top-16 sm:top-20 right-0 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full max-w-xs bg-white shadow-lg transform transition-all duration-300 ease-in-out z-40 md:hidden overflow-y-auto ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="h-16 sm:h-20" />
    </>
  )
}

export default Header
