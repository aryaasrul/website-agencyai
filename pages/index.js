import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Zap, MessageSquare, BarChart3, Shield, Headphones, Settings, ArrowRight, Code, Cpu, Globe, Sparkles } from 'lucide-react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      {/* Dynamic gradient that follows mouse */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15), transparent 40%)`
        }}
      />

      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }} />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Animated circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-500" />
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-red-500" />
              <circle cx="90" cy="90" r="2" fill="currentColor" className="text-red-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        <div className="relative z-10">
          {/* Glowing Logo */}
          <div className="mb-12 flex items-center justify-center animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-black border border-red-500 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold bg-gradient-to-br from-red-400 to-red-600 text-transparent bg-clip-text">AI</span>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Glitch effect text */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="relative inline-block">
              Meet Powerful of
              <span className="absolute top-0 left-0 w-full h-full animate-glitch-1 opacity-70">
                Meet Powerful of
              </span>
              <span className="absolute top-0 left-0 w-full h-full animate-glitch-2 opacity-70">
                Meet Powerful of
              </span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-transparent bg-clip-text animate-gradient">
              Artificial Intelligence
            </span>
            <br />
            Business Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Otomatisasi Bisnis & Chatbot AI untuk UMKM dan Perusahaan Modern.
            Kami membangun sistem kerja otomatis yang membuat bisnismu makin efisien.
          </p>

          {/* Animated CTA button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="group relative bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto overflow-hidden">
              <span className="relative z-10">Konsultasi Gratis Sekarang</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-red-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Tech stack floating icons */}
          <div className="absolute -z-10 inset-0 flex items-center justify-center">
            <div className="relative w-96 h-96">
              {[Code, Cpu, Globe, Sparkles].map((Icon, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 text-red-500/20 animate-float"
                  style={{
                    top: `${50 + 40 * Math.cos(2 * Math.PI * i / 4)}%`,
                    left: `${50 + 40 * Math.sin(2 * Math.PI * i / 4)}%`,
                    animationDelay: `${i * 0.5}s`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID SECTION */}
      <section id="features" className="py-20 px-4 animate-on-scroll">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Large Feature Card with animated counter */}
            <div className="md:col-span-2 lg:col-span-1 bg-gray-900 rounded-3xl p-8 relative overflow-hidden group border border-gray-800 hover:border-red-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-7xl font-bold text-red-500 mb-4">
                  <span className="inline-block animate-counter">100</span>+
                </h3>
                <h4 className="text-2xl font-bold mb-4">Awesome collection of different blocks</h4>
                <p className="text-gray-400">
                  Dengan berbagai template workflow, widget chatbot, dan halaman pre-built, 
                  kami siap membangun solusi AI yang exceptional untuk bisnismu.
                </p>
              </div>
              {/* Animated background pattern */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full animate-spin-slow">
                  <Code className="w-full h-full text-red-500" />
                </div>
              </div>
            </div>

            {/* Interactive hover cards */}
            {[
              {
                title: "We have created two color schemes for your satisfaction",
                desc: "Dashboard & chatbot dengan tema light atau dark mode. Sesuaikan dengan brand identity perusahaan Anda.",
                badges: ["Solutions", "Color scheme"],
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                title: "Multilingual & translation ready",
                desc: "Chatbot multibahasa Indonesia, Inggris, dan bahasa daerah. Jangkau lebih banyak customer.",
                badges: ["Multilingual", "RTL"],
                icon: <Globe className="w-6 h-6" />
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-red-500/50 group"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300 ${hoveredCard === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}></div>
                <div className="relative z-10">
                  <div className="flex gap-2 mb-4">
                    {card.badges.map((badge, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700 group-hover:border-red-500/50 transition-colors">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-8 right-8 text-red-500/20 group-hover:text-red-500/40 transition-colors">
                    {card.icon}
                  </div>
                  <h4 className={`text-xl font-bold mb-4 transition-all duration-300 ${hoveredCard === idx ? 'text-red-500' : ''}`}>
                    {card.title}
                  </h4>
                  <p className="text-gray-400">{card.desc}</p>
                </div>
              </div>
            ))}

            {/* Gradient card with animation */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-7xl font-bold mb-4 animate-pulse">90+</h3>
                <h4 className="text-2xl font-bold mb-2">Pre-built pages in two color schemes</h4>
                <p className="text-white/80">
                  Template siap pakai untuk berbagai industri dan use case bisnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION with 3D cards */}
      <section id="services" className="py-20 px-4 animate-on-scroll">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible.services ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Unleashing the
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 text-transparent bg-clip-text animate-gradient">
              Power of AI
            </span>
            <br />
            in shaping the future of technology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-7 h-7 text-red-500" />,
                title: "Workflow Automation",
                desc: "Otomatisasi proses bisnis end-to-end. Input data otomatis, notifikasi real-time, dan pelaporan tanpa manual entry.",
                delay: "0s"
              },
              {
                icon: <MessageSquare className="w-7 h-7 text-red-500" />,
                title: "Chatbot Development",
                desc: "Chatbot AI untuk customer service & internal team. Integrasi WhatsApp, Instagram, dan website.",
                delay: "0.1s"
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-red-500" />,
                title: "AI Dashboard & Report",
                desc: "Dashboard analytics real-time dengan AI insights. Laporan otomatis langsung ke WhatsApp/email.",
                delay: "0.2s"
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="group relative transform transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: service.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900 rounded-3xl p-8 h-full transition-all duration-300 group-hover:bg-gray-800 border border-gray-800 group-hover:border-red-500/50">
                  <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  <button className="text-red-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION with animated cards */}
      <section id="benefits" className="py-20 px-4 bg-gray-900/50 animate-on-scroll">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible.benefits ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Kenapa Pilih <span className="text-red-500 animate-pulse">Paduka AI Agency?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "100% White-label Solutions",
                desc: "Bisnis Anda tetap jadi bintang utama, kami teknisi di balik layar yang invisible.",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Fully Customized, Not Template",
                desc: "Semua workflow dan chatbot dibangun dari nol sesuai kebutuhan unik bisnis Anda.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Ongoing Support & Improvement",
                desc: "Bukan sistem 'tinggal pakai', tapi partnership jangka panjang dengan iterasi berkelanjutan.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise-grade Security",
                desc: "Data bisnis Anda ter-enkripsi dan dijaga ketat. Compliance dengan standar keamanan internasional.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group bg-black border border-gray-800 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden hover:scale-[1.02]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 text-red-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION with particle effects */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Business
            <br />
            with <span className="text-red-500 animate-pulse">AI Technology?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join hundreds of businesses already using our AI solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="group relative bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center overflow-hidden">
              <span className="relative z-10">Start Free Consultation</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="bg-transparent border-2 border-gray-700 hover:border-red-500 hover:bg-red-500/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget with pulse effect */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
        <button className="relative bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-12">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(50% 0 20% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(10% 0 60% 0); transform: translate(-2px, 1px); }
          80% { clip-path: inset(80% 0 5% 0); transform: translate(1px, -1px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(20% 0 40% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
          80% { clip-path: inset(10% 0 80% 0); transform: translate(-1px, 1px); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes counter {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glitch-1 {
          animation: glitch-1 2s infinite linear alternate-reverse;
          color: #ef4444;
          mix-blend-mode: screen;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 2s infinite linear alternate-reverse;
          color: #f97316;
          mix-blend-mode: screen;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-counter {
          animation: counter 2s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}