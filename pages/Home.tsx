
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2500&auto=format&fit=crop" 
            alt="Fashion Banner"
            className="w-full h-full object-cover opacity-50 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <span className="text-indigo-200 text-xs font-bold tracking-widest uppercase">New Season Arrivals</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Crafting <span className="italic font-light">Your</span> <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400 animate-gradient-x">Unique Style</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
              Explore a curated selection of premium garments that blend timeless elegance with modern comfort. Sustainable fashion, redefined.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/women" className="group bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-2xl flex items-center gap-3 active:scale-95">
                Explore Collection
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link to="/men" className="bg-slate-800/40 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800/60 transition-all duration-300 border border-slate-700 active:scale-95">
                Shop Men
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:block">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-truck-fast', title: 'Global Delivery', desc: 'Fast & secure worldwide shipping' },
              { icon: 'fa-leaf', title: 'Eco-Friendly', desc: 'Sustainable materials & ethics' },
              { icon: 'fa-shield-check', title: 'Secure Payment', desc: '100% encrypted transactions' },
              { icon: 'fa-arrows-rotate', title: 'Free Returns', desc: 'Easy 30-day exchange policy' }
            ].map((value, i) => (
              <div key={i} className="flex items-center gap-5 p-6 rounded-3xl bg-white shadow-sm border border-slate-100 group hover:shadow-md hover:border-indigo-100 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <i className={`fa-solid ${value.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{value.title}</h3>
                  <p className="text-slate-500 text-xs mt-0.5 tracking-tight">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lifestyle Category Section with Vivid Full-Screen Images */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Discover Your Identity</span>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">A New Era of <br /><span className="text-indigo-600 italic font-medium">Wardrobe</span> Essentials</h2>
            </div>
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed border-l-2 border-indigo-100 pl-4 font-medium italic">
              Carefully curated pieces that define modern sophistication across generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[900px]">
            {/* WOMEN - High Fashion Focus */}
            <div className="lg:col-span-7 relative group rounded-[3.5rem] overflow-hidden shadow-2xl h-[600px] lg:h-full bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                alt="Women's High Fashion" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent group-hover:via-indigo-900/30 transition-all duration-700"></div>
              
              <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
                <div className="relative z-10 animate-slideUp">
                  <div className="inline-flex items-center gap-2 bg-indigo-600/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] mb-6 shadow-xl border border-white/20">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Premium Series
                  </div>
                  <h3 className="text-white text-7xl md:text-8xl font-black tracking-tighter mb-4 leading-none transition-transform group-hover:-translate-y-2 duration-500">WOMEN</h3>
                  <p className="text-slate-200 text-lg md:text-xl max-w-md mb-8 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    Effortless elegance redefined. Explore our latest couture collection designed for every occasion.
                  </p>
                  
                  <Link to="/women" className="group/btn inline-flex items-center gap-5 bg-white text-slate-900 px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95">
                    Shop Couture
                    <i className="fa-solid fa-arrow-right-long group-hover/btn:translate-x-2 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Side Grid for Men & Kids */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8 h-full">
              {/* MEN - Urban Sophistication */}
              <div className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl h-[450px] lg:h-full bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1400&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  alt="Men's Urban Collection" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/40 to-transparent transition-all duration-500"></div>
                
                <div className="absolute inset-y-0 left-0 p-10 md:p-12 flex flex-col justify-center">
                  <div className="relative z-10">
                    <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Modern Man</span>
                    <h3 className="text-white text-6xl font-black tracking-tighter mb-4 leading-none">MEN</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Sharp lines, premium fabrics, and unparalleled comfort for the modern lifestyle.
                    </p>
                    <Link to="/men" className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95">
                      Explore Urbane
                    </Link>
                  </div>
                </div>

                {/* Exclusive Tag */}
                <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-[2.5rem] hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                   <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Hot Release</p>
                   <p className="text-white font-bold text-lg italic tracking-tight">Tech-Silk Blazers</p>
                </div>
              </div>

              {/* KIDS - Playful Adventure */}
              <div className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl h-[450px] lg:h-full bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1400&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  alt="Kids' Playful Collection" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent transition-all duration-500"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="relative z-10 flex items-end justify-between gap-6">
                    <div>
                      <h3 className="text-white text-6xl font-black tracking-tighter mb-2 leading-none">KIDS</h3>
                      <p className="text-purple-100 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                        Comfortable. Durable. Play-Ready.
                      </p>
                    </div>
                    <Link to="/kids" className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-2xl hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110 active:scale-90">
                      <i className="fa-solid fa-arrow-right text-xl"></i>
                    </Link>
                  </div>
                </div>

                {/* Playful Stickers */}
                <div className="absolute top-10 left-10 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                   <div className="bg-yellow-400 text-slate-950 px-5 py-2 rounded-2xl font-black text-xs uppercase tracking-tighter shadow-2xl rotate-[-8deg]">
                      100% Kid Proof
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Our Best Sellers</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Season Highlights</h2>
              <p className="text-slate-500 mt-4 max-w-lg">The most loved pieces by our community. Hand-picked for their exceptional quality and style.</p>
            </div>
            <Link to="/men" className="group text-slate-900 font-bold flex items-center gap-2 hover:text-indigo-600 transition">
              View Entire Catalog
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">What Our Fashion <br /> Community Says</h2>
              <div className="space-y-8">
                {[
                  { name: "Sophia Mitchell", role: "Vogue Editor", text: "StyleHub has redefined the online boutique experience. The quality of the cashmere items is simply unparalleled for the price point." },
                  { name: "Marcus Chen", role: "Lifestyle Blogger", text: "Finding sustainable clothing that actually looks sharp used to be a struggle. StyleHub makes it effortless and stylish." }
                ].map((testi, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm relative">
                    <i className="fa-solid fa-quote-left absolute top-6 right-8 text-indigo-100 text-5xl"></i>
                    <p className="text-slate-700 italic leading-relaxed mb-6">&quot;{testi.text}&quot;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testi.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{testi.name}</h4>
                        <p className="text-indigo-600 text-xs font-semibold">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523944339743-0fe06f079939?q=80&w=1000&auto=format&fit=crop" 
                  alt="Testimonial Model" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-[2rem] shadow-xl max-w-xs animate-bounce-slow">
                <p className="text-2xl font-black mb-1">50k+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Happy Customers Globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Newsletter Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Join the Inner Circle</h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Unlock 15% off your first order. Be the first to receive exclusive invitations to private sales and trend reports.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-4 focus:ring-white/20 backdrop-blur-md transition-all"
                />
                <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-slate-100 transition shadow-xl active:scale-95">
                  Subscribe
                </button>
              </form>
              <p className="mt-8 text-indigo-200/50 text-xs">
                By subscribing, you agree to our Terms of Use and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
