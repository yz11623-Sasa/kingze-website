import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Globe, ArrowRight, Mail, Phone, MapPin, 
  ChevronRight, ShieldCheck, Layers, Anchor, Wind,
  CheckCircle, Package, FileText
} from 'lucide-react';

// --- Mock Data & Translations ---

const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      title: "Advanced Fiberglass Composite Solutions",
      subtitle: "Direct export of premium Fiberglass Roving, Woven Roving, and Industrial Insulation materials.",
      cta: "Explore Products",
    },
    features: {
      quality: "ISO 9001 Certified",
      global: "Global Export Logistics",
      tech: "Advanced Manufacturing",
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
      desc: "Product Description",
      features: "Key Features",
      apps: "Applications",
      packaging: "Packaging & Storage",
      specs: "Technical Data",
    },
    about: {
      title: "About Kingze",
      p1: "Kingze Composites is a leading manufacturer specializing in high-performance fiberglass materials. With over 20 years of industry experience, we provide robust solutions for the global composite market.",
      p2: "Our state-of-the-art facility produces Direct Roving, Assembled Roving, and Electronic Grade fabrics tailored for complex industrial applications.",
      mission: "Our Mission: To reinforce the world with strength and sustainability.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to order? Need a technical data sheet? Send us a message.",
      name: "Your Name",
      email: "Email Address",
      message: "Message / Inquiry",
      submit: "Send Inquiry",
      success: "Thank you! We have received your inquiry.",
      error: "Please fill in all fields correctly.",
    }
  },
  zh: {
    nav: {
      home: "首页",
      products: "产品中心",
      about: "关于我们",
      contact: "联系我们",
    },
    hero: {
      title: "先进玻璃纤维复合材料解决方案",
      subtitle: "专业出口优质无捻粗纱、方格布及工业绝缘材料。",
      cta: "浏览产品",
    },
    features: {
      quality: "ISO 9001 认证",
      global: "全球出口物流",
      tech: "先进制造工艺",
    },
    products: {
      title: "产品系列",
      subtitle: "用于建筑、船舶和风能领域的高性能材料。",
      viewDetails: "查看规格",
      back: "返回产品列表",
      inquire: "咨询此产品",
      related: "相关产品推荐",
    },
    detail: {
      desc: "产品描述",
      features: "主要特点",
      apps: "应用领域",
      packaging: "包装与储存",
      specs: "技术参数",
    },
    about: {
      title: "关于 Kingze",
      p1: "Kingze Composites 是一家专注于高性能玻璃纤维材料的领先制造商。凭借超过20年的行业经验，我们为全球复合材料市场提供强有力的解决方案。",
      p2: "我们拥有最先进的生产设施，生产专为复杂工业应用量身定制的直接粗纱、合股粗纱和电子级织物。",
      mission: "我们的使命：以力量和可持续性以此加固世界。",
    },
    contact: {
      title: "联系我们",
      subtitle: "准备订购？需要技术数据表？请给我们留言。",
      name: "您的姓名",
      email: "电子邮箱",
      message: "留言 / 询价",
      submit: "发送询盘",
      success: "谢谢！我们已收到您的询价。",
      error: "请正确填写所有字段。",
    }
  }
};

const productsData = [
  {
    id: 1,
    name: { en: "ECR-Glass Direct Roving", zh: "ECR-Glass 直接无捻粗纱" },
    category: { en: "Fiberglass Roving", zh: "玻璃纤维粗纱" },
    description: { 
      en: "ECR-Glass Direct Roving is specifically designed for filament winding, pultrusion, and weaving processes. It features excellent acid and corrosion resistance, making it superior to standard E-Glass in harsh environments. Compatible with unsaturated polyester, vinyl ester, and epoxy resins.",
      zh: "ECR-Glass直接无捻粗纱专为缠绕、拉挤和编织工艺设计。它具有优异的耐酸和耐腐蚀性能，在恶劣环境中优于标准E-Glass。与不饱和聚酯、乙烯基酯和环氧树脂具有优异的相容性。"
    },
    features: {
      en: [
        "Excellent corrosion and acid resistance",
        "Complete and fast wet-out",
        "Low static and fuzz",
        "High mechanical strength of the finished product",
        "Superior fatigue resistance"
      ],
      zh: [
        "优异的耐腐蚀和耐酸性",
        "浸透速度快且完全",
        "低静电，少毛羽",
        "成品机械强度高",
        "卓越的耐疲劳性"
      ]
    },
    applications: {
      en: "Widely used in manufacturing chemical storage tanks, sewage pipes, high-pressure pipes, and pultruded profiles requiring high corrosion resistance.",
      zh: "广泛用于制造化学储罐、排污管道、高压管道以及需要高耐腐蚀性的拉挤型材。"
    },
    packaging: {
      en: "Each bobbin is wrapped in a shrink poly bag and stacked on pallets. Net weight per pallet is approx. 1000kg.",
      zh: "每个纱团收缩膜包装并堆叠在托盘上。每个托盘净重约1000公斤。"
    },
    specs: [
      { label: "Tex", value: "1200, 2400, 4800" },
      { label: "Glass Type", value: "ECR (Boron-free)" },
      { label: "Resin Compatibility", value: "UP, VE, EP" },
      { label: "Moisture Content", value: "≤ 0.10%" }
    ],
    images: [
      "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550523892-38977616725d?auto=format&fit=crop&q=80&w=800", // Placeholder for detailed view
      "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80&w=800"  // Placeholder for application
    ]
  },
  {
    id: 2,
    name: { en: "Woven Roving Fabric", zh: "玻璃纤维方格布" },
    category: { en: "Construction Materials", zh: "建筑材料" },
    description: { 
      en: "A bidirectional fabric made by interweaving direct rovings. High mechanical strength, used widely in hand lay-up and molding processes for boats and tanks.",
      zh: "由直接粗纱交织而成的双向织物。机械强度高，广泛用于船艇和储罐的手糊及模压工艺。"
    },
    features: {
      en: ["Uniform thickness", "High tensile strength", "Consistent quality"],
      zh: ["厚度均匀", "高拉伸强度", "质量稳定"]
    },
    applications: {
      en: "Boat hulls, storage tanks, cooling towers, and architectural structures.",
      zh: "船体、储罐、冷却塔和建筑结构。"
    },
    packaging: {
      en: "Rolled on paper cores, packed in carton boxes or woven bags.",
      zh: "卷在纸芯上，装在纸箱或编织袋中。"
    },
    specs: [
      { label: "Weight", value: "300g/m² - 800g/m²" },
      { label: "Weave Type", value: "Plain / Twill" },
      { label: "Width", value: "1000mm - 3000mm" }
    ],
    images: [
      "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 3,
    name: { en: "Chopped Strand Mat", zh: "短切毡" },
    category: { en: "Insulation Materials", zh: "绝缘材料" },
    description: { 
      en: "Non-woven fabric consisting of randomly distributed chopped strands held together with a powder or emulsion binder.",
      zh: "由随机分布的短切原丝通过粉末或乳液粘结剂粘结而成的无纺织物。"
    },
    features: {
      en: ["Easy air removal", "Good conformability", "Fast wet-out"],
      zh: ["易于排气", "良好的贴覆性", "浸透快"]
    },
    applications: {
      en: "Automotive interior parts, sanitary ware, pipes, and general FRP products.",
      zh: "汽车内饰件、卫浴洁具、管道和通用玻璃钢产品。"
    },
    packaging: {
      en: "Each roll is packed in a plastic bag and then in a carton box.",
      zh: "每卷装在一个塑料袋中，然后装在纸箱中。"
    },
    specs: [
      { label: "Weight", value: "100g/m² - 600g/m²" },
      { label: "Binder", value: "Powder / Emulsion" },
      { label: "Application", value: "Automotive, Sanitary" }
    ],
    images: [
      "https://images.unsplash.com/photo-1593551203650-39a4a3831656?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615822461461-6e3040254b4f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 4,
    name: { en: "Industrial Insulation Cloth", zh: "工业绝缘布" },
    category: { en: "Industrial Applications", zh: "工业应用" },
    description: { 
      en: "High-temperature resistant fiberglass cloth utilized for thermal insulation, fire protection, and expansion joints.",
      zh: "耐高温玻璃纤维布，用于隔热、防火和膨胀节。"
    },
    features: {
      en: ["High temp resistance", "Fireproof", "Chemical stability"],
      zh: ["耐高温", "防火", "化学稳定性"]
    },
    applications: {
      en: "Welding blankets, removable insulation covers, fire curtains.",
      zh: "焊接毯、可拆卸保温套、防火帘。"
    },
    packaging: {
      en: "Standard rolls 50m or 100m length, packed in woven bags.",
      zh: "标准卷长50米或100米，编织袋包装。"
    },
    specs: [
      { label: "Temp Resistance", value: "550°C" },
      { label: "Thickness", value: "0.4mm - 3.0mm" },
      { label: "Coating", value: "Silicone / PU (Optional)" }
    ],
    images: [
      "https://images.unsplash.com/photo-1615822461461-6e3040254b4f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593551203650-39a4a3831656?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

// --- Components ---

const Navbar = ({ lang, setLang, currentPage, setPage, isMobileMenuOpen, setIsMobileMenuOpen, t }) => (
  <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div 
          className="flex-shrink-0 font-bold text-xl tracking-wider cursor-pointer flex items-center gap-2"
          onClick={() => setPage('home')}
        >
          <Layers className="text-blue-500" />
          KINGZE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {Object.keys(t.nav).map((key) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === key ? 'bg-slate-800 text-blue-400' : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                {t.nav[key]}
              </button>
            ))}
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors"
            >
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-slate-800">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Panel */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-slate-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(t.nav).map((key) => (
            <button
              key={key}
              onClick={() => { setPage(key); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
            >
              {t.nav[key]}
            </button>
          ))}
          <button 
            onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 text-blue-400 font-bold"
          >
            Switch Language ({lang === 'en' ? '中文' : 'English'})
          </button>
        </div>
      </div>
    )}
  </nav>
);

const Hero = ({ t, setPage }) => (
  <div className="relative bg-slate-900 overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
        alt="Industrial Factory" 
        className="w-full h-full object-cover opacity-20"
      />
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {t.hero.title}
      </h1>
      <p className="mt-6 text-xl text-slate-300 max-w-3xl">
        {t.hero.subtitle}
      </p>
      <div className="mt-10">
        <button 
          onClick={() => setPage('products')}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {t.hero.cta}
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  </div>
);

const Features = ({ t }) => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{t.features.quality}</h3>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
            <Globe size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{t.features.global}</h3>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
            <Layers size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{t.features.tech}</h3>
        </div>
      </div>
    </div>
  </div>
);

const ProductCard = ({ product, lang, t, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100"
    onClick={onClick}
  >
    <div className="h-48 bg-slate-200 relative overflow-hidden">
      <img 
        src={product.images[0]} 
        alt={product.name[lang]} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <span className="text-xs font-bold uppercase text-blue-600 tracking-wide">
        {product.category[lang]}
      </span>
      <h3 className="mt-2 text-xl font-semibold text-slate-900 line-clamp-1">
        {product.name[lang]}
      </h3>
      <p className="mt-3 text-slate-500 text-sm line-clamp-3">
        {product.description[lang]}
      </p>
      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
        {t.products.viewDetails} <ChevronRight size={16} />
      </div>
    </div>
  </div>
);

const ProductList = ({ t, lang, onProductClick }) => (
  <div className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">{t.products.title}</h2>
        <p className="mt-4 text-lg text-slate-500">{t.products.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {productsData.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            lang={lang} 
            t={t} 
            onClick={() => onProductClick(product)} 
          />
        ))}
      </div>
    </div>
  </div>
);

const ProductDetail = ({ t, lang, product, onBack, onInquire, onProductClick }) => {
  const [activeImg, setActiveImg] = useState(product.images[0]);

  // Reset active image when product changes
  useEffect(() => {
    setActiveImg(product.images[0]);
    window.scrollTo(0,0);
  }, [product]);

  const relatedProducts = productsData
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <div className="mb-6">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            <ChevronRight className="rotate-180 mr-1" size={18} />
            {t.products.back} / <span className="ml-2 text-slate-400">{product.name[lang]}</span>
          </button>
        </div>
        
        {/* Top Section: Gallery + Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg bg-slate-100 border border-slate-200 aspect-w-4 aspect-h-3 h-[400px]">
              <img 
                src={activeImg} 
                alt={product.name[lang]} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
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

          {/* Right: Key Info & CTA */}
          <div className="flex flex-col">
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">
              {product.category[lang]}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {product.name[lang]}
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed border-b border-slate-100 pb-6">
              {product.description[lang]}
            </p>

            {/* Quick Specs Box */}
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mb-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                {t.detail.specs} (Quick View)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {product.specs.slice(0, 4).map((spec, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-slate-500">{spec.label}:</span>
                    <span className="text-slate-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <button 
                onClick={() => onInquire(product.name[lang])}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
              >
                <Mail size={20} />
                {t.products.inquire}
              </button>
              <p className="text-center text-slate-400 text-sm mt-3">
                Expert response within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: Deep Dive Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Features & Advantages */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">{t.detail.features}</h3>
            </div>
            <ul className="space-y-3">
              {product.features[lang].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Wind className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">{t.detail.apps}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              {product.applications[lang]}
            </p>
            {/* Placeholder for application Icons/Images if needed */}
            <div className="bg-slate-100 h-32 rounded-lg flex items-center justify-center text-slate-400 text-sm">
              [Application Diagram / Photo]
            </div>
          </div>

          {/* Packaging & Storage */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Package className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">{t.detail.packaging}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {product.packaging[lang]}
            </p>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-blue-700 font-medium cursor-pointer hover:underline">
                <FileText size={18} />
                Download Technical Data Sheet (PDF)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Related Products */}
        <div className="border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">{t.products.related}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard 
                key={p.id} 
                product={p} 
                lang={lang} 
                t={t} 
                onClick={() => onProductClick(p)} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const AboutSection = ({ t }) => (
  <div className="py-16 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">{t.about.title}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="prose prose-blue text-slate-600 text-lg">
          <p className="mb-4">{t.about.p1}</p>
          <p className="mb-4">{t.about.p2}</p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-800 font-semibold">
            {t.about.mission}
          </blockquote>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-lg shadow-md transform translate-y-4" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" alt="Factory 1" />
          <img className="rounded-lg shadow-md transform -translate-y-4" src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=400" alt="Factory 2" />
        </div>
      </div>
      
      {/* Industry Applications Icons */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-4">
          <Wind className="mx-auto text-slate-400 mb-2" size={40} />
          <span className="font-medium text-slate-600">Wind Energy</span>
        </div>
        <div className="p-4">
          <Anchor className="mx-auto text-slate-400 mb-2" size={40} />
          <span className="font-medium text-slate-600">Marine</span>
        </div>
        <div className="p-4">
          <Layers className="mx-auto text-slate-400 mb-2" size={40} />
          <span className="font-medium text-slate-600">Construction</span>
        </div>
        <div className="p-4">
          <ShieldCheck className="mx-auto text-slate-400 mb-2" size={40} />
          <span className="font-medium text-slate-600">Defense</span>
        </div>
      </div>
    </div>
  </div>
);

const ContactSection = ({ t, initialMessage }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: initialMessage || ''
  });
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    /* ---------------------------------------------------------
       IMPORTANT: FORM BACKEND CONNECTION
       When you get your Formspree link (e.g., https://formspree.io/f/xmqnbwky),
       you will replace the simulation code below with the real fetch call.
       ---------------------------------------------------------
    */

    if (formState.name && formState.email.includes('@') && formState.message) {
      // SIMULATION (Remove this when you have Formspree)
      setStatus('success');
      setTimeout(() => {
        setStatus(null);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
      
      /* // REAL CODE (Uncomment this later):
      const response = await fetch("YOUR_FORMSPREE_URL_HERE", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) setStatus('success');
      else setStatus('error');
      */

    } else {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-slate-500">{t.contact.subtitle}</p>
        </div>

        <div className="bg-slate-50 shadow-lg rounded-xl p-8 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">{t.contact.name}</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-2 px-3 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">{t.contact.email}</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-2 px-3 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">{t.contact.message}</label>
              <textarea
                rows={4}
                name="message"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-2 px-3 border"
              />
            </div>

            {status === 'error' && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                {t.contact.error}
              </div>
            )}
            
            {status === 'success' && (
              <div className="text-green-600 text-sm text-center bg-green-50 p-2 rounded">
                {t.contact.success}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t.contact.submit}
            </button>
          </form>

          <div className="mt-8 border-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 text-sm">
            <div className="flex items-center justify-center md:justify-start">
              <Phone size={16} className="mr-2 text-blue-500" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin size={16} className="mr-2 text-blue-500" />
              New Jersey, USA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ t, setPage }) => (
  <footer className="bg-slate-900 text-slate-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
           <Layers className="text-blue-500" /> KINGZE
        </div>
        <p className="text-sm text-slate-400">
          Premium fiberglass composite solutions for the global market.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li onClick={() => setPage('products')} className="cursor-pointer hover:text-blue-400">Products</li>
          <li onClick={() => setPage('about')} className="cursor-pointer hover:text-blue-400">About Us</li>
          <li onClick={() => setPage('contact')} className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
        <p className="text-sm text-slate-400 mb-2">sales@kingze-composites.com</p>
        <p className="text-sm text-slate-400">+86 138 0000 0000</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
      &copy; 2024 Kingze Composites. All rights reserved.
    </div>
  </footer>
);

// --- Main App Component ---

const App = () => {
  const [lang, setLang] = useState('en');
  const [currentPage, setPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquirySubject, setInquirySubject] = useState('');

  const t = translations[lang];

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
            <Hero t={t} setPage={setPage} />
            <Features t={t} />
            <ProductList t={t} lang={lang} onProductClick={handleProductClick} />
            <AboutSection t={t} />
          </>
        );
      case 'products':
        return <ProductList t={t} lang={lang} onProductClick={handleProductClick} />;
      case 'productDetail':
        return selectedProduct ? (
          <ProductDetail 
            t={t} 
            lang={lang} 
            product={selectedProduct} 
            onBack={() => setPage('products')}
            onInquire={handleInquire}
            onProductClick={handleProductClick}
          />
        ) : setPage('products');
      case 'about':
        return <AboutSection t={t} />;
      case 'contact':
        return <ContactSection t={t} initialMessage={inquirySubject} />;
      default:
        return <Hero t={t} setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        currentPage={currentPage} 
        setPage={(page) => {
          setPage(page);
          window.scrollTo(0, 0);
          setInquirySubject(''); // Reset inquiry subject on nav click
        }}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        t={t}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer t={t} setPage={setPage} />
    </div>
  );
};

export default App;