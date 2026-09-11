import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Phone, Mail, Package, LogOut, Coffee } from 'lucide-react'
import { useApp } from '../context/AppContext'

const Profile = () => {
  const { user, logout, orders } = useApp()
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8"
    >
      {/* Profile Card */}
      <div className="bg-stone-950/80 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-lg">
            {user.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h1 className="text-2xl font-black text-white">{user.name}</h1>
            <p className="text-xs text-stone-400 flex items-center justify-center sm:justify-start gap-1">
              <Mail className="w-3.5 h-3.5" /> {user.email}
            </p>
            {user.phone && (
              <p className="text-xs text-stone-400 flex items-center justify-center sm:justify-start gap-1">
                <Phone className="w-3.5 h-3.5" /> {user.phone}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            logout()
            navigate('/')
          }}
          className="bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-900/50 px-5 py-2.5 rounded-2xl font-bold text-sm transition flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Chiqish
        </button>
      </div>

      {/* Orders History */}
      <div className="space-y-4">
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <Package className="text-amber-500" /> Buyurtmalar Tarixi
        </h2>

        {orders.length === 0 ? (
          <div className="bg-stone-950/50 border border-stone-800 rounded-3xl p-8 text-center space-y-3">
            <Coffee className="w-10 h-10 text-stone-600 mx-auto" />
            <p className="text-stone-400 text-sm">Sizda hali buyurtmalar mavjud emas.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-stone-950/80 border border-stone-800 rounded-3xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-800 pb-3 gap-2">
                  <div>
                    <span className="text-amber-500 font-black text-lg">{order.id}</span>
                    <span className="text-stone-500 text-xs ml-3">{order.date}</span>
                  </div>
                  <span className="bg-amber-600/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold">
                    {order.status}
                  </span>
                </div>

                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-xs text-stone-300">
                      <span>
                        {item.name} ({item.size}) x {item.quantity}
                      </span>
                      <span className="font-semibold text-stone-200">{(item.price * item.quantity).toLocaleString()} UZS</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-stone-800 pt-3 flex justify-between items-center text-sm">
                  <span className="text-stone-400">Jami summasi:</span>
                  <span className="font-black text-amber-500 text-base">{order.total.toLocaleString()} UZS</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Profile