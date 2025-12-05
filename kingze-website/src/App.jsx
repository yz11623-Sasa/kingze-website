import React, { useState, useEffect } from 'react';
// --- Icons ---
import { 
  Menu, X, Globe, ArrowRight, Mail, Phone, MapPin, 
  ChevronRight, CheckCircle, Package, FileText, Flame, Droplet, Hammer, Factory, Zap, Wind, Layers, Download, Facebook, Instagram
} from 'lucide-react';

// --- Configuration ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzrpjjy"; 

// --- Content & Data ---
const content = {
  nav: {
    home: "Home",
    products: "Products",
    about: "About Us",
    contact: "Contact",
    languages: "Global Sites",
  },
  hero: {
    title: "PROFESSIONAL FIBERGLASS MANUFACTURER",
    subtitle: "Direct export of Fiberglass Mesh, Cloth, and Insulation Materials. High-quality reinforcement solutions for global construction since 2014.",
    cta: "Explore Solutions",
  },
  products: {
    title: "Our Product Range",
    subtitle: "High-performance materials for construction, marine, and wind energy sectors.",
    viewDetails: "View Specifications",
    back: "Back to Products",
    inquire: "Inquire About This Product",
    related: "Related Products",
  },
  detail: {
    desc: "Technical Deep Dive",
    features: "Key Features",
    apps: "Applications",
    packaging: "Packaging & Storage",
    specs: "Technical Data",
    download: "Download Technical Data Sheet (PDF)"
  },
  about: {
    title: "About Changzhou Kingze",
    p1: "Changzhou Kingze Composite Materials Co., Ltd. was founded in 2014. It is a professional manufacturer and trading company for fiberglass products, specializing in weaving all kinds of fiberglass textile products. The key to our success is that we can send our clients good quality fiberglass products at a very competitive price.",
    p2: "We have a highly efficient team to deal with inquiries from customers. Our products are mainly exported to American, Brazil, Russia, Romania, Poland, Ukraine, Spain, Hungary, Costa Rica, etc., and enjoy a good reputation among clients.",
    p3: "We can provide a wide range of products including fiberglass mesh, FIBERGLASS TEXTURIZED FABRIC, fiberglass drywall joint tape, fiberglass cloth (fabric), and also fiber-glass yarn, fiberglass roving, fiberglass weaving machine, weaving machine spare parts, coating glue, etc. Moreover, besides standard products, we also provide an extensive range of customization services.",
    mission: "We are sincerely seeking cooperation with all interested companies worldwide.",
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Inquiries from customers in America, Europe, Russia and beyond are welcome.",
    name: "Name",
    email: "Email",
    message: "Message / Inquiry",
    submit: "Send Inquiry",
    sending: "Sending...",
    success: "Thank you! We have received your inquiry.",
    error: "Oops! Something went wrong. Please try again.",
  }
};

const productsData = [
  {
    id: 1,
    name: "Fiberglass Mesh",
    category: "Reinforcement",
    summary: "The Ultimate Reinforcement Solution for Construction & Industrial Applications.",
    descriptionBlocks: [
      "Fiberglass mesh (also known as glass fiber mesh) is a high-performance, versatile material engineered for reinforcement, crack prevention, and structural stability. It serves as the 'steel' inside the wall insulation system.",
      "It is widely used in External Thermal Insulation Composite Systems (ETICS) as a structural layer. By embedding the mesh into the base coat mortar, it forms a robust reinforcement layer that disperses stress caused by temperature changes and structural movements, effectively preventing surface cracking.",
      "Our mesh features excellent alkali resistance, ensuring long-term durability even in harsh cement environments. It acts as the critical 'structural tie' connecting the insulation layer and the exterior finish, preventing layer separation and enhancing the overall impact resistance of the wall."
    ],
    features: [
      "High tensile strength & Impact resistance",
      "Excellent alkali resistance (Long-term stability in mortar)",
      "Prevents wall cracking & deformation",
      "Easy to apply (Flat surface, no curling)",
      "Available in multiple colors (Green, Yellow, Blue, etc.) for identification"
    ],
    applications: "Wall reinforcement, EIFS/ETICS (External Thermal Insulation Composite Systems), Marble back reinforcement, Waterproofing roofing, Mosaic tile backing, Board reinforcement.",
    packaging: "Each roll is shrunk wrapped in plastic film, then packed in cardboard cartons or on pallets. Standard roll size: 1m x 50m.",
    specs: [
      { label: "Weight", value: "45g/m² - 300g/m²" },
      { label: "Mesh Size", value: "2.5x2.5mm - 10x10mm" },
      { label: "Width", value: "1m - 2m" },
      { label: "Weave", value: "Leno" }
    ],
    images: [
      "/mesh-white-standard.jpg", 
      "/mesh-blue-functional.jpg", 
      "/mesh-multicolor-rolls.jpg", 
      "/mesh-seaming-line.jpg", 
      "/eifs-structure-diagram.jpg", 
      "/insulation-detail-closeup.jpg", 
      "/mesh-application-values.jpg", 
      "/mesh-construction-worker.jpg", 
      "/mesh-project-building.jpg"
    ]
  },
  {
    id: 2,
    name: "7628 Fiberglass Cloth (Acrylic Coated)",
    category: "Fiberglass Cloth",
    summary: "Ideal protective and reinforcing outer layer for external wall insulation systems.",
    descriptionBlocks: [
      "This 7628 fiberglass cloth is coated with acrylic resin on both sides. The acrylic resin coating creates a smooth, moisture-proof surface that blocks external rainwater and ambient moisture effectively, while the inherent porous structure of the fiberglass base cloth ensures air permeability, allowing trapped water vapor in the insulation layer to escape smoothly.",
      "Beyond these core features, it also boasts fire retardancy, high tensile strength, aging resistance and chemical corrosion resistance, with the base cloth capable of withstanding temperatures below 550℃.",
      "When paired with mineral wool for external wall external insulation systems, the 7628 fiberglass cloth serves as an ideal protective and reinforcing outer layer. It tightly wraps the mineral wool, which excels at thermal insulation but is fragile and prone to moisture absorption.",
      "This combination not only enhances the overall structural stability of the insulation system to prevent mineral wool from loosening or falling off but also leverages the cloth’s waterproof performance to keep the mineral wool dry—avoiding insulation efficiency degradation caused by moisture absorption. Meanwhile, its breathability prevents mold growth and structural damage to the wall due to vapor accumulation.",
      "Additionally, its fire-retardant property complements mineral wool’s thermal insulation, forming a dual barrier that boosts the building’s fire safety and energy-saving effects, and extending the service life of the external wall insulation system significantly."
    ],
    features: [
      "Base cloth withstands < 550℃",
      "Moisture-proof & Breathable (Vapor permeable)",
      "Fire retardant & Anti-aging",
      "Prevents mold growth inside insulation",
      "High tensile strength",
      "Chemical corrosion resistance"
    ],
    applications: "External wall insulation wrapping (specifically for Mineral Wool protection), Pipeline insulation, Fire curtains, Expansion joints.",
    packaging: "Rolls packed in woven bags or cartons.",
    specs: [
      { label: "Base Fabric", value: "7628 E-glass" },
      { label: "Coating", value: "Acrylic Resin (2 sides)" },
      { label: "Temp Resistance", value: "< 550℃" },
      { label: "Weight", value: "200g/m² (Typical)" }
    ],
    // --- UPDATED: Added your 4 new images ---
    images: [
      "/cloth-waterproof-demo.jpg",    // (图23) 防水演示
      "/cloth-texture-detail.jpg",     // (图24) 细节特写
      "/cloth-construction-site.jpg",  // (图25) 施工场景
      "/cloth-production-machine.jpg"  // (图26) 生产设备
    ]
  },
  {
    id: 3,
    name: "Fiberglass Texturized Fabric",
    category: "High Temp Insulation",
    summary: "Bulked yarn fabric with high thermal insulation capabilities.",
    descriptionBlocks: [
      "Woven from texturized fiberglass yarns, this fabric offers superior thickness and air retention, making it an excellent thermal insulator. The texturizing process 'bulks' the yarn, creating tiny air pockets that trap heat effectively.",
      "It is soft, flexible, and easy to handle, serving as an ideal replacement for asbestos cloth. The unique texture provides high dust-holding capacity and better abrasion resistance.",
      "This fabric demonstrates excellent foldability and adaptability, making it perfect for complex shapes, pipe wrapping, and multi-layer composite applications."
    ],
    features: [
      "High thermal insulation efficiency",
      "Soft, flexible, and easy to cut/sew",
      "Asbestos-free & Non-hazardous",
      "High dust holding capacity",
      "Excellent abrasion resistance"
    ],
    applications: "Welding blankets, Expansion joints, Removable insulation covers (jackets), Heat shields, heavy-duty welding protection.",
    packaging: "50m/roll, packed in woven bags.",
    specs: [
      { label: "Thickness", value: "1.0mm - 3.0mm" },
      { label: "Weight", value: "600g/m² - 2000g/m²" },
      { label: "Temp", value: "550℃" }
    ],
    images: [
      "/texturized-fabric-texture.jpg", 
      "/texturized-fabric-folded.jpg"
    ]
  },
  {
    id: 4,
    name: "Fiberglass Drywall Joint Tape",
    category: "Construction",
    summary: "Self-adhesive tape for joining drywall plates and repairing cracks.",
    descriptionBlocks: [
      "A self-adhesive fiberglass mesh tape specifically designed for drywall joint finishing and crack repair. It eliminates the need for a pre-bedding coat, significantly speeding up the construction process.",
      "The tape features a strong, high-tack adhesive that holds firmly to drywall surfaces. Its open mesh structure allows drywall compound (mud) to penetrate through, creating a strong, bubble-free bond that resists cracking and stretching.",
      "Available in various sizes (small DIY rolls to large industrial rolls) and colors (White, Yellow) to suit different project requirements and bulk wholesale needs."
    ],
    features: [
      "Self-adhesive & High tack",
      "High tensile strength",
      "Easy application (No pre-bedding required)",
      "Mold and mildew resistance",
      "Available in multiple colors (Yellow, White)"
    ],
    applications: "Drywall joints finishing, Wall crack repair, Ceiling repair, Plasterboard joining.",
    packaging: "Shrink wrapped rolls. Standard sizes 50m/100m. Supports wholesale bulk packing.",
    specs: [
      { label: "Mesh Size", value: "8x8 / 9x9 inch" },
      { label: "Weight", value: "60g/m² - 75g/m²" },
      { label: "Width", value: "48mm / 50mm / 100mm" }
    ],
    images: [
      "/drywall-tape-sizes.jpg", 
      "/drywall-tape-large-roll.jpg", 
      "/drywall-tape-yellow.jpg", 
      "/drywall-tape-twin-pack.jpg", 
      "/drywall-tape-detail.jpg", 
      "/drywall-tape-application.jpg"
    ]
  }
];

// --- Components ---

const Navbar = ({ currentPage, setPage, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <nav className="bg-stone-900 text-stone-100 sticky top-0 z-50 shadow-xl border-b border-stone-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-24">
        <div 
          className="flex-shrink-0 font-bold text-xl tracking-wider cursor-pointer flex items-center gap-3 group"
          onClick={() => setPage('home')}
        >
          <div className="bg-white p-1 rounded-full group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo-icon.png" 
              alt="Kingze Logo" 
              className="h-10 w-10 object-contain"
              onError={(e) => {e.target.style.display = 'none';}} 
            />
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-2xl font-extrabold tracking-tight text-white group-hover:text-orange-500 transition-colors">KINGZE</span>
            <span className="text-[10px] text-orange-400 font-bold tracking-[0.2em] uppercase">Composites</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-baseline space-x-2 bg-stone-800/50 p-1 rounded-lg">
            {['home', 'products', 'about', 'contact'].map((key) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={`px-5 py-2 rounded-md text-sm font-bold transition-all duration-300 uppercase tracking-wide ${
                  currentPage === key 
                    ? 'bg-orange-600 text-white shadow-md transform scale-105' 
                    : 'hover:bg-stone-700 text-stone-300 hover:text-white'
                }`}
              >
                {content.nav[key]}
              </button>
            ))}
          </div>
          
          {/* SOCIAL MEDIA & LANGUAGE - PROMINENT */}
          <div className="flex items-center gap-3 border-l border-stone-700 pl-6">
            
            {/* Social Icons */}
            <a 
              href="https://www.facebook.com/kingzefiberglass" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#1877F2] p-2 rounded-full text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-900/50 transition-all duration-300"
              title="Follow us on Facebook"
            >
              <Facebook size={20} fill="currentColor" />
            </a>
            <a 
              href="https://www.instagram.com/hui.zhong.5059/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-2 rounded-full text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-900/50 transition-all duration-300"
              title="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>

            {/* Language Selector */}
            <div className="relative group ml-2">
              <button className="flex items-center gap-1 bg-stone-800 hover:bg-stone-700 text-stone-300 px-3 py-2 rounded-lg transition-colors border border-stone-700">
                <Globe size={20} className="text-orange-500" />
                <span className="hidden sm:inline text-xs font-bold uppercase">Global</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-stone-800 rounded-xl shadow-2xl py-2 hidden group-hover:block border border-stone-700 z-50">
                 <div className="px-4 py-2 text-sm text-white font-bold border-b border-stone-700 bg-stone-700/50">Select Language</div>
                 <button className="w-full text-left px-4 py-2 text-sm text-orange-400 font-bold bg-stone-700/30">English (EN)</button>
                 <button className="w-full text-left px-4 py-2 text-sm text-stone-400 hover:text-white hover:bg-stone-700 transition-colors">Español (Coming Soon)</button>
                 <button className="w-full text-left px-4 py-2 text-sm text-stone-400 hover:text-white hover:bg-stone-700 transition-colors">Français (Coming Soon)</button>
                 <button className="w-full text-left px-4 py-2 text-sm text-stone-400 hover:text-white hover:bg-stone-700 transition-colors">Русский (Coming Soon)</button>
                 <button className="w-full text-left px-4 py-2 text-sm text-stone-400 hover:text-white hover:bg-stone-700 transition-colors">العربية (Coming Soon)</button>
              </div>
            </div>

          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

    {isMobileMenuOpen && (
      <div className="lg:hidden bg-stone-900 border-t border-stone-800 absolute w-full shadow-2xl">
        <div className="px-4 pt-4 pb-6 space-y-2">
          {['home', 'products', 'about', 'contact'].map((key) => (
            <button
              key={key}
              onClick={() => { setPage(key); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-4 rounded-lg text-lg font-bold hover:bg-stone-800 text-stone-200 border-l-4 border-transparent hover:border-orange-500 transition-all"
            >
              {content.nav[key]}
            </button>
          ))}
          <div className="pt-6 mt-6 border-t border-stone-800 grid grid-cols-2 gap-4">
            <a href="https://www.facebook.com/kingzefiberglass" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#1877F2] text-white py-3 rounded-lg font-bold">
              <Facebook size={20} fill="currentColor" /> Facebook
            </a>
            <a href="https://www.instagram.com/hui.zhong.5059/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white py-3 rounded-lg font-bold">
              <Instagram size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    )}
  </nav>
);

// --- UPDATED HERO: Carousel + Lighter Overlay ---
const Hero = ({ setPage }) => (
  <div className="relative bg-stone-900 overflow-hidden">
    {/* Carousel Logic */}
    <CarouselBackground />
    
    <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/30 border border-orange-500/50 text-orange-200 text-sm font-bold mb-6 tracking-wide uppercase backdrop-blur-sm">
          <Flame size={14} /> Heat Insulation Experts
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 leading-tight drop-shadow-lg">
          {content.hero.title}
        </h1>
        <p className="mt-4 text-xl text-stone-100 leading-relaxed max-w-2xl border-l-4 border-orange-500 pl-6 drop-shadow-md font-medium">
          {content.hero.subtitle}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setPage('products')}
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-orange-600 hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-900/50 transform hover:-translate-y-1"
          >
            {content.hero.cta}
            <ArrowRight className="ml-2" size={24} />
          </button>
          <button 
            onClick={() => setPage('contact')}
            className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 bg-black/20 backdrop-blur-sm text-lg font-bold rounded-lg text-white hover:bg-white hover:text-stone-900 transition-all"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- Helper Component for Hero Carousel ---
const CarouselBackground = () => {
  const images = [
    '/hero-comfort-home.jpg',
    '/hero-winter-insulation.jpg'
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {images.map((img, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={img} 
            alt={`Hero Background ${idx}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Light Overlay: changed from thick gradient to light black wash */}
      <div className="absolute inset-0 bg-black/40"></div>
    </>
  );
};

const Features = () => {
  const featuresList = [
    { 
      icon: <Hammer size={36} />, 
      title: "Reinforcement", 
      desc: "High tensile strength solutions for construction stability." 
    },
    { 
      icon: <Flame size={36} />, 
      title: "Fireproof", 
      desc: "Non-combustible materials withstanding up to 550℃." 
    },
    { 
      icon: <Droplet size={36} />, 
      title: "Waterproof & Breathable", 
      desc: "Acrylic coatings that block moisture while allowing vapor escape." 
    },
    { 
      icon: <Layers size={36} />, 
      title: "Thermal Insulation", 
      desc: "Enhances energy efficiency in external wall systems." 
    },
  ];

  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Why Choose Kingze</span>
          <h2 className="text-4xl font-extrabold text-stone-900 mt-2">Core Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-stone-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-5 bg-emerald-50 text-emerald-600 rounded-full mb-6 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-sm overflow-hidden border border-stone-200 hover:shadow-2xl hover:border-orange-300 transition-all duration-500 group cursor-pointer flex flex-col h-full"
    onClick={onClick}
  >
    <div className="h-64 bg-stone-200 relative overflow-hidden">
      <img 
        src={product.images[0]} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
        {product.category}
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-orange-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-stone-600 text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
        {product.summary}
      </p>
      <div className="flex items-center text-orange-600 text-sm font-bold uppercase tracking-wide mt-auto pt-4 border-t border-stone-100">
        View Specs <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const ProductList = ({ onProductClick }) => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-stone-900">{content.products.title}</h2>
        <p className="mt-4 text-xl text-stone-500 max-w-3xl mx-auto">{content.products.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {productsData.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => onProductClick(product)} 
          />
        ))}
      </div>
    </div>
  </div>
);

const ProductDetail = ({ product, onBack, onInquire, onProductClick }) => {
  const [activeImg, setActiveImg] = useState(product.images[0]);

  useEffect(() => {
    setActiveImg(product.images[0]);
    window.scrollTo(0,0);
  }, [product]);

  const relatedProducts = productsData
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-stone-500 hover:text-orange-600 transition-colors text-sm font-bold uppercase tracking-wide"
          >
            <ChevronRight className="rotate-180 mr-1" size={20} />
            {content.products.back}
          </button>
        </div>
        
        {/* Top: Gallery & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-stone-200 aspect-w-4 aspect-h-3 h-[500px]">
              <img 
                src={activeImg} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImg === img ? 'border-orange-500 ring-2 ring-orange-200 scale-105' : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-orange-600 font-extrabold tracking-widest uppercase text-sm mb-3">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-8 leading-tight">
              {product.name}
            </h1>
            
            {/* Summary */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
              <p className="text-xl text-stone-800 font-medium italic">
                {product.summary}
              </p>
            </div>

            {/* Main Description */}
            <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm mb-10">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-stone-100 pb-2">
                <FileText size={18} className="text-orange-500"/> {content.detail.specs}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {product.specs.slice(0, 6).map((spec, idx) => (
                  <div key={idx} className="flex justify-between text-base">
                    <span className="text-stone-500 font-medium">{spec.label}</span>
                    <span className="text-stone-900 font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="w-full border-2 border-orange-600 text-orange-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all flex justify-center items-center gap-2"
              >
                <Download size={22} />
                {content.detail.download}
              </button>

              <button 
                onClick={() => onInquire(product.name)}
                className="w-full bg-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl hover:shadow-2xl hover:shadow-orange-900/20 flex justify-center items-center gap-2 transform active:scale-[0.98]"
              >
                <Mail size={22} />
                {content.products.inquire}
              </button>
              <p className="text-center text-stone-400 text-xs mt-3 uppercase tracking-widest">
                Factory Direct • Global Shipping • ISO Certified
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Technical Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-extrabold text-stone-900 mb-8 pb-4 border-b-2 border-stone-200">
              {content.detail.desc}
            </h3>
            <div className="prose prose-lg prose-stone max-w-none text-stone-600">
              {product.descriptionBlocks ? (
                product.descriptionBlocks.map((block, i) => (
                  <p key={i} className="mb-6 text-lg leading-relaxed text-justify">
                    {block}
                  </p>
                ))
              ) : (
                <p className="mb-6 text-lg leading-relaxed text-justify">{product.description || product.summary}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <div className="flex items-center gap-3 mb-6 text-emerald-800">
                <CheckCircle size={28} />
                <h3 className="text-2xl font-bold">{content.detail.features}</h3>
              </div>
              <ul className="space-y-4">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-emerald-900 font-medium">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-md">
              <div className="flex items-center gap-3 mb-6 text-orange-700">
                <Wind size={28} />
                <h3 className="text-2xl font-bold">{content.detail.apps}</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg">
                {product.applications}
              </p>
            </div>

            <div className="bg-stone-100 rounded-2xl p-8 border border-stone-200">
              <div className="flex items-center gap-3 mb-6 text-stone-700">
                <Package size={28} />
                <h3 className="text-2xl font-bold">{content.detail.packaging}</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg">
                {product.packaging}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">{content.products.related}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onClick={() => onProductClick(p)} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const AboutSection = () => (
  <div className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-20">
        <h2 className="text-4xl font-extrabold text-stone-900">{content.about.title}</h2>
        <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full hidden lg:block"></div>
      </div>
      
      <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { img: "/factory-production-line.jpg", icon: <Factory />, title: "Production", sub: "Advanced Drawing Lines" },
          { img: "/factory-weaving-process.jpg", icon: <Zap />, title: "Weaving", sub: "High-speed Looms" },
          { img: "/factory-workshop-overview.jpg", icon: <Layers />, title: "Scale", sub: "Large-scale Manufacturing" }
        ].map((item, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg h-72 border-b-4 border-orange-600">
             <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                  src={item.img} 
                  alt={item.title} />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-8">
                <div className="text-white transform group-hover:-translate-y-2 transition-transform duration-300">
                  <p className="font-bold text-2xl flex items-center gap-3 mb-1 text-orange-400">{item.icon} {item.title}</p>
                  <p className="text-sm text-stone-200 font-medium tracking-wide">{item.sub}</p>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="prose prose-lg text-stone-600">
          <p className="mb-6 leading-relaxed">{content.about.p1}</p>
          <p className="mb-6 leading-relaxed">{content.about.p2}</p>
          <p className="mb-8 leading-relaxed">{content.about.p3}</p>
          <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-stone-800 font-semibold bg-emerald-50/50 p-6 rounded-r-xl">
            "{content.about.mission}"
          </blockquote>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
           <div className="bg-orange-600 text-white p-10 rounded-2xl text-center shadow-xl transform hover:-translate-y-1 transition-transform">
              <span className="block text-5xl font-extrabold mb-2">2014</span>
              <span className="text-xs uppercase tracking-wider opacity-80 font-bold">Established</span>
           </div>
           <div className="bg-stone-800 text-white p-10 rounded-2xl text-center shadow-xl transform hover:-translate-y-1 transition-transform">
              <span className="block text-5xl font-extrabold mb-2">10+</span>
              <span className="text-xs uppercase tracking-wider opacity-80 font-bold">Export Markets</span>
           </div>
           <div className="bg-white text-stone-900 p-10 rounded-2xl text-center shadow-lg border border-stone-200 col-span-2">
              <span className="block text-2xl font-bold mb-2 flex items-center justify-center gap-2 text-emerald-600"><CheckCircle /> ISO 9001 Certified</span>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">International Quality Standard</span>
           </div>
        </div>
      </div>
      
      {/* Export Markets Bar */}
      <div className="mt-24 border-t border-stone-200 pt-12">
        <p className="text-center text-sm font-bold text-stone-400 uppercase tracking-[0.2em] mb-10">Global Export Markets</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-stone-600 font-bold text-lg">
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/us.png" alt="USA" className="h-5 shadow-sm rounded-sm" /> USA
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/br.png" alt="Brazil" className="h-5 shadow-sm rounded-sm" /> Brazil
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/ru.png" alt="Russia" className="h-5 shadow-sm rounded-sm" /> Russia
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/es.png" alt="Spain" className="h-5 shadow-sm rounded-sm" /> Spain
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/pl.png" alt="Poland" className="h-5 shadow-sm rounded-sm" /> Poland
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/ro.png" alt="Romania" className="h-5 shadow-sm rounded-sm" /> Romania
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/ua.png" alt="Ukraine" className="h-5 shadow-sm rounded-sm" /> Ukraine
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/hu.png" alt="Hungary" className="h-5 shadow-sm rounded-sm" /> Hungary
           </span>
           <span className="flex items-center gap-3 hover:text-orange-600 transition-colors cursor-default">
             <img src="https://flagcdn.com/32x24/cr.png" alt="Costa Rica" className="h-5 shadow-sm rounded-sm" /> Costa Rica
           </span>
        </div>
      </div>
    </div>
  </div>
);

const ContactSection = ({ initialMessage }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: initialMessage || ''
  });
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' }); 
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div id="contact-form" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-stone-900">{content.contact.title}</h2>
          <p className="mt-4 text-xl text-stone-500">{content.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 bg-stone-900 text-white rounded-2xl p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
             {/* Decorative circle */}
             <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-orange-600 rounded-full opacity-20 blur-2xl"></div>
             
             <div className="relative z-10">
               <h3 className="font-bold text-xl mb-8 border-b border-stone-700 pb-4">Contact Info</h3>
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="bg-stone-800 p-2 rounded-lg text-orange-500"><MapPin size={24} /></div>
                   <p className="text-sm text-stone-300 leading-relaxed font-medium">
                     Changzhou Kingze Composite Materials Co.,Ltd.<br/>
                     Changzhou, Jiangsu, China
                   </p>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="bg-stone-800 p-2 rounded-lg text-orange-500"><Mail size={24} /></div>
                   <p className="text-sm text-stone-300 font-medium">kimzhong@kingze.cn</p>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="bg-stone-800 p-2 rounded-lg text-orange-500"><Phone size={24} /></div>
                   <p className="text-sm text-stone-300 font-medium">+86 135 0578 7801</p>
                 </div>
               </div>
             </div>
             <div className="relative z-10 mt-10 pt-8 border-t border-stone-800">
               <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Business Hours</p>
               <p className="text-sm text-stone-300 mt-2">Mon-Fri, 9am - 6pm (GMT+8)</p>
             </div>
          </div>

          <div className="col-span-2 bg-stone-50 shadow-xl rounded-2xl p-10 border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">{content.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full rounded-xl border-stone-200 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white py-4 px-5 border transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">{content.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full rounded-xl border-stone-200 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white py-4 px-5 border transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">{content.contact.message}</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full rounded-xl border-stone-200 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-white py-4 px-5 border transition-colors"
                  placeholder="I am interested in..."
                  required
                />
              </div>

              {status === 'error' && (
                <div className="text-red-600 bg-red-50 p-4 rounded-xl font-bold text-center border border-red-100">
                  {content.contact.error}
                </div>
              )}
              
              {status === 'success' && (
                <div className="text-emerald-600 bg-emerald-50 p-4 rounded-xl font-bold text-center border border-emerald-100">
                  {content.contact.success}
                </div>
              )}
              
              {status === 'sending' && (
                <div className="text-orange-600 bg-orange-50 p-4 rounded-xl font-bold text-center border border-orange-100 animate-pulse">
                  {content.contact.sending}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex justify-center py-5 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white ${status === 'sending' ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform active:scale-[0.99]`}
              >
                {status === 'sending' ? content.contact.sending : content.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ setPage }) => (
  <footer className="bg-stone-900 text-stone-400 py-20 border-t border-stone-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 text-white font-bold text-2xl mb-6">
             <img 
                src="/logo-icon.png" 
                alt="Kingze Logo" 
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
                onError={(e) => {e.target.style.display = 'none';}}
             />
             <span className="tracking-tight">KINGZE</span>
          </div>
          <p className="text-sm text-stone-500 leading-relaxed max-w-sm mb-8">
            Changzhou Kingze Composite Materials Co.,Ltd.<br/>
            Your trusted partner in high-performance fiberglass reinforcement and insulation solutions.
          </p>
          <div className="flex gap-4">
             {/* FOOTER SOCIAL LINKS */}
             <a 
               href="https://www.facebook.com/kingzefiberglass" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
             >
               <Facebook size={20} fill="currentColor" />
             </a>
             <a 
               href="https://www.instagram.com/hui.zhong.5059/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
             >
               <Instagram size={20} />
             </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-b border-stone-800 pb-2 inline-block">Products</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-orange-500 transition-colors">Fiberglass Mesh</li>
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-orange-500 transition-colors">Fiberglass Cloth</li>
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-orange-500 transition-colors">Drywall Tape</li>
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-orange-500 transition-colors">Texturized Fabric</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-b border-stone-800 pb-2 inline-block">Company</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li onClick={() => setPage('about')} className="cursor-pointer hover:text-orange-500 transition-colors">About Us</li>
            <li onClick={() => setPage('contact')} className="cursor-pointer hover:text-orange-500 transition-colors">Contact Sales</li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">Privacy Policy</li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors">Terms of Service</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-stone-800 pt-10 text-center text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; 2024 Changzhou Kingze Composite Materials Co.,Ltd. All rights reserved.</span>
        <span className="flex gap-4">
          <span className="hover:text-stone-400 cursor-pointer">Privacy</span>
          <span className="hover:text-stone-400 cursor-pointer">Terms</span>
          <span className="hover:text-stone-400 cursor-pointer">Sitemap</span>
        </span>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---
const App = () => {
  const [currentPage, setPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquirySubject, setInquirySubject] = useState('');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage('productDetail');
  };

  const handleInquire = (productName) => {
    setInquirySubject(`Inquiry regarding: ${productName}`);
    setSelectedProduct(null);
    setPage('contact');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setPage={setPage} />
            <AboutSection />
            <ProductList onProductClick={handleProductClick} />
            <Features />
          </>
        );
      case 'products':
        return <ProductList onProductClick={handleProductClick} />;
      case 'productDetail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setPage('products')}
            onInquire={handleInquire}
            onProductClick={handleProductClick}
          />
        ) : setPage('products');
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection initialMessage={inquirySubject} />;
      default:
        return <Hero setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 selection:bg-orange-200 selection:text-orange-900">
      <Navbar 
        currentPage={currentPage} 
        setPage={(page) => {
          setPage(page);
          window.scrollTo(0, 0);
          setInquirySubject(''); 
        }}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
};

export default App;
