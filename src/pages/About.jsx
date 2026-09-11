import React from 'react'
import { motion } from 'framer-motion'
import { Award, Heart, ShieldCheck, Users } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -15 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20"
    >
      {/* Header section */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-600/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-block">
          Bizning Tarix
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Coffero Falsafasi va Sifat
        </h1>
        <p className="text-stone-400 leading-relaxed text-base sm:text-lg">
          Biz shunchaki qahva sotmaymiz, biz har bir finjonda mehr, sifat va shinamlikni taqdim etamiz.
        </p>
      </motion.div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={itemVariants}
          className="relative group overflow-hidden rounded-3xl border border-stone-800 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80"
            alt="Coffee shop interior"
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Har bir dona qahvaga bo&apos;lgan e&apos;tibor</h2>
          <p className="text-stone-400 leading-relaxed">
            2018-yilda tashkil etilgan Coffero brendi kichik qahvaxonadan boshlanib, bugungi kunda shahar aholisining eng sevimli maskaniga aylandi.
          </p>
          <p className="text-stone-400 leading-relaxed">
            Bizning asosiy maqsadimiz — mijozlarimizga faqatgina yangi qovurilgan va to&apos;g&apos;ri damlangan premium qahvalarni ulashishdir.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-stone-950/80 p-5 rounded-2xl border border-stone-800 hover:border-amber-500/50 transition">
              <span className="block text-3xl font-black text-amber-500">8+</span>
              <span className="text-xs text-stone-400 mt-1 block">Yillik tajriba</span>
            </div>
            <div className="bg-stone-950/80 p-5 rounded-2xl border border-stone-800 hover:border-amber-500/50 transition">
              <span className="block text-3xl font-black text-amber-500">15k +</span>
              <span className="text-xs text-stone-400 mt-1 block">Mamnun mijozlar</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values/Features section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[
          { icon: Award, title: "Yuqori Sifat", desc: "Faqatgina eng sara plantatsiyalardan keltirilgan donalar." },
          { icon: Heart, title: "Mehr bilan Tayyorlanadi", desc: "Har bir ichimlik professional baristalarimiz tomonidan sevgi bilan yasaladi." },
          { icon: ShieldCheck, title: "Ishonch va Kafolat", desc: "Mijozlarimiz xavfsizligi va qoniqishi biz uchun doimo birinchi o'rinda." }
        ].map((val, idx) => (
          <div key={idx} className="bg-stone-950/60 p-6 rounded-3xl border border-stone-800/80 space-y-3 backdrop-blur-sm">
            <div className="w-12 h-12 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center border border-amber-500/20">
              <val.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">{val.title}</h3>
            <p className="text-sm text-stone-400 leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default About