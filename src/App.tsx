import { useState, useEffect } from 'react';
// Note: logo.png and interactive_campus.png were not found after the directory move.
// Using existing assets as temporary placeholders to resolve Vite import errors.
import logo from './assets/child_painting.png'; 
import hero1 from './assets/download/Preschool_smart_classroom_interior_202605161255.jpeg';
import hero2 from './assets/download/Children_playing_in_classroom_202605161255.jpeg';
import hero3 from './assets/download/Children_playing_classroom_wall_decor_202605161255.jpeg';
import hero4 from './assets/download/Preschool_smart_classroom_interior_202605161255_2.jpeg';
import mapImg from './assets/teacher_reading.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('playgroup');
  const [modalOpen, setModalOpen] = useState(false);
  
  // Philosophy Card Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.philosophy-card-animate');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Form logic
  const [formState, setFormState] = useState({ name: '', email: '', program: '' });
  const [touched, setTouched] = useState({ name: false, email: false, program: false });

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && isEmailValid(formState.email) && formState.program) {
      alert('Thank you! Your tour request has been sent.');
      setFormState({ name: '', email: '', program: '' });
      setTouched({ name: false, email: false, program: false });
    }
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Mobile Sticky Call Button */}
      <div className="fixed bottom-6 right-6 z-[60] md:hidden">
        <a className="flex items-center justify-center w-16 h-16 bg-[#c05c42] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all" href="tel:8483848486">
          <span className="material-symbols-outlined text-3xl">call</span>
        </a>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center gap-8 md:hidden transition-transform duration-500 ${!mobileMenuOpen ? 'hidden-overlay' : ''}`} id="mobile-menu-overlay">
        <button className="absolute top-8 right-8 p-2" onClick={toggleMenu}>
          <span className="material-symbols-outlined text-4xl text-on-surface">close</span>
        </button>
        <a className="text-3xl font-display-lg text-primary" href="#philosophy" onClick={toggleMenu}>Philosophy</a>
        <a className="text-3xl font-display-lg text-on-surface" href="#programs" onClick={toggleMenu}>Programs</a>
        <a className="text-3xl font-display-lg text-on-surface" href="#facilities" onClick={toggleMenu}>Facilities</a>
        <a className="text-3xl font-display-lg text-on-surface" href="#locate" onClick={toggleMenu}>Locate Us</a>
        <button className="mt-4 bg-primary text-on-primary font-label-md text-xl px-10 py-4 rounded-full shadow-[0_6px_0_0_#7e2b15]" onClick={toggleMenu}>
          Enroll Now
        </button>
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-unit left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full border border-white/50 bg-white/40 backdrop-blur-md z-50 flex justify-between items-center px-8 py-4 shadow-terracotta-soft">
        <div className="flex items-center gap-3">
          <img alt="Renaissance Preschool Logo" className="h-10 w-10 object-contain" src={logo}/>
          <span className="font-display-lg text-headline-md text-on-surface font-bold tracking-tight hidden sm:block">Renaissance Preschool</span>
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="font-label-md text-label-md text-secondary font-bold border-b-2 border-secondary pb-1 transition-all" href="#philosophy">Philosophy</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105" href="#programs">Programs</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105" href="#facilities">Facilities</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105" href="#locate">Locate Us</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-full hover:scale-105 transition-all active:scale-95 shadow-[0_4px_0_0_#7e2b15] hidden sm:block">
            Enroll Now
          </button>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-on-surface" onClick={toggleMenu}>
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      <main className="">
        {/* Hero Section */}
        <section className="px-container-padding grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center h-screen mb-asymmetric-gap-lg overflow-hidden">
          <div className="lg:col-span-5 z-10 text-center lg:text-left">
            <span className="inline-block px-6 py-2 bg-slate-200 text-slate-600 font-label-md text-sm rounded-full mb-6">
              Admissions Open 2026-27
            </span>
            <h1 className="font-display-lg text-5xl xl:text-6xl mb-6 leading-[1.1] max-w-xl mx-auto lg:mx-0 font-bold">
              Where Learning Flows Through <br/>
              <span className="text-primary italic font-normal">Love &amp; Laughter</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-80">
              Nurturing every child's innate curiosity through a heritage of academic prestige and holistic play-based development.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-10 py-5 rounded-full hover:scale-105 transition-all shadow-[0_8px_0_0_#7e2b15]">
                Enroll Your Child
              </button>
              <button className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:gap-4 transition-all px-4 py-4 font-bold group">
                Call Admissions <span className="material-symbols-outlined transition-all group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 xl:gap-6 items-center w-full max-w-2xl max-h-[70vh]">
              {/* Left Column */}
              <div className="space-y-4 xl:space-y-6">
                {/* Terracotta Circular Container */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square bg-primary flex items-center justify-center animate-float">
                  <img alt="Preschool smart classroom interior" className="w-full h-full object-cover" src={hero1} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
                {/* Image Container */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square animate-float" style={{ animationDelay: '1.2s' }}>
                  <img alt="Preschool smart classroom" className="w-full h-full object-cover" src={hero4} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4 xl:space-y-6 pt-10 xl:pt-12">
                {/* Image Card 1 */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square bg-surface-container-highest animate-float" style={{ animationDelay: '0.6s' }}>
                  <img alt="Children playing in classroom" className="w-full h-full object-cover" src={hero2} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
                {/* Image Card 2 */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square bg-surface-container animate-float" style={{ animationDelay: '1.8s' }}>
                  <img alt="Children playing classroom wall decor" className="w-full h-full object-cover" src={hero3} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-container-padding py-asymmetric-gap-lg bg-surface-container-low rounded-[4rem] mx-container-padding mb-asymmetric-gap-lg overflow-hidden" id="philosophy">
          <div className="max-w-4xl mb-16">
            <h2 className="font-display-lg text-headline-lg text-primary mb-4">Our Foundational Philosophy</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Bridging traditional prestige with modern pedagogical innovation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-container/30 p-10 rounded-xl hover:-translate-y-2 transition-all duration-300 philosophy-card philosophy-card-animate" style={{ animationDelay: '0s' }}>
              <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 icon-container transition-colors duration-300">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-secondary-container">Emotional Security</h3>
              <p className="text-on-surface-variant leading-relaxed">A sanctuary where every child feels seen, heard, and deeply loved, forming the base for all future learning.</p>
            </div>
            <div className="bg-primary-fixed p-10 rounded-xl md:asymmetric-offset-down hover:-translate-y-2 transition-all duration-300 philosophy-card philosophy-card-animate" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 icon-container transition-colors duration-300">
                <span className="material-symbols-outlined">play_shapes</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-primary-fixed-variant">Experiential Play</h3>
              <p className="text-on-surface-variant leading-relaxed">Curiosity-driven discovery using tactile materials and fluid environments designed for natural engagement.</p>
            </div>
            <div className="bg-tertiary-fixed p-10 rounded-xl hover:-translate-y-2 transition-all duration-300 philosophy-card philosophy-card-animate" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center mb-6 icon-container transition-colors duration-300">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-tertiary-fixed-variant">Advanced Readiness</h3>
              <p className="text-on-surface-variant leading-relaxed">Preparing students for future academic excellence through high-end structured values and intellectual grounding.</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="px-container-padding py-asymmetric-gap-lg" id="programs">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-display-lg mb-4">Developmental Programs</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-12 glass-panel p-2 rounded-full max-w-fit">
              {['playgroup', 'prek', 'kindergarten'].map((tab) => (
                <button
                  key={tab}
                  className={`px-8 py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === tab ? 'bg-primary text-white' : 'hover:bg-surface-container-high'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'playgroup' ? 'Play Group' : tab === 'prek' ? 'Pre-Kindergarten' : 'Kindergarten'}
                </button>
              ))}
            </div>
            
            <div className="program-content-wrapper w-full max-w-5xl">
              <div className={`program-pane active glass-panel p-8 md:p-16 rounded-[3rem] shadow-terracotta-soft grid md:grid-cols-2 gap-12 items-center ${activeTab !== 'playgroup' ? 'hidden' : ''}`} id="playgroup-content">
                <div>
                  <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Ages 2.5 - 3.5 Years</span>
                  <h3 className="font-display-lg text-headline-lg mb-6 italic">The Play Group</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">A gentle introduction to social environments. We focus on sensory exploration, motor skill development, and building self-confidence through supervised organic play.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <svg className="heart-bullet" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                      Language immersion through music
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="heart-bullet" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                      Fine motor skill activity kits
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="heart-bullet" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                      Daily socio-emotional circles
                    </li>
                  </ul>
                  <button className="border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">Download Curriculum</button>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square bg-surface-container-high relative">
                  <img className="w-full h-full object-cover" src={hero1}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
              
              {activeTab === 'prek' && (
                <div className="program-pane active glass-panel p-8 md:p-16 rounded-[3rem] shadow-terracotta-soft grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Ages 3.5 - 4.5 Years</span>
                    <h3 className="font-display-lg text-headline-lg mb-6 italic">Pre-Kindergarten</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">Focusing on early literacy, numeracy, and environmental awareness.</p>
                    <button className="border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">Download Curriculum</button>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square bg-surface-container-high relative">
                    <img className="w-full h-full object-cover" src={hero2}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </div>
              )}
              {activeTab === 'kindergarten' && (
                <div className="program-pane active glass-panel p-8 md:p-16 rounded-[3rem] shadow-terracotta-soft grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Ages 4.5 - 5.5 Years</span>
                    <h3 className="font-display-lg text-headline-lg mb-6 italic">Kindergarten</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">Preparing for formal schooling with advanced logic and creative expression.</p>
                    <button className="border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">Download Curriculum</button>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square bg-surface-container-high relative">
                    <img className="w-full h-full object-cover" src={hero3}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="bg-surface-container-high text-primary font-bold px-10 py-4 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-terracotta-soft" onClick={() => setModalOpen(true)}>
                Quick Comparison
              </button>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="px-container-padding py-asymmetric-gap-lg" id="facilities">
          <h2 className="font-display-lg text-headline-lg text-center mb-16">Premium Campus Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group cursor-default">
              <div className="facility-card-inner h-64 mb-6 rounded-[40px] shadow-terracotta-soft bg-surface-container-highest transition-transform duration-500 group-hover:scale-[1.02]">
                <img className="w-full h-full object-cover" src={hero4}/>
                <div className="facility-caption font-body-md text-sm">Equipped with interactive smart boards and child-safe digital learning tools for early tech exposure.</div>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">Smart Classrooms</h4>
              <p className="text-on-surface-variant text-sm">Technology-enabled learning zones tailored for early interaction.</p>
            </div>
            {/* Additional facility cards could be added here */}
          </div>
        </section>

        {/* Visit Our Campus Section */}
        <section className="px-container-padding py-asymmetric-gap-lg bg-surface-container" id="locate">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="map-interactive relative rounded-3xl overflow-hidden h-[450px] shadow-terracotta-soft cursor-pointer group">
              <img alt="Campus location map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={mapImg}/>
              <div className="map-marker absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none">
                <div className="relative">
                  <svg className="drop-shadow-lg" fill="#c05c42" height="60" viewBox="0 0 384 512" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center -translate-y-1">
                    <img className="w-5 h-5 rounded-full object-cover border border-white/20" src={logo}/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display-lg text-headline-lg mb-8">Visit Our Campus</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-2xl shrink-0">location_on</span>
                  <div className="space-y-2">
                    <p className="text-on-surface-variant font-body-md leading-relaxed">102, Kumari Compound, Bubere Hall Road, Beside Food Inn Restaurant, Nizampur, Bhiwandi</p>
                    <a className="inline-flex items-center gap-1.5 text-secondary font-label-md text-sm hover:underline decoration-secondary/30" href="https://maps.google.com" target="_blank" rel="noreferrer">
                      Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-2xl shrink-0">call</span>
                  <p className="text-on-surface-variant self-center font-body-md">8483848486 / 9323956718</p>
                </div>
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-2xl shrink-0">schedule</span>
                  <p className="text-on-surface-variant self-center font-body-md">Mon - Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Marquee */}
      <section className="py-16 overflow-hidden bg-surface-container-low border-y border-primary/20">
        <div className="animate-marquee">
          <div className="flex gap-12 items-center px-6 whitespace-nowrap">
            <span className="font-headline-lg italic md:text-2xl text-primary text-xl">"A second home for my child."</span>
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-primary text-xl">"The curriculum is truly revolutionary."</span>
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-primary text-xl">"Renaissance combines heart and heritage."</span>
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
          </div>
          <div className="flex gap-12 items-center px-6 whitespace-nowrap">
            <span className="font-headline-lg italic md:text-2xl text-primary text-xl">"A second home for my child."</span>
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-primary text-xl">"The curriculum is truly revolutionary."</span>
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-primary text-xl">"Renaissance combines heart and heritage."</span>
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="bg-inverse-surface text-surface-variant px-container-padding py-asymmetric-gap-sm w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-asymmetric-gap-lg mb-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img alt="Renaissance Preschool Logo" className="h-12 w-12 brightness-200" src={logo}/>
              <span className="font-display-lg text-headline-md text-primary-fixed-dim">Renaissance Preschool</span>
            </div>
            <div className="space-y-2">
              <p className="font-body-md">102, Kumari Compound, Bubere Hall Road, Beside Food Inn Restaurant, Nizampur, Bhiwandi</p>
              <p className="font-body-md">Phone: 8483848486, 9323956718</p>
            </div>
          </div>
          
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h4 className="font-headline-md text-headline-md text-white mb-6">Request a Campus Tour</h4>
            <form className="space-y-5" id="tour-request-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <input
                    className={`w-full bg-white/10 border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-primary focus:border-primary transition-all pr-10 ${touched.name ? (formState.name ? 'input-valid' : 'input-invalid animate-shake') : ''}`}
                    name="name"
                    placeholder="Your Name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onBlur={() => handleBlur('name')}
                  />
                  <span className={`validation-icon material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary transition-opacity ${touched.name && formState.name ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                </div>
                <div className="relative group">
                  <input
                    className={`w-full bg-white/10 border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-primary focus:border-primary transition-all pr-10 ${touched.email ? (isEmailValid(formState.email) ? 'input-valid' : 'input-invalid animate-shake') : ''}`}
                    name="email"
                    placeholder="Email Address"
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onBlur={() => handleBlur('email')}
                  />
                  <span className={`validation-icon material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary transition-opacity ${touched.email && isEmailValid(formState.email) ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                </div>
              </div>
              <div className="relative">
                <select
                  className="w-full bg-white/10 border-white/20 rounded-xl text-white focus:ring-primary focus:border-primary transition-all"
                  name="program"
                  required
                  value={formState.program}
                  onChange={(e) => setFormState({ ...formState, program: e.target.value })}
                  onBlur={() => handleBlur('program')}
                >
                  <option value="" className="text-black">Select Program</option>
                  <option value="playgroup" className="text-black">Play Group</option>
                  <option value="prek" className="text-black">Pre-Kindergarten</option>
                  <option value="kindergarten" className="text-black">Kindergarten</option>
                </select>
              </div>
              <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-[0_6px_0_0_#7e2b15]" type="submit">
                Send Request
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Renaissance Preschool. Heritage in Education.</p>
          <div className="flex gap-8">
            <a className="hover:underline decoration-primary-fixed-dim" href="#">Privacy Policy</a>
            <a className="hover:underline decoration-primary-fixed-dim" href="#">Contact</a>
          </div>
        </div>
      </footer>

      {/* Comparison Modal */}
      {modalOpen && (
        <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white/50 glass-panel">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-display-lg text-headline-lg">Program Comparison</h2>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-8 overflow-x-auto">
              <table className="w-full text-left font-body-md">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 font-bold text-primary">Dimension</th>
                    <th className="py-4 px-4 font-bold">Play Group</th>
                    <th className="py-4 px-4 font-bold">Pre-Kindergarten</th>
                    <th className="py-4 px-4 font-bold">Kindergarten</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 px-4 font-bold text-gray-600">Age Range</td>
                    <td className="py-4 px-4">2.5 - 3.5 Years</td>
                    <td className="py-4 px-4">3.5 - 4.5 Years</td>
                    <td className="py-4 px-4">4.5 - 5.5 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
