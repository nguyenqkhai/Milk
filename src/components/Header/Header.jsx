import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { headerClass } from './data'
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = path => {
    return location.pathname === path
  }

  return (
    <header
      className={`${headerClass.header} ${isScrolled ? 'py-3 shadow-lg' : 'py-5 shadow-sm'} transition-all duration-300`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <div className='relative'>
            <span className='absolute -top-2 -left-1 text-4xl'>🥛</span>
            <h1 className='ml-9 text-2xl font-extrabold tracking-wide text-blue-700 sm:text-3xl'>
              Milk<span className='text-blue-500'>Store</span>
            </h1>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className='z-50 text-gray-700 focus:outline-none lg:hidden'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FiX className='h-6 w-6' />
          ) : (
            <FiMenu className='h-6 w-6' />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden items-center space-x-8 lg:flex'>
          <Link
            to='/'
            className={`${headerClass.nav} ${isActive('/') ? 'font-semibold text-blue-600' : ''}`}
          >
            Trang chủ
          </Link>
          <Link
            to='/product'
            className={`${headerClass.nav} ${isActive('/product') ? 'font-semibold text-blue-600' : ''}`}
          >
            Sản phẩm
          </Link>
          <Link
            to='/about'
            className={`${headerClass.nav} ${isActive('/about') ? 'font-semibold text-blue-600' : ''}`}
          >
            Về chúng tôi
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className='hidden items-center space-x-4 lg:flex'>
          <button className='flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all hover:bg-gray-100'>
            <FiSearch className='h-5 w-5' />
          </button>
          <button className='relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all hover:bg-gray-100'>
            <FiUser className='h-5 w-5' />
          </button>
          <button className={`${headerClass.button} flex items-center gap-2`}>
            <FiShoppingCart className='h-5 w-5' />
            <span className='hidden sm:inline'>Giỏ hàng</span>
            <span className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-blue-700'>
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 transform bg-white lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
          <div className='flex h-full flex-col px-6 pt-20'>
            <nav className='flex flex-col space-y-6 text-center'>
              <Link
                to='/'
                className={`py-2 text-xl font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-800'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                to='/product'
                className={`py-2 text-xl font-medium ${isActive('/product') ? 'text-blue-600' : 'text-gray-800'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link
                to='/about'
                className={`py-2 text-xl font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-800'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Về chúng tôi
              </Link>
            </nav>

            <div className='mt-auto mb-10 flex justify-center space-x-4'>
              <button className='flex h-12 w-12 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100'>
                <FiSearch className='h-6 w-6' />
              </button>
              <button className='flex h-12 w-12 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100'>
                <FiUser className='h-6 w-6' />
              </button>
              <button className='relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white'>
                <FiShoppingCart className='h-6 w-6' />
                <span className='absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-blue-700'>
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
