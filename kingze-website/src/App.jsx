import React, { useState, useEffect } from 'react';
// --- Icons ---
import { 
  Menu, X, Globe, ArrowRight, Mail, Phone, MapPin, 
  ChevronRight, CheckCircle, Package, FileText, Flame, Droplet, Hammer, Factory, Zap, Wind, Layers
} from 'lucide-react';

// --- Configuration ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xmqnbwky"; 

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
    title: "ADVANCED FIBERGLASS TEXTILES",
    subtitle: "Professional manufacturer of Fiberglass Mesh, Cloth, and Fabric. Reinforcing the world with strength and sustainability since 2014.",
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
    images: [
      "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615822461461-6e3040254b4f?auto=format&fit=crop&q=80&w=800"
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
  <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div 
          className="flex-shrink-0 font-bold text-xl tracking-wider cursor-pointer flex items-center gap-3"
          onClick={() => setPage('home')}
        >
          <img 
            src="/logo-icon.png" 
            alt="Kingze Logo" 
            className="h-10 w-10 object-contain"
            onError={(e) => {e.target.style.display = 'none';}} 
          />
          <div className="flex flex-col">
            <span className="leading-none">KINGZE</span>
            <span className="text-[10px] text-slate-400 font-normal tracking-widest">COMPOSITES</span>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {['home', 'products', 'about', 'contact'].map((key) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide ${
                  currentPage === key ? 'text-blue-400' : 'hover:text-blue-400 text-slate-300'
                }`}
              >
                {content.nav[key]}
              </button>
            ))}
            
            <div className="group relative inline-block text-left">
              <button className="flex items-center gap-1 px-3 py-2 text-slate-500 hover:text-slate-300 text-xs font-medium border border-slate-700 rounded transition-colors">
                <Globe size={14} />
                Global (EN)
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 hidden group-hover:block border border-slate-700">
                 <div className="px-4 py-2 text-xs text-slate-400">Español (Coming Soon)</div>
                 <div className="px-4 py-2 text-xs text-slate-400">Français (Coming Soon)</div>
                 <div className="px-4 py-2 text-xs text-slate-400">Русский (Coming Soon)</div>
                 <div className="px-4 py-2 text-xs text-slate-400">العربية (Coming Soon)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-slate-800">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {isMobileMenuOpen && (
      <div className="md:hidden bg-slate-800 border-t border-slate-700">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['home', 'products', 'about', 'contact'].map((key) => (
            <button
              key={key}
              onClick={() => { setPage(key); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-4 rounded-md text-base font-medium hover:bg-slate-700 border-b border-slate-700 last:border-0"
            >
              {content.nav[key]}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

const Hero = ({ setPage }) => (
  <div className="relative bg-slate-900 overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
        alt="Fiberglass Weaving Factory" 
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          {content.hero.title}
        </h1>
        <p className="mt-4 text-xl text-slate-300 leading-relaxed">
          {content.hero.subtitle}
        </p>
        <div className="mt-10 flex gap-4">
          <button 
            onClick={() => setPage('products')}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            {content.hero.cta}
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button 
            onClick={() => setPage('contact')}
            className="inline-flex items-center px-8 py-4 border border-slate-600 text-base font-bold rounded-md text-slate-300 hover:bg-slate-800 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Features = () => {
  const featuresList = [
    { 
      icon: <Hammer size={32} />, 
      title: "Reinforcement", 
      desc: "High tensile strength solutions for construction stability." 
    },
    { 
      icon: <Flame size={32} />, 
      title: "Fireproof", 
      desc: "Non-combustible materials withstanding up to 550℃." 
    },
    { 
      icon: <Droplet size={32} />, 
      title: "Waterproof & Breathable", 
      desc: "Acrylic coatings that block moisture while allowing vapor escape." 
    },
    { 
      icon: <Layers size={32} />, 
      title: "Thermal Insulation", 
      desc: "Enhances energy efficiency in external wall systems." 
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">Core Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 bg-blue-100 rounded-full text-blue-600 mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer flex flex-col h-full"
    onClick={onClick}
  >
    <div className="h-56 bg-slate-200 relative overflow-hidden">
      <img 
        src={product.images[0]} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full uppercase tracking-wider">
        {product.category}
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
        {product.summary}
      </p>
      <div className="flex items-center text-blue-600 text-sm font-bold uppercase tracking-wide mt-auto">
        View Specs <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const ProductList = ({ onProductClick }) => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900">{content.products.title}</h2>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{content.products.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            <ChevronRight className="rotate-180 mr-1" size={18} />
            {content.products.back}
          </button>
        </div>
        
        {/* Top: Gallery & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg bg-slate-100 border border-slate-200 aspect-w-4 aspect-h-3 h-[400px]">
              <img 
                src={activeImg} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImg === img ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              {product.name}
            </h1>
            
            {/* Summary */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
              <p className="text-lg text-slate-800 font-medium italic">
                {product.summary}
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText size={16} /> {content.detail.specs}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {product.specs.slice(0, 6).map((spec, idx) => (
                  <div key={idx} className="flex justify-between text-sm border-b border-slate-200 pb-2 last:border-0">
                    <span className="text-slate-500">{spec.label}</span>
                    <span className="text-slate-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <button 
                onClick={() => onInquire(product.name)}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl flex justify-center items-center gap-2 transform active:scale-95"
              >
                <Mail size={20} />
                {content.products.inquire}
              </button>
              <p className="text-center text-slate-400 text-xs mt-3">
                Direct from Manufacturer • Global Shipping
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Technical Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              {content.detail.desc}
            </h3>
            <div className="prose prose-slate max-w-none text-slate-600">
              {product.descriptionBlocks ? (
                product.descriptionBlocks.map((block, i) => (
                  <p key={i} className="mb-4 text-lg leading-relaxed text-justify">
                    {block}
                  </p>
                ))
              ) : (
                <p className="mb-4 text-lg leading-relaxed text-justify">{product.description || product.summary}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="flex items-center gap-2 mb-6 text-blue-800">
                <CheckCircle size={24} />
                <h3 className="text-xl font-bold">{content.detail.features}</h3>
              </div>
              <ul className="space-y-4">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-blue-800">
                <Wind size={24} />
                <h3 className="text-xl font-bold">{content.detail.apps}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {product.applications}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <div className="flex items-center gap-2 mb-6 text-blue-800">
                <Package size={24} />
                <h3 className="text-xl font-bold">{content.detail.packaging}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {product.packaging}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">{content.products.related}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

// --- UPDATED ABOUT SECTION with Flags ---
const AboutSection = () => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900">{content.about.title}</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full hidden lg:block"></div>
      </div>
      
      <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
           <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                src="/factory-production-line.jpg" 
                alt="Production Line" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-bold text-lg flex items-center gap-2"><Factory size={18}/> Production</p>
                <p className="text-xs text-slate-300">Advanced Drawing Lines</p>
              </div>
           </div>
        </div>
        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
           <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                src="/factory-weaving-process.jpg" 
                alt="Weaving Process" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-bold text-lg flex items-center gap-2"><Zap size={18}/> Weaving</p>
                <p className="text-xs text-slate-300">High-speed Looms</p>
              </div>
           </div>
        </div>
        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
           <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                src="/factory-workshop-overview.jpg" 
                alt="Workshop Overview" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-bold text-lg flex items-center gap-2"><Layers size={18}/> Scale</p>
                <p className="text-xs text-slate-300">Large-scale Manufacturing</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="prose prose-lg text-slate-600">
          <p className="mb-6 leading-relaxed">{content.about.p1}</p>
          <p className="mb-6 leading-relaxed">{content.about.p2}</p>
          <p className="mb-8 leading-relaxed">{content.about.p3}</p>
          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-slate-800 font-medium bg-white p-6 rounded-r-lg shadow-sm">
            "{content.about.mission}"
          </blockquote>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-blue-900 text-white p-8 rounded-lg text-center shadow-lg">
              <span className="block text-4xl font-extrabold mb-2">2014</span>
              <span className="text-xs uppercase tracking-wider opacity-70">Established</span>
           </div>
           <div className="bg-slate-800 text-white p-8 rounded-lg text-center shadow-lg">
              <span className="block text-4xl font-extrabold mb-2">10+</span>
              <span className="text-xs uppercase tracking-wider opacity-70">Export Markets</span>
           </div>
           <div className="bg-slate-100 text-slate-900 p-8 rounded-lg text-center shadow-md col-span-2">
              <span className="block text-xl font-bold mb-2">ISO 9001</span>
              <span className="text-xs uppercase tracking-wider text-slate-500">Quality Certified</span>
           </div>
        </div>
      </div>
      
      {/* Export Markets Bar with Flags */}
      <div className="mt-20 border-t border-slate-200 pt-10">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Global Export Markets</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-500 font-semibold">
           <span className="flex items-center gap-2"><span className="text-2xl">🇺🇸</span> USA</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇧🇷</span> Brazil</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇷🇺</span> Russia</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇪🇸</span> Spain</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇵🇱</span> Poland</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇷🇴</span> Romania</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇺🇦</span> Ukraine</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇭🇺</span> Hungary</span>
           <span className="flex items-center gap-2"><span className="text-2xl">🇨🇷</span> Costa Rica</span>
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
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">{content.contact.title}</h2>
          <p className="mt-4 text-lg text-slate-500">{content.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 bg-slate-900 text-white rounded-xl p-8 flex flex-col justify-between">
             <div>
               <h3 className="font-bold text-lg mb-6">Contact Info</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-3">
                   <MapPin className="text-blue-400 mt-1" size={20} />
                   <p className="text-sm text-slate-300 leading-relaxed">
                     Changzhou Kingze Composite Materials Co.,Ltd.<br/>
                     Changzhou, Jiangsu, China
                   </p>
                 </div>
                 <div className="flex items-center gap-3">
                   <Mail className="text-blue-400" size={20} />
                   <p className="text-sm text-slate-300">sales@kingze-composites.com</p>
                 </div>
                 <div className="flex items-center gap-3">
                   <Phone className="text-blue-400" size={20} />
                   <p className="text-sm text-slate-300">+86 138 0000 0000</p>
                 </div>
               </div>
             </div>
             <div className="mt-8 pt-8 border-t border-slate-700">
               <p className="text-xs text-slate-500">Working Hours: Mon-Fri, 9am - 6pm (GMT+8)</p>
             </div>
          </div>

          <div className="col-span-2 bg-slate-50 shadow-lg rounded-xl p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{content.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-3 px-4 border"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{content.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-3 px-4 border"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{content.contact.message}</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-3 px-4 border"
                  placeholder="I am interested in..."
                  required
                />
              </div>

              {status === 'error' && (
                <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md font-medium">
                  {content.contact.error}
                </div>
              )}
              
              {status === 'success' && (
                <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-md font-medium">
                  {content.contact.success}
                </div>
              )}
              
              {status === 'sending' && (
                <div className="text-blue-600 text-sm text-center bg-blue-50 p-3 rounded-md font-medium">
                  {content.contact.sending}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-lg text-base font-bold text-white ${status === 'sending' ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all`}
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
  <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 text-white font-bold text-2xl mb-6">
             <img 
                src="/logo-icon.png" 
                alt="Kingze Logo" 
                className="h-10 w-10 object-contain"
                onError={(e) => {e.target.style.display = 'none';}}
             />
             <span>KINGZE</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
            Changzhou Kingze Composite Materials Co.,Ltd.<br/>
            Professional manufacturer of fiberglass textile products since 2014.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">in</div>
             <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">f</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Products</h4>
          <ul className="space-y-3 text-sm">
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-blue-400 transition-colors">Fiberglass Mesh</li>
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-blue-400 transition-colors">Fiberglass Cloth</li>
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-blue-400 transition-colors">Drywall Tape</li>
            <li onClick={() => setPage('products')} className="cursor-pointer hover:text-blue-400 transition-colors">Texturized Fabric</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-3 text-sm">
            <li onClick={() => setPage('about')} className="cursor-pointer hover:text-blue-400 transition-colors">About Us</li>
            <li onClick={() => setPage('contact')} className="cursor-pointer hover:text-blue-400 transition-colors">Contact Sales</li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">Privacy Policy</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        &copy; 2024 Changzhou Kingze Composite Materials Co.,Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- UPDATED MAIN APP ---
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
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
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
