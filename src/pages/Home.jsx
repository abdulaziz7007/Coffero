import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Coffee, Award, Clock, Truck, ArrowRight, Star } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { useApp } from '../context/AppContext'

const Home = () => {
  const { addToCart } = useApp()
  const featured = PRODUCTS.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24 pb-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-stone-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transform hover:scale-100 transition duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10 py-16">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-amber-600/20 text-amber-400 border border-amber-500/30 px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            ☕ Toshkentdagi Premium Qahvaxona
          </motion.span>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none"
          >
            Har Bir Finjonda <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700">
              Mukammal Ta'm
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-300 font-normal leading-relaxed"
          >
            Dunyoning eng saralangan 100% Arabika donalari va mahoratli baristalarimiz ijodi. Endi sevimli qahvangizni uyda yoki ofisda bahramand bo'ling!
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-600/30 transition hover:scale-105 flex items-center justify-center gap-2"
            >
              Menyudan Buyurtma Qilish <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold px-8 py-4 rounded-full transition"
            >
              Biz Haqimizda
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Coffee, title: "100% Arabika", desc: "Sifatli va yangi qovurilgan donalar" },
            { icon: Award, title: "Professional Baristalar", desc: "Xalqaro darajadagi mutaxassislar" },
            { icon: Clock, title: "30 Dakikada Yetkazish", desc: "Issiq holatda uyingizgacha" },
            { icon: Truck, title: "Bepul Yetkazib Berish", desc: "100,000 so'mdan oshsa bepul" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-stone-950/60 p-6 rounded-3xl border border-stone-800/80 backdrop-blur-sm space-y-4 text-center sm:text-left"
            >
              <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center border border-amber-500/20">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-100">{item.title}</h3>
                <p className="text-sm text-stone-400 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">Ommabop Turlar</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Eng Ko'p Buyurtma Qilinganlar</h2>
          </div>
          <Link to="/menu" className="text-amber-500 hover:text-amber-400 font-bold flex items-center gap-1.5 transition">
            Barcha menyuni ko'rish <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6 }}
              className="bg-stone-950/80 rounded-3xl overflow-hidden border border-stone-800 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 flex items-center gap-1 border border-stone-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {product.rating}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-white">{product.name}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{product.desc}</p>
                </div>

                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-xl font-black text-amber-500">{product.price.toLocaleString()} so'm</span>
                  <button
                    onClick={() => addToCart(product, 'Ortacha', 'Ortacha')}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded-xl text-sm transition shadow-md shadow-amber-600/20"
                  >
                    + Savatga
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-900/40 via-stone-900 to-amber-950/40 border border-amber-500/30 p-8 sm:p-12 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-extrabold text-white">Birinchi buyurtmangizga 15% chegirma!</h2>
            <p className="text-stone-300">
              Saytimizda ro'yxatdan o'ting va sevimli qahvangizni chegirmali narxda qahvaxonamizdan olib keting yoki yetkazib beraylik.
            </p>
          </div>
          <Link
            to="/register"
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-8 py-4 rounded-full transition shadow-lg shrink-0"
          >
            Ro'yxatdan O'tish
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default Home