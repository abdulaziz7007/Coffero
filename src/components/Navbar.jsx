import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Coffee, Menu as MenuIcon, X, ShoppingBag, User, LogOut } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const { user, cartCount, logout } = useApp()
  const navigate = useNavigate()

  const navItems = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Xizmatlar', path: '/services' },
    { name: 'Menyu', path: '/menu' },
    { name: 'Aloqa', path: '/contact' },
  ]

  return (
    <nav className="bg-stone-950/90 backdrop-blur-md text-amber-50 sticky top-0 z-50 border-b border-stone-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-2xl font-black tracking-wider text-amber-500 hover:text-amber-400 transition">
            <div className="p-2 bg-amber-600/20 rounded-xl border border-amber-500/30">
              <Coffee className="w-7 h-7 text-amber-500" />
            </div>
            <span>Coffero</span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-amber-500 font-bold border-b-2 border-amber-500 pb-1 transition-all'
                    : 'text-stone-300 hover:text-amber-400 font-medium transition-all'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* User & Cart Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/cart"
              className="relative p-2.5 bg-stone-900 hover:bg-stone-800 text-amber-400 rounded-full border border-stone-800 transition"
              aria-label="Savat"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-amber-600 text-white font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-stone-950"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 px-3.5 py-2 rounded-full transition text-sm font-medium"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <span className="text-stone-200">{user.name.split(' ')[0]}</span>
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-48 bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden"
                    >
                      <Link
                        to="/profile"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-stone-300 hover:bg-stone-800 hover:text-amber-400 transition"
                      >
                        <User className="w-4 h-4" /> Profilim & Buyurtmalar
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          setShowProfileMenu(false)
                          navigate('/')
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition text-left"
                      >
                        <LogOut className="w-4 h-4" /> Chiqish
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition shadow-lg shadow-amber-600/20"
              >
                Kirish
              </Link>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-3">
            <Link to="/cart" className="relative p-2 text-amber-500">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-amber-500 p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-stone-950 px-4 pt-3 pb-6 space-y-3 border-t border-stone-800 overflow-hidden"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-base font-medium ${
                    isActive
                      ? 'bg-amber-600/20 text-amber-500 font-bold border-l-4 border-amber-500'
                      : 'text-stone-300 hover:bg-stone-900 hover:text-amber-400'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-stone-800 flex flex-col gap-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-stone-900 text-amber-400 py-2.5 rounded-xl font-medium border border-stone-800"
                  >
                    Profil ({user.name})
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                      navigate('/')
                    }}
                    className="block w-full text-center bg-red-950/40 text-red-400 border border-red-900/50 py-2.5 rounded-xl font-medium"
                  >
                    Chiqish
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-amber-600 hover:bg-amber-500 text-white py-2.5 rounded-xl font-semibold shadow-md"
                >
                  Tizimga kirish
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar