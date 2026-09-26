import { useState, useEffect } from 'react';
// Note: logo.png and interactive_campus.png were not found after the directory move.
// Using existing assets as temporary placeholders to resolve Vite import errors.
import logo from './assets/child_painting.png'; 
import hero1 from './assets/download/Preschool_smart_classroom_interior_202605161255.jpeg';
import hero2 from './assets/download/Children_playing_in_classroom_202605161255.jpeg';
import hero3 from './assets/download/Children_playing_classroom_wall_decor_202605161255.jpeg';
import hero4 from './assets/download/Preschool_smart_classroom_interior_202605161255_2.jpeg';
import mapImg from './assets/teacher_reading.png';
<<<<<<< HEAD
import teacherReadingBook from './assets/Teacher_reading_book_to_children_202605161255.jpeg';

interface GalleryItem {
  id: number;
  title: string;
  category: 'learning' | 'play' | 'creative';
  categoryLabel: string;
  description: string;
  src: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Storytime & Literacy',
    category: 'creative',
    categoryLabel: 'Storytime',
    description: 'Captivating picture books and rhymes that nurture imagination and early language comprehension.',
    src: teacherReadingBook,
  },
  {
    id: 2,
    title: 'Early Geometry & Sensory Play',
    category: 'learning',
    categoryLabel: 'Early Learning',
    description: 'Hands-on discovery with vibrant tactile boards, pattern blocks, and early cognitive games.',
    src: hero3,
  },
  {
    id: 3,
    title: 'Interactive Play & Social Fun',
    category: 'play',
    categoryLabel: 'Social Play',
    description: 'Building joyful friendships, empathy, and cooperation through shared peer activities.',
    src: hero2,
  },
  {
    id: 4,
    title: 'Curated Montessori-Style Classrooms',
    category: 'learning',
    categoryLabel: 'Classroom',
    description: 'Spacious, sunlit rooms equipped with low wooden shelves and child-safe materials.',
    src: hero1,
  },
  {
    id: 5,
    title: 'Creative Art & Finger Painting',
    category: 'creative',
    categoryLabel: 'Art & Craft',
    description: 'Expressive arts that encourage fine motor control, color mixing, and free expression.',
    src: logo,
  },
  {
    id: 6,
    title: 'Indoor Safe Exploration Space',
    category: 'play',
    categoryLabel: 'Active Play',
    description: 'A protected, loving environment where toddlers safely crawl, balance, and explore.',
    src: hero4,
  },
];
=======
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('playgroup');
  const [modalOpen, setModalOpen] = useState(false);
<<<<<<< HEAD
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<GalleryItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedGalleryImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
=======
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
  
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
<<<<<<< HEAD
      alert('Thank you! Your inquiry has been sent to Learning Ladders.');
=======
      alert('Thank you! Your tour request has been sent.');
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
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
<<<<<<< HEAD
        <a className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all" href="tel:+918888504353">
=======
        <a className="flex items-center justify-center w-16 h-16 bg-[#c05c42] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all" href="tel:8483848486">
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
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
<<<<<<< HEAD
        <a className="text-3xl font-display-lg text-on-surface" href="#gallery" onClick={toggleMenu}>Gallery</a>
        <a className="text-3xl font-display-lg text-on-surface" href="#locate" onClick={toggleMenu}>Locate Us</a>
        <button className="mt-4 bg-primary text-on-primary font-label-md text-xl px-10 py-4 rounded-full shadow-[0_6px_0_0_#b45309]" onClick={toggleMenu}>
=======
        <a className="text-3xl font-display-lg text-on-surface" href="#locate" onClick={toggleMenu}>Locate Us</a>
        <button className="mt-4 bg-primary text-on-primary font-label-md text-xl px-10 py-4 rounded-full shadow-[0_6px_0_0_#7e2b15]" onClick={toggleMenu}>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
          Enroll Now
        </button>
      </div>

      {/* Top Navigation Bar */}
<<<<<<< HEAD
      <nav className="fixed top-unit left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full border border-white/50 bg-white/40 backdrop-blur-md z-50 flex justify-between items-center px-8 py-4 shadow-brand-soft">
        <div className="flex items-center gap-3">
          <img alt="Learning Ladders Logo" className="h-10 w-10 object-contain" src={logo}/>
          <span className="font-display-lg text-headline-md text-on-surface font-bold tracking-tight hidden sm:block">Learning Ladders</span>
=======
      <nav className="fixed top-unit left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full border border-white/50 bg-white/40 backdrop-blur-md z-50 flex justify-between items-center px-8 py-4 shadow-terracotta-soft">
        <div className="flex items-center gap-3">
          <img alt="Renaissance Preschool Logo" className="h-10 w-10 object-contain" src={logo}/>
          <span className="font-display-lg text-headline-md text-on-surface font-bold tracking-tight hidden sm:block">Renaissance Preschool</span>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="font-label-md text-label-md text-secondary font-bold border-b-2 border-secondary pb-1 transition-all" href="#philosophy">Philosophy</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105" href="#programs">Programs</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105" href="#facilities">Facilities</a>
<<<<<<< HEAD
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105" href="#gallery">Gallery</a>
=======
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors hover:scale-105" href="#locate">Locate Us</a>
        </div>
        
        <div className="flex items-center gap-4">
<<<<<<< HEAD
          <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-full hover:scale-105 transition-all active:scale-95 shadow-[0_4px_0_0_#b45309] hidden sm:block">
=======
          <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-full hover:scale-105 transition-all active:scale-95 shadow-[0_4px_0_0_#7e2b15] hidden sm:block">
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
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
<<<<<<< HEAD
        <section className="px-container-padding grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-screen lg:h-screen mb-asymmetric-gap-lg pt-28 sm:pt-32 pb-12 lg:py-0 overflow-hidden">
          <div className="lg:col-span-5 z-10 text-center lg:text-left">
            <span className="inline-block px-6 py-2 bg-primary-container text-on-primary-container font-label-md text-sm rounded-full mb-6">
              Admissions Open for 2026-27
            </span>
            <h1 className="font-display-lg text-5xl xl:text-6xl mb-6 leading-[1.1] max-w-xl mx-auto lg:mx-0 font-bold">
              Where Every Step is a <br/>
              <span className="text-secondary italic font-normal">Journey of Discovery</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-80">
              Providing Bhiwandi's children with a safe, modern, and affordable foundation for a lifetime of learning.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-10 py-5 rounded-full hover:scale-105 transition-all shadow-[0_8px_0_0_#b45309]">
                Enroll Your Child
              </button>
              <a className="flex items-center gap-2 font-label-md text-label-md text-secondary hover:gap-4 transition-all px-4 py-4 font-bold group" href="tel:+918888504353">
                Call Admissions <span className="material-symbols-outlined transition-all group-hover:translate-x-1">arrow_forward</span>
              </a>
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
            </div>
          </div>
          
          <div className="lg:col-span-7 relative h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 xl:gap-6 items-center w-full max-w-2xl max-h-[70vh]">
              {/* Left Column */}
              <div className="space-y-4 xl:space-y-6">
<<<<<<< HEAD
                <div className="rounded-[2.5rem] overflow-hidden shadow-brand-soft aspect-square bg-primary flex items-center justify-center animate-float">
                  <img alt="Modern classroom interior" className="w-full h-full object-cover" src={hero1} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-brand-soft aspect-square animate-float" style={{ animationDelay: '1.2s' }}>
                  <img alt="Safe learning environment" className="w-full h-full object-cover" src={hero4} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
=======
                {/* Terracotta Circular Container */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square bg-primary flex items-center justify-center animate-float">
                  <img alt="Preschool smart classroom interior" className="w-full h-full object-cover" src={hero1} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
                {/* Image Container */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square animate-float" style={{ animationDelay: '1.2s' }}>
                  <img alt="Preschool smart classroom" className="w-full h-full object-cover" src={hero4} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4 xl:space-y-6 pt-10 xl:pt-12">
<<<<<<< HEAD
                <div className="rounded-[2.5rem] overflow-hidden shadow-brand-soft aspect-square bg-surface-container-highest animate-float" style={{ animationDelay: '0.6s' }}>
                  <img alt="Interactive play area" className="w-full h-full object-cover" src={hero2} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-brand-soft aspect-square bg-surface-container animate-float" style={{ animationDelay: '1.8s' }}>
                  <img alt="Creative classroom decor" className="w-full h-full object-cover" src={hero3} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
=======
                {/* Image Card 1 */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square bg-surface-container-highest animate-float" style={{ animationDelay: '0.6s' }}>
                  <img alt="Children playing in classroom" className="w-full h-full object-cover" src={hero2} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
                </div>
                {/* Image Card 2 */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-terracotta-soft aspect-square bg-surface-container animate-float" style={{ animationDelay: '1.8s' }}>
                  <img alt="Children playing classroom wall decor" className="w-full h-full object-cover" src={hero3} onError={(e) => (e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}/>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
<<<<<<< HEAD
        <section className="px-container-padding py-asymmetric-gap-lg bg-secondary-container/20 rounded-[4rem] mx-container-padding mb-asymmetric-gap-lg overflow-hidden" id="philosophy">
          <div className="max-w-4xl mb-16">
            <h2 className="font-display-lg text-headline-lg text-primary mb-4">Our Community Philosophy</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Affordable, high-quality education focused on our local community's needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-sm hover:-translate-y-2 transition-all duration-300 philosophy-card philosophy-card-animate" style={{ animationDelay: '0s' }}>
              <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-secondary">Safe & Loving</h3>
              <p className="text-on-surface-variant leading-relaxed">A neighborhood sanctuary where every child feels safe and cared for by our dedicated local staff.</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm md:asymmetric-offset-down hover:-translate-y-2 transition-all duration-300 philosophy-card philosophy-card-animate" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">play_shapes</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Modern Learning</h3>
              <p className="text-on-surface-variant leading-relaxed">Bringing the best modern teaching tools to Bhiwandi, making high-quality education accessible to all.</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm hover:-translate-y-2 transition-all duration-300 philosophy-card philosophy-card-animate" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">group</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-tertiary">Community Focused</h3>
              <p className="text-on-surface-variant leading-relaxed">We grow together with our families, building strong local bonds through shared learning and celebration.</p>
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="px-container-padding py-asymmetric-gap-lg" id="programs">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="font-display-lg text-display-lg mb-4">Our Learning Programs</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-12 bg-surface-container p-2 rounded-full max-w-fit">
              {['playgroup', 'prek', 'kindergarten'].map((tab) => (
                <button
                  key={tab}
                  className={`px-8 py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === tab ? 'bg-primary text-white shadow-md' : 'hover:bg-surface-container-high'}`}
=======
            <h2 className="font-display-lg text-display-lg mb-4">Developmental Programs</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-12 glass-panel p-2 rounded-full max-w-fit">
              {['playgroup', 'prek', 'kindergarten'].map((tab) => (
                <button
                  key={tab}
                  className={`px-8 py-3 rounded-full font-label-md text-label-md transition-all ${activeTab === tab ? 'bg-primary text-white' : 'hover:bg-surface-container-high'}`}
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'playgroup' ? 'Play Group' : tab === 'prek' ? 'Pre-Kindergarten' : 'Kindergarten'}
                </button>
              ))}
            </div>
            
            <div className="program-content-wrapper w-full max-w-5xl">
<<<<<<< HEAD
              <div className={`program-pane active bg-white p-8 md:p-16 rounded-[3rem] shadow-brand-soft grid md:grid-cols-2 gap-12 items-center ${activeTab !== 'playgroup' ? 'hidden' : ''}`} id="playgroup-content">
                <div>
                  <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Ages 2.5 - 3.5 Years</span>
                  <h3 className="font-display-lg text-headline-lg mb-6 italic">The Play Group</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">A warm and safe space for your little ones to start their social journey. We focus on gentle play, basic motor skills, and making friends in a loving environment.</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      Learning through fun songs & nursery rhymes
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      Safe indoor activities for motor development
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      Gentle social interaction & sharing
                    </li>
                  </ul>
                  <button className="border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">View Curriculum</button>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square bg-surface-container-high relative">
                  <img className="w-full h-full object-cover" src={hero1} alt="Playgroup activities"/>
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                </div>
              </div>
              
              {activeTab === 'prek' && (
<<<<<<< HEAD
                <div className="program-pane active bg-white p-8 md:p-16 rounded-[3rem] shadow-brand-soft grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Ages 3.5 - 4.5 Years</span>
                    <h3 className="font-display-lg text-headline-lg mb-6 italic">Pre-Kindergarten</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">Building early confidence through fun activities in literacy and numbers. We make learning exciting and approachable for every child in our community.</p>
                    <button className="border-2 border-secondary text-secondary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all">View Curriculum</button>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square bg-surface-container-high relative">
                    <img className="w-full h-full object-cover" src={hero2} alt="Pre-K learning"/>
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                  </div>
                </div>
              )}
              {activeTab === 'kindergarten' && (
<<<<<<< HEAD
                <div className="program-pane active bg-white p-8 md:p-16 rounded-[3rem] shadow-brand-soft grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-tertiary font-bold uppercase tracking-widest text-xs mb-4 block">Ages 4.5 - 5.5 Years</span>
                    <h3 className="font-display-lg text-headline-lg mb-6 italic">Kindergarten</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">Getting ready for big school! We focus on creative expression and simple logic to ensure your child is prepared for their next educational step.</p>
                    <button className="border-2 border-tertiary text-tertiary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-tertiary hover:text-white transition-all">View Curriculum</button>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square bg-surface-container-high relative">
                    <img className="w-full h-full object-cover" src={hero3} alt="Kindergarten preparation"/>
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-12 flex justify-center">
<<<<<<< HEAD
              <button className="bg-white text-primary font-bold px-10 py-4 rounded-full border border-primary/20 hover:bg-primary-container transition-all shadow-md" onClick={() => setModalOpen(true)}>
                Program Details at a Glance
=======
              <button className="bg-surface-container-high text-primary font-bold px-10 py-4 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-terracotta-soft" onClick={() => setModalOpen(true)}>
                Quick Comparison
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
              </button>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="px-container-padding py-asymmetric-gap-lg" id="facilities">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-1.5 bg-secondary/10 text-secondary font-label-md text-xs uppercase tracking-wider rounded-full mb-3">
              Thoughtfully Built Spaces
            </span>
            <h2 className="font-display-lg text-headline-lg md:text-display-lg">Our Neighborhood Campus</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group cursor-default">
              <div className="relative h-64 mb-6 rounded-[40px] shadow-brand-soft overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <img className="w-full h-full object-cover" src={hero1} alt="Modern classrooms"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-white text-center text-sm">
                  Clean, bright, and ventilated classrooms designed for healthy learning.
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">Modern Classrooms</h4>
              <p className="text-on-surface-variant text-sm">Well-equipped spaces for daily activities and focus.</p>
            </div>

            <div className="group cursor-default">
              <div className="relative h-64 mb-6 rounded-[40px] shadow-brand-soft overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <img className="w-full h-full object-cover" src={hero2} alt="Interactive play area"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-white text-center text-sm">
                  Tactile play zones that foster peer collaboration and fine motor skills.
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">Interactive Play</h4>
              <p className="text-on-surface-variant text-sm">Engaging walls and toys designed for shared discovery.</p>
            </div>

            <div className="group cursor-default">
              <div className="relative h-64 mb-6 rounded-[40px] shadow-brand-soft overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <img className="w-full h-full object-cover" src={hero3} alt="Creative arts area"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-white text-center text-sm">
                  Color-rich, inspiring corners for tactile crafts and sensory exploration.
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">Creative Nooks</h4>
              <p className="text-on-surface-variant text-sm">Inspirational corners where young creativity flourishes.</p>
            </div>

            <div className="group cursor-default">
              <div className="relative h-64 mb-6 rounded-[40px] shadow-brand-soft overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <img className="w-full h-full object-cover" src={hero4} alt="Safe activity space"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-white text-center text-sm">
                  Child-proofed, cushioned flooring for carefree active movement.
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">Safe Sanctuary</h4>
              <p className="text-on-surface-variant text-sm">Round-edged, child-safe interior with constant supervision.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-container-padding py-asymmetric-gap-lg bg-surface-container-low/60 rounded-[4rem] mx-container-padding mb-asymmetric-gap-lg" id="gallery">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-5 py-1.5 bg-primary/10 text-primary font-label-md text-xs uppercase tracking-wider rounded-full mb-4">
              Moments of Joy & Growth
            </span>
            <h2 className="font-display-lg text-headline-lg md:text-display-lg mb-4">Life at Learning Ladders</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Every day brings new questions, happy smiles, and exciting discoveries. Take a peek inside our vibrant community preschool.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'learning', label: 'Classroom & Learning' },
                { id: 'play', label: 'Play & Social' },
                { id: 'creative', label: 'Creative & Stories' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id)}
                  className={`px-6 py-2.5 rounded-full font-label-md text-sm transition-all duration-300 ${
                    galleryFilter === tab.id
                      ? 'bg-primary text-white shadow-md scale-105'
                      : 'bg-white hover:bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems
              .filter((item) => galleryFilter === 'all' || item.category === galleryFilter)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryImage(item)}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-brand-soft border border-white/80 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-high">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => ((e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <span className="material-symbols-outlined text-sm">zoom_in</span> Click to enlarge
                      </span>
                    </div>
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-secondary shadow-sm">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-primary font-semibold">
                      <span>View photo</span>
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </div>
                  </div>
                </div>
              ))}
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
          </div>
        </section>

        {/* Visit Our Campus Section */}
        <section className="px-container-padding py-asymmetric-gap-lg bg-surface-container" id="locate">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<<<<<<< HEAD
            <div className="relative rounded-3xl overflow-hidden h-[450px] shadow-brand-soft cursor-pointer group">
              <img alt="Learning Ladders location" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={mapImg}/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none">
                <div className="relative">
                  <svg className="drop-shadow-lg" fill="#f59e0b" height="60" viewBox="0 0 384 512" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                </div>
              </div>
            </div>
            <div>
<<<<<<< HEAD
              <h2 className="font-display-lg text-headline-lg mb-8">Locate Learning Ladders</h2>
=======
              <h2 className="font-display-lg text-headline-lg mb-8">Visit Our Campus</h2>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
              <div className="space-y-8">
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-2xl shrink-0">location_on</span>
                  <div className="space-y-2">
<<<<<<< HEAD
                    <p className="text-on-surface-variant font-body-md leading-relaxed">
                      Rafiq Manzil, House 64, opposite Madrasa e Muhammadiya, Bardi Mohalla Near, 2nd, Chand Tara Masjid Rd, Nizampur, Bhiwandi, Maharashtra 421302
                    </p>
                    <a className="inline-flex items-center gap-1.5 text-secondary font-label-md text-sm hover:underline" href="https://maps.google.com" target="_blank" rel="noreferrer">
=======
                    <p className="text-on-surface-variant font-body-md leading-relaxed">102, Kumari Compound, Bubere Hall Road, Beside Food Inn Restaurant, Nizampur, Bhiwandi</p>
                    <a className="inline-flex items-center gap-1.5 text-secondary font-label-md text-sm hover:underline decoration-secondary/30" href="https://maps.google.com" target="_blank" rel="noreferrer">
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                      Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-2xl shrink-0">call</span>
<<<<<<< HEAD
                  <a className="text-on-surface-variant self-center font-body-md hover:text-primary transition-colors" href="tel:+918888504353">+91 88885 04353</a>
                </div>
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-2xl shrink-0">schedule</span>
                  <p className="text-on-surface-variant self-center font-body-md">Mon - Sat: 9:00 AM - 1:00 PM</p>
=======
                  <p className="text-on-surface-variant self-center font-body-md">8483848486 / 9323956718</p>
                </div>
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-3 rounded-2xl shrink-0">schedule</span>
                  <p className="text-on-surface-variant self-center font-body-md">Mon - Sat: 9:00 AM - 4:00 PM</p>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Marquee */}
<<<<<<< HEAD
      <section className="py-16 overflow-hidden bg-white border-y border-secondary/10">
        <div className="animate-marquee">
          <div className="flex gap-12 items-center px-6 whitespace-nowrap">
            <span className="font-headline-lg italic md:text-2xl text-secondary text-xl">"A safe and happy place for my kids."</span>
            <span className="w-2 h-2 rounded-full bg-secondary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-secondary text-xl">"Best community school in Bhiwandi."</span>
            <span className="w-2 h-2 rounded-full bg-secondary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-secondary text-xl">"Affordable and high-quality learning."</span>
            <span className="w-2 h-2 rounded-full bg-secondary/40"></span>
          </div>
          <div className="flex gap-12 items-center px-6 whitespace-nowrap">
            <span className="font-headline-lg italic md:text-2xl text-secondary text-xl">"A safe and happy place for my kids."</span>
            <span className="w-2 h-2 rounded-full bg-secondary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-secondary text-xl">"Best community school in Bhiwandi."</span>
            <span className="w-2 h-2 rounded-full bg-secondary/40"></span>
            <span className="font-headline-lg italic md:text-2xl text-secondary text-xl">"Affordable and high-quality learning."</span>
            <span className="w-2 h-2 rounded-full bg-secondary/40"></span>
=======
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
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="bg-inverse-surface text-surface-variant px-container-padding py-asymmetric-gap-sm w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-asymmetric-gap-lg mb-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
<<<<<<< HEAD
              <img alt="Learning Ladders Logo" className="h-12 w-12 brightness-200" src={logo}/>
              <span className="font-display-lg text-headline-md text-primary">Learning Ladders</span>
            </div>
            <div className="space-y-2">
              <p className="font-body-md max-w-sm">
                Rafiq Manzil, House 64, opposite Madrasa e Muhammadiya, Nizampur, Bhiwandi
              </p>
              <p className="font-body-md">Phone: +91 88885 04353</p>
=======
              <img alt="Renaissance Preschool Logo" className="h-12 w-12 brightness-200" src={logo}/>
              <span className="font-display-lg text-headline-md text-primary-fixed-dim">Renaissance Preschool</span>
            </div>
            <div className="space-y-2">
              <p className="font-body-md">102, Kumari Compound, Bubere Hall Road, Beside Food Inn Restaurant, Nizampur, Bhiwandi</p>
              <p className="font-body-md">Phone: 8483848486, 9323956718</p>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
            </div>
          </div>
          
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
<<<<<<< HEAD
            <h4 className="font-headline-md text-headline-md text-white mb-6">Admission Inquiry Form</h4>
            <form className="space-y-5" id="inquiry-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <input
                    className={`w-full bg-white/10 border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-primary focus:border-primary transition-all pr-10 ${touched.name ? (formState.name ? 'border-primary' : 'border-error animate-shake') : ''}`}
                    name="name"
                    placeholder="Parent's Name"
=======
            <h4 className="font-headline-md text-headline-md text-white mb-6">Request a Campus Tour</h4>
            <form className="space-y-5" id="tour-request-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <input
                    className={`w-full bg-white/10 border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-primary focus:border-primary transition-all pr-10 ${touched.name ? (formState.name ? 'input-valid' : 'input-invalid animate-shake') : ''}`}
                    name="name"
                    placeholder="Your Name"
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onBlur={() => handleBlur('name')}
                  />
<<<<<<< HEAD
                </div>
                <div className="relative group">
                  <input
                    className={`w-full bg-white/10 border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-primary focus:border-primary transition-all pr-10 ${touched.email ? (isEmailValid(formState.email) ? 'border-primary' : 'border-error animate-shake') : ''}`}
=======
                  <span className={`validation-icon material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary transition-opacity ${touched.name && formState.name ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                </div>
                <div className="relative group">
                  <input
                    className={`w-full bg-white/10 border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-primary focus:border-primary transition-all pr-10 ${touched.email ? (isEmailValid(formState.email) ? 'input-valid' : 'input-invalid animate-shake') : ''}`}
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                    name="email"
                    placeholder="Email Address"
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onBlur={() => handleBlur('email')}
                  />
<<<<<<< HEAD
=======
                  <span className={`validation-icon material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary transition-opacity ${touched.email && isEmailValid(formState.email) ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
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
<<<<<<< HEAD
                  <option value="" className="text-black">Select Program of Interest</option>
=======
                  <option value="" className="text-black">Select Program</option>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                  <option value="playgroup" className="text-black">Play Group</option>
                  <option value="prek" className="text-black">Pre-Kindergarten</option>
                  <option value="kindergarten" className="text-black">Kindergarten</option>
                </select>
              </div>
<<<<<<< HEAD
              <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-[0_6px_0_0_#b45309]" type="submit">
                Send Inquiry
=======
              <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-[0_6px_0_0_#7e2b15]" type="submit">
                Send Request
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<<<<<<< HEAD
          <p>© 2026 Learning Ladders. Affordable, Quality Education.</p>
          <div className="flex gap-8">
            <a className="hover:underline" href="#">Privacy Policy</a>
            <a className="hover:underline" href="#">Contact Us</a>
=======
          <p>© 2024 Renaissance Preschool. Heritage in Education.</p>
          <div className="flex gap-8">
            <a className="hover:underline decoration-primary-fixed-dim" href="#">Privacy Policy</a>
            <a className="hover:underline decoration-primary-fixed-dim" href="#">Contact</a>
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
          </div>
        </div>
      </footer>

      {/* Comparison Modal */}
      {modalOpen && (
<<<<<<< HEAD
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white/50">
=======
        <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white/50 glass-panel">
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
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
<<<<<<< HEAD
                  <tr>
                    <td className="py-4 px-4 font-bold text-gray-600">Focus</td>
                    <td className="py-4 px-4">Social & Sensory</td>
                    <td className="py-4 px-4">Literacy & Numbers</td>
                    <td className="py-4 px-4">School Readiness</td>
                  </tr>
=======
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
<<<<<<< HEAD

      {/* Gallery Lightbox Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div
            className="bg-white rounded-[2rem] w-full max-w-3xl overflow-hidden shadow-2xl border border-white/40 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-surface-container-highest overflow-hidden">
              <img
                src={selectedGalleryImage.src}
                alt={selectedGalleryImage.title}
                className="w-full h-full object-cover"
                onError={(e) => ((e.target as HTMLImageElement).src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=')}
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
                onClick={() => setSelectedGalleryImage(null)}
                aria-label="Close dialog"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                  {selectedGalleryImage.categoryLabel}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-display-lg text-2xl font-bold text-on-surface mb-2">
                  {selectedGalleryImage.title}
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-xl">
                  {selectedGalleryImage.description}
                </p>
              </div>
              <button
                className="self-stretch sm:self-center px-6 py-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-xs sm:text-sm rounded-full transition-colors shrink-0"
                onClick={() => setSelectedGalleryImage(null)}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
=======
>>>>>>> ffa407042663e8607f473aa91db079936ae2ffc2
    </div>
  );
}

export default App;
