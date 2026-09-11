import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Truck, Utensils, Gift } from 'lucide-react'

const Services = () => {
  const servicesList = [
    {
      icon: Coffee,
      title: "Barista Xizmati",
      desc: "Tadbirlaringiz va kofe-breyklar uchun professional baristalarimiz va ko'chma kofe bar xizmatlari."
    },
    {
      icon: Truck,
      title: "Tezkor Yetkazib Berish",
      desc: "Issiq qahva va yangi pishiriqlarni uyingizga yoki ofisingizga 15 daqiqa ichida yetkazib beramiz."
    },
    {
      icon: Utensils,
      title: "Kofe Breyk va Ketering",
      desc: "Biznes uchrashuvlar va korporativ tadbirlar uchun maxsus shirinlik va kofe menyulari."
    },
    {
      icon: Gift,
      title: "Korporativ Sovg'alar",
      desc: "Hamkorlaringiz uchun maxsus qahva to'plamlari, donali kofelar va brendli aksessuarlar."
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">Imkoniyatlar</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Bizning Xizmatlar</h1>
        <p className="text-stone-400">
          Biz mijozlarimizga faqatgina qahvaxonamizda emas, balki istalgan joyda yuqori sifatli xizmat ko&apos;rsatishga tayyormiz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((s, idx) => (
          <div key={idx} className="bg-stone-950/80 p-8 rounded-3xl border border-stone-800 flex gap-6 items-start">
            <div className="w-16 h-16 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20">
              <s.icon className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services