'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!isMounted) {
    return (
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
              {/* Brand Text */}
              <div className="hidden sm:block">
                <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                  CareSafe
                </Link>
              </div>
              {/* Mobile Brand Text */}
              <div className="sm:hidden">
                <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                  CareSafe
                </Link>
              </div>
            </div>

            {/* CTA Section with Doctor, Patient, and Get Started (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/doctor" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Doctor
              </Link>
              <Link href="/patient" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Patient
              </Link>
              <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button placeholder */}
            <div className="md:hidden">
              <div className="inline-flex items-center justify-center p-2 rounded-md w-10 h-10">
                <div className="w-6 h-6"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
            </div>
            {/* Brand Text */}
            <div className="hidden sm:block">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                CareSafe
              </Link>
            </div>
            {/* Mobile Brand Text */}
            <div className="sm:hidden">
              <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                CareSafe
              </Link>
            </div>
          </div>

          {/* CTA Section with Doctor, Patient, and Get Started (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/doctor" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Doctor
            </Link>
            <Link href="/patient" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Patient
            </Link>
            <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-md border-t border-white/10">
            {/* User Type Section */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide px-3 pb-2">User Type</p>
              <Link 
                href="/doctor" 
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctor
              </Link>
              <Link 
                href="/patient" 
                className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Patient
              </Link>
            </div>
            
            <div className="pt-3">
              <Link 
                href="/get-started" 
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar