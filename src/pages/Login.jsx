import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Coffee } from 'lucide-react'
import { useApp } from '../context/AppContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useApp()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulated auth
    login({
      name: email.split('@')[0] || 'Mijoz',
      email: email,
      phone: '+998 90 999 88 77',
    })
    navigate('/profile')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-md mx-auto px-4 py-16"
    >
      <div className="bg-stone-950/90 border border-stone-800 p-8 rounded-3xl shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/20">
            <Coffee className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-white">Xush kelibsiz!</h1>
          <p className="text-xs text-stone-400">Coffero akkauntingizga kiring</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-stone-500" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full bg-stone-900 border border-stone-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">Parol</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 w-5 h-5 text-stone-500" />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-stone-900 border border-stone-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-amber-600/20 transition text-sm mt-2"
          >
            Kirish
          </button>
        </form>

        <div className="text-center text-xs text-stone-400">
          Akkauntingiz yo'qmi?{' '}
          <Link to="/register" className="text-amber-500 font-bold hover:underline">
            Ro'yxatdan o'ting
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Login