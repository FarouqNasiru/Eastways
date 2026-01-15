import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // IMPORT ROUTER
import { Play, Facebook, Instagram, Youtube, Phone, Send, ChevronDown, ChevronLeft, ChevronRight, MapPin, Mail, Plus, Minus, Star, Wifi, Coffee, Car, Quote, ArrowRight, MessageSquare, CheckCircle, Map, CreditCard, Shield, ShieldCheck, Headset, Menu, X, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import WhatsAppButton from './components/WhatsAppButton';
import Eastways from './assets/images/Eastways.png';
import Logo from './assets/images/eastwyas logo 1.png';
import masjid from './assets/images/mosque-building-with-intricate-architecture 1.png';
import passportImg from './assets/images/passport 1.png';
import mobileAppImg from './assets/images/Rectangle.png';
import g1 from './assets/images/g1.jpg';
import g2 from './assets/images/g2.jpg';
import g3 from './assets/images/g3.jpg';
import g4 from './assets/images/g4.jpg';
import g5 from './assets/images/makkah2.jpg';
import g6 from './assets/images/g6.jpg';
import g7 from './assets/images/g7.jpg';
import g8 from './assets/images/g8.jpg';
import g9 from './assets/images/g9.jpg';
import g10 from './assets/images/g10.jpg';
import g11 from './assets/images/g11.jpg';
import g12 from './assets/images/g12.jpg';
import g13 from './assets/images/g13.jpg';
import g14 from './assets/images/g14.jpg';
import g16 from './assets/images/g16.jpg';
import g17 from './assets/images/g17.jpg';
import g18 from './assets/images/g18.jpg';
import LogoIcon from './assets/images/Bigger blue.png';
import LogoText from './assets/images/EastWays Logo no bg name.png';
import videoFile from './assets/videos/east-vid.mp4';
import WorkImg1 from './assets/images/Rectangle 4.png';
import WorkImg2 from './assets/images/Rectangle 5.png';
import card1 from './assets/images/people.avif';
import card2 from './assets/images/beautifully-lit-mosque-night-exterior-shot.jpg';
import hotel1 from './assets/images/elaf al taqwa.jpg';
import hotel2 from './assets/images/al shohada.jpg';
import hotel3 from './assets/images/dallah taibah.jpg';
import hotel4 from './assets/images/dar al taqwa.jpg';
import hotel5 from './assets/images/doubletree2.avif';
import hotel6 from './assets/images/elaf taiba1.jpg';
import hotel7 from './assets/images/elaf-taiba-2.jpg';
import hotel8 from './assets/images/emaar al manar1.jpg';
import hotel9 from './assets/images/emaar al manar2.jpg';
import hotel10 from './assets/images/emaar al manar3.jpg';
import hotel11 from './assets/images/emaar al manar4.jpg';
import hotel12 from './assets/images/emaar andalusia.png';
import hotel13 from './assets/images/emaar andalusia2.jpg';
import hotel14 from './assets/images/emaar elite.jpeg';
import hotel15 from './assets/images/Emaar grand1.jpg';
import hotel16 from './assets/images/emaar mektan.jpg';
import hotel17 from './assets/images/emaar royal.jpg';
import hotel18 from './assets/images/emaar royal2.jpg';
import hotel19 from './assets/images/emaar taiba.jpeg';
import hotel20 from './assets/images/hilton2.avif';
import hotel21 from './assets/images/hilton3.avif';
import hotel22 from './assets/images/hyatt3.jpeg';
import hotel23 from './assets/images/hyatt4.jpeg';
import hotel24 from './assets/images/maden.jpg';
import hotel25 from './assets/images/makarem.webp';
import hotel26 from './assets/images/makkaht1.png';
import hotel27 from './assets/images/marriot1.jpg';
import hotel28 from './assets/images/maysan al harithia.jpg';
import hotel29 from './assets/images/millenium al aqeeq.webp';
import hotel30 from './assets/images/pullman1.webp';
import hotel31 from './assets/images/pullman2.webp';
import hotel32 from './assets/images/saja al madinah.jpg';
import hotel33 from './assets/images/swiss al maqam.webp';
import hotel34 from './assets/images/swiss al maqam2.webp';
import hotel35 from './assets/images/swissotel1.webp';
import hotel36 from './assets/images/swissotel2.webp';
import hotel37 from './assets/images/tiaba front.jpg';
import hotel38 from './assets/images/voco1.webp';
import hotel39 from './assets/images/doubletree-by-hilton.jpg';
import hotel40 from './assets/images/address-jabal-omar1.jpg';
import supportAgent from './assets/images/support-agent.jpg';




const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll Logic
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    if (path) navigate(path);
  };

  return (
    <nav
      className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-40'}`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 px-4 py-3 w-full max-w-6xl relative">

        <div className="flex justify-between items-center">

          {/* --- LOGO SECTION --- */}
          {/* Changed space-x-2 to gap-2 for better handling of hidden elements */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer z-50" onClick={() => setIsMobileMenuOpen(false)}>
            
            {/* UPDATED: Added 'hidden md:flex' to hide icon on mobile */}
            <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full overflow-hidden">
              <img src={LogoIcon} alt="Eastways Icon" className="w-full h-full object-cover" />
            </div>
            
            {/* Text Logo - Always Visible */}
            <div className="h-5 mt-2 flex items-center">
              <img src={LogoText} alt="Eastways" className="h-full w-auto object-contain" />
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link to="/hotels" className="hover:text-blue-600 transition">Hotels</Link>
            <Link to="/testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
            <Link to="/faqs" className="hover:text-blue-600 transition">FAQs</Link>
          </div>

          {/* --- DESKTOP BUTTON --- */}
          <button
            onClick={() => navigate('/contact')}
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition text-sm shadow-md items-center gap-2"
          >
            <Phone size={16} />
            <span>Contact us</span>
          </button>

          {/* --- MOBILE TOGGLE BUTTON --- */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition focus:outline-none z-50 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 ease-in-out md:hidden flex flex-col mt-2 rounded-2xl ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-6 border border-gray-100' : 'max-h-0 opacity-0 py-0 border-0'
            }`}
        >
          <div className="flex flex-col items-center space-y-6 font-medium text-lg text-gray-700">
            <button onClick={() => handleLinkClick('/')} className="hover:text-blue-600 transition">Home</button>
            <button onClick={() => handleLinkClick('/services')} className="hover:text-blue-600 transition">Services</button>
            <button onClick={() => handleLinkClick('/hotels')} className="hover:text-blue-600 transition">Hotels</button>
            <button onClick={() => handleLinkClick('/testimonials')} className="hover:text-blue-600 transition">Testimonials</button>
            <button onClick={() => handleLinkClick('/faqs')} className="hover:text-blue-600 transition">FAQs</button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-md flex items-center gap-2 mt-4"
            >
              <Phone size={18} />
              <span>Contact us</span>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};







// --- 4. PAGE LAYOUTS ---

// The "Home" Page Content
const Home = () => (
  <>
    <Hero />
    
     
  </>
);







// --- 5. MAIN APP COMPONENT (Wraps everything in Router) ---
export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        {/* Navbar stays visible on all pages */}
        <Navbar />

      
      </div>
    </Router>
  );
}