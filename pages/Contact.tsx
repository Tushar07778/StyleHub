
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [findingStore, setFindingStore] = useState(false);
  const [storeResults, setStoreResults] = useState<{text: string, links: any[]} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  const findNearbyStores = async () => {
    setFindingStore(true);
    setStoreResults(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let lat = 31.2185; // Dharamshala approx
      let lng = 76.2704;

      if (navigator.geolocation) {
        try {
          const pos: any = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 });
          });
          lat = pos.coords.latitude;
          lng = pos.coords.longitude;
        } catch (e) {
          console.warn("Geolocation failed, using default coordinates");
        }
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Find 3 highly-rated clothing stores or boutiques near my current location. Provide their names and a short description.",
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: lat,
                longitude: lng
              }
            }
          }
        },
      });

      const links = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setStoreResults({
        text: response.text || "Here are some top-rated fashion spots near you:",
        links: links
      });
    } catch (error) {
      console.error("Store finder error:", error);
    } finally {
      setFindingStore(false);
    }
  };

  const socialPlatforms = [
    { name: 'Instagram', icon: 'fa-instagram', color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600', url: 'https://instagram.com/stylehub' },
    { name: 'Facebook', icon: 'fa-facebook-f', color: 'hover:bg-[#1877F2]', url: 'https://facebook.com/stylehub' },
    { name: 'Twitter', icon: 'fa-x-twitter', color: 'hover:bg-black', url: 'https://twitter.com/stylehub' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', color: 'hover:bg-[#0A66C2]', url: 'https://linkedin.com/company/stylehub' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Background"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-slate-900/80 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-md">
            Customer Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-none">
            Let&apos;s Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Conversation</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about sizing, styling, or shipping, our team is ready to help you shine.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Contact Form Card */}
          <div className="lg:col-span-8 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 p-8 md:p-12 border border-white/40">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Send Message</h2>
              <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
            </div>

            {submitted ? (
              <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 p-8 rounded-3xl flex flex-col items-center text-center gap-4 animate-fadeIn">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                  <i className="fa-solid fa-paper-plane text-3xl text-indigo-600"></i>
                </div>
                <h3 className="text-2xl font-bold">Inquiry Received!</h3>
                <p className="text-slate-600 max-w-sm">
                  Thank you for reaching out. A StyleHub specialist will contact you via email within the next 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-indigo-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-300"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-300"
                      placeholder="rahul@example.com"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">How can we help you?</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-300 resize-none"
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="flex items-center justify-between pt-4">
                   <p className="text-xs text-slate-400 italic">
                    By submitting, you agree to our privacy policy.
                   </p>
                  <button 
                    type="submit"
                    className="group bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-200 hover:shadow-indigo-300 flex items-center gap-3 active:scale-95"
                  >
                    Send Message
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:border-indigo-100 transition-colors group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Call Us</h3>
                  <p className="text-slate-500 text-sm mb-3">Available 9am - 9pm IST</p>
                  <a href="tel:9816673077" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition tracking-tight">
                    98166-73077
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:border-indigo-100 transition-colors group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <i className="fa-solid fa-envelope-open-text text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Support</h3>
                  <p className="text-slate-500 text-sm mb-3">Average response: 2 hours</p>
                  <a href="mailto:support@stylehub.com" className="text-indigo-600 font-bold hover:underline">
                    support@stylehub.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:border-indigo-100 transition-colors group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Visit Store</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed mb-1">
                    Kotwali Bazar, Dharamshala,<br />
                    Distt. Kangra, (H.P)
                  </p>
                  <a href="https://maps.google.com/?q=Kotwali+Bazar+Dharamshala" target="_blank" className="text-xs text-indigo-500 font-bold uppercase tracking-wider hover:text-indigo-700 transition">
                    View on Map &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Connectivity Section */}
        <section className="mt-20 py-16 px-8 bg-white rounded-[3rem] shadow-xl border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Join Our Style Community</h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
              Stay connected for exclusive behind-the-scenes content, new collection reveals, and the latest trends from StyleHub.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialPlatforms.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 overflow-hidden ${social.color} hover:-translate-y-2 shadow-sm hover:shadow-2xl`}
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-slate-900 mb-4 group-hover:scale-110 group-hover:text-white group-hover:bg-transparent transition-all duration-500">
                   <i className={`fa-brands ${social.icon} text-2xl`}></i>
                </div>
                <span className="relative z-10 font-bold text-slate-800 group-hover:text-white transition-colors duration-500">{social.name}</span>
                <span className="relative z-10 text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-white/80 transition-colors duration-500 font-bold mt-1">Follow Us</span>
              </a>
            ))}
          </div>
        </section>

        {/* AI Store Locator Card */}
        <div className="mt-20 relative">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative border border-slate-100">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </div>
                  <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">AI Experience</span>
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Discover Fashion <br /> Near Your <span className="text-indigo-600">Current Location</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
                  Cannot wait for shipping? Use our AI-powered store finder to locate premium boutiques and pop-up shops in your immediate neighborhood.
                </p>
                <button 
                  onClick={findNearbyStores}
                  disabled={findingStore}
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center gap-3 disabled:opacity-50 active:scale-95"
                >
                  {findingStore ? (
                    <><i className="fa-solid fa-spinner animate-spin"></i> Analyzing Local Map...</>
                  ) : (
                    <><i className="fa-solid fa-crosshairs"></i> Locate Nearby Stores</>
                  )}
                </button>
              </div>
              
              <div className="relative">
                 <div className="bg-slate-50 rounded-[2.5rem] p-8 min-h-[400px] border border-slate-100 flex flex-col">
                  {!storeResults && !findingStore && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-200 mb-6 shadow-sm">
                        <i className="fa-solid fa-map-location-dot text-4xl"></i>
                      </div>
                      <p className="text-slate-400 font-medium">Click the button to scan your area</p>
                    </div>
                  )}

                  {findingStore && (
                    <div className="flex-1 flex flex-col justify-center gap-6">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="animate-pulse flex gap-4">
                          <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                          <div className="flex-1 space-y-3">
                            <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                            <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {storeResults && (
                    <div className="animate-fadeIn">
                      <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                         <i className="fa-solid fa-star text-yellow-400"></i> Local Recommendations
                      </h4>
                      <div className="space-y-4">
                        {storeResults.links.map((chunk: any, i: number) => (
                          chunk.maps && (
                            <a 
                              key={i} 
                              href={chunk.maps.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between bg-white p-5 rounded-2xl border border-slate-100 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                  <i className="fa-solid fa-shop"></i>
                                </div>
                                <div>
                                  <p className="font-bold text-slate-900 tracking-tight">{chunk.maps.title || "Elite Fashion Point"}</p>
                                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-0.5">Fashion Boutique</p>
                                </div>
                              </div>
                              <i className="fa-solid fa-chevron-right text-slate-300 group-hover:text-indigo-600 transition-colors"></i>
                            </a>
                          )
                        ))}
                      </div>
                      <p className="mt-8 text-xs text-slate-400 text-center font-medium italic">
                        Real-time data powered by Google Maps
                      </p>
                    </div>
                  )}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-32 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500">Quick answers to common questions about StyleHub.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {[
              { q: "What is the return policy?", a: "We offer a 30-day no-questions-asked return policy for all items that are unworn and have original tags." },
              { q: "Do you ship internationally?", a: "Yes, StyleHub ships to over 50 countries worldwide. Shipping times and costs vary by location." },
              { q: "How can I track my order?", a: "Once your order is shipped, you will receive a tracking link via email. You can also view status in your Dashboard." },
              { q: "Are your clothes sustainable?", a: "We prioritize organic cotton and recycled materials in 70% of our collections to reduce our environmental footprint." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm shrink-0">?</span>
                  {item.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-11">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
