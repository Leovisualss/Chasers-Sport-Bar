import React, { useState, useMemo, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Menu as MenuIcon, 
  X, 
  Search, 
  ChevronRight, 
  Users, 
  Calculator, 
  Check, 
  Award, 
  Flame, 
  Utensils, 
  Briefcase, 
  Info, 
  Calendar, 
  DollarSign,
  ChevronDown,
  Navigation
} from "lucide-react";

import { 
  CHASERS_DATA, 
  LocationData, 
  MenuSection, 
  MenuItem, 
  CateringPackage, 
  TrayItem 
} from "./data";
import BlurText from "./components/BlurText";
import HeroBackground from "./components/HeroBackground";

// @ts-ignore
import nilesBgImg from "./assets/images/bar_niles_branch_1781665136722.jpg";
// @ts-ignore
import schillerBgImg from "./assets/images/bar_schiller_branch_1781665149968.jpg";
// @ts-ignore
import zurichBgImg from "./assets/images/bar_zurich_branch_1781665161635.jpg";

// Food Carousel Items
// @ts-ignore
import foodWingsImg from "./assets/images/food_crispy_wings_1781665173657.jpg";
// @ts-ignore
import foodPizzaImg from "./assets/images/food_gourmet_pizza_1781665189712.jpg";
// @ts-ignore
import foodBurgerImg from "./assets/images/food_juicy_burger_1781665201020.jpg";
// @ts-ignore
import foodSubImg from "./assets/images/food_toasted_sub_1781665212936.jpg";
// @ts-ignore
import foodFriesImg from "./assets/images/food_loaded_fries_1781665225452.jpg";

const foodCarouselItems = [
  { img: foodWingsImg, title: "Award-Winning Wings", desc: "Tossed in any of our 14 signature heat sauces." },
  { img: foodPizzaImg, title: "Stone-Fired Pizza", desc: "Fresh stone-baked crust topped with rich ingredients." },
  { img: foodBurgerImg, title: "Prime Double Burger", desc: "Double fresh-ground smash beef burger with golden fries." },
  { img: foodSubImg, title: "Toasted Italian Sub", desc: "Toasted to perfection with melted gourmet cheeses." },
  { img: foodFriesImg, title: "Golden Loaded Fries", desc: "Crispy fries covered in hot cheddar sauce and bacon." },
];

export default function App() {
  const [currentView, setCurrentView] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLocationSlug, setSelectedLocationSlug] = useState<string>("niles");

  // Sync menu state with simple URL hashes or query params if present for SEO/GEO crawlers
  useEffect(() => {
    const handleNavigationState = () => {
      const hash = window.location.hash.replace("#", "");
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get("tab") || searchParams.get("view");
      const locParam = searchParams.get("loc") || searchParams.get("slug") || searchParams.get("location");

      const allowedViews = ["home", "menu", "catering", "locations", "employment"];
      
      // Determine correct view, prioritize hash then tab query parameter
      let activeView = "home";
      if (allowedViews.includes(hash)) {
        activeView = hash;
      } else if (tabParam && allowedViews.includes(tabParam)) {
        activeView = tabParam;
      }

      setCurrentView(activeView);

      // Determine correct physical location selection
      if (locParam && ["niles", "schiller-park", "lake-zurich"].includes(locParam)) {
        setSelectedLocationSlug(locParam);
      }
    };

    handleNavigationState();
    window.addEventListener("hashchange", handleNavigationState);
    return () => window.removeEventListener("hashchange", handleNavigationState);
  }, []);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    window.location.hash = view;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedLocation = useMemo(() => {
    return CHASERS_DATA.locations.find(loc => loc.slug === selectedLocationSlug) || CHASERS_DATA.locations[0];
  }, [selectedLocationSlug]);

  return (
    <div className="min-h-screen bg-[#080807] text-[#fff0c4] flex flex-col relative overflow-hidden font-sans">
      {/* Background Graphic Accents (No Gradients) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#f7c61f] z-50" />
      
      {/* Header and Menu Nav */}
      <header className="sticky top-0 z-40 bg-[#080807]/95 border-b border-[#f7c61f]/20 backdrop-blur-md px-4 sm:px-8 py-3 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-6">
          <button 
            type="button"
            id="brand-logo-btn"
            onClick={() => navigateTo("home")} 
            className="group flex items-baseline gap-2 cursor-pointer"
          >
            <BlurText
              text="CHASERS"
              animateBy="letters"
              delay={40}
              className="font-display font-normal text-3xl sm:text-4xl tracking-tighter text-[#f7c61f] group-hover:text-[#f05a24] transition-colors leading-none uppercase"
            />
            <span className="hidden sm:inline text-[9px] font-mono tracking-widest text-[#d6c481] uppercase font-bold px-1.5 py-0.5 border border-[#d6c481]/30 rounded animate-fade bg-[#15110c]">
              Est. 1969
            </span>
          </button>
        </div>

        {/* Desktop navigation bar */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-sm md:text-base font-medium tracking-wide uppercase">
          <button
            type="button"
            id="nav-home-btn"
            onClick={() => navigateTo("home")}
            className={`cursor-pointer hover:text-[#f7c61f] transition-colors py-2 relative ${currentView === 'home' ? 'text-[#f7c61f]' : 'text-[#fff0c4]/80'}`}
          >
            Home
            {currentView === 'home' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f05a24]" />}
          </button>
          <button
            type="button"
            id="nav-menu-btn"
            onClick={() => navigateTo("menu")}
            className={`cursor-pointer hover:text-[#f7c61f] transition-colors py-2 relative ${currentView === 'menu' ? 'text-[#f7c61f]' : 'text-[#fff0c4]/80'}`}
          >
            Menu
            {currentView === 'menu' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f05a24]" />}
          </button>
          <button
            type="button"
            id="nav-catering-btn"
            onClick={() => navigateTo("catering")}
            className={`cursor-pointer hover:text-[#f7c61f] transition-colors py-2 relative ${currentView === 'catering' ? 'text-[#f7c61f]' : 'text-[#fff0c4]/80'}`}
          >
            Catering & Parties
            {currentView === 'catering' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f05a24]" />}
          </button>
          <button
            type="button"
            id="nav-locations-btn"
            onClick={() => navigateTo("locations")}
            className={`cursor-pointer hover:text-[#f7c61f] transition-colors py-2 relative ${currentView === 'locations' ? 'text-[#f7c61f]' : 'text-[#fff0c4]/80'}`}
          >
            Locations
            {currentView === 'locations' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f05a24]" />}
          </button>
          <button
            type="button"
            id="nav-employment-btn"
            onClick={() => navigateTo("employment")}
            className={`cursor-pointer hover:text-[#f7c61f] transition-colors py-2 relative ${currentView === 'employment' ? 'text-[#f7c61f]' : 'text-[#fff0c4]/80'}`}
          >
            Employment
            {currentView === 'employment' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f05a24]" />}
          </button>
        </nav>

        {/* Right action button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            id="header-order-btn"
            href={selectedLocation.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-[#f05a24] text-[#080807] font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:bg-[#f7c61f] transition-all flex items-center gap-1.5 active:scale-95 shadow-md"
          >
            <span>Order Online</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#f7c61f] hover:text-[#f05a24] p-1 cursor-pointer transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </header>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[56px] left-0 w-full bg-[#080807] border-b border-[#f7c61f]/20 z-30 flex flex-col p-6 gap-4 font-sans text-base font-bold tracking-wider uppercase"
          >
            <button
              type="button"
              id="mobile-nav-home-btn"
              onClick={() => navigateTo("home")}
              className={`text-left py-2 hover:text-[#f7c61f] ${currentView === 'home' ? 'text-[#f7c61f]' : 'text-[#fff0c4]'}`}
            >
              Home
            </button>
            <button
              type="button"
              id="mobile-nav-menu-btn"
              onClick={() => navigateTo("menu")}
              className={`text-left py-2 hover:text-[#f7c61f] ${currentView === 'menu' ? 'text-[#f7c61f]' : 'text-[#fff0c4]'}`}
            >
              Menu
            </button>
            <button
              type="button"
              id="mobile-nav-catering-btn"
              onClick={() => navigateTo("catering")}
              className={`text-left py-2 hover:text-[#f7c61f] ${currentView === 'catering' ? 'text-[#f7c61f]' : 'text-[#fff0c4]'}`}
            >
              Catering & Parties
            </button>
            <button
              type="button"
              id="mobile-nav-locations-btn"
              onClick={() => navigateTo("locations")}
              className={`text-left py-2 hover:text-[#f7c61f] ${currentView === 'locations' ? 'text-[#f7c61f]' : 'text-[#fff0c4]'}`}
            >
              Locations
            </button>
            <button
              type="button"
              id="mobile-nav-employment-btn"
              onClick={() => navigateTo("employment")}
              className={`text-left py-2 hover:text-[#f7c61f] ${currentView === 'employment' ? 'text-[#f7c61f]' : 'text-[#fff0c4]'}`}
            >
              Employment
            </button>

            <div className="h-px bg-[#f7c61f]/20 my-2" />
            
            {/* Preferred Location fast select inside mobile menu */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-[#d6c481] normal-case tracking-widest font-bold">Fast Order Path:</span>
              <div className="grid grid-cols-3 gap-1">
                {CHASERS_DATA.locations.map(loc => (
                  <a
                    key={loc.slug}
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-center bg-[#15110c] hover:bg-[#f05a24] hover:text-[#080807] transition-all text-[#fff0c4] border border-[#f7c61f]/20 py-2 rounded font-sans tracking-tight leading-tight"
                  >
                    {loc.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {currentView === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Home Hero */}
              <HeroBackground heightClass="min-h-[100vh] lg:h-screen py-24">
                {/* Giant background text label for athletic vibe */}
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[15vw] font-display font-normal leading-none text-[#15110c]/30 tracking-widest select-none pointer-events-none uppercase">
                  GAME DAY
                </span>

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 bg-[#15110c] px-4 py-1.5 border border-[#f7c61f]/30 rounded-full text-xs font-mono text-[#f7c61f] tracking-widest uppercase mb-6 font-bold">
                    <Flame size={14} className="animate-pulse text-[#f05a24]" />
                    Chicagoland's Premier Sports Bar Since 1969
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 mb-6">
                    <BlurText
                      text="EAT. DRINK."
                      animateBy="words"
                      delay={100}
                      className="font-display font-normal text-5xl sm:text-7xl lg:text-[112px] text-[#f7c61f] tracking-tighter uppercase leading-none justify-center"
                    />
                    <BlurText
                      text="WATCH. PLAY."
                      animateBy="words"
                      delay={100}
                      direction="bottom"
                      className="font-display font-normal text-5xl sm:text-7xl lg:text-[112px] text-[#f05a24] tracking-tighter uppercase leading-none justify-center"
                    />
                  </div>
                  
                  <p className="text-[#fff0c4] text-lg sm:text-xl font-light mb-10 max-w-2xl leading-relaxed">
                    Three massive locations with wall-to-wall HD screens, high-payout video gaming, dynamic kitchen lineups, and the best crowd in Illinois.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      type="button"
                      id="view-menu-btn-home"
                      onClick={() => navigateTo("menu")}
                      className="cursor-pointer bg-[#f7c61f] text-[#080807] font-sans font-bold uppercase text-sm tracking-widest px-8 py-4 rounded hover:bg-[#f05a24] hover:text-[#fff0c4] transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#f7c61f]/10"
                    >
                      Our Full Menu
                    </button>
                    <button
                      type="button"
                      id="view-catering-btn-home"
                      onClick={() => navigateTo("catering")}
                      className="cursor-pointer border-2 border-[#fff0c4] text-[#fff0c4] bg-transparent font-sans font-bold uppercase text-sm tracking-widest px-8 py-3.5 rounded hover:bg-[#fff0c4] hover:text-[#080807] transition-all duration-300 transform active:scale-95"
                    >
                      Party Packages
                    </button>
                  </div>
                </div>
              </HeroBackground>

              {/* Fast Location Chooser Band */}
              <section className="bg-[#15110c] border-y border-[#f7c61f]/15 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12 flex flex-col items-center">
                    <span className="text-[10px] font-mono text-[#f7c61f] tracking-widest font-black uppercase block mb-2">PICK YOUR PLAYGROUND</span>
                    <BlurText
                      text="THREE GREAT LOCATIONS"
                      animateBy="words"
                      delay={150}
                      className="font-display font-normal text-3xl sm:text-5xl lg:text-[64px] lg:leading-[76.8px] text-[#fff0c4] tracking-tight uppercase justify-center"
                    />
                    <div className="w-16 h-1 bg-[#f05a24] mx-auto mt-4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CHASERS_DATA.locations.map((loc, idx) => (
                      <motion.div 
                        key={loc.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                        className="relative overflow-hidden bg-[#080807] border border-[#f7c61f]/15 rounded-lg p-8 flex flex-col justify-between group transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#f7c61f]/40 hover:shadow-[0_25px_40px_-10px_rgba(247,198,31,0.12)] cursor-pointer min-h-[480px] sm:min-h-[500px] md:min-h-[540px]"
                      >
                        {/* Background Image Layer with vignette */}
                        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
                          <img
                            src={
                              loc.slug === "niles" 
                                ? nilesBgImg 
                                : loc.slug === "schiller-park" 
                                  ? schillerBgImg 
                                  : zurichBgImg
                            }
                            alt={loc.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          {/* Dark tint overlay Layer 1 */}
                          <div className="absolute inset-0 bg-black/65 transition-opacity duration-300 group-hover:bg-black/55" />
                          {/* Hand-tuned custom Vignette Overlay Layer 2 */}
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: "radial-gradient(circle at 50% 50%, rgba(8, 8, 7, 0.15) 0%, rgba(8, 8, 7, 0.8) 55%, rgba(8, 8, 7, 0.98) 90%, #080807 100%)",
                            }}
                          />
                          {/* Top-to-bottom linear gradient for smooth dark integrations */}
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: "linear-gradient(to bottom, transparent 40%, rgba(8, 8, 7, 0.98) 100%)",
                            }}
                          />
                        </div>

                        {/* Layout Content wrapper to ensure it renders over background */}
                        <div className="relative z-10 flex flex-col justify-between h-full w-full">
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="font-display font-normal text-2xl lg:text-[32px] lg:leading-[38.4px] uppercase tracking-tight text-[#f7c61f] group-hover:text-[#f05a24] transition-colors">
                                {loc.name}
                              </span>
                              <MapPin size={18} className="text-[#f7c61f]" />
                            </div>
                            
                            <p className="text-xs font-mono text-[#d6c481] tracking-wide mb-3 uppercase">
                              {loc.address}, {loc.cityState}
                            </p>
                            
                            <p className="text-sm text-[#fff0c4]/90 leading-relaxed font-light mb-6">
                              {loc.description}
                            </p>
                          </div>

                          <div className="flex flex-col gap-3 pt-6 border-t border-[#f7c61f]/10 mt-auto">
                            <button
                              type="button"
                              id={`select-loc-btn-${loc.slug}`}
                              onClick={() => {
                                setSelectedLocationSlug(loc.slug);
                                navigateTo("locations");
                              }}
                              className="w-full text-center py-3 rounded bg-[#15110c]/80 hover:bg-[#f7c61f] hover:text-[#080807] transition-all text-xs font-sans font-bold uppercase tracking-wider backdrop-blur-sm"
                            >
                              Hours & Maps
                            </button>
                            
                            <a
                              href={loc.orderUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full text-center py-3 rounded bg-[#f05a24] text-[#080807] hover:bg-[#fff0c4] hover:text-[#080807] transition-all text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                            >
                              <span>Order Online</span>
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quality & Philosophy - Bullet sections */}
              <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="slate-card bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-8 sm:p-12 relative"
                  >
                    <span className="absolute top-4 right-4 text-7xl font-display font-normal opacity-10 text-[#f7c61f] select-none pointer-events-none">
                      WINGS
                    </span>
                    <span className="text-xs font-mono text-[#f05a24] tracking-widest font-bold uppercase block mb-3">CRISPED TO PERFECTION</span>
                    <BlurText
                      text="VOTED CHICAGOLAND'S TOP GAME DAY FOOD"
                      animateBy="words"
                      delay={100}
                      className="font-display font-normal text-2xl sm:text-3xl lg:text-[59px] lg:leading-[70.8px] text-[#f7c61f] uppercase tracking-tight mb-4"
                    />
                    <p className="text-sm sm:text-base leading-relaxed text-[#fff0c4]/90 font-light mb-6">
                      Our legendary bone-in and boneless wings are loaded in deep flavor signature sauces. Choose from 14 custom-blended heat thresholds, from the sweet kick of Honey Mustard to the absolute fiery madness of Ay Carumba!
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Ay Carumba", "Mango Habanero", "Hot Garlic", "Garlic Parmesan", "Lemon Pepper"].slice(0, 5).map((sauce) => (
                        <span key={sauce} className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#080807] text-[#fff0c4] border border-[#f7c61f]/20">
                          {sauce}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      id="view-wings-menu-btn"
                      onClick={() => navigateTo("menu")}
                      className="text-xs font-sans font-bold uppercase text-[#f7c61f] hover:text-[#f05a24] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Wing Flavors</span>
                      <ChevronRight size={14} />
                    </button>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <span className="text-xs font-mono text-[#f7c61f] tracking-widest font-bold uppercase block mb-2">CRAFT SPORT CULTURE</span>
                    <BlurText
                      text="WHERE SPORTS COME TO LIFE"
                      animateBy="words"
                      delay={120}
                      className="font-display font-normal text-3xl sm:text-5xl lg:text-[64px] lg:leading-[76.8px] text-[#fff0c4] tracking-tight uppercase"
                    />
                    <p className="text-[#fff0c4]/80 leading-relaxed font-light">
                      Chasers isn’t just a sports lounge—it's a multi-screen visual hub. We screen all local college matches, national major leagues, pay-per-view UFC tournaments, and international soccer championships simultaneously on massive monitors placed strategically around our rooms.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="bg-[#15110c] p-4 rounded border border-[#f7c61f]/10">
                        <span className="font-display font-normal text-2xl lg:text-[32px] lg:leading-[38.4px] text-[#f7c61f] block mb-1">HD WALLS</span>
                        <p className="text-xs text-[#d6c481] leading-tight font-lightNormal">Every seat holds a direct line of sight to high-fidelity monitors.</p>
                      </div>
                      <div className="bg-[#15110c] p-4 rounded border border-[#f7c61f]/10">
                        <span className="font-display font-normal text-2xl lg:text-[32px] lg:leading-[38.4px] text-[#f05a24] block mb-1">VIDEO GAMING</span>
                        <p className="text-xs text-[#d6c481] leading-tight font-lightNormal">Interactive terminals with quick cash payouts in private layouts.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Game Day Gastronomy - Infinite Loop Carousel */}
              <section className="bg-[#080807] py-16 border-t border-[#f7c61f]/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-12 text-center flex flex-col items-center font-display">
                  <span className="text-[10px] font-mono text-[#f7c61f] tracking-widest font-black uppercase block mb-2">CRAVED BY CHICAGOLAND</span>
                  <BlurText
                    text="GAME DAY FEASTS"
                    animateBy="words"
                    delay={150}
                    className="font-display font-normal text-3xl sm:text-5xl lg:text-[64px] lg:leading-[76.8px] text-[#fff0c4] tracking-tight uppercase justify-center"
                  />
                  <div className="w-16 h-1 bg-[#f05a24] mx-auto mt-4" />
                </div>

                {/* Scroller viewport with side gradient fading (vanishing point) */}
                <div className="relative w-full overflow-hidden py-4 select-none pointer-events-none">
                  {/* Left edge vanish brush */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#080807] via-[#080807]/70 to-transparent z-10 pointer-events-none" />
                  {/* Right edge vanish brush */}
                  <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#080807] via-[#080807]/70 to-transparent z-10 pointer-events-none" />

                  {/* Marquee inner loop block */}
                  <div className="flex w-max gap-2 animate-marquee">
                    {/* First complete pass of 5 items */}
                    {foodCarouselItems.map((item, idx) => (
                      <div 
                        key={`set1-${idx}`}
                        className="relative w-[300px] sm:w-[380px] h-[450px] sm:h-[570px] rounded-lg overflow-hidden shrink-0 border border-[#f7c61f]/10"
                      >
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                    {/* Second pass of 5 items for seamless layout transition loop */}
                    {foodCarouselItems.map((item, idx) => (
                      <div 
                        key={`set2-${idx}`}
                        className="relative w-[300px] sm:w-[380px] h-[450px] sm:h-[570px] rounded-lg overflow-hidden shrink-0 border border-[#f7c61f]/10"
                      >
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Double CTA Option Bar */}
              <section className="bg-[#f05a24] text-[#080807] py-16 px-4 overflow-hidden">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                >
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <BlurText
                      text="PLANNING A CHAMPIONSHIP TIER CELEBRATION?"
                      animateBy="words"
                      delay={100}
                      className="font-display font-normal text-2xl sm:text-3xl lg:text-[50px] lg:leading-[60px] uppercase tracking-tight mb-2 text-[#080807] justify-center md:justify-start"
                    />
                    <p className="text-[#080807] sm:text-lg max-w-xl font-medium leading-tight">
                      Browse our full suite of professional buffet, drink, and custom catering party solutions.
                    </p>
                  </div>
                  <button
                    type="button"
                    id="catering-cta-home"
                    onClick={() => navigateTo("catering")}
                    className="bg-[#080807] text-[#f7c61f] hover:bg-[#fff0c4] hover:text-[#080807] transition-all font-sans font-bold uppercase text-xs sm:text-sm tracking-widest px-8 py-4 rounded shrink-0 shadow-lg hover:scale-105 active:scale-95 duration-200"
                  >
                    Configure Custom Package
                  </button>
                </motion.div>
              </section>
            </motion.div>
          )}

          {currentView === "menu" && (
            <MenuView key="menu" />
          )}

          {currentView === "catering" && (
            <CateringView key="catering" />
          )}

          {currentView === "locations" && (
            <LocationsView 
              selectedLocationSlug={selectedLocationSlug}
              setSelectedLocationSlug={setSelectedLocationSlug}
            />
          )}

          {currentView === "employment" && (
            <EmploymentView />
          )}
        </AnimatePresence>
      </main>

      {/* Page Footer */}
      <footer className="bg-[#080807] border-t border-[#f7c61f]/20 py-16 text-center mt-auto w-full select-none">
        <div className="w-full px-4 sm:px-8">
          <span 
            className="font-display font-bold tracking-[-0.013em] uppercase leading-[1.05] sm:leading-none block mb-6 w-full text-center select-none"
            style={{ color: "#f7c61f" }}
          >
            <span className="block mb-3 sm:mb-0 sm:inline text-[17.2vw] sm:text-[11vw] md:text-[11.2vw] lg:text-[11.5vw] xl:text-[12.1vw]">CHASERS</span>{" "}
            <span className="block mb-3 sm:mb-0 sm:inline text-[17.2vw] sm:text-[11vw] md:text-[11.2vw] lg:text-[11.5vw] xl:text-[12.1vw]">SPORTS</span>{" "}
            <span className="block sm:inline text-[17.2vw] sm:text-[11vw] md:text-[11.2vw] lg:text-[11.5vw] xl:text-[12.1vw]">BAR</span>
          </span>
          <p className="font-display font-semibold text-xs tracking-widest text-[#fff0c4]/40 uppercase mb-8">
            Niles &bull; Schiller Park &bull; Lake Zurich
          </p>
          <div className="h-px bg-[#f7c61f]/10 max-w-xl mx-auto mb-8" />
          <p className="text-xs text-[#d6c481]/50 font-mono tracking-tight leading-relaxed max-w-md mx-auto">
            &copy; {new Date().getFullYear()} Chasers Sports Bar & Grill. All rights reserved. <br />
            Our locations adhere strictly to local gaming board and alcohol consumption commissions. Underage patrons allowed before dinner hours inside restaurant sectors.
          </p>
          <p className="text-[10px] text-[#f7c61f]/45 font-mono uppercase tracking-widest mt-6">
            Designed & Developed by <a href="https://leovisualss.com" target="_blank" rel="noopener noreferrer" className="text-[#fff0c4]/60 hover:text-[#f7c61f] underline decoration-[#f7c61f]/30 underline-offset-4 hover:decoration-[#f7c61f] transition-all duration-300">LEOVISUALSS STUDIO</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// CUSTOM COMPONENT: MENU VIEW
// ==========================================
function MenuView() {
  const [activeTab, setActiveTab] = useState<string>("Starters");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sectionIndex = useMemo(() => {
    return CHASERS_DATA.menuSections.findIndex(s => s.title === activeTab);
  }, [activeTab]);

  const activeSection = useMemo(() => {
    return CHASERS_DATA.menuSections[sectionIndex] || CHASERS_DATA.menuSections[0];
  }, [sectionIndex]);

  // Compute matched items from querying
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    const matches: { section: string; item: MenuItem }[] = [];

    CHASERS_DATA.menuSections.forEach(section => {
      // Direct list items
      if (section.items) {
        section.items.forEach(itm => {
          if (itm[0].toLowerCase().includes(query) || (itm[2] && itm[2].toLowerCase().includes(query))) {
            matches.push({ section: section.title, item: itm });
          }
        });
      }
      // Group items (wings)
      if (section.groups) {
        section.groups.forEach(g => {
          g.items.forEach(itm => {
            if (itm[0].toLowerCase().includes(query) || (itm[2] && itm[2].toLowerCase().includes(query))) {
              matches.push({ section: `${section.title} (${g.label})`, item: itm });
            }
          });
        });
      }
      // Specials items
      if (section.specials) {
        section.specials.forEach(itm => {
          if (itm[0].toLowerCase().includes(query) || (itm[2] && itm[2].toLowerCase().includes(query))) {
            matches.push({ section: `${section.title} Specials`, item: itm });
          }
        });
      }
    });

    return matches;
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Menu Hero Section */}
      <HeroBackground heightClass="min-h-[70vh] lg:min-h-[85vh] py-24 mb-16">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-mono text-[#f7c61f] tracking-widest font-black uppercase block mb-3">CONCEIVED IN THE KITCHEN, WATCHED ON THE SCREENS</span>
          <BlurText
            text="THE CHASERS MENU"
            animateBy="words"
            delay={120}
            className="font-display font-normal text-4xl sm:text-6xl lg:text-[96px] lg:leading-none text-[#fff0c4] uppercase tracking-tighter mb-6 justify-center"
          />
          <p className="text-sm sm:text-xl text-[#d6c481]/90 font-light leading-relaxed max-w-2xl mb-10">
            Legendary stone-fired pizzas, Award-Winning crispy dynamic wings, burgers, and sub sandwiches made with high-performance game-day focus.
          </p>
          
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("menu-navigation-anchor");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer bg-[#f7c61f] text-[#080807] hover:bg-[#fff0c4] transition-all px-8 py-3.5 rounded font-sans font-bold uppercase text-xs tracking-widest"
          >
            Explore Gastronomy Selector
          </button>
        </div>
      </HeroBackground>

      {/* Actual Menu Layout Area */}
      <div id="menu-navigation-anchor" className="pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full pt-12">

      {/* Live Search Input Bar */}
      <div className="max-w-md mx-auto mb-8 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#f7c61f]">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Search items ... (e.g. Loaded Tots, Buffalo, Thin-crust)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#15110c] text-[#fff0c4] placeholder-[#d6c481]/50 border border-[#f7c61f]/25 focus:border-[#f05a24] focus:outline-none pl-10 pr-4 py-3 rounded-md text-sm font-sans tracking-wide transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-3 flex items-center text-[#d6c481] hover:text-[#f7c61f] text-xs cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Animate Search Outcomes */}
      {searchResults !== null ? (
        <div className="mt-8 bg-[#15110c] border border-[#f7c61f]/20 rounded-xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[#f7c61f]/10 pb-4 mb-6">
            <h3 className="font-display font-normal text-lg sm:text-xl uppercase tracking-wider text-[#f7c61f]">
              Search query matched ({searchResults.length} results)
            </h3>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-xs font-mono font-bold tracking-wider text-[#f05a24] hover:text-[#fff0c4] uppercase cursor-pointer"
            >
              Back to sections
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#fff0c4]/45 text-sm font-mono tracking-widest uppercase">No specific menu items matched your query.</p>
              <p className="text-[#d6c481] text-xs mt-2">Try looking up simple key categories like 'Wings', 'Pizza', 'Sliders', or 'Pretzel'.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchResults.map(({ section, item }, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.3), ease: "easeOut" }}
                  whileHover={{ scale: 1.015, borderColor: "rgba(240, 90, 36, 0.4)" }}
                  className="bg-[#080807] border border-[#f7c61f]/10 rounded-lg p-4 sm:p-5 flex flex-col justify-between hover:border-[#f05a24] transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-display font-normal text-base text-[#fff0c4] uppercase tracking-normal">
                        {item[0]}
                      </h4>
                      <span className="font-mono font-bold text-sm text-[#f7c61f] shrink-0">
                        {(!String(item[1]).startsWith('$') && !/[a-zA-Z]/.test(item[1])) ? `$${item[1]}` : item[1]}
                      </span>
                    </div>
                    {item[2] && (
                      <p className="text-xs text-[#d6c481] leading-relaxed font-light mb-4">
                        {item[2]}
                      </p>
                    )}
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-[#f05a24] uppercase font-bold text-left pt-2 border-t border-[#f7c61f]/5">
                    Category: {section}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Regular Section Tabs layout */
        <div className="flex flex-col gap-8">
          {/* Section Selector Chips Horizontal flow */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#f7c61f]/10 pb-6">
            {CHASERS_DATA.menuSections.map((sec, idx) => (
              <button
                key={sec.title}
                type="button"
                id={`menu-tab-${idx}`}
                onClick={() => setActiveTab(sec.title)}
                className={`cursor-pointer px-4 py-2 rounded text-xs font-sans font-bold tracking-wide uppercase transition-all duration-200 border ${
                  activeTab === sec.title 
                    ? "bg-[#f7c61f] text-[#080807] border-[#f7c61f]" 
                    : "bg-[#15110c] text-[#fff0c4]/80 border-[#f7c61f]/10 hover:border-[#f7c61f]/50"
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Active Category Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.3 }}
              className="bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-6 sm:p-10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#f7c61f]/15 pb-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#f05a24] tracking-wider font-extrabold uppercase mb-1">
                    <span>SECTOR {String(sectionIndex + 1).padStart(2, "0")}</span>
                    <span>&bull;</span>
                    <span>CHASERS FAVORITE</span>
                  </div>
                  <BlurText
                    key={activeSection.title}
                    text={activeSection.title}
                    animateBy="words"
                    delay={100}
                    className="font-display font-normal text-2xl sm:text-3xl lg:text-[64px] lg:leading-[76.8px] text-[#f7c61f] tracking-tight uppercase leading-none"
                  />
                </div>
                {activeSection.intro && (
                  <p className="text-[#fff0c4]/80 text-xs sm:text-sm font-light leading-relaxed max-w-sm sm:text-right">
                    {activeSection.intro}
                  </p>
                )}
              </div>

              {/* Layout varies depending on Section Types: Pizzas vs regular lists vs wings grids */}
              {/* Type 1: HOMEMADE PIZZA WITH MATRIX SIZE AND INGREDIENTS INDEX */}
              {activeSection.title === "Homemade Pizza" && (
                <div className="flex flex-col gap-12">
                  {/* Pizza Matrix Sizing visualizer */}
                  <div className="w-full overflow-x-auto rounded-lg border border-[#f7c61f]/15 bg-[#080807]">
                    <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#f7c61f] text-[#080807]">
                          <th className="p-4 font-display font-normal uppercase tracking-wider">PIZZA TYPE / COMBINATION</th>
                          <th className="p-4 font-mono font-bold text-center">10 in</th>
                          <th className="p-4 font-mono font-bold text-center">14 in</th>
                          <th className="p-4 font-mono font-bold text-center">16 in</th>
                          <th className="p-4 font-mono font-bold text-center">18 in</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f7c61f]/10 font-sans">
                        {activeSection.rows?.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#15110c]/40 transition-colors">
                            <td className="p-4">
                              <span className="font-sans font-bold uppercase text-[#fff0c4] block text-sm">{row[0]}</span>
                              {row[2] && <span className="text-xs text-[#d6c481] block mt-1 font-light leading-snug">{row[2]}</span>}
                            </td>
                            {row[1].map((val, subIdx) => (
                              <td key={subIdx} className="p-4 font-mono font-semibold text-center text-[#f7c61f]">
                                ${val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Specialty individual builds */}
                  <div>
                    <h3 className="font-display font-normal text-2xl lg:text-[32px] lg:leading-[38.4px] text-[#f05a24] tracking-tight uppercase mb-4 pb-2 border-b border-[#f7c61f]/10">
                      OFF-MENU SPECIALS
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeSection.specials?.map((sp, idx) => (
                        <div key={idx} className="bg-[#080807] border border-[#f7c61f]/10 rounded-lg p-5">
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <h4 className="font-display font-normal text-base uppercase tracking-tight text-[#fff0c4]">{sp[0]}</h4>
                            <span className="font-mono font-extrabold text-[#f7c61f] text-sm">${sp[1]}</span>
                          </div>
                          {sp[2] && <p className="text-xs text-[#d6c481] font-light leading-normal">{sp[2]}</p>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ingredients Drawer */}
                  <div className="bg-[#080807] border border-[#f7c61f]/10 rounded-lg p-6">
                    <span className="text-xs font-mono text-[#f7c61f] uppercase tracking-widest font-black block mb-4">AVAILABLE PIZZA INGREDIENTS TO ADD:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {activeSection.ingredients?.map((ing, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[#fff0c4]/95">
                          <span className="w-1.5 h-1.5 bg-[#f05a24] rounded-full shrink-0" />
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Type 2: WINGS WITH FLAVOR DRAWER AND GROUP SIZES */}
              {activeSection.title === "Wings" && (
                <div className="flex flex-col gap-10">
                  {/* Wing Sizing cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activeSection.groups?.map((group, idx) => (
                      <div key={idx} className="bg-[#080807] border border-[#f7c61f]/15 rounded-lg p-5 flex flex-col">
                        <span className="text-xs font-mono text-[#f05a24] tracking-widest uppercase font-bold mb-3">{group.label} Selection</span>
                        <div className="space-y-3 flex-1">
                          {group.items.map((itm, iItem) => (
                            <div key={iItem} className="flex justify-between items-center text-xs sm:text-sm border-b border-[#f7c61f]/5 pb-2">
                              <span className="text-[#fff0c4] font-medium">{itm[0]}</span>
                              <span className="font-mono font-bold text-[#f7c61f]">${itm[1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Flavor heat threshold selector panel */}
                  <div className="bg-[#080807] border border-[#f7c61f]/15 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Flame className="text-[#f05a24]" size={18} />
                      <h4 className="font-display font-normal text-sm uppercase tracking-widest text-[#fff0c4]">
                        CHOOSE YOUR ATTACK (14 WING SAUCES &amp; DRY RUBS)
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {activeSection.flavors?.map((flavor, idx) => {
                        const isSpicy = idx < 5;
                        return (
                          <div 
                            key={idx} 
                            className={`p-3 rounded border text-xs font-bold uppercase tracking-tight flex items-center justify-between text-left ${
                              isSpicy 
                                ? "bg-[#f05a24]/10 border-[#f05a24]/30 text-[#f05a24]" 
                                : "bg-[#15110c] border-[#f7c61f]/10 text-[#fff0c4]/90"
                            }`}
                          >
                            <span>{flavor}</span>
                            {isSpicy && <Flame size={12} className="shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                    <span className="text-[10px] font-mono text-[#d6c481]/60 mt-4 block text-center leading-normal">
                      * All bone-in and drums selection orders come with choice of crisp celery spears and creamy buttermilk ranch or authentic blue cheese dipping sauce.
                    </span>
                  </div>
                </div>
              )}

              {/* Type 3: STANDARD SECTION ITEMS LIST */}
              {activeSection.title !== "Homemade Pizza" && activeSection.title !== "Wings" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {activeSection.items?.map((itm, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3), ease: "easeOut" }}
                      className="group border-b border-[#f7c61f]/10 pb-4 flex flex-col justify-between py-1.5 hover:bg-[#15110c]/30 rounded px-2 transition-colors duration-200"
                    >
                      <div>
                        <div className="flex justify-between items-baseline gap-4 mb-2">
                          <h3 className="font-sans font-bold text-base sm:text-lg text-[#fff0c4] uppercase tracking-normal group-hover:text-[#f7c61f] transition-colors">
                            {itm[0]}
                          </h3>
                          <span className="font-mono text-sm font-black text-[#f7c61f]">
                            {(!String(itm[1]).startsWith('$') && !/[a-zA-Z]/.test(itm[1])) ? `$${itm[1]}` : itm[1]}
                          </span>
                        </div>
                        {itm[2] && (
                          <p className="text-xs text-[#d6c481]/95 leading-relaxed font-light font-sans mt-1">
                            {itm[2]}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      </div>
    </motion.div>
  );
}

// ==========================================
// CUSTOM COMPONENT: CATERING VIEW & ESTIMATOR
// ==========================================
function CateringView() {
  const [guestCount, setGuestCount] = useState<number>(30);
  const [selectedPackageNum, setSelectedPackageNum] = useState<string>("3");
  
  // Keep track of quantity of tray items selected
  // We'll map item indexes from CHASERS_DATA.catering.trayItems
  const [traySelections, setTraySelections] = useState<Record<number, string>>({
    0: "none", // Wings
    1: "none", // Tenders
    2: "none", // Fries
  });

  // State to handle inquiry inputs
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryLocation, setInquiryLocation] = useState("niles");
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const selectedPackage = useMemo(() => {
    for (const group of CHASERS_DATA.catering.groups) {
      const match = group.packages.find(p => p.num === selectedPackageNum);
      if (match) return match;
    }
    return CHASERS_DATA.catering.groups[0].packages[2]; // Default pkg 3
  }, [selectedPackageNum]);

  // Compute calculated values
  const baseCost = useMemo(() => {
    return guestCount * selectedPackage.pricePerPerson;
  }, [guestCount, selectedPackage]);

  // Compute selected tray items cost
  const addOnCost = useMemo(() => {
    let sum = 0;
    Object.entries(traySelections).forEach(([idxStr, selection]) => {
      const idx = parseInt(idxStr, 10);
      const trayItem = CHASERS_DATA.catering.trayItems[idx];
      if (!trayItem || selection === "none") return;

      const matchedOption = trayItem.options.find(opt => opt[0] === selection);
      if (matchedOption) {
        // Parse money number
        const price = parseFloat(matchedOption[1].replace(/[^0-9.]/g, ""));
        if (!isNaN(price)) {
          sum += price;
        }
      }
    });
    return sum;
  }, [traySelections]);

  const subTotal = baseCost + addOnCost;
  const gratuityCost = subTotal * 0.18; // 18% as stated in rule
  const estimatedTax = subTotal * 0.0825; // standard IL sales tax
  const grandTotal = subTotal + gratuityCost + estimatedTax;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryPhone.trim()) {
      return alert("Please fill out your name, email, and contact phone number!");
    }
    // Simulate API flow with direct state success display
    setInquirySuccess(true);
  };

  const handleTrayChange = (idx: number, optValue: string) => {
    setTraySelections(prev => ({
      ...prev,
      [idx]: optValue
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Catering Hero Section */}
      <HeroBackground heightClass="min-h-[70vh] lg:min-h-[85vh] py-24 mb-16">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-mono text-[#f7c61f] tracking-widest font-black uppercase block mb-3">BRING THE CHAMPIONSHIP HOME</span>
          <BlurText
            text="CATERING & PARTIES"
            animateBy="words"
            delay={120}
            className="font-display font-normal text-4xl sm:text-6xl lg:text-[96px] lg:leading-none text-[#fff0c4] uppercase tracking-tighter mb-6 justify-center"
          />
          <p className="text-sm sm:text-xl text-[#d6c481]/90 font-light leading-relaxed max-w-2xl mb-10">
            From fantasy football drafts and family anniversaries to corporate matches. Get customized per-person chef catering or take-home favorite pans.
          </p>
          
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("packages-anchor");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer bg-[#f05a24] text-[#080807] hover:bg-[#fff0c4] hover:text-[#080807] transition-all px-8 py-3.5 rounded font-sans font-bold uppercase text-xs tracking-widest"
          >
            Configure Interactive Calculator
          </button>
        </div>
      </HeroBackground>

      {/* Main Catering Content Area */}
      <div id="packages-anchor" className="pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full pt-12">

      {/* Package Menu Grid */}
      <section className="mb-20 space-y-12">
        <div className="text-center flex flex-col items-center">
          <BlurText
            text="CHOOSE YOUR PACE: GAME-DAY SETS"
            animateBy="words"
            delay={100}
            className="font-display font-normal text-2xl sm:text-3xl lg:text-[64px] lg:leading-[76.8px] uppercase tracking-tight text-[#f7c61f] justify-center"
          />
          <p className="text-xs font-mono text-[#d6c481] tracking-widest uppercase mt-1">25 GUEST MINIMUM FOR EXCLUSIVES</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CHASERS_DATA.catering.groups.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              whileHover={{ 
                borderColor: "rgba(247, 198, 31, 0.35)", 
                scale: 1.015,
                boxShadow: "0 20px 30px -10px rgba(247, 198, 31, 0.05)"
              }}
              className="bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#f05a24] font-bold block mb-2">CATEGORY {groupIdx + 1}</span>
                <h3 className="font-display font-normal text-xl lg:text-[32px] lg:leading-[38.4px] text-[#f7c61f] uppercase tracking-tight mb-6 pb-2 border-b border-[#f7c61f]/10">
                  {group.category}
                </h3>
                
                <div className="space-y-6">
                  {group.packages.map((pkg) => (
                    <div 
                      key={pkg.num} 
                      onClick={() => setSelectedPackageNum(pkg.num)}
                      className={`cursor-pointer p-4 rounded border text-left transition-all ${
                        selectedPackageNum === pkg.num 
                          ? "bg-[#080807] border-[#f7c61f] shadow-md shadow-[#f7c61f]/5" 
                          : "bg-transparent border-[#f7c61f]/10 hover:border-[#f7c61f]/35"
                      }`}
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-xs font-mono font-black text-[#f05a24] uppercase">Package {pkg.num}</span>
                        <span className="font-mono font-bold text-sm text-[#f7c61f]">${pkg.pricePerPerson} / Person</span>
                      </div>
                      <h4 className="font-sans font-bold text-sm text-[#fff0c4] uppercase tracking-tight leading-snug">
                        {pkg.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f7c61f]/10 text-center">
                <span className="text-[10px] font-mono text-[#d6c481]/50 tracking-wider">
                  Select a card to calibrate real-time cost estimations below.
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tray Favorites Section */}
      <section className="mb-20">
        <div className="bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-6 sm:p-10">
          <div className="mb-8 select-none">
            <span className="text-xs font-mono text-[#f05a24] tracking-widest font-black uppercase block mb-1">INDIVIDUAL AD-DONS</span>
            <BlurText
              text="TRAY FAVORITES & BULK SERVING"
              animateBy="words"
              delay={100}
              className="font-display font-normal text-2xl sm:text-3xl lg:text-[59px] lg:leading-[70.8px] text-[#f7c61f] uppercase tracking-tight"
            />
            <p className="text-xs sm:text-sm text-[#d6c481] font-light mt-1">
              Perfect to supplement or build your self-hosted spreads. Half trays serve 10-12 guests, Full trays serve 18-22 guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHASERS_DATA.catering.trayItems.map((tray, iIdx) => (
              <div key={iIdx} className="bg-[#080807] border border-[#f7c61f]/15 rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <h4 className="font-sans font-bold text-base text-[#fff0c4] uppercase mb-4 tracking-tight leading-tight">
                    {tray.name}
                  </h4>
                  <div className="space-y-2">
                    {tray.options.map((opt, oIdx) => (
                      <div key={oIdx} className="flex justify-between items-center text-xs text-[#d6c481] py-1 border-b border-[#f7c61f]/5">
                        <span>{opt[0]}</span>
                        <strong className="text-[#f7c61f] text-xs font-mono">${opt[1]}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estimator integration selector */}
                {iIdx < 3 && (
                  <div className="pt-4 mt-4 border-t border-[#f7c61f]/10">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#f7c61f] mb-1">
                      Add to estimated ticket:
                    </label>
                    <select
                      value={traySelections[iIdx] || "none"}
                      onChange={(e) => handleTrayChange(iIdx, e.target.value)}
                      className="w-full bg-[#15110c] text-xs text-[#fff0c4] border border-[#f7c61f]/20 focus:border-[#f05a24] px-2.5 py-1.5 focus:outline-none rounded cursor-pointer font-sans"
                    >
                      <option value="none">No thanks (0.00)</option>
                      {tray.options.map((opt, oIdx) => (
                        <option key={oIdx} value={opt[0]}>
                          {opt[0]} (+${opt[1]})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR & INQUIRY SPLIT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Dynamic Interactive Calculator */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-6 sm:p-8 relative"
        >
          <div className="flex items-center gap-2 mb-6 text-[#f7c61f]">
            <Calculator size={20} />
            <h3 className="font-display font-normal text-xl lg:text-[32px] lg:leading-[38.4px] text-[#fff0c4] uppercase tracking-wide">
              INTERACTIVE PARTY COST ESTIMATOR
            </h3>
          </div>

          <p className="text-xs text-[#d6c481] font-light mb-6 leading-relaxed">
            Adjust guest sizes and add elements above. See estimations instantly, matching official catalog margins and standard policies.
          </p>

          <div className="space-y-6">
            {/* Guest Count Range slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-mono text-[#f7c61f] uppercase tracking-wider font-bold">Estimated Guests:</span>
                <span className="font-mono font-black text-[#f05a24] text-lg">{guestCount} Guests</span>
              </div>
              <input
                type="range"
                min="25"
                max="250"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                className="w-full h-1 bg-[#080807] appearance-none cursor-pointer rounded-lg accent-[#f7c61f] border border-[#f7c61f]/10"
              />
              <span className="text-[10px] font-mono text-[#d6c481]/40 tracking-tight block mt-1.5 leading-none text-left">
                * Note: Standard packages enforce a 25-guest minimum.
              </span>
            </div>

            {/* Current Estimator Settings Breakdown lines */}
            <div className="bg-[#080807] border border-[#f7c61f]/10 rounded-lg p-5 space-y-3 font-mono text-xs text-[#fff0c4]/90">
              <div className="flex justify-between">
                <span className="text-[#d6c481] normal-case">Configured Package Plan:</span>
                <span className="text-[#f7c61f] font-bold text-right uppercase font-display max-w-[200px]">
                  Pkg {selectedPackage.num} (${selectedPackage.pricePerPerson}/pp)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#d6c481] normal-case">Base Food Subtotal:</span>
                <span>${baseCost.toFixed(2)}</span>
              </div>
              
              {/* Optional Add-ons if added */}
              {addOnCost > 0 && (
                <div className="flex justify-between text-[#f05a24]">
                  <span className="normal-case font-bold">Selected Tray Add-on Products:</span>
                  <span className="font-bold">+${addOnCost.toFixed(2)}</span>
                </div>
              )}

              <div className="h-px bg-[#f7c61f]/10 my-1" />

              <div className="flex justify-between">
                <span className="text-[#d6c481] normal-case">Combined Subtotal:</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#d6c481] normal-case">Required Gratuity (18%):</span>
                <span>${gratuityCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#d6c481] normal-case">Estimated State Tax (8.25%):</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>

              <div className="h-px bg-[#f05a24] my-2" />

              <div className="flex justify-between text-[#f7c61f] text-base font-black">
                <span className="font-display font-normal uppercase">ESTIMATED TOTAL:</span>
                <span className="font-mono text-lg">${grandTotal.toFixed(2)} *</span>
              </div>
            </div>

            {/* Crucial notices list */}
            <div className="bg-[#080807]/50 rounded-md p-4 text-[11px] text-[#d6c481] space-y-1 w-full text-left font-light leading-snug">
              {CHASERS_DATA.catering.rules.map((rule, rIdx) => (
                <div key={rIdx} className="flex gap-2">
                  <span className="text-[#f7c61f] shrink-0 font-bold">&bull;</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Inquiry submission box */}
        <motion.div 
          id="inquiry-box" 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {!inquirySuccess ? (
              <motion.form 
                key="inquiryForm"
                onSubmit={handleInquirySubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-[#f05a24] text-[#080807] font-sans font-bold text-[10px] tracking-wider px-2 py-0.5 rounded uppercase leading-none">
                    FAST INQUIRY
                  </span>
                  <h3 className="font-display font-normal text-xl lg:text-[32px] lg:leading-[38.4px] text-[#fff0c4] uppercase tracking-wide">
                    SECURE YOUR BOOKING DATE
                  </h3>
                </div>
                
                <p className="text-xs text-[#d6c481] font-light leading-relaxed mb-4">
                  Send this estimation to our guest operations coordinator team. We will contact you within 12 business hours to finalize tables and spaces.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-bold mb-1">
                      Event Host Name:
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Leo Visuals"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-bold mb-1">
                      Target Event Date:
                    </label>
                    <input
                      required
                      type="date"
                      value={inquiryDate}
                      onChange={(e) => setInquiryDate(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-bold mb-1">
                      Contact Email Address:
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. host@example.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-bold mb-1">
                      Contact Phone Number:
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. (847) 555-0199"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-bold mb-1">
                    Select Preferred Event Location:
                  </label>
                  <select
                    value={inquiryLocation}
                    onChange={(e) => setInquiryLocation(e.target.value)}
                    className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none cursor-pointer font-sans"
                  >
                    <option value="niles">Chasers Niles (9003 N Milwaukee Ave)</option>
                    <option value="schiller-park">Chasers Schiller Park (4255 Old River Rd)</option>
                    <option value="lake-zurich">Chasers Lake Zurich (830 S Rand Rd)</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#f05a24] text-[#080807] hover:bg-[#f7c61f] transition-all font-sans font-bold uppercase text-xs sm:text-sm tracking-widest py-4 rounded cursor-pointer text-center leading-none inline-block shadow-lg"
                  >
                    Submit Booking Request &amp; Ticket
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="successScreen"
                className="text-center py-12 space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 bg-[#f7c61f]/15 border border-[#f7c61f] rounded-full flex items-center justify-center mx-auto text-[#f7c61f]">
                  <Check size={32} />
                </div>
                
                <div>
                  <h3 className="font-display font-normal text-2xl uppercase tracking-wider text-[#f7c61f]">
                    INQUIRY FILE OPENED!
                  </h3>
                  <p className="text-xs text-[#d6c481] font-mono tracking-widest uppercase mt-1">Ticket #CHS-{(Math.random() * 9000 + 1000).toFixed(0)}</p>
                </div>

                <div className="bg-[#080807] border border-[#f7c61f]/10 rounded-lg p-5 text-xs text-left text-[#fff0c4] space-y-2.5 max-w-md mx-auto">
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Host:</strong> {inquiryName}</p>
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Location Chosen:</strong> Chasers {inquiryLocation.toUpperCase()}</p>
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Target Date:</strong> {inquiryDate || "To be determined"}</p>
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Estimated Guest Size:</strong> {guestCount} Patrons</p>
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Calculated Evaluation Estimate:</strong> ${grandTotal.toFixed(2)} USD</p>
                </div>

                <p className="text-xs text-[#d6c481] leading-relaxed max-w-sm mx-auto font-light">
                  Thank you! An event scheduler at our <strong>{inquiryLocation}</strong> venue will phone or email you shortly. Keep this tab open if you'd like to adjust parameters.
                </p>

                <button
                  type="button"
                  onClick={() => setInquirySuccess(false)}
                  className="bg-[#15110c] text-[#fff0c4] border border-[#f7c61f]/35 hover:bg-[#f7c61f] hover:text-[#080807] transition-all font-sans font-bold uppercase text-[10px] tracking-widest px-5 py-2.5 rounded cursor-pointer mx-auto block"
                >
                  Configure another event
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
      </div>
    </motion.div>
  );
}

// ==========================================
// CUSTOM COMPONENT: LOCATIONS VIEW & ROUTER
// ==========================================
interface LocationsViewProps {
  selectedLocationSlug: string;
  setSelectedLocationSlug: (slug: string) => void;
}

function LocationsView({ selectedLocationSlug, setSelectedLocationSlug }: LocationsViewProps) {

  const selectedLoc = useMemo(() => {
    return CHASERS_DATA.locations.find(loc => loc.slug === selectedLocationSlug) || CHASERS_DATA.locations[0];
  }, [selectedLocationSlug]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Locations Hero Section */}
      <HeroBackground heightClass="min-h-[70vh] lg:min-h-[85vh] py-24 mb-16">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-mono text-[#f7c61f] tracking-widest font-black uppercase block mb-3">CHOOSE YOUR TEAM SITE</span>
          <BlurText
            text="LOCATIONS & VENUES"
            animateBy="words"
            delay={120}
            className="font-display font-normal text-4xl sm:text-6xl lg:text-[96px] lg:leading-none text-[#fff0c4] uppercase tracking-tighter mb-6 justify-center"
          />
          <p className="text-sm sm:text-xl text-[#d6c481]/90 font-light leading-relaxed max-w-2xl mb-10">
            Niles, Schiller Park, and Lake Zurich. Each Chasers boasts custom premium local draft lineups, Illinois video slots, and vibrant community loyalty.
          </p>
          
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("locations-anchor");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer bg-[#f7c61f] text-[#080807] hover:bg-[#fff0c4] hover:text-[#080807] transition-all px-8 py-3.5 rounded font-sans font-bold uppercase text-xs tracking-widest"
          >
            Select Branch Details
          </button>
        </div>
      </HeroBackground>

      {/* Main Locations Content Area */}
      <div id="locations-anchor" className="pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full pt-12">

      {/* Selector pills list */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-[#f7c61f]/10">
        {CHASERS_DATA.locations.map(loc => (
          <button
            key={loc.slug}
            type="button"
            id={`locations-pill-${loc.slug}`}
            onClick={() => setSelectedLocationSlug(loc.slug)}
            className={`cursor-pointer px-5 py-3 rounded text-xs sm:text-sm font-sans font-bold tracking-wide uppercase transition-all duration-200 border ${
              selectedLocationSlug === loc.slug 
                ? "bg-[#f05a24] text-[#080807] border-[#f05a24]" 
                : "bg-[#15110c] text-[#fff0c4]/80 border-[#f7c61f]/10 hover:border-[#f7c61f]/40"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Main Single Location Detail card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLoc.slug}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Side: Localized Info */}
          <div className="bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#f7c61f] tracking-wider font-extrabold uppercase mb-2">
                <MapPin size={12} className="text-[#f05a24]" />
                <span>OFFICIAL CHICAGOLAND HUB</span>
              </div>
              
              <BlurText
                text={`CHASERS ${selectedLoc.name.toUpperCase()}`}
                animateBy="words"
                delay={80}
                className="font-display font-normal text-2xl sm:text-3xl lg:text-[48px] lg:leading-[56px] text-[#fff0c4] uppercase tracking-tight mb-4 leading-none"
              />

              <p className="text-sm text-[#d6c481]/90 font-light leading-relaxed mb-6 font-sans">
                {selectedLoc.description}
              </p>

              <div className="space-y-6">
                {/* Address details */}
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#f7c61f] shrink-0 mt-0.5" size={18} />
                  <address className="not-italic text-sm text-[#fff0c4] leading-snug">
                    <strong>Street Address:</strong> <br />
                    <span className="text-[#d6c481]">{selectedLoc.address}</span> <br />
                    <span className="text-[#d6c481]">{selectedLoc.cityState}</span>
                  </address>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="text-[#f7c61f] shrink-0 mt-0.5" size={18} />
                  <div className="text-sm text-[#fff0c4] leading-tight">
                    <strong className="block mb-1.5 uppercase font-display text-[10px] tracking-widest text-[#f7c61f]">Operating Hours:</strong>
                    <div className="space-y-1 font-mono text-xs text-[#d6c481]">
                      {selectedLoc.hours.map((hr, idx) => (
                        <div key={idx} className="flex gap-4 justify-between min-w-[200px]">
                          <span>{hr.days}:</span>
                          <span>{hr.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Telephone trigger */}
                <div className="flex items-start gap-3">
                  <Phone className="text-[#f7c61f] shrink-0 mt-0.5" size={18} />
                  <div className="text-sm text-[#fff0c4]">
                    <strong>Phone Line:</strong> <br />
                    <a href={`tel:${selectedLoc.tel}`} className="text-[#f7c61f] hover:text-[#f05a24] transition-colors font-mono font-bold">
                      {selectedLoc.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Actions */}
            <div className="pt-8 mt-8 border-t border-[#f7c61f]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${selectedLoc.tel}`}
                className="py-3 px-4 text-center rounded bg-[#080807] border border-[#f7c61f]/30 hover:border-[#f7c61f] text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <Phone size={14} className="text-[#f7c61f]" />
                <span>Call Tonight</span>
              </a>
              
              <a
                href={selectedLoc.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-center rounded bg-[#f05a24] text-[#080807] hover:bg-[#f7c61f] transition-all text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Order Food</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Maps embedding */}
          <div className="lg:col-span-7 bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
            <div className="w-full h-full min-h-[380px] rounded-lg overflow-hidden bg-[#080807] border border-[#f7c61f]/10 relative">
              {selectedLoc.googleMapEmbed ? (
                <iframe
                  title={`Google map viewport of Chasers ${selectedLoc.name}`}
                  src={selectedLoc.googleMapEmbed}
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 text-[#d6c481]">
                  <Navigation size={24} className="mb-2" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#f7c61f]">Map loading error</span>
                </div>
              )}
            </div>
            
            <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#d6c481]/60 font-light">
              <span>&bull; Free premium parking available on premise</span>
              <span>&bull; Outdoor gaming designated sectors active</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ==========================================
// CUSTOM COMPONENT: EMPLOYMENT RECRUITMENT
// ==========================================
interface JobOpening {
  role: string;
  type: string;
  description: string;
  tasks: string[];
}

const JOBS_LIST: JobOpening[] = [
  {
    role: "Bartender & Drinks Specialist",
    type: "Part-time / Full-time",
    description: "Prepare and serve premium local drafts, customized high-volume cocktails, and table service drinks. Must hold active local food handler & alcohol service certificates (Basset).",
    tasks: ["High-speed cocktail prep during matches", "Maintains cash registries", "Cleans bars counters"]
  },
  {
    role: "Gourmet Kitchen Line Chef / Grill Lead",
    type: "Full-time",
    description: "Manage hot burger lines, prep and crisp award-winning chicken wings, and bake thin-crust custom pizzas. Previous experience in high-volume deep frying and kitchen lines mandatory.",
    tasks: ["Bakes scratch recipe thin-crust pan pizzas", "Tosses and preps signature wing flavor sets", "Maintains clean prep sanitations"]
  },
  {
    role: "Guest Server / Floor Host",
    type: "Part-time",
    description: "Greet incoming local sports fans, seat parties close to preferred screens, record table-side order configurations, and maintain clean room sections.",
    tasks: ["Directs guests and manages floor plans", "Maintains thorough knowledge of menus and pricing", "Supports team with cleanup"]
  }
];

function EmploymentView() {
  const [selectedRole, setSelectedRole] = useState(JOBS_LIST[0].role);
  const [preferredLocation, setPreferredLocation] = useState("niles");
  
  // Form input states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  
  const [experience, setExperience] = useState("");
  const [shifts, setShifts] = useState<Record<string, boolean>>({
    weekdayMorning: false,
    weekdayEvening: true,
    weekendMorning: false,
    weekendEvening: true
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleShift = (key: string) => {
    setShifts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !experience.trim()) {
      return alert("Please fill out your name, contact fields, and past experience details!");
    }
    setFormSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Employment Hero Section */}
      <HeroBackground heightClass="min-h-[70vh] lg:min-h-[85vh] py-24 mb-16">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-mono text-[#f7c61f] tracking-widest font-black uppercase block mb-3">JOIN THE CHAMPIONSHIP TRIBE</span>
          <BlurText
            text="WORK AT CHASERS"
            animateBy="words"
            delay={120}
            className="font-display font-normal text-4xl sm:text-6xl lg:text-[96px] lg:leading-none text-[#fff0c4] uppercase tracking-tighter mb-6 justify-center"
          />
          <p className="text-sm sm:text-xl text-[#d6c481]/90 font-light leading-relaxed max-w-2xl mb-10">
            Become a key player in Chicagoland's ultimate high-energy sports brand. We offer competitive base wages, tip shares, shift meals, and direct career progression paths.
          </p>
          
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("employment-anchor");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer bg-[#f7c61f] text-[#080807] hover:bg-[#fff0c4] hover:text-[#080807] transition-all px-8 py-3.5 rounded font-sans font-bold uppercase text-xs tracking-widest"
          >
            Review Active Openings
          </button>
        </div>
      </HeroBackground>

      {/* Main Employment Content Area */}
      <div id="employment-anchor" className="pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full pt-12">

      {/* Grid: Open Positions on left, interactive form on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Open Roles cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="select-none">
            <h3 className="font-display font-normal text-xl lg:text-[32px] lg:leading-[38.4px] text-[#f7c61f] uppercase tracking-wide mb-2">
              ACTIVE CAREER OPENINGS
            </h3>
            <p className="text-xs text-[#d6c481] font-light">
              We recruit, develop, and promote top talents locally across our three locations.
            </p>
          </div>

          <div className="space-y-4">
            {JOBS_LIST.map((job, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedRole(job.role)}
                className={`cursor-pointer p-5 rounded-lg border transition-all text-left ${
                  selectedRole === job.role 
                    ? "bg-[#15110c] border-[#f05a24]" 
                    : "bg-[#15110c]/40 border-[#f7c61f]/10 hover:border-[#f7c61f]/30"
                }`}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-sans font-bold text-base text-[#f7c61f] uppercase tracking-tight leading-none">
                    {job.role}
                  </h4>
                  <span className="text-[10px] font-mono tracking-widest text-[#fff0c4]/50 uppercase font-bold text-right">
                    {job.type}
                  </span>
                </div>
                
                <p className="text-xs text-[#d6c481] leading-relaxed font-light mb-4 text-left font-sans">
                  {job.description}
                </p>

                <div className="space-y-1">
                  {job.tasks.map((tsk, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-1.5 text-[10px] font-mono text-[#fff0c4]/80">
                      <Check size={10} className="text-[#f7c61f]" />
                      <span>{tsk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#15110c] border border-[#f7c61f]/10 rounded-lg p-5 flex items-start gap-3">
            <Info className="text-[#f7c61f] shrink-0 mt-0.5" size={18} />
            <p className="text-xs text-[#d6c481]/90 leading-relaxed font-light">
              <strong>Employee Perks:</strong> Complimentary burger/sandwich meal during dinner rotations, direct gaming commission tip distributions, flexible scheduling grids, and state-certified training sponsorships.
            </p>
          </div>
        </div>

        {/* Right: Submission form block */}
        <div className="lg:col-span-7 bg-[#15110c] border border-[#f7c61f]/15 rounded-xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form 
                key="applyForm"
                onSubmit={handleApplySubmit} 
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="border-b border-[#f7c61f]/10 pb-4 mb-2">
                  <span className="text-[10px] font-mono text-[#f05a24] uppercase tracking-widest font-black block mb-1">CRAVING A CAREER?</span>
                  <h3 className="font-display font-normal text-xl lg:text-[32px] lg:leading-[38.4px] text-[#f7c61f] uppercase tracking-tight">
                    APPLY INSTANTLY ONLINE
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-black mb-1">
                      Full Legal Name:
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Liam Chaser"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-black mb-1">
                      Preferred Location:
                    </label>
                    <select
                      value={preferredLocation}
                      onChange={(e) => setPreferredLocation(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none cursor-pointer font-sans"
                    >
                      <option value="niles">Chasers Niles (9003 N Milwaukee Ave)</option>
                      <option value="schiller-park">Chasers Schiller Park (4255 Old River Rd)</option>
                      <option value="lake-zurich">Chasers Lake Zurich (830 S Rand Rd)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-black mb-1">
                      Email Address:
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. applicant@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-black mb-1">
                      Best Phone Number:
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. (847) 555-0155"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-black mb-1">
                    Select Position to Apply For:
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none cursor-pointer font-sans"
                  >
                    {JOBS_LIST.map((job, idx) => (
                      <option key={idx} value={job.role}>
                        {job.role} ({job.type})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Shift availability indicators */}
                <div>
                  <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-black mb-2">
                    Shift Availability (Check all that apply):
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div 
                      onClick={() => toggleShift("weekdayMorning")}
                      className={`p-3 rounded border text-xs font-medium cursor-pointer flex justify-between items-center transition-all ${
                        shifts.weekdayMorning 
                          ? "bg-[#f7c61f]/10 border-[#f7c61f] text-[#f7c61f]" 
                          : "bg-[#080807] border-[#f7c61f]/10 text-[#fff0c4]/70 hover:border-[#f7c61f]/30"
                      }`}
                    >
                      <span>Weekday Morning</span>
                      {shifts.weekdayMorning && <Check size={14} />}
                    </div>
                    <div 
                      onClick={() => toggleShift("weekdayEvening")}
                      className={`p-3 rounded border text-xs font-medium cursor-pointer flex justify-between items-center transition-all ${
                        shifts.weekdayEvening 
                          ? "bg-[#f7c61f]/10 border-[#f7c61f] text-[#f7c61f]" 
                          : "bg-[#080807] border-[#f7c61f]/10 text-[#fff0c4]/70 hover:border-[#f7c61f]/30"
                      }`}
                    >
                      <span>Weekday Evening</span>
                      {shifts.weekdayEvening && <Check size={14} />}
                    </div>
                    <div 
                      onClick={() => toggleShift("weekendMorning")}
                      className={`p-3 rounded border text-xs font-medium cursor-pointer flex justify-between items-center transition-all ${
                        shifts.weekendMorning 
                          ? "bg-[#f7c61f]/10 border-[#f7c61f] text-[#f7c61f]" 
                          : "bg-[#080807] border-[#f7c61f]/10 text-[#fff0c4]/70 hover:border-[#f7c61f]/30"
                      }`}
                    >
                      <span>Weekend Morning</span>
                      {shifts.weekendMorning && <Check size={14} />}
                    </div>
                    <div 
                      onClick={() => toggleShift("weekendEvening")}
                      className={`p-3 rounded border text-xs font-medium cursor-pointer flex justify-between items-center transition-all ${
                        shifts.weekendEvening 
                          ? "bg-[#f7c61f]/10 border-[#f7c61f] text-[#f7c61f]" 
                          : "bg-[#080807] border-[#f7c61f]/10 text-[#fff0c4]/70 hover:border-[#f7c61f]/30"
                      }`}
                    >
                      <span>Weekend Evening</span>
                      {shifts.weekendEvening && <Check size={14} />}
                    </div>
                  </div>
                </div>

                {/* Past Experiences field */}
                <div>
                  <label className="block text-[10px] font-mono text-[#f7c61f] uppercase tracking-widest font-black mb-1">
                    Describe Past Kitchen or Sports Bar Experience:
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="e.g. Worked as bartender at Dave's Grill for 18 months managing beer drafts under high-pressure night matches ..."
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#fff0c4]/45 uppercase tracking-wide mb-1 leading-snug">
                    Additional Bio Details (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="Any certificates or start-date constraints"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-[#080807] border border-[#f7c61f]/20 focus:border-[#f05a24] text-xs text-[#fff0c4] px-4 py-3 rounded focus:outline-none placeholder-[#d6c481]/30 font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#f05a24] text-[#080807] hover:bg-[#f7c61f] transition-all font-sans font-bold uppercase text-xs sm:text-sm tracking-widest py-4 rounded cursor-pointer text-center leading-none inline-block shadow-lg"
                  >
                    Transmit Employment Application
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="formSuccess"
                className="text-center py-12 space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 bg-[#f7c61f]/15 border border-[#f7c61f] rounded-full flex items-center justify-center mx-auto text-[#f7c61f]">
                  <Check size={32} />
                </div>
                
                <div>
                  <h3 className="font-display font-normal text-2xl uppercase tracking-wider text-[#f7c61f]">
                    APPLICATION RECORDED!
                  </h3>
                  <p className="text-xs text-[#d6c481] font-mono tracking-widest uppercase mt-1">Status: Active Screening</p>
                </div>

                <div className="bg-[#080807] border border-[#f7c61f]/10 rounded-lg p-5 text-xs text-left text-[#fff0c4] space-y-2.5 max-w-sm mx-auto">
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Applicant:</strong> {fullName}</p>
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Applying For:</strong> {selectedRole}</p>
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Target Venue:</strong> Chasers {preferredLocation.toUpperCase()}</p>
                  <p><strong className="text-[#f7c61f] uppercase font-sans font-bold block text-[10px] tracking-wider">Availability:</strong> {Object.entries(shifts).filter(s => s[1]).map(s => s[0].replace(/([A-Z])/g, " $1")).join(", ")}</p>
                </div>

                <p className="text-xs text-[#d6c481] leading-relaxed max-w-sm mx-auto font-light">
                  Success! Your online application ticket has been sent to our recruitment manager at Chasers <strong>{preferredLocation}</strong>. We will contact you at <strong>{phone}</strong> to arrange in-person interviews if chosen.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setExperience("");
                    setFormSubmitted(false);
                  }}
                  className="bg-[#080807] text-[#fff0c4] border border-[#f7c61f]/35 hover:border-[#f7c61f] transition-all font-sans font-bold uppercase text-[10px] tracking-widest px-5 py-2.5 rounded cursor-pointer mx-auto block"
                >
                  Apply for another position
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
      </div>
    </motion.div>
  );
}
