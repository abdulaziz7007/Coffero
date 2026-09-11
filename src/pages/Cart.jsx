import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useApp()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto my-20 px-4 text-center space-y-6"
      >
        <div className="w-24 h-24 bg-stone-800 text-amber-500 rounded-full flex items-center justify-center mx-auto border border-stone-700">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-black text-white">Savatingiz bo&apos;sh</h2>
        <p className="text-stone-400 text-sm">Hali hech qanday mahsulot tanlamadingiz. Bizning mazali menyumizdan buyurtma bering!</p>
        <Link
          to="/menu"
          className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-amber-600/20 transition"
        >
          Menyuga o&apos;tish
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8"
    >
      <div className="flex justify-between items-center border-b border-stone-800 pb-6">
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <ShoppingBag className="text-amber-500" /> Savat
        </h1>
        <button
          onClick={clearCart}
          className="text-stone-400 hover:text-red-400 text-sm font-semibold flex items-center gap-1 transition"
        >
          <Trash2 className="w-4 h-4" /> Savatni tozalash
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.cartItemId}
              className="bg-stone-950/80 border border-stone-800 rounded-2xl p-4 flex gap-4 items-center justify-between"
            >
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-xl shrink-0" />
              <div className="flex-grow space-y-1">
                <h3 className="font-bold text-white text-base">{item.name}</h3>
                <p className="text-xs text-stone-400">
                  Hajmi: <span className="text-stone-200 font-semibold">{item.size}</span> | Shakar:{' '}
                  <span className="text-stone-200 font-semibold">{item.sugar}</span>
                </p>
                <p className="text-amber-500 font-black text-sm">{(item.price * item.quantity).toLocaleString()} UZS</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-stone-900 border border-stone-800 rounded-xl p-1">
                  <button
                    onClick={() => updateQuantity(item.cartItemId, -1)}
                    className="p-1 hover:text-amber-500 text-stone-400"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 font-bold text-sm text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.cartItemId, 1)}
                    className="p-1 hover:text-amber-500 text-stone-400"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.cartItemId)}
                  className="p-2 text-stone-500 hover:text-red-400 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-stone-950/80 border border-stone-800 rounded-3xl p-6 h-fit space-y-6">
          <h2 className="text-xl font-bold text-white border-b border-stone-800 pb-4">Xarid Xulosasi</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-stone-400">
              <span>Mahsulotlar narxi:</span>
              <span className="text-stone-200 font-bold">{cartTotal.toLocaleString()} UZS</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Yetkazib berish:</span>
              <span className="text-stone-200 font-bold">
                {cartTotal > 100000 ? <span className="text-green-400">Bepul</span> : '15,000 UZS'}
              </span>
            </div>
            <div className="border-t border-stone-800 pt-3 flex justify-between text-base font-black text-white">
              <span>Jami:</span>
              <span className="text-amber-500">
                {(cartTotal + (cartTotal > 100000 ? 0 : 15000)).toLocaleString()} UZS
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-amber-600/30 transition flex items-center justify-center gap-2"
          >
            Buyurtmani Rasmiylashtirish <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Cart