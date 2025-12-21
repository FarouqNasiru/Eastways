import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // IMPORT ROUTER
import { Play, Facebook, Instagram, Youtube, Phone, Send, ChevronDown, ChevronLeft, ChevronRight, MapPin, Mail, Plus, Minus, Star, Wifi, Coffee, Car, Quote, ArrowRight, MessageSquare, CheckCircle, Map, CreditCard, Shield, ShieldCheck, Headset, Menu, X } from 'lucide-react';
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
import g5 from './assets/images/g5.jpg';
import g6 from './assets/images/g6.jpg';
import g7 from './assets/images/g7.jpg';
import g8 from './assets/images/g8.jpg';
import g9 from './assets/images/g9.jpg';
import g10 from './assets/images/g10.jpg';
import g11 from './assets/images/g11.jpg';
import g12 from './assets/images/g12.jpg';
import g13 from './assets/images/g13.jpg';
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
import hotel22 from './assets/images/hyatt1.webp';
import hotel23 from './assets/images/hyatt2.webp';
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




// --- 1. NAVBAR COMPONENT ---
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // NEW: State for mobile menu
  const navigate = useNavigate();

  // Scroll Logic (Hide/Show on scroll)
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Always show if at top, otherwise hide on scroll down
        if (currentScrollY === 0) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Hide on scroll down
          setIsMobileMenuOpen(false); // Auto-close mobile menu on scroll
        } else {
          setIsVisible(true); // Show on scroll up
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Helper to close menu when clicking a link
  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    if (path) navigate(path);
  };

  return (
    <nav
      className={`fixed top-0 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-40'}`}
    >
      {/* Main Container */}
      <div className="bg-white/95 backdrop-blur-md rounded-b-2xl md:rounded-2xl shadow-xl border border-gray-100 px-4 py-3 w-full max-w-6xl relative">

        <div className="flex justify-between items-center">

          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer z-50" onClick={() => setIsMobileMenuOpen(false)}>
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
              <img src={LogoIcon} alt="Eastways Icon" className="w-full h-full object-cover" />
            </div>
            {/* Text Logo */}
            <div className="h-5 flex items-center">
              <img src={LogoText} alt="Eastways" className="h-full w-auto object-contain" />
            </div>
          </Link>

          {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
          <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link to="/hotels" className="hover:text-blue-600 transition">Hotels</Link>
            <Link to="/testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
            <Link to="/faqs" className="hover:text-blue-600 transition">FAQs</Link>
          </div>

          {/* --- DESKTOP BUTTON (Hidden on Mobile) --- */}
          <button
            onClick={() => navigate('/contact')}
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition text-sm shadow-md items-center gap-2"
          >
            <Phone size={16} />
            <span>Contact us</span>
          </button>

          {/* --- MOBILE TOGGLE BUTTON (Visible only on Mobile) --- */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition focus:outline-none z-50 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        {/* Absolute position to drop down from the header */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out md:hidden flex flex-col rounded-b-2xl ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
            }`}
        >
          <div className="flex flex-col items-center space-y-6 font-medium text-lg text-gray-700">
            <button onClick={() => handleLinkClick('/')} className="hover:text-blue-600 transition">Home</button>
            <button onClick={() => handleLinkClick('/services')} className="hover:text-blue-600 transition">Services</button>
            <button onClick={() => handleLinkClick('/hotels')} className="hover:text-blue-600 transition">Hotels</button>
            <button onClick={() => handleLinkClick('/testimonials')} className="hover:text-blue-600 transition">Testimonials</button>
            <button onClick={() => handleLinkClick('/faqs')} className="hover:text-blue-600 transition">FAQs</button>

            {/* Mobile Contact Button */}
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-6">Go Eastways</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">Your trusted partner for spiritual journeys.</p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"><Instagram size={18} /></div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"><Facebook size={18} /></div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"><Youtube size={18} /></div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/destinations" className="hover:text-blue-400">Destinations</Link></li>
            <li><Link to="/hotels" className="hover:text-blue-400">Partner Hotels</Link></li>
            <li><Link to="/visa" className="hover:text-blue-400">Visa Support</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-bold text-lg mb-6">Contact us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-blue-500" /> 123 Sacred Road, View District</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" /> +44 20 1234 5678</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-blue-500" /> support@goeastways.com</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2024 Go Eastways. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
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
    <header className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-x-hidden">

      {/* Background - Adjusted opacity and gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white"></div>
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      {/* 1. DEFINE ANIMATION STYLES */}
      <style>{`
      @keyframes fadeUp {
        from { 
          opacity: 0; 
          transform: translateY(30px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      .animate-fade-up {
        animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        opacity: 0;
      }
    `}</style>

      {/* Main Container - Added w-full and px-4 for safety */}
      <div className="z-10 w-full max-w-4xl mx-auto mt-24 px-4 md:px-6">

        {/* BADGE SECTION */}
        {/* Changed min-w to w-auto and added max-w-full to prevent overflow */}
        <div className="animate-fade-up relative inline-flex items-center justify-center bg-white/80 backdrop-blur-md py-1.5 px-1.5 pr-4 rounded-full mb-6 border border-white shadow-sm max-w-full w-auto">
          {/* Logo Icon */}
          <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center shadow-md overflow-hidden bg-white">
            <img
              src={LogoIcon}
              alt="Eastways"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs md:text-sm font-semibold text-gray-800 ml-3 whitespace-nowrap">Plan Your Spiritual Journey</span>
        </div>

        {/* HEADING */}
        {/* Added break-words and adjusted mobile sizing */}
        <h1
          className="animate-fade-up text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight break-words"
          style={{ animationDelay: '0.1s' }}
        >
          Your Sacred Journey Begins with<br className="hidden md:block" /> Eastways
        </h1>

        {/* SUBHEADING */}
        <p
          className="animate-fade-up text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-10 px-2"
          style={{ animationDelay: '0.2s' }}
        >
          Premium and Budget Friendly Umrah Hotels, and personalized service so you experience a journey that’s smooth, spiritual, and stress-free.
        </p>

        {/* GRADIENT BUTTON - UPDATED */}
        <div className="animate-fade-up w-full flex justify-center" style={{ animationDelay: '0.3s' }}>
          <GradientButton
            // 3. Add the navigation handler here
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl font-semibold hover:scale-105 shadow-lg"
          >
            <Phone size={16} /> Schedule a 30mins call
          </GradientButton>
        </div>


        {/* FOOTER TEXT */}
        <div
          className="animate-fade-up mt-12 md:mt-20 flex flex-col items-center gap-4"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-sm text-gray-500 font-semibold">Follow our journey <span className="font-bold">@GoEastWays</span></p>

          {/* Features List - Flex wrap added for mobile safety */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest px-2">
            <span>Umrah</span><span>•</span>
            <span>Hotel Deals</span><span>•</span>
            <span>Transportation</span><span>•</span>
            <span>Visa</span><span>•</span>
            <span>24/7 Support</span>
          </div>
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
        // Trigger animation when 20% of the section is visible
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
      className={`overflow-hidden ${className || 'py-24 px-20 md:px-40 bg-white'}`}
    >
      {/* 2. DEFINE ANIMATION STYLES (Scoped to this component) */}
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

      <div className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>

        {/* Text Side 
            - Logic: If reversed (text on right), slide from right. Else slide from left.
        */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center items-start opacity-0 
            ${isVisible ? (reverse ? 'animate-slide-right' : 'animate-slide-left') : ''}
          `}
        >
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              {title}
            </h2>
            <p className="w-full w-[85%] text-gray-600 text-medium leading-relaxed mb-8">
              {desc}
            </p>
          </div>
        </div>

        {/* Visual Side 
            - Logic: If reversed (image on left), slide from left. Else slide from right.
            - Added delay (0.2s) so it follows the text slightly
        */}
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
              {/* Icon Overlay - delayed drop in */}
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
              <div className={`relative z-10 w-full ${imageSizeClass || 'max-w-sm'} shadow-xl`}>
                <img src={image} alt="Feature" className="w-full h-auto object-cover" />
              </div>

              {/* Text Overlay - delayed drop in */}
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
  <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">

    {/* 1. Back Layer: The Holy Kaaba (Large, tilted left) */}
    <div className="absolute top-0 left-4 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transform -rotate-6 z-10 border-4 border-white">
      <img
        src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&q=80"
        alt="Holy Kaaba"
        className="w-full h-full object-cover"
      />
    </div>

    {/* 2. Middle Layer: The Mobile App (Centered, upright) */}
    <div className="absolute top-12 right-8 w-48 h-80 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-[6px] border-white bg-gray-100">
      <img
        src={card1}
        alt="Mobile App Interface"
        className="w-full h-full object-cover"
      />
      {/* Overlay to simulate app UI header */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent"></div>
    </div>

    {/* 3. Front Layer: Travel Documents (Bottom left, floating) */}
    <div className="absolute bottom-10 left-0 w-48 h-auto z-30 transform rotate-3 hover:scale-105 transition duration-300">
      <div className="bg-white p-2 rounded-xl shadow-2xl">
        <img
          src={card2}
          alt="Travel Documents"
          className="w-full h-32 object-cover rounded-lg"
        />

        {/* Decorative Badge */}
        <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md border border-white">
          VISA READY
        </div>
      </div>
    </div>

  </div>
);






const MissionCollage = () => (
  // Added a slight tilt to the main container for variety from the first collage
  <div className="relative w-full max-w-md h-[400px] flex items-center justify-center transform rotate-2">

    {/* 1. Back Layer: Masjid an-Nabawi (Madinah) - Tilted Right */}
    <div className="absolute top-0 left-4 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 z-10 border-4 border-white bg-gray-200">
      <img
        // Image of Prophet's Mosque green dome
        src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80"
        alt="Masjid an-Nabawi"
        className="w-full h-full object-cover"
      />
    </div>

    {/* 2. Middle Layer: Luxury Hospitality/Excellence - Upright */}
    <div className="absolute top-12 right-8 w-56 h-72 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-[6px] border-white bg-gray-100">
      <img
        // Image of luxury hotel interior
        src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80"
        alt="Luxury Accommodation"
        className="w-full h-full object-cover"
      />
      {/* Golden Overlay for a premium feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent mix-blend-overlay"></div>
    </div>

    {/* 3. Front Layer: Guidance/Community - Tilted Left */}
    <div className="absolute bottom-12 -left-6 w-56 h-auto z-30 transform -rotate-3 hover:scale-105 transition duration-300">
      <div className="bg-white p-2 rounded-xl shadow-2xl">
        <img
          // Image of pilgrims together/guided tour vibe
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80"
          alt="Guided Pilgrims"
          className="w-full h-36 object-cover rounded-lg brightness-110"
        />

        {/* Decorative Badge - UPDATED TEXT & COLOR */}
        <div className="absolute -top-3 -right-3 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md border border-white flex items-center gap-1">
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
    // CHANGED: Reduced padding (px-6) on mobile, larger padding on desktop
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

        {/* Text Side - Animates from LEFT */}
        {/* CHANGED: Added 'items-center text-center' for mobile, 'md:items-start md:text-left' for desktop */}
        <div
          className={`w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left opacity-0 ${isVisible ? 'animate-slide-left' : ''}`}
        >
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              {title}
            </h2>
            {/* CHANGED: Removed fixed width w-[85%] on mobile to allow full centering */}
            <p className="w-full md:w-[85%] text-gray-600 text-medium leading-relaxed mb-8">
              {desc}
            </p>
          </div>
        </div>

        {/* Carousel Side - Animates from RIGHT */}
        <div
          className={`w-full md:w-1/2 relative flex justify-center opacity-0 ${isVisible ? 'animate-slide-right' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >

          {/* 'E' Badge Overlay */}
          {iconOverlay && (
            <div
              className={`absolute -top-3 left-14 z-30 w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl opacity-0 ${isVisible ? 'animate-drop-in' : ''}`}
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

  return (
    <section ref={galleryRef} className="py-24 bg-[#f6f6f6] overflow-hidden relative z-0 min-h-screen">

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
        className="relative z-20 bg-[#f6f6f6] max-w-2xl mx-auto px-6 pb-0 mt-16 text-center"
      >
        <h2 className={`text-3xl md:text-5xl font-bold mb-10 text-gray-900 opacity-0 ${isTextVisible ? 'animate-fade-up' : ''}`}>
          Why Choose<br /> Eastways?
        </h2>
        <p
          className={`text-gray-600 max-w-xl mx-auto text-lg leading-relaxed opacity-0 ${isTextVisible ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          Reliable support before || during, and after your journey || Exclusive hotel rates through strong industry partnerships || Transparent pricing with no hidden costs || Experience handling small and large Umrah groups || Trusted by travelers worldwide
        </p>
      </div>

      {/* GALLERY GRID 
          CHANGED: Increased mobile top padding from pt-24 to pt-40 to push images lower.
      */}
      <div className="flex justify-center gap-2 md:gap-4 w-[160%] -ml-[30%] md:w-[140%] md:-ml-[20%] pt-40 md:pt-64 -mb-40 md:-mb-80">
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

  // CHANGED: Start false (paused) so audio works on first click
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
        // This promise handling prevents errors if user clicks too fast
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
    <section ref={sectionRef} className="py-24 px-6 md:px-20 bg-white overflow-hidden">

      {/* 3. ANIMATION STYLES */}
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

      {/* Header - Fades Up */}
      <div
        className={`text-center mb-16 flex flex-col items-center opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}
      >
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Get In Touch,<br /> Start Your Journey Today

          </h2>
          <p className="text-gray-500 text-lg leading-relaxed px-4">
            Explore our Umrah deals or contact our team for a personalized quote.
          </p>
        </div>
      </div>

      {/* Video Container Wrapper */}
      <div className="relative w-full max-w-5xl mx-auto">

        {/* Top-Left Badge - Slides in from Left (Delayed) */}
        <div
          className={`absolute -top-6 -left-6 z-20 hidden md:flex w-24 h-24 bg-[#0ea5e9] items-center justify-center shadow-lg opacity-0 
            ${isVisible ? 'animate-badge' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          {/* Replaced Text 'E' with Logo Icon if you have it imported, otherwise text */}
          <span className="text-white text-5xl font-serif italic font-bold">E</span>
        </div>

        {/* Main Video Area - Zooms In (Delayed) */}
        <div
          className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] z-10 bg-black opacity-0 
            ${isVisible ? 'animate-zoom-in' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          {/* VIDEO TAG UPDATED: Removed 'muted' and 'autoPlay' */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover brightness-[0.7]"
            loop
            playsInline
          // src={videoFile} <--- Ensure videoFile is imported at top of App.js
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 hover:bg-white/20 transition group cursor-pointer"
            >
              {isPlaying ? (
                // Pause Icon
                <div className="flex gap-1">
                  <div className="w-2 h-6 bg-white rounded-full"></div>
                  <div className="w-2 h-6 bg-white rounded-full"></div>
                </div>
              ) : (
                // Play Icon
                <Play fill="white" className="text-white ml-1 w-8 h-8 group-hover:scale-110 transition" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom-Right Floating Card - Slides in from Right (Delayed) */}
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
          className="pt-24 pb-0 bg-white px-20 md:px-40"
        />
        <FeatureSection
          title="The Noble Eastways Mission"
          desc="To become one of the leading and most trusted Umrah service providers in the region, known for excellence, honesty, and hospitality."
          customVisual={<MissionCollage />}
          reverse={false}
          className="pt-20 pb-24 bg-[#f6f6f6] px-6 md:pl-80 md:pr-20"
        />
        <VideoSection />
      </div>
    </div>
  </>
);

// The "Contact" Page Content
const ContactPage = () => {
  return (
    // Reduced top padding (pt-24) to pull the page up
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24 pb-10">

      <div className="flex-grow px-4 md:px-8 flex items-center justify-center">
        {/* Removed fixed min-height, added max-w-5xl for a slightly narrower look */}
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

          {/* Left Side - Info Panel 
              - Reduced padding to p-8 
              - Tighter spacing on the text
          */}
          <div className="w-full md:w-5/12 bg-[#0a192f] p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              {/* Contact Details - Reduced vertical space (space-y-6) */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-blue-400"><Phone size={16} /></div>
                  <div><h3 className="font-semibold text-sm mb-0.5">Phone</h3><p className="text-gray-300 text-xs">+44 20 1234 5678</p></div>
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

            {/* Social Icons - Compact */}
            <div className="flex gap-3 mt-8 relative z-10">
              <div className="w-8 h-8 rounded-full bg-black/30 hover:bg-blue-600 transition cursor-pointer flex items-center justify-center text-white"><Instagram size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-black/30 hover:bg-blue-600 transition cursor-pointer flex items-center justify-center text-white"><Facebook size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-black/30 hover:bg-blue-600 transition cursor-pointer flex items-center justify-center text-white"><Youtube size={14} /></div>
            </div>
          </div>

          {/* Right Side - Form 
              - Reduced padding to p-8
              - Reduced space-y to 4
              - Reduced input padding to p-3
          */}
          <div className="w-full md:w-7/12 p-8 bg-white">
            <form className="space-y-4">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition" />
              </div>

              {/* Row 3 */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Topic</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none appearance-none transition cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Booking Support</option>
                    <option>Visa Assistance</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>

              {/* Row 4 - Reduced Textarea Rows to 3 */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Message</label>
                <textarea rows="3" placeholder="Tell us how we can help..." className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-3 outline-none transition resize-none"></textarea>
              </div>

              {/* Submit Button - Compact */}
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2 text-sm mt-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};








const HotelCard = ({ hotel }) => {
  const navigate = useNavigate(); // 2. Initialize the hook

  // --- SAFETY CHECK ---
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

  // 3. Define navigation handler
  const handleCheckAvailability = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col group relative">

      {/* ... (Image Carousel Section remains unchanged) ... */}
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

        {/* Heading & Rating */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2 gap-1">
          <h3 className="text-sm md:text-xl font-bold text-gray-900 leading-tight line-clamp-1">{hotel.name}</h3>
          <div className="flex items-center bg-yellow-50 px-1.5 py-0.5 rounded-md self-start md:self-auto">
            <Star size={10} className="text-yellow-500 fill-current md:w-3.5 md:h-3.5" />
            <span className="text-[10px] md:text-xs font-bold text-yellow-700 ml-1">{hotel.rating}</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-[10px] md:text-sm mb-3 md:mb-6 flex items-center line-clamp-1">
          <MapPin size={10} className="mr-1 md:w-3.5 md:h-3.5" /> {hotel.location}
        </p>

        {/* Amenities */}
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

        {/* Footer */}
        <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between pt-3 md:pt-6 border-t border-gray-100 gap-3 md:gap-0">
          <div>
            <span className="text-[10px] md:text-xs text-gray-400 block">From</span>
            <div className="flex items-baseline">
              <span className="text-base md:text-2xl font-bold text-blue-600">{hotel.price}</span>
              <span className="text-gray-400 text-[10px] md:text-sm ml-1">/night</span>
            </div>
          </div>

          {/* 4. Updated Button with onClick Handler */}
          <button
            onClick={handleCheckAvailability}
            className="bg-blue-600 text-white w-full md:w-auto px-4 py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold hover:bg-gray-900 transition shadow-md"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const HotelsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Full Hotel Data List (With 'images' array for Carousel support)
  const hotels = [
    // --- MAKKAH HOTELS ---
    {
      id: 1,
      name: "Swissotel Makkah",
      city: "Makkah",
      location: "Abraj Al Bait",
      rating: 4.8,
      price: "$210",
      // DEMO: This hotel has multiple images to test the carousel
      images: [
        hotel35,
        hotel36
      ],
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

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Comfortable accommodations close to the Holy Haram. Choose from our curated selection of partner hotels in Makkah and Madina.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
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
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

      </div>
    </div>
  );
};







const FAQPage = () => {
  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // Mock Data for the Accordion
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
    <div className="min-h-screen bg-gray-50 flex flex-col pt-32 pb-20">
      <div className="max-w-4xl mx-auto w-full px-6">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about your journey with Eastways. Can’t find the answer you’re looking for? Feel free to contact us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl transition-all duration-300 ${openIndex === index ? 'shadow-lg ring-1 ring-blue-100' : 'shadow-sm hover:shadow-md'
                }`}
            >
              {/* Accordion Header (Clickable) */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-800'
                  }`}>
                  {faq.question}
                </span>

                {/* Icon Wrapper */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              {/* Accordion Body (Answer) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mx-6 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA similar to wireframe spacing */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};






const TestimonialsPage = () => {
  // Mock Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Ahmed Al-Farsi",
      role: "Business Traveler",
      text: "The VIP service was impeccable. From the airport greeting to the hotel check-in, everything was handled with absolute professionalism.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Fatima Zahra",
      role: "Family Trip",
      text: "Traveling with kids can be stressful, but Eastways made it a breeze. The hotel proximity to the Haram was a game changer for us.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Yusuf Khan",
      role: "Group Leader",
      text: "I have organized many group trips, but this was by far the smoothest. The visa processing speed was impressive.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Solo Traveler",
      text: "As a convert traveling alone, I was nervous. The guides were so supportive and made me feel completely safe and welcome.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Omar Abdullah",
      role: "Pilgrim",
      text: "The spiritual guidance provided by the team added so much depth to our Umrah. It wasn't just logistics; it was a true journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Layla Hassan",
      role: "Luxury Traveler",
      text: "The 'Luxury' package truly lives up to its name. The view from our suite was breathtaking and the transport was top-tier.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    }
  ];

  // Helper to render stars
  const renderStars = (count) => (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-blue-500 fill-current" : "text-gray-300"}
        />
      ))}
    </div>
  );

  // Column Component
  const TestimonialColumn = ({ items, duration = "30s" }) => (
    <div className="relative flex-1 h-[600px] overflow-hidden group">
      <div
        className="flex flex-col gap-6 animate-infinite-scroll group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((review, idx) => (
          // CHANGED: w-[95%] to fill more space, gap reduced via parent grid
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 w-[95%] mx-auto">
            {renderStars(review.rating)}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic relative">
              <Quote size={20} className="absolute -top-2 -left-2 text-blue-100 -z-10 transform -scale-x-100" />
              "{review.text}"
            </p>
            <div className="flex items-center gap-3">
              <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-sm text-gray-900">{review.name}</h4>
                <p className="text-xs text-gray-400">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-32 pb-20">
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll linear infinite;
        }
      `}</style>

      {/* CHANGED: max-w-6xl (was 7xl) to bring columns closer together */}
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by travelers
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Read what our pilgrims have to say about their spiritual journey with Eastways.
          </p>
        </div>

        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-20 pointer-events-none"></div>

          {/* CHANGED: gap-3 (was gap-6) to reduce space between columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <TestimonialColumn items={reviews.slice(0, 3)} duration="40s" />
            <div className="hidden md:block">
              <TestimonialColumn items={reviews.slice(2, 5)} duration="55s" />
            </div>
            <div className="hidden md:block">
              <TestimonialColumn items={reviews.slice(3, 6)} duration="45s" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg flex items-center gap-2 mx-auto">
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
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
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
              backImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
              frontImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80"
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