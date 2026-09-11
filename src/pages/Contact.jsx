import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12"
    >
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Biz bilan bog'laning</h1>
        <p className="text-stone-400">Savollaringiz bormi? Taklif yoki fikrlaringizni mamnuniyat bilan tinglaymiz.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 bg-stone-950/80 p-8 rounded-3xl border border-stone-800">
          <h2 className="text-2xl font-bold text-white">Aloqa Ma&apos;lumotlari</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Manzil</h3>
                <p className="text-sm text-stone-400">Tez kunda!</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Telefon</h3>
                <p className="text-sm text-stone-400">+998 93 213 55 44</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">E-mail</h3>
                <p className="text-sm text-stone-400">info@Coffero.uz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Ish vaqti</h3>
                <p className="text-sm text-stone-400">Har kuni: 08:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-stone-950/80 p-8 rounded-3xl border border-stone-800 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-2xl font-bold text-white">Xabar yuborish</h2>

          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">Ismingiz</label>
            <input type="text" placeholder="Ismingizni kiriting" className="w-full bg-stone-900 border border-stone-800 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition text-sm" />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">Telefon raqamingiz</label>
            <input type="tel" placeholder="+998 90 123 45 67" className="w-full bg-stone-900 border border-stone-800 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition text-sm" />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase mb-2">Xabaringiz</label>
            <textarea rows="4" placeholder="Xabaringizni yozing..." className="w-full bg-stone-900 border border-stone-800 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition text-sm"></textarea>
          </div>

          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-amber-600/20 transition">
            Yuborish
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact