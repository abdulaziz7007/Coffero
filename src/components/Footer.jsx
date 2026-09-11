import React from 'react'
import { Link } from 'react-router-dom'
import { Coffee, Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 text-2xl font-black text-amber-500">
              <Coffee className="w-8 h-8" />
              <span>Coffero</span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Eng sifatli qahva donalaridan tayyorlangan xushbo&apos;y va betakror qahva turlari. Har kuni siz uchun yangi va issiq!
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://instagram.com/abo.coder" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/abo_coder" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
                <TelegramIcon />
              </a>
              <a href="https://facebook.com/" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition">Bosh sahifa</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition">Biz haqimizda</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition">Xizmatlar</Link></li>
              <li><Link to="/menu" className="hover:text-amber-400 transition">Bizning menyu</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition">Aloqa va manzillar</Link></li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4">Ish vaqti</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex justify-between">
                <span>Dushanba - Juma:</span>
                <span className="text-stone-200 font-medium">08:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Shanba - Yakshanba:</span>
                <span className="text-stone-200 font-medium">09:00 - 00:00</span>
              </li>
              <li className="text-xs text-amber-600 pt-2">
                * Yetkazib berish xizmati 22:00 gacha ishlaydi.
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4">Bog&apos;lanish</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Tez kunda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="tel:+998932135544" className="hover:text-amber-400 transition">+998 93 213 55 44</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>info@coffero.uz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Coffero Premium. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}

const TelegramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
)

export default Footer