import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Plus, Check } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { useApp } from '../context/AppContext'

const Menu = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [size, setSize] = useState('Ortacha')
  const [sugar, setSugar] = useState('Ortacha')
  const [addedId, setAddedId] = useState(null)

  const { addToCart } = useApp()

  const categories = [
    { id: 'all', name: 'Barchasi' },
    { id: 'hot', name: 'Issiq Qahvalar' },
    { id: 'cold', name: 'Muzli Qahvalar' },
    { id: 'dessert', name: 'Shirinliklar' },
  ]

  const filteredItems = activeTab === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeTab)

  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setSize('Ortacha')
    setSugar('Ortacha')
  }

  const handleQuickAdd = (product) => {
    addToCart(product)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const handleCustomAdd = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, size, sugar)
      setSelectedProduct(null)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8 sm:space-y-12"
    >
      {/* Sarlavha qismi */}
      <div className="text-center max-w-2xl mx-auto space-y-3 px-2">
        <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">Bizning Menyu</span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">Xushbo&apos;y va Mazali Turlar</h1>
        <p className="text-xs sm:text-sm text-stone-400">Har bir mahsulot unikal retsept va yuqori sifatli ingrediyentlar bilan tayyorlanadi.</p>
      </div>

      {/* Kategoriyalar (Mobil uchun gorizontal skroll va tozalangan padding) */}
      <div className="flex justify-start sm:justify-center gap-2 border-b border-stone-800 pb-3 overflow-x-auto no-scrollbar px-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 ${
              activeTab === cat.id
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                : 'bg-stone-800/60 text-stone-400 hover:bg-stone-800 hover:text-stone-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Mahsulotlar Grid qismi (Mobil uchun 2 ustunli yoki 1 ustunli qilib moslandi) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {filteredItems.map((product) => (
          <motion.div
            layout
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-stone-950/80 border border-stone-800 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between hover:border-stone-700 transition"
          >
            <div>
              <div className="relative h-36 sm:h-48 overflow-hidden cursor-pointer" onClick={() => handleOpenModal(product)}>
                <img src={product.img} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-stone-900/80 backdrop-blur-md px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-amber-400 flex items-center gap-1 border border-stone-700">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400" /> {product.rating}
                </div>
              </div>
              <div className="p-3 sm:p-5 space-y-1 sm:space-y-2">
                <h3 className="font-bold text-sm sm:text-lg text-white hover:text-amber-400 cursor-pointer line-clamp-1" onClick={() => handleOpenModal(product)}>
                  {product.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-400 line-clamp-2">{product.desc}</p>
              </div>
            </div>

            <div className="p-3 sm:p-5 pt-0 flex flex-col sm:flex-row sm:items-center justify-between border-t border-stone-900 mt-2 sm:mt-4 gap-2">
              <span className="font-black text-amber-500 text-xs sm:text-base">{product.price.toLocaleString()} UZS</span>
              <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleOpenModal(product)}
                  className="flex-1 sm:flex-initial px-2.5 sm:px-3 py-1.5 bg-stone-900 text-stone-300 hover:text-white rounded-xl text-[11px] sm:text-xs font-semibold border border-stone-800 transition text-center"
                >
                  Sozlash
                </button>
                <button
                  onClick={() => handleQuickAdd(product)}
                  className={`p-1.5 sm:p-2 rounded-xl text-white font-bold transition flex items-center justify-center shrink-0 ${
                    addedId === product.id ? 'bg-green-600' : 'bg-amber-600 hover:bg-amber-500'
                  }`}
                >
                  {addedId === product.id ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Oyna (Mobil ekranlar uchun markazlash va o'lchamlar optimizatsiyasi) */}
      <AnimatePresence>
        {selectedProduct && (
          <div 
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-900 border-t sm:border border-stone-800 w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden p-5 sm:p-6 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{selectedProduct.name}</h3>
                  <p className="text-amber-500 font-extrabold text-sm sm:text-base mt-1">{selectedProduct.price.toLocaleString()} UZS</p>
                </div>
              </div>

              {selectedProduct.category !== 'dessert' && (
                <>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Hajmi</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Kichik', 'Ortacha', 'Katta'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setSize(s)}
                          className={`py-2 rounded-xl text-xs font-bold border transition ${
                            size === s ? 'bg-amber-600 text-white border-amber-500' : 'bg-stone-800 text-stone-300 border-stone-700'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Shakar darajasi</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Shakarsiz', 'Ortacha', 'Shirin'].map((sg) => (
                        <button
                          key={sg}
                          onClick={() => setSugar(sg)}
                          className={`py-2 rounded-xl text-xs font-bold border transition ${
                            sugar === sg ? 'bg-amber-600 text-white border-amber-500' : 'bg-stone-800 text-stone-300 border-stone-700'
                          }`}
                        >
                          {sg}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs sm:text-sm transition"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={handleCustomAdd}
                  className="flex-1 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-600/30 transition"
                >
                  Savatga qo&apos;shish
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Menu