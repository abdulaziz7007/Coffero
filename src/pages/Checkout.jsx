import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, Phone, User, CreditCard } from 'lucide-react'
import { useApp } from '../context/AppContext'

const Checkout = () => {
  const { cartTotal, createOrder, user } = useApp()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    phone: user ? user.phone || '' : '',
    address: '',
    paymentMethod: 'naqd',
    comment: '',
  })

  const [orderDone, setOrderDone] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const order = createOrder(formData)
    setOrderDone(order)
  }

  if (orderDone) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto my-16 px-4 text-center space-y-6 bg-stone-950 border border-stone-800 p-8 rounded-3xl shadow-2xl"
      >
        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-black text-white">Buyurtmangiz Qabul Qilindi!</h2>
        <p className="text-stone-300 text-sm leading-relaxed">
          Raqami: <span className="text-amber-500 font-bold">{orderDone.id}</span>. Operatorimiz tez orada bog&apos;lanadi. Qahvangiz damlanishni boshladi!
        </p>
        <div className="pt-4 flex gap-4">
          <button
            onClick={() => navigate('/profile')}
            className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-200 py-3 rounded-2xl font-bold transition text-sm"
          >
            Buyurtmalarim
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-2xl font-bold transition text-sm"
          >
            Bosh sahifa
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-white">Buyurtmani Rasmiylashtirish</h1>
        <p className="text-stone-400 text-sm">Yetkazib berish ma&apos;lumotlarini kiriting.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-stone-950/80 border border-stone-800 p-8 rounded-3xl space-y-6 shadow-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">Ismingiz</label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 w-5 h-5 text-stone-500" />
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alisher Navoiy"
                className="w-full bg-stone-900 border border-stone-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">Telefon raqamingiz</label>
            <div className="relative">
              <Phone className="absolute left-4 top-3.5 w-5 h-5 text-stone-500" />
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+998 90 123 45 67"
                className="w-full bg-stone-900 border border-stone-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">Yetkazib berish manzili</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-stone-500" />
              <input
                required
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Toshkent sh., Yunusobod t., 4-mavze 12-uy"
                className="w-full bg-stone-900 border border-stone-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">To&apos;lov turi</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'naqd' })}
                className={`p-4 rounded-2xl border flex items-center justify-center gap-2 font-bold text-sm transition ${
                  formData.paymentMethod === 'naqd'
                    ? 'bg-amber-600/20 border-amber-500 text-amber-400'
                    : 'bg-stone-900 border-stone-800 text-stone-400'
                }`}
              >
                💵 Naqd pul
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'karta' })}
                className={`p-4 rounded-2xl border flex items-center justify-center gap-2 font-bold text-sm transition ${
                  formData.paymentMethod === 'karta'
                    ? 'bg-amber-600/20 border-amber-500 text-amber-400'
                    : 'bg-stone-900 border-stone-800 text-stone-400'
                }`}
              >
                <CreditCard className="w-4 h-4" /> Karta orqali (Click/Payme)
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-500 text-white font-black py-4 rounded-2xl shadow-lg shadow-amber-600/30 transition text-base"
        >
          Buyurtmani Tasdiqlash ({(cartTotal + (cartTotal > 100000 ? 0 : 15000)).toLocaleString()} UZS)
        </button>
      </form>
    </motion.div>
  )
}

export default Checkout