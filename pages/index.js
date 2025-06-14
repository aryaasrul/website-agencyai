import React, { useState } from 'react';
import { ChevronRight, Zap, MessageSquare, BarChart3, Shield, Headphones, Settings, ArrowRight } from 'lucide-react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent"></div>
        
        {/* Animated dots pattern */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-8 left-8 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold">AI</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Meet Powerful of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Artificial Intelligence
            </span>
            <br />
            Business Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Otomatisasi Bisnis & Chatbot AI untuk UMKM dan Perusahaan Modern.
            Kami membangun sistem kerja otomatis yang membuat bisnismu makin efisien.
          </p>

          <button className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Konsultasi Gratis Sekarang
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Large Feature Card */}
            <div className="md:col-span-2 lg:col-span-1 bg-gray-900 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-7xl font-bold text-red-500 mb-4">100+</h3>
                <h4 className="text-2xl font-bold mb-4">Awesome collection of different blocks</h4>
                <p className="text-gray-400">
                  Dengan berbagai template workflow, widget chatbot, dan halaman pre-built, 
                  kami siap membangun solusi AI yang exceptional untuk bisnismu.
                </p>
              </div>
            </div>

            {/* Color Scheme Card */}
            <div 
              className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard('color')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${hoveredCard === 'color' ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className="relative z-10">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Solutions</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Color scheme</span>
                </div>
                <h4 className={`text-xl font-bold mb-4 transition-all duration-300 ${hoveredCard === 'color' ? 'text-red-500' : ''}`}>
                  We have created two color schemes for your satisfaction
                </h4>
                <p className="text-gray-400">
                  Dashboard & chatbot dengan tema light atau dark mode. 
                  Sesuaikan dengan brand identity perusahaan Anda.
                </p>
              </div>
            </div>

            {/* Multilingual Card */}
            <div 
              className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard('multilingual')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${hoveredCard === 'multilingual' ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Multilingual</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">RTL</span>
                </div>
                <h4 className={`text-xl font-bold mb-4 transition-all duration-300 ${hoveredCard === 'multilingual' ? 'text-red-500' : ''}`}>
                  Multilingual & translation ready
                </h4>
                <p className="text-gray-400">
                  Chatbot multibahasa Indonesia, Inggris, dan bahasa daerah. 
                  Jangkau lebih banyak customer.
                </p>
              </div>
            </div>

            {/* Pre-built Pages Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
              <h3 className="text-7xl font-bold mb-4">90+</h3>
              <h4 className="text-2xl font-bold mb-2">Pre-built pages in two color schemes</h4>
              <p className="text-white/80">
                Template siap pakai untuk berbagai industri dan use case bisnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Unleashing the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Power of AI
            </span>
            <br />
            in shaping the future of technology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group relative">
              <div className="bg-gray-900 rounded-3xl p-8 h-full transition-all duration-300 group-hover:bg-gray-800">
                <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Workflow Automation</h3>
                <p className="text-gray-400 mb-6">
                  Otomatisasi proses bisnis end-to-end. Input data otomatis, 
                  notifikasi real-time, dan pelaporan tanpa manual entry.
                </p>
                <button className="text-red-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative">
              <div className="bg-gray-900 rounded-3xl p-8 h-full transition-all duration-300 group-hover:bg-gray-800">
                <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Chatbot Development</h3>
                <p className="text-gray-400 mb-6">
                  Chatbot AI untuk customer service & internal team. 
                  Integrasi WhatsApp, Instagram, dan website.
                </p>
                <button className="text-red-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative">
              <div className="bg-gray-900 rounded-3xl p-8 h-full transition-all duration-300 group-hover:bg-gray-800">
                <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Dashboard & Report</h3>
                <p className="text-gray-400 mb-6">
                  Dashboard analytics real-time dengan AI insights. 
                  Laporan otomatis langsung ke WhatsApp/email.
                </p>
                <button className="text-red-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Kenapa Pilih <span className="text-red-500">Paduka AI Agency?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "100% White-label Solutions",
                desc: "Bisnis Anda tetap jadi bintang utama, kami teknisi di balik layar yang invisible."
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Fully Customized, Not Template",
                desc: "Semua workflow dan chatbot dibangun dari nol sesuai kebutuhan unik bisnis Anda."
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Ongoing Support & Improvement",
                desc: "Bukan sistem 'tinggal pakai', tapi partnership jangka panjang dengan iterasi berkelanjutan."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise-grade Security",
                desc: "Data bisnis Anda ter-enkripsi dan dijaga ketat. Compliance dengan standar keamanan internasional."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-red-500/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 text-red-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business
            <br />
            with <span className="text-red-500">AI Technology?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join hundreds of businesses already using our AI solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center">
              Start Free Consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-gray-700 hover:border-red-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}