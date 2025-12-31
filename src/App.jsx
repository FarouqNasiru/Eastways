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






// --- 2. FOOTER COMPONENT ---
const Footer = () => (
  <footer className="bg-[#0a192f] text-white py-20 px-6 md:px-20 mt-auto">
    <div className="max-w-7xl mx-auto">
      {/* Grid Layout: 3 Columns (Brand, Links, Contact) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 border-b border-gray-800 pb-16">

        {/* 1. Brand Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold tracking-tight text-white">EastWays</h3>
          <p className="text-gray-400 text-sm leading-7">
            Providing trusted, comfortable, and spiritually uplifting travel experiences. Specializing in Umrah packages and luxury hotel bookings.
          </p>
          <div className="flex space-x-4">

            {/* INSTAGRAM LINKED HERE */}
            <a
              href="https://www.instagram.com/goeastways?igsh=MW8wYTFjNzBwcjJyYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group"
            >
              <Instagram size={18} className="text-gray-300 group-hover:text-white" />
            </a>

            {/* Facebook (Placeholder - change div to 'a' to link) */}
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group">
              <Facebook size={18} className="text-gray-300 group-hover:text-white" />
            </div>

            {/* Youtube (Placeholder - change div to 'a' to link) */}
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group">
              <Youtube size={18} className="text-gray-300 group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* 2. Quick Links Section */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-8 text-blue-50">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/hotels" className="hover:text-blue-400 transition-colors">Hotels</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link></li>
            <li><Link to="/faqs" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* 3. Contact Section */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-8 text-blue-50">Contact</h4>
          <ul className="space-y-6 text-gray-400 text-sm">
           
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-blue-500 shrink-0" />
              <span>+44 74 9377 1659</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-blue-500 shrink-0" />
              <span>bookings@goeastways.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 GoEastWays. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- 3. HELPER COMPONENTS (Hero, Workflow, Gallery, etc.) ---

// --- NEW COMPONENT: BUTTON WITH INTERACTIVE GRADIENT ---
const GradientButton = ({ children, className, onClick }) => {
  const btnRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;

    // Calculate mouse position relative to the button
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update CSS variables
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative overflow-hidden bg-black text-white transition-all duration-300 group ${className}`}
    >
      {/* The Gradient Background Layer 
          - opacity-0 by default (shows black background)
          - opacity-100 on hover (shows gradient)
          - radial-gradient uses var(--x) and var(--y) to center on cursor
          - colors match the Eastways logo (Sky blue -> Blue)
      */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        style={{
          background: `radial-gradient(circle closest-side at var(--x, 50%) var(--y, 50%), #38bdf8, #2563eb)`
        }}
      />

      {/* Content (Z-index ensures text stays on top of the gradient) */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    // UPDATED HEADER CLASS:
    // 1. 'min-h-[600px] md:min-h-screen': Shortens height on mobile, full height on desktop.
    // 2. 'pb-24 md:pb-0': Adds bottom padding on mobile so content doesn't hit the absolute footer.
    <header className="relative w-full min-h-[700px] md:min-h-screen flex flex-col items-center text-center overflow-x-hidden pt-40 md:pt-40 pb-48 md:pb-0">

      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white"></div>
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      {/* Animation Styles */}
      <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-up {
        animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        opacity: 0;
      }
    `}</style>

      {/* Main Content Container */}
      <div className="z-10 w-full max-w-4xl mx-auto px-4 md:px-6">

        {/* Badge */}
        <div className="animate-fade-up relative inline-flex items-center justify-center bg-white/80 backdrop-blur-md py-1.5 px-1.5 pr-4 rounded-full mb-6 border border-white shadow-sm max-w-full w-auto">
          <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center shadow-md overflow-hidden bg-white">
            <img src={LogoIcon} alt="Eastways" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs md:text-sm font-semibold text-gray-800 ml-3 whitespace-nowrap">Plan Your Spiritual Journey</span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight break-words"
          style={{ animationDelay: '0.1s' }}
        >
          Your Sacred Journey Begins with<br className="hidden md:block" /> Eastways
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-10 px-2"
          style={{ animationDelay: '0.2s' }}
        >
          Premium and Budget Friendly Umrah Hotels, and personalized service so you experience a journey that’s smooth, spiritual, and stress-free.
        </p>

        {/* Button */}
        <div className="animate-fade-up w-full flex justify-center" style={{ animationDelay: '0.3s' }}>
          <GradientButton
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl font-semibold hover:scale-105 shadow-lg"
          >
            <Phone size={16} /> Contact Us for Bookings
          </GradientButton>
        </div>

      </div>

      {/* FOOTER TEXT */}
      <div
        className="absolute bottom-6 left-0 right-0 z-10 animate-fade-up flex flex-col items-center gap-4 w-full px-4"
        style={{ animationDelay: '0.5s' }}
      >
        <p className="text-sm text-gray-500 font-semibold">Follow our journey <span className="font-bold">@GoEastWays</span></p>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest">
          <span>Umrah</span><span>•</span>
          <span>Hotel Deals</span><span>•</span>
          <span>Transportation</span><span>•</span>
          <span>Visa</span><span>•</span>
          <span>24/7 Support</span>
        </div>
      </div>

    </header>
  );
};

const FeatureSection = ({ title, desc, image, reverse, iconOverlay, textOverlay, className, imageSizeClass, customVisual }) => {

  // --- 1. SCROLL OBSERVER LOGIC ---
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      // UPDATED PADDING: Changed 'px-20' to 'px-6 md:px-20' to fix squished mobile view
      className={`overflow-hidden ${className || 'py-16 md:py-24 px-6 md:px-20 bg-white'}`}
    >
      {/* 2. DEFINE ANIMATION STYLES */}
      <style>{`
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes dropInFade {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-left {
          animation: slideInFromLeft 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-slide-right {
          animation: slideInFromRight 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-drop-in {
          animation: dropInFade 0.8s ease-out forwards;
        }
      `}</style>

      <div className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>

        {/* Text Side */}
        <div
          // UPDATED ALIGNMENT:
          // 1. Added 'items-center text-center' for mobile centering.
          // 2. Added 'md:items-start md:text-left' to restore left align on desktop.
          className={`w-full md:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-left opacity-0 
            ${isVisible ? (reverse ? 'animate-slide-right' : 'animate-slide-left') : ''}
          `}
        >
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10 leading-tight">
              {title}
            </h2>
            {/* UPDATED PARAGRAPH: Removed 'w-[85%]' so padding is equal on both sides */}
            <p className="w-full text-gray-600 text-medium leading-relaxed mb-8">
              {desc}
            </p>
          </div>
        </div>

        {/* Visual Side */}
        <div
          className={`w-full md:w-1/2 relative flex justify-center opacity-0 
            ${isVisible ? (reverse ? 'animate-slide-left' : 'animate-slide-right') : ''}
          `}
          style={{ animationDelay: '0.2s' }}
        >

          {customVisual ? (
            customVisual
          ) : (
            <>
              {/* Icon Overlay */}
              {iconOverlay && (
                <div
                  className={`absolute -top-3 left-14 z-20 w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl opacity-0 
                    ${isVisible ? 'animate-drop-in' : ''}
                  `}
                  style={{ animationDelay: '0.8s' }}
                >
                  <img src={iconOverlay} alt="Badge" className="w-full h-full object-contain" />
                </div>
              )}

              {/* Main Image */}
              <div className={`relative z-10 w-full ${imageSizeClass || 'max-w-sm'} shadow-xl rounded-2xl overflow-hidden`}>
                <img src={image} alt="Feature" className="w-full h-auto object-cover" />
              </div>

              {/* Text Overlay */}
              {textOverlay && (
                <div
                  className={`absolute bottom-5 -right-2 md:-right-2 z-20 w-40 md:w-60 opacity-0 
                    ${isVisible ? 'animate-drop-in' : ''}
                  `}
                  style={{ animationDelay: '1.0s' }}
                >
                  <img src={textOverlay} alt="Watermark" className="w-full h-auto object-contain drop-shadow-lg" />
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  );
};




const TravelCollage = () => (
  // Increased mobile height (h-80) and max-width (max-w-[340px]) to fit larger images
  <div className="relative w-full max-w-[340px] md:max-w-md h-80 md:h-[400px] flex items-center justify-center mx-auto">

    {/* 1. Back Layer: The Holy Kaaba */}
    {/* Increased to w-48 h-48 on mobile (was w-40 h-40) */}
    <div className="absolute top-0 left-3 md:left-4 w-48 h-48 md:w-64 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform -rotate-6 z-10 border-2 md:border-4 border-white">
      <img
        src={g14}
        alt="Holy Kaaba"
        className="w-full h-full object-cover"
      />
    </div>

    {/* 2. Middle Layer: The Mobile App */}
    {/* Increased to w-36 h-60 on mobile (was w-32 h-52) */}
    <div className="absolute top-4 right-3 md:top-12 md:right-8 w-36 h-60 md:w-48 md:h-80 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl z-20 border-4 md:border-[6px] border-white bg-gray-100">
      <img
        src={g18}
        alt="Mobile App Interface"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 bg-gradient-to-b from-black/50 to-transparent"></div>
    </div>

    {/* 3. Front Layer: Travel Documents */}
    {/* Increased width to w-44 (was w-40) */}
    <div className="absolute bottom-4 left-4 md:bottom-10 md:left-0 w-44 md:w-48 h-auto z-30 transform rotate-3 hover:scale-105 transition duration-300">
      <div className="bg-white p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-2xl">
        <img
          src={g16}
          alt="Travel Documents"
          // Increased image height to h-28 (was h-24)
          className="w-full h-28 md:h-32 object-cover rounded-md md:rounded-lg"
        />

        {/* Badge */}
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-blue-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-md border border-white">
          VISA READY
        </div>
      </div>
    </div>

  </div>
);




const MissionCollage = () => (
  // Increased mobile height and width limits
  <div className="relative w-full max-w-[340px] md:max-w-md h-80 md:h-[400px] flex items-center justify-center transform rotate-2 mx-auto">

    {/* 1. Back Layer: Masjid an-Nabawi */}
    {/* Increased to w-48 h-48 on mobile */}
    <div className="absolute top-0 left-4 md:left-4 w-48 h-48 md:w-64 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl transform rotate-6 z-10 border-2 md:border-4 border-white bg-gray-200">
      <img
        src={hotel11}
        alt="Masjid an-Nabawi"
        className="w-full h-full object-cover"
      />
    </div>

    {/* 2. Middle Layer: Luxury Hospitality */}
    {/* Increased to w-36 h-56 on mobile (was w-32 h-48) */}
    <div className="absolute top-2 right-4 md:top-12 md:right-8 w-36 h-56 md:w-56 md:h-72 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl z-20 border-4 md:border-[6px] border-white bg-gray-100">
      <img
        src={hotel36}
        alt="Luxury Accommodation"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent mix-blend-overlay"></div>
    </div>

    {/* 3. Front Layer: Guidance/Community */}
    {/* Increased width to w-48 (was w-44) */}
    <div className="absolute bottom-4 left-3 md:bottom-12 md:-left-6 w-48 md:w-56 h-auto z-30 transform -rotate-3 hover:scale-105 transition duration-300">
      <div className="bg-white p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-2xl">
        <img
          src={g17}
          alt="Guided Pilgrims"
          // Increased height to h-28 (was h-24)
          className="w-full h-28 md:h-36 object-cover rounded-md md:rounded-lg brightness-110"
        />

        {/* Badge */}
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-blue-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-md border border-white flex items-center gap-1">
          <span>TRUSTED GUIDE</span>
        </div>
      </div>
    </div>

  </div>
);









const Workflowsection = ({ title, desc, iconOverlay, textOverlay, customImages }) => {

  // --- 1. CAROUSEL LOGIC ---
  const images = customImages || [
    masjid,
    WorkImg1,
    WorkImg2,
    g5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);


  // --- 2. SCROLL ANIMATION LOGIC ---
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-20 lg:px-40 bg-white overflow-hidden">

      {/* 3. DEFINE CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes dropInFade {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-left {
          animation: slideInFromLeft 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-slide-right {
          animation: slideInFromRight 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-drop-in {
          animation: dropInFade 0.8s ease-out forwards;
        }
      `}</style>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

        {/* Text Side */}
        <div
          className={`w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left opacity-0 ${isVisible ? 'animate-slide-left' : ''}`}
        >
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              {title}
            </h2>
            <p className="w-full md:w-[85%] text-gray-600 text-medium leading-relaxed mb-8">
              {desc}
            </p>
          </div>
        </div>

        {/* Carousel Side */}
        <div
          className={`w-full md:w-1/2 relative flex justify-center opacity-0 ${isVisible ? 'animate-slide-right' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >

          {/* 'E' Badge Overlay */}
          {iconOverlay && (
            <div
              // UPDATED: Added 'rounded-full' class for circular edges
              className={`absolute -top-3 left-4 md:left-14 z-30 w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl rounded-full overflow-hidden opacity-0 ${isVisible ? 'animate-drop-in' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              <img src={iconOverlay} alt="Badge" className="w-full h-full object-contain" />
            </div>
          )}

          {/* Carousel Container */}
          <div className="relative z-10 w-[409px] h-[353px] shadow-xl overflow-hidden bg-gray-100 max-w-full">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Text Overlay */}
          {textOverlay && (
            <div
              className={`absolute bottom-5 -right-2 md:-right-2 z-20 w-40 md:w-60 opacity-0 ${isVisible ? 'animate-drop-in' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >
              <img src={textOverlay} alt="Watermark" className="w-full h-auto object-contain drop-shadow-lg" />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

const Gallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const galleryRef = useRef(null);

  // --- Scroll Observer for Text ---
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  // --- Parallax Logic ---
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13];

  const columns = [
    images.slice(0, 2),
    images.slice(2, 3),
    images.slice(3, 5),
    images.slice(5, 7),
    images.slice(7, 9),
    images.slice(9, 11),
    images.slice(11, 13)
  ];

  useEffect(() => {
    if (galleryRef.current) setOffsetTop(galleryRef.current.offsetTop);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => { if (galleryRef.current) setOffsetTop(galleryRef.current.offsetTop); });
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleScroll); }
  }, []);

  // Feature List Data
  const features = [
    "Reliable support before, during, and after your journey",
    "Exclusive hotel rates through strong industry partnerships",
    "Transparent pricing with no hidden costs",
    "Experience handling small and large Umrah groups",
    "Trusted by travelers worldwide"
  ];

  return (
    <section ref={galleryRef} className="py-4 bg-[#f6f6f6] overflow-hidden relative z-0 min-h-[700px] md:min-h-0">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      {/* Text Container */}
      <div
        ref={textRef}
        className="relative z-20 bg-[#f6f6f6] max-w-4xl mx-auto px-6 pb-0 mt-16 text-center"
      >
        <h2 className={`text-3xl md:text-5xl font-bold mb-10 text-gray-900 opacity-0 ${isTextVisible ? 'animate-fade-up' : ''}`}>
          Why Choose<br /> Eastways?
        </h2>

        {/* LIST CONTAINER */}
        <div
          className={`flex flex-col gap-3 opacity-0 ${isTextVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          {features.map((item, index) => (
            // UPDATED: Added justify-center for desktop alignment
            <div key={index} className="flex items-center justify-left md:justify-center gap-2 md:gap-3">
              {/* Blue Tick Icon */}
              <CheckCircle className="text-blue-600 w-5 h-5 md:w-6 md:h-6 shrink-0" />

              {/* UPDATED: Changed leading-relaxed to leading-snug and added text-center */}
              <span className="text-gray-600 text-base md:text-lg leading-snug text-left md:text-center">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* GALLERY GRID */}
      <div className="flex justify-center gap-2 md:gap-4 w-[160%] -ml-[30%] md:w-[140%] md:-ml-[20%] pt-20 md:pt-64 -mb-40 md:-mb-80">
        {columns.map((colImages, colIndex) => {

          const hiddenOnMobile = (colIndex === 0 || colIndex === 6) ? 'hidden md:flex' : 'flex';
          const isEven = colIndex % 2 !== 0;
          const relativeScroll = scrollY - offsetTop;

          const speed = isMobile
            ? (isEven ? -0.05 : -0.03)
            : (isEven ? -0.2 : -0.12);

          const initialPushDown = isEven
            ? (isMobile ? 50 : 150)
            : (isMobile ? 20 : 50);

          const translateValue = (relativeScroll * speed) + initialPushDown;

          return (
            <div
              key={colIndex}
              className={`${hiddenOnMobile} flex flex-col gap-2 md:gap-4 transition-transform duration-100 ease-out will-change-transform ${isEven ? 'pt-12 md:pt-24' : ''}`}
              style={{ transform: `translateY(${translateValue}px)` }}
            >
              {colImages.map((src, imgIndex) => (
                <div key={imgIndex} className="w-24 h-24 md:w-60 md:h-40 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:scale-[1.02]">
                  <img src={src} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};



const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // --- 1. SCROLL OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- 2. TOGGLE PLAY/PAUSE ---
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback prevented:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="pt-24 pb-0 md:pb-24 px-6 md:px-20 bg-white overflow-hidden">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInBadge {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInCard {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .animate-zoom-in { animation: zoomIn 0.8s ease-out forwards; }
        .animate-badge { animation: slideInBadge 0.8s ease-out forwards; }
        .animate-card { animation: slideInCard 0.8s ease-out forwards; }
      `}</style>

      {/* Header */}
      <div
        className={`text-center mb-16 flex flex-col items-center opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
      >
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Get In Touch,<br /> Start Your Journey Today
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed px-4">
            Explore our Umrah deals or contact our team for a personalized quote.
          </p>
        </div>
      </div>

      {/* Video Container Wrapper */}
      <div className="relative w-full max-w-5xl mx-auto">

        {/* Top-Left Badge */}
        <div
          className={`absolute -top-6 -left-6 z-20 hidden md:flex w-24 h-24 bg-[#0ea5e9] items-center justify-center shadow-lg opacity-0 
            ${isVisible ? 'animate-badge' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-white text-5xl font-serif italic font-bold">E</span>
        </div>

        {/* Main Video Area */}
        <div
          className={`relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl w-full h-auto aspect-video md:h-[500px] md:aspect-auto z-10 bg-black opacity-0 
            ${isVisible ? 'animate-zoom-in' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          {/* UPDATED VIDEO TAG:
              1. Added onClick={togglePlay} so users can tap anywhere to play/pause.
              2. Added 'cursor-pointer' to indicate interactivity.
          */}
          <video
            ref={videoRef}
            onClick={togglePlay}
            className="w-full h-full object-cover brightness-[0.7] cursor-pointer"
            loop
            playsInline
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* UPDATED BUTTON LOGIC:
              Only render this div if !isPlaying (i.e., video is paused).
          */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
              <button
                onClick={togglePlay}
                // Added pointer-events-auto so the button itself is clickable
                className="pointer-events-auto w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 hover:bg-white/20 transition group"
              >
                <Play fill="white" className="text-white ml-1 w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition" />
              </button>
            </div>
          )}
        </div>

        {/* Bottom-Right Floating Card */}
        <div
          className={`absolute -bottom-10 -right-4 z-20 hidden md:block opacity-0 
            ${isVisible ? 'animate-card' : ''}`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="absolute top-4 left-4 w-full h-full bg-blue-600 rounded-xl -z-10"></div>
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100 relative">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-sm text-gray-900">EastWays</h4>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              "Pick from our library of custom-crafted templates or create your own. Manage your company assets directly within Pitch to ensure presentations look great."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};






// --- 4. PAGE LAYOUTS ---

// The "Home" Page Content
const Home = () => (
  <>
    <Hero />
    <VideoSection />
    <div className="relative z-20 bg-white">
      <Workflowsection
        title="Who Are We?"
        desc="Eastways is a modern Umrah and travel service provider that guarantees cheaper rates than other booking platforms and delivering exceptional spiritual journeys.
        With years of experience and a deep understanding of pilgrims’ needs, we focus on comfort, reliability, and transparency ensuring every traveler receives the highest standard of care."
        iconOverlay={Logo}
        textOverlay={Eastways}
      />

      <Gallery />

      <div className="relative z-20 bg-white">
        {/* REPLACED SECTION */}
        <FeatureSection
          title="The Sacred Eastways Vision"
          desc="To make every Umrah journey peaceful, affordable, and easy without compromising comfort or quality."
          customVisual={<TravelCollage />}

          reverse={true}
          className="pt-24 pb-0 md:pb-20 bg-white px-6 md:px-40"
        />
        <FeatureSection
          title="Our Mission"
          desc="To become one of the leading and most trusted Umrah service providers in the region, known for excellence, honesty, and hospitality."
          customVisual={<MissionCollage />}
          reverse={false}
          className="pt-20 pb-24 bg-[#f6f6f6] px-6 md:pl-80 md:pr-20"
        />
      <TestimonialsPage />
      </div>
    </div>
  </>
);

// The "Contact" Page Content
const ContactPage = () => {
  // --- 2. FORM STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- 3. WHATSAPP SUBMIT LOGIC ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // OWNER PHONE NUMBER (International format, no + or -)
    // Based on your footer: +44 74 9377 1659 -> 447493771659
    const phoneNumber = "447493771659";

    // Construct the message
    const whatsappMessage =
      `*New Website Inquiry* 🕌%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Topic:* ${formData.topic}%0A` +
      `*Message:* ${formData.message}`;

    // Create the URL
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24 pb-10">

      <div className="flex-grow px-4 md:px-8 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

          {/* Left Side - Info Panel */}
          <div className="w-full md:w-5/12 bg-[#0a192f] p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Fill up the form and it will open a WhatsApp chat with our team immediately.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-blue-400"><Phone size={16} /></div>
                  <div><h3 className="font-semibold text-sm mb-0.5">Phone</h3><p className="text-gray-300 text-xs">+44 74 9377 1659</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-blue-400"><Mail size={16} /></div>
                  <div><h3 className="font-semibold text-sm mb-0.5">Email</h3><p className="text-gray-300 text-xs">support@goeastways.com</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-blue-400"><MapPin size={16} /></div>
                  <div><h3 className="font-semibold text-sm mb-0.5">Address</h3><p className="text-gray-300 text-xs">123 Sacred Road, View District<br />London, UK</p></div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8 relative z-10">
              <a
                href="https://www.instagram.com/goeastways?igsh=MW8wYTFjNzBwcjJyYw=="
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/30 hover:bg-blue-600 transition cursor-pointer flex items-center justify-center text-white"
              >
                <Instagram size={14} />
              </a>
              <div className="w-8 h-8 rounded-full bg-black/30 hover:bg-blue-600 transition cursor-pointer flex items-center justify-center text-white"><Facebook size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-black/30 hover:bg-blue-600 transition cursor-pointer flex items-center justify-center text-white"><Youtube size={14} /></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-7/12 p-8 bg-white">
            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">First Name</label>
                  <input
                    name="firstName" // Important: matches state key
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="John"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Email Address</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition"
                />
              </div>

              {/* Row 3 */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Topic</label>
                <div className="relative">
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none appearance-none transition cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Booking Support</option>
                    <option>Visa Assistance</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>

              {/* Row 4 */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us how we can help..."
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit" // Changed from 'button' to 'submit'
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2 text-sm mt-2"
              >
                Send to WhatsApp <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};










const HotelCard = ({ hotel, index }) => {
  // --- 1. SCROLL ANIMATION LOGIC ---
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // --- 2. CAROUSEL LOGIC ---
  const images = (hotel.images && hotel.images.length > 0)
    ? hotel.images
    : ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const hasMultipleImages = images.length > 1;

  // --- 3. WHATSAPP HANDLER ---
  const handleCheckAvailability = () => {
    const phoneNumber = "4474937716559";
    const message = `Hello! I am interested in checking availability for *${hotel.name}* in ${hotel.city}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 ease-out flex flex-col group relative transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >

      {/* --- IMAGE CAROUSEL --- */}
      <div className="relative h-36 md:h-64 overflow-hidden bg-gray-200">
        <img
          src={images[currentImgIndex]}
          alt={hotel.name}
          className="w-full h-full object-cover transition duration-500"
        />
        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold text-blue-800 shadow-sm z-10">
          {hotel.city}
        </div>
        {hasMultipleImages && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 z-20">
              <ChevronLeft size={16} />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 z-20">
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-20">
              {images.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${idx === currentImgIndex ? 'bg-white scale-110' : 'bg-white/50'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- CARD BODY --- */}
      <div className="p-3 md:p-6 flex flex-col flex-grow">

        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2 gap-1">
          <h3 className="text-sm md:text-xl font-bold text-gray-900 leading-tight line-clamp-1">{hotel.name}</h3>
          <div className="flex items-center bg-yellow-50 px-1.5 py-0.5 rounded-md self-start md:self-auto">
            <Star size={10} className="text-yellow-500 fill-current md:w-3.5 md:h-3.5" />
            <span className="text-[10px] md:text-xs font-bold text-yellow-700 ml-1">{hotel.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-[10px] md:text-sm mb-3 md:mb-6 flex items-center line-clamp-1">
          <MapPin size={10} className="mr-1 md:w-3.5 md:h-3.5" /> {hotel.location}
        </p>

        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-8">
          {hotel.amenities && hotel.amenities.slice(0, 2).map((amenity, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 text-[9px] md:text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap">
              {amenity}
            </span>
          ))}
          {hotel.amenities && hotel.amenities.length > 2 && (
            <span className="bg-gray-100 text-gray-600 text-[9px] md:text-xs px-2 py-1 rounded-md font-medium md:hidden">
              +1
            </span>
          )}
          {hotel.amenities && hotel.amenities.length > 2 && (
            <span className="hidden md:inline-flex bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-md font-medium">
              {hotel.amenities[2]}
            </span>
          )}
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-auto flex flex-row items-center justify-between pt-3 md:pt-6 border-t border-gray-100 gap-3">
          
          {/* PRICE INFO: Hidden on Mobile, Block on Desktop */}
          <div className="hidden md:block">
            <span className="text-[10px] md:text-xs text-gray-400 block mb-0.5">Rate</span>
            <span className="text-xs md:text-sm font-medium text-blue-600 leading-none block">
              Inquire<br />for price
            </span>
          </div>

          <button
            onClick={handleCheckAvailability}
            // Button is w-full on mobile, w-auto on desktop
            className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold hover:bg-gray-900 transition shadow-md whitespace-nowrap"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

// --- HOTELS PAGE COMPONENT ---
const HotelsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // --- ANIMATION FOR HEADER ---
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setHeaderVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Full Hotel Data List
  const hotels = [
    // --- MAKKAH HOTELS ---
    {
      id: 1,
      name: "Swissotel Makkah",
      city: "Makkah",
      location: "Abraj Al Bait",
      rating: 4.8,
      price: "$210", 
      images: [hotel35, hotel36],
      amenities: ["Haram View", "Direct Access", "5 Star"]
    },
    {
      id: 2,
      name: "Swiss Al Maqam",
      city: "Makkah",
      location: "Abraj Al Bait",
      rating: 4.7,
      price: "$195",
      images: [hotel33, hotel34],
      amenities: ["Kaaba View", "Dining", "Luxury"]
    },
    {
      id: 3,
      name: "Pullman Zamzam",
      city: "Makkah",
      location: "Abraj Al Bait",
      rating: 4.7,
      price: "$180",
      images: [hotel30, hotel31],
      amenities: ["Clock Tower", "Buffet", "Wifi"]
    },
    {
      id: 4,
      name: "Hyatt Regency",
      city: "Makkah",
      location: "Jabal Omar",
      rating: 4.9,
      price: "$230",
      images: [hotel22, hotel23],
      amenities: ["Luxury Suites", "Gym", "Spa"]
    },
    {
      id: 5,
      name: "Makkah Hotel & Towers",
      city: "Makkah",
      location: "Ibrahim Al Khalil",
      rating: 4.6,
      price: "$160",
      images: [hotel26],
      amenities: ["Close to Haram", "Shopping", "Family"]
    },
    {
      id: 6,
      name: "Hilton Convention",
      city: "Makkah",
      location: "Jabal Omar",
      rating: 4.8,
      price: "$200",
      images: [hotel20, hotel21],
      amenities: ["Convention Ctr", "Shuttle", "View"]
    },
    {
      id: 7,
      name: "Address Jabal Omar",
      city: "Makkah",
      location: "Jabal Omar",
      rating: 5.0,
      price: "$350",
      images: [hotel40],
      amenities: ["Ultra Luxury", "Skybridge", "Dining"]
    },
    {
      id: 8,
      name: "Doubletree by Hilton",
      city: "Makkah",
      location: "Jabal Omar",
      rating: 4.5,
      price: "$140",
      images: [hotel39, hotel5],
      amenities: ["Warm Cookie", "Comfort", "Wifi"]
    },
    {
      id: 9,
      name: "Marriot Jabal Omar",
      city: "Makkah",
      location: "Jabal Omar",
      rating: 4.7,
      price: "$175",
      images: [hotel27],
      amenities: ["Modern", "Service", "Views"]
    },
    {
      id: 10,
      name: "Emaar Grand",
      city: "Makkah",
      location: "Al Misfalah",
      rating: 4.2,
      price: "$90",
      images: [hotel15],
      amenities: ["Budget Friendly", "Transport", "Clean"]
    },
    {
      id: 11,
      name: "Emaar Al Manar",
      city: "Makkah",
      location: "Ajyad",
      rating: 4.0,
      price: "$85",
      images: [hotel8, hotel9, hotel10, hotel11],
      amenities: ["Good Value", "Restaurant", "Wifi"]
    },
    {
      id: 12,
      name: "Emaar Andalusia",
      city: "Makkah",
      location: "Al Misfalah",
      rating: 4.1,
      price: "$80",
      images: [hotel12, hotel13],
      amenities: ["Economy", "24/7 Desk", "Cafe"]
    },
    {
      id: 13,
      name: "Al Shohada Hotel",
      city: "Makkah",
      location: "Ajyad",
      rating: 4.5,
      price: "$130",
      images: [hotel2],
      amenities: ["Walking Dist", "Luxury", "Meals"]
    },
    {
      id: 14,
      name: "Voco Makkah",
      city: "Makkah",
      location: "Ibrahim Al Khalil",
      rating: 4.6,
      price: "$155",
      images: [hotel38],
      amenities: ["Premium", "Shuttle", "Design"]
    },
    // --- MADINA HOTELS ---
    {
      id: 15,
      name: "Elaf Taqwa",
      city: "Madina",
      location: "Central Area",
      rating: 4.3,
      price: "$100",
      images: [hotel1],
      amenities: ["Close to Rawdah", "Wifi", "Meals"]
    },
    {
      id: 16,
      name: "Elaf Taiba",
      city: "Madina",
      location: "Northern Central",
      rating: 4.4,
      price: "$110",
      images: [hotel6, hotel7],
      amenities: ["Comfort", "Cafe", "Service"]
    },
    {
      id: 17,
      name: "Maden Hotel",
      city: "Madina",
      location: "North Facing",
      rating: 4.8,
      price: "$220",
      images: [hotel24],
      amenities: ["Luxury", "Haram View", "Suites"]
    },
    {
      id: 18,
      name: "Emaar Royal",
      city: "Madina",
      location: "Northern Central",
      rating: 4.5,
      price: "$130",
      images: [hotel17],
      amenities: ["Royal Floor", "Dining", "Wifi"]
    },
    {
      id: 19,
      name: "Emaar Elite",
      city: "Madina",
      location: "Central Area",
      rating: 4.2,
      price: "$95",
      images: [hotel14],
      amenities: ["Modern", "Value", "Clean"]
    },
    {
      id: 20,
      name: "Emaar Mektan",
      city: "Madina",
      location: "South Central",
      rating: 4.1,
      price: "$90",
      images: [hotel16],
      amenities: ["Quiet", "Restaurant", "Shuttle"]
    },
    {
      id: 21,
      name: "Emaar Taiba",
      city: "Madina",
      location: "West Central",
      rating: 4.0,
      price: "$85",
      images: [hotel19],
      amenities: ["Budget", "Groups", "Lobby"]
    },
    {
      id: 22,
      name: "Dallah Taiba",
      city: "Madina",
      location: "South Facing",
      rating: 4.7,
      price: "$160",
      images: [hotel3],
      amenities: ["Heritage", "Hospitality", "Food"]
    },
    {
      id: 23,
      name: "Saja Al Madina",
      city: "Madina",
      location: "Northern Central",
      rating: 4.4,
      price: "$120",
      images: [hotel32],
      amenities: ["Modern Design", "Service", "Wifi"]
    },
    {
      id: 24,
      name: "Dar Al Taqwa",
      city: "Madina",
      location: "Main Gate",
      rating: 4.9,
      price: "$250",
      images: [hotel4],
      amenities: ["Gate 25", "Luxury", "VIP"]
    },
    {
      id: 25,
      name: "Millenium Al Aqeeq",
      city: "Madina",
      location: "Second Row",
      rating: 4.6,
      price: "$170",
      images: [hotel29],
      amenities: ["Premium", "Buffet", "Suites"]
    },
    {
      id: 26,
      name: "Makarem",
      city: "Madina",
      location: "East Side",
      rating: 4.3,
      price: "$105",
      images: [hotel25],
      amenities: ["Spacious", "Transport", "Meals"]
    },
    {
      id: 27,
      name: "Taiba Front",
      city: "Madina",
      location: "North Facing",
      rating: 4.8,
      price: "$210",
      images: [hotel37],
      amenities: ["Direct View", "Mall", "Luxury"]
    },
    {
      id: 28,
      name: "Maysan Al Harithia",
      city: "Madina",
      location: "Central Area",
      rating: 4.5,
      price: "$145",
      images: [hotel28],
      amenities: ["Elegant", "Comfort", "Service"]
    }
  ];

  const filteredHotels = activeFilter === 'All'
    ? hotels
    : hotels.filter(hotel => hotel.city === activeFilter);

  const filters = ['All', 'Makkah', 'Madina'];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">

        {/* Header with Animation */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ease-out transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Comfortable accommodations close to the Holy Haram. Choose from our curated selection of partner hotels in Makkah and Madina.
          </p>
        </div>

        {/* Filter Buttons with Animation */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16 transition-all duration-1000 ease-out delay-200 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 md:px-8 md:py-2.5 rounded-full text-xs md:text-base font-medium transition-all duration-300 ${activeFilter === filter
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {filteredHotels.map((hotel, index) => (
            // Pass index for staggered animation delay
            <HotelCard key={hotel.id} hotel={hotel} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};







const FAQItem = ({ faq, index, isOpen, toggle }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  // Alternating Animation Direction
  // Even index = Slide from Left | Odd index = Slide from Right
  const animationClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';

  return (
    <div
      ref={itemRef}
      className={`bg-white rounded-2xl transition-all duration-500 ease-out transform
        ${isVisible ? `${animationClass} opacity-100 translate-x-0` : 'opacity-0'} 
        ${isOpen ? 'shadow-lg ring-1 ring-blue-100' : 'shadow-sm hover:shadow-md'}
      `}
    >
      {/* Accordion Header */}
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      {/* Accordion Body */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mx-6 mt-2">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const FAQPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  // Header Animation State
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setHeaderVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What documents do I need for the trip?",
      answer: "You will need a valid passport with at least 6 months remaining validity, a recent passport-sized photograph, and your vaccination certificate. We will handle the visa application process for you."
    },
    {
      question: "Is airfare included in the package?",
      answer: "Yes, all our standard packages include round-trip flights from major international airports. We also provide airport transfers to and from your hotel."
    },
    {
      question: "Can I customize my hotel booking?",
      answer: "Absolutely. While we have partner hotels that we recommend for their proximity and quality, you can upgrade or change your accommodation preferences during the booking consultation."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a full refund if cancellations are made at least 30 days prior to the departure date. For cancellations within 30 days, a service fee may apply depending on airline and hotel policies."
    },
    {
      question: "Do you provide guides during the pilgrimage?",
      answer: "Yes, all our groups are accompanied by experienced, multilingual guides who are well-versed in the historical and spiritual significance of the sites."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-32 pb-20 overflow-x-hidden">

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-left { animation: slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-slide-right { animation: slideInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-fade-up { animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>

      <div className="max-w-4xl mx-auto w-full px-6">

        {/* Heading Section (Fade Up) */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${headerVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about your journey with Eastways. Can’t find the answer you’re looking for? Feel free to contact us.
          </p>
        </div>

        {/* Accordion List (Items slide in individually) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={toggleFAQ}
            />
          ))}
        </div>

        {/* Bottom CTA (Fade Up) */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ease-out ${headerVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 transition shadow-lg"
          >
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};








const MobileAnimatedCard = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.disconnect(); };
  }, []);

  const isEven = index % 2 === 0;
  const initialState = isEven ? '-translate-x-16 opacity-0' : 'translate-x-16 opacity-0';
  const finalState = 'translate-x-0 opacity-100';

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${isVisible ? finalState : initialState}`}
    >
      {children}
    </div>
  );
};

const TestimonialsPage = () => {
  // 2. Mock Reviews Data - REMOVED SPECIFIC IMAGE URLs
  const reviews = [
    {
      id: 1,
      name: "Anonymous",
      role: "Pilgrim",
      text: "The stay was amazing Alhamdulillah. The moment I entered the hotel, the receptionist only took my name, and within three minutes, I was guided to my room. Everything went smoothly and quick.",
      rating: 5,
      // image property removed
    },
    {
      id: 2,
      name: "Yousef Hassan",
      role: "Pilgrim",
      text: "I will definitely be booking this hotel again for my next trip in sha Allah, and will do that through EastWays again. The combination of low budget and the great service makes it worth it.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anonymous",
      role: "Pilgrim",
      text: "I recently booked a hotel through EastWays, and I must say, the experience was outstanding. It offered the best rates compared to other booking platforms. No hidden fees, no last-minute surprises.",
      rating: 4,
    },
    {
      id: 4,
      name: "Balil Safi",
      role: "Pilgrim",
      text: "I saved a significant amount, making it the most cost-effective option without compromising on quality or convenience. Highly recommend for budget-conscious travelers seeking the best deals!",
      rating: 5,
    },
    {
      id: 5,
      name: "Anonymous",
      role: "Pilgrim",
      text: "If you're seeking the best hotel prices in Makkah and Marina, I highly recommend Eastways. The spiritual guidance provided by the team added so much depth to our Umrah.",
      rating: 5,
    },
    {
      id: 6,
      name: "Sheikh Jamal",
      role: "Pilgrim",
      text: "The EastWays team is honest, incredibly helpful and always available. Whether you're on a budget or looking for premium hotels, they will take care of everything.",
      rating: 5,
    },
    {
      id: 7,
      name: "Neda Hamida",
      role: "Pilgrim",
      text: "Thank you so much for all your assistance. Everything went smoothly. I found the driver waiting for me at the airport. The hotel bookings were exactly what I wanted.",
      rating: 5,
    },
    {
      id: 8,
      name: "Amina Khan",
      role: "Pilgrim",
      text: "I really appreciated how easy it was to get a hold of you for any questions or changes and your prompt replies. JazakAllahukhair for helping make my trip a successful one!",
      rating: 5,
    }
  ];

  // Helper to render stars
  const renderStars = (count) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < count ? "text-yellow-500 fill-current" : "text-gray-200"}
        />
      ))}
    </div>
  );

  // --- UPDATED CARD COMPONENT (Generic Placeholder) ---
  const TestimonialCard = ({ review }) => (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-blue-100/50 transition duration-300 w-full mx-auto flex flex-col h-full relative overflow-hidden group">

      {/* Decorative Gradient Blob inside card */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>

      <div className="flex justify-between items-start mb-3 relative z-10">
        <div className="flex items-center gap-3">
          {/* 3. REPLACED IMG WITH GENERIC SVG PLACEHOLDER */}
          <div className="p-0.5 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center">
              <User size={20} className="text-blue-300 fill-current" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm text-gray-900 leading-tight">{review.name}</h4>
            <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wide">{review.role}</p>
          </div>
        </div>

        <div className="mt-1 shrink-0 bg-blue-50 px-2 py-1 rounded-md">
          {renderStars(review.rating)}
        </div>
      </div>

      <p className="text-gray-600 text-xs md:text-sm leading-relaxed relative z-10">
        <span className="inline-block mr-1">
          <Quote size={12} className="text-blue-400 fill-current transform rotate-180" />
        </span>
        {review.text}
      </p>
    </div>
  );

  // Column Component
  const TestimonialColumn = ({ items, duration = "30s" }) => (
    <div className="relative flex-1 h-[600px] overflow-hidden group">
      <div
        className="flex flex-col gap-4 animate-infinite-scroll group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((review, idx) => (
          <TestimonialCard key={idx} review={review} />
        ))}
      </div>
    </div>
  );

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-20 relative overflow-hidden">

      {/* --- CREATIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[100px]"></div>
      </div>

      <style>{`
        @keyframes infinite-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .animate-infinite-scroll { animation: infinite-scroll linear infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Travelers</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Read what our pilgrims have to say about their spiritual journey with Eastways.
          </p>
        </div>

        {/* --- MOBILE VIEW (Animated on scroll) --- */}
        <div className="flex flex-col gap-3 md:hidden overflow-x-hidden py-4">
          {reviews.map((review, index) => (
            <MobileAnimatedCard key={review.id} index={index}>
              <TestimonialCard review={review} />
            </MobileAnimatedCard>
          ))}
        </div>

        {/* --- DESKTOP VIEW (3-Column Scrolling Grid) --- */}
        <div className="hidden md:grid grid-cols-3 gap-4 relative h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>

          <TestimonialColumn items={reviews.slice(0, 3)} duration="40s" />
          <TestimonialColumn items={reviews.slice(2, 5)} duration="55s" />
          <TestimonialColumn items={reviews.slice(3, 6)} duration="45s" />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-blue-200 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
            Book Your Trip Now <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};








// --- 1. ANIMATION UTILITIES ---

// Custom Hook to detect when an element is on screen
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Trigger only once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

// NEW: Generic Reveal Wrapper that accepts an animation class
const Reveal = ({ children, delay = 0, animation = 'animate-fade-up' }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      // If visible, apply the animation class. If not, stay hidden.
      className={`transition-all duration-1000 ${isVisible ? animation : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// Shortcut for Text (defaults to fade-up)
const RevealText = ({ children, delay }) => <Reveal delay={delay}>{children}</Reveal>;


// --- 2. UPDATED VISUAL COMPONENTS ---

const PhoneMockup = ({ children, className }) => (
  <div className={`relative border-[8px] border-gray-900 rounded-[2.5rem] h-[400px] w-[220px] bg-white overflow-hidden shadow-2xl flex flex-col z-10 ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-gray-900 rounded-b-xl z-20"></div>
    <div className="flex-grow overflow-hidden relative bg-gray-50">
      {children}
    </div>
  </div>
);

// Step 1 Visual: Phone with Chat (No changes needed here, no rotation conflict)
const PhoneWithChat = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Reveal animation="animate-drop-in">
        <div className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -z-0"></div>
        <PhoneMockup>
          <div className="p-4 pt-10 space-y-4">
            <div className="bg-gray-100 w-3/4 h-16 rounded-2xl rounded-tl-none animate-pulse"></div>
            <div className="bg-blue-50 w-3/4 h-12 rounded-2xl rounded-tr-none ml-auto"></div>
            <div className="bg-gray-100 w-2/3 h-12 rounded-2xl rounded-tl-none"></div>
            <div className="bg-blue-600 w-1/2 h-10 rounded-2xl rounded-tr-none ml-auto opacity-90"></div>
          </div>
        </PhoneMockup>
      </Reveal>

      {/* Bubble drops in later */}
      <div className="absolute -right-8 top-20 z-20 hidden md:block">
        <Reveal delay={0.5} animation="animate-drop-in">
          <div className="bg-white p-3 rounded-xl shadow-xl border border-blue-50">
            <div className="flex gap-2 items-center text-xs font-bold text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>Trip Confirmed!
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

// Step 3 & 4 Visual: Image Stack (FIXED ROTATION)
const ImageStack = ({ backImage, frontImage, alt }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <div ref={ref} className="relative w-full max-w-md h-[400px] flex items-center justify-center">
      {/* Blue Glow Background */}
      <div className="absolute w-full h-full bg-blue-600/10 rounded-full blur-3xl -z-0"></div>

      {/* --- FIX: Outer div handles rotation, inner div handles animation --- */}

      {/* Back Image Container */}
      <div className="absolute top-0 left-0 md:left-4 z-10 transform -rotate-3 hover:rotate-0 transition duration-500 origin-center">
        <div
          className={`w-64 h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white ${isVisible ? 'animate-drop-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <img src={backImage} alt={`${alt} Background`} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Front Image Container */}
      <div className="absolute bottom-4 right-0 md:right-8 z-20 transform rotate-3 hover:rotate-0 transition duration-500 origin-center">
        <div
          className={`w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ${isVisible ? 'animate-drop-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <img src={frontImage} alt={`${alt} Foreground`} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Decorative Badge (No rotation needed) */}
      <div
        className={`absolute bottom-10 -left-4 z-30 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex gap-2 items-center
        ${isVisible ? 'animate-drop-in' : 'opacity-0'}`}
        style={{ animationDelay: '0.8s' }}
      >
        <Star size={16} className="text-yellow-400 fill-current" />
        <span className="text-xs font-bold text-gray-800">Premium Quality</span>
      </div>
    </div>
  );
};

// Step 5 Visual: Support Agent
const SupportVisual = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Static rotated background blob */}
      <div className="absolute inset-0 bg-blue-600 rounded-[2rem] transform rotate-3 opacity-10"></div>

      <Reveal animation="animate-drop-in">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
          <img
            src={supportAgent}
            alt="Customer Support Agent"
            className="w-full h-full object-cover"
          />

          {/* Overlay Card inside the animated container */}
          <Reveal delay={0.4} animation="animate-drop-in">
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Headset size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase">Status</div>
                <div className="text-sm font-bold text-gray-900">Online • 24/7 Support</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};


// --- 3. MAIN PAGE COMPONENT ---

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-24">

      {/* INJECT ANIMATION STYLES */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-drop-in {
          animation: dropIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      {/* Header */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white pb-20 pt-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <RevealText>
            <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">
              End-to-End Pilgrimage Support
            </div>
          </RevealText>
          <RevealText delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
          </RevealText>
          <RevealText delay={0.4}>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Eastways combines spiritual guidance, seamless logistics, and premium comfort. Here is how we craft your journey step by step.
            </p>
          </RevealText>
        </div>
      </div>

      {/* --- STEP 1: Consultation --- */}
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <RevealText>
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Step 01</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Consultation & Planning</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We start by understanding your spiritual goals. Our experts guide you through the best dates, routes, and spiritual preparation.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-800 font-medium"><CheckCircle size={20} className="text-blue-500" /> Personalized Itineraries</li>
                <li className="flex gap-3 text-gray-800 font-medium"><CheckCircle size={20} className="text-blue-500" /> Budget Planning</li>
              </ul>
            </RevealText>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <PhoneWithChat />
          </div>
        </div>
      </div>

      {/* --- STEP 2: Visa Processing (FIXED ROTATION) --- */}
      <div className="py-24 px-6 md:px-12 bg-blue-50/50 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <RevealText>
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Step 02</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Seamless Visa Processing</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed">
                We handle all visa documentation, approvals, and embassy requirements. Simply upload your passport in our app, and we take care of the rest.
              </p>
            </RevealText>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {/* FIX: Outer div handles rotation, Inner Reveal handles animation */}
            <div className="transform rotate-2 hover:rotate-0 transition duration-500 origin-center">
              <Reveal delay={0.2} animation="animate-drop-in">
                <div className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl p-2 border border-blue-100">
                  <img src={passportImg} alt="Passport" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex justify-between items-center mb-1"><span className="text-xs font-bold text-gray-500 uppercase">Status</span><span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">APPROVED</span></div>
                    <div className="text-sm font-bold text-gray-900">Umrah Visa</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* --- STEP 3: Accommodation --- */}
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <RevealText>
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Step 03</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Choice of Accommodation</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Wake up to the view of the Holy Haram. We provide a visual preview of your stay, featuring both the grand exteriors of our partner hotels and the comfortable, luxurious interiors of your suite.
              </p>
            </RevealText>
          </div>
          <div className="w-full md:w-1/2">
            <ImageStack
              backImage={hotel17}
              frontImage={hotel7}
              alt="Luxury Hotel"
            />
          </div>
        </div>
      </div>

      {/* --- STEP 4: Transport --- */}
      <div className="py-24 px-6 md:px-12 bg-blue-50/50 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 pl-0 md:pl-10">
            <RevealText>
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Step 04</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ziyarat & Transport</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Travel in style. Our packages include guided tours to historical sites in comfortable, air-conditioned luxury buses, ensuring your physical journey is as pleasant as your spiritual one.
              </p>
            </RevealText>
          </div>
          <div className="w-full md:w-1/2">
            <ImageStack
              backImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80"
              frontImage="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80"
              alt="Transport"
            />
          </div>
        </div>
      </div>

      {/* --- STEP 5: Support --- */}
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <RevealText>
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Step 05</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">24/7 On-Ground Support</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed">
                You are never alone on this journey. Our dedicated support team is available around the clock to assist with medical needs, lost items, or general guidance during your rituals.
              </p>
            </RevealText>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <SupportVisual />
          </div>
        </div>
      </div>

    </div>
  );
};





// --- 5. MAIN APP COMPONENT (Wraps everything in Router) ---
export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        {/* Navbar stays visible on all pages */}
        <Navbar />

        <Routes>
          {/* Default Route: Shows Home Page */}
          <Route path="/" element={<Home />} />

          {/* Contact Route: Shows Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>


        <WhatsAppButton />
        {/* Footer stays visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}