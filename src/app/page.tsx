"use client";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Testimonial carousel state
  const testimonials = [
    {
      text: "Perubahan yang saya rasai dalam 30 hari pertama sungguh luar biasa. Sistem pencernaan lebih baik, kulit lebih cerah.",
      author: "— Dr. Siti Aminah, KL"
    },
    {
      text: "Produk ini sangat membantu masalah perut saya. Kini saya rasa lebih bertenaga setiap hari!",
      author: "— Encik Hafiz, Selangor"
    },
    {
      text: "Kulit saya makin glowing dan badan rasa ringan. Sangat recommended!",
      author: "— Puan Aina, Johor"
    },
    {
      text: "Saya suka sebab mudah diambil dan kesan cepat. Terima kasih ADAMËVE!",
      author: "— Nurul, Penang"
    }
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Glassmorphism header scroll show/hide
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (headerRef.current) {
            if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
              // Scroll down, hide header
              headerRef.current.style.transform = 'translateY(-100%)';
            } else {
              // Scroll up, show header
              headerRef.current.style.transform = 'translateY(0)';
            }
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const self = this as HTMLAnchorElement;
        const target = document.querySelector(self.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    const observer = new window.IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    // Navbar scroll effect
    const onScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    // Parallax effect for hero bottle
    const onParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      const bottle = document.querySelector('.floating-bottle') as HTMLElement | null;
      if (bottle && scrolled < window.innerHeight) {
        bottle.style.transform = `perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(${rate}px)`;
      }
    };
    window.addEventListener('scroll', onParallax);

    // Interactive bottle effect
    const bottle = document.querySelector('.floating-bottle') as HTMLElement | null;
    if (bottle) {
      bottle.addEventListener('mousemove', function(e: MouseEvent) {
        const rect = (this as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        (this as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
      });
      bottle.addEventListener('mouseleave', function() {
        (this as HTMLElement).style.transform = 'perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(0)';
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onParallax);
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif; background: #1a1a1a; color: #f5f5f7; overflow-x: hidden; line-height: 1.4; }
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(26, 26, 26, 0.8); backdrop-filter: blur(20px); z-index: 1000; padding: 12px 0; transition: all 0.3s ease; border-bottom: 1px solid rgba(134, 239, 172, 0.1); }
        .navbar.scrolled { background: rgba(26, 26, 26, 0.95); backdrop-filter: blur(30px); border-bottom-color: rgba(134, 239, 172, 0.2); }
        .nav-container { max-width: 980px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 22px; }
        .logo { display: flex; align-items: center; gap: 12px; }
        .crown-icon { width: 28px; height: 24px; fill: none; stroke: #2d4a35; stroke-width: 1.5; }
        .brand-name { font-size: 21px; font-weight: 600; letter-spacing: -0.022em; color: #f5f5f7; }
        .nav-links { display: flex; gap: 32px; }
        .nav-links a { color: #f5f5f7; text-decoration: none; font-size: 17px; font-weight: 400; transition: opacity 0.3s ease; }
        .nav-links a:hover { opacity: 0.8; }
        .hero { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: radial-gradient(50% 50% at 50% 50%, #2d4a35 0%, #1a1a1a 100%); position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(180deg, transparent 0%, rgba(26, 26, 26, 0.3) 100%); }
        .hero::after { content: ''; position: absolute; top: 20%; left: 10%; width: 200px; height: 200px; background: radial-gradient(circle, rgba(134, 239, 172, 0.1) 0%, transparent 70%); border-radius: 50%; animation: float-orb 6s ease-in-out infinite; z-index: 1; }
        @keyframes float-orb { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; } 50% { transform: translateY(-30px) translateX(20px); opacity: 0.6; } }
        .hero-content { z-index: 2; position: relative; max-width: 692px; }
        .hero h1 { font-size: 56px; font-weight: 600; letter-spacing: -0.005em; line-height: 1.07143; margin-bottom: 8px; opacity: 0; animation: fadeInUp 1.2s ease-out 0.3s forwards; }
        .hero .product-subtitle { font-size: 28px; font-weight: 400; letter-spacing: 0.007em; line-height: 1.14286; margin-bottom: 12px; color: #86efac; opacity: 0; animation: fadeInUp 1.2s ease-out 0.6s forwards; }
        .hero .tagline { font-size: 21px; font-weight: 400; line-height: 1.381; color: rgba(245, 245, 247, 0.8); margin-bottom: 28px; opacity: 0; animation: fadeInUp 1.2s ease-out 0.9s forwards; }
        .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; opacity: 0; animation: fadeInUp 1.2s ease-out 1.2s forwards; }
        .btn-primary { background: #2d4a35; color: #f5f5f7; padding: 12px 24px; border-radius: 22px; text-decoration: none; font-size: 17px; font-weight: 400; transition: all 0.3s ease; border: none; cursor: pointer; }
        .btn-primary:hover { background: #22543d; transform: scale(1.02); }
        .btn-secondary { color: #06b6d4; text-decoration: none; font-size: 17px; font-weight: 400; display: flex; align-items: center; gap: 8px; }
        .btn-secondary:hover { text-decoration: underline; }
        .large-image-section { height: 100vh; display: flex; align-items: center; justify-content: center; background: #000; position: relative; overflow: hidden; }
        .large-image-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 30% 40%, rgba(45, 74, 53, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(134, 239, 172, 0.15) 0%, transparent 50%); animation: aurora 12s ease-in-out infinite; }
        @keyframes aurora { 0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); } 33% { opacity: 1; transform: scale(1.1) rotate(120deg); } 66% { opacity: 0.6; transform: scale(0.9) rotate(240deg); } }
        .product-hero-image { width: 100%; height: 100%; background: radial-gradient(ellipse at center, #2d4a35 0%, #1a2e20 35%, #000 100%); display: flex; align-items: center; justify-content: center; position: relative; z-index: 2; }
        .floating-bottle { width: 400px; height: 600px; background: linear-gradient(145deg, #2d4a35, #1a2e20, #16a34a); border-radius: 60px 60px 30px 30px; position: relative; transform: perspective(1000px) rotateY(-10deg) rotateX(5deg); box-shadow: 0 0 100px rgba(45, 74, 53, 0.5), 0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1); animation: float-hero 8s ease-in-out infinite backdrop-filter: blur(10px); border: 1px solid rgba(134, 239, 172, 0.2); }
        .floating-bottle::before { content: ''; position: absolute; top: 40px; left: 50%; transform: translateX(-50%); width: 80px; height: 60px; background: linear-gradient(135deg, #0f172a, #1e293b); border-radius: 20px 20px 8px 8px; border: 1px solid rgba(134, 239, 172, 0.3); }
        .floating-bottle::after { content: ''; position: absolute; top: -20px; left: -20px; right: -20px; bottom: -20px; background: linear-gradient(45deg, transparent, rgba(134, 239, 172, 0.1), transparent); border-radius: inherit; z-index: -1; animation: glow 4s ease-in-out infinite alternate; }
        @keyframes glow { 0% { opacity: 0.5; transform: scale(1); } 100% { opacity: 1; transform: scale(1.02); } }
        .bottle-label { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #86efac; }
        .bottle-label .brand { font-size: 24px; font-weight: 600; letter-spacing: 2px; margin-bottom: 8px; }
        .bottle-label .product { font-size: 14px; font-weight: 400; letter-spacing: 1px; opacity: 0.8; }
        @keyframes float-hero { 0%, 100% { transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(0); } 50% { transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateY(-20px); } }
        .content-section { padding: 120px 0; max-width: 980px; margin: 0 auto; padding-left: 22px; padding-right: 22px; }
        .section-eyebrow { font-size: 21px; line-height: 1.381; font-weight: 600; color: #86efac; margin-bottom: 8px; }
        .section-headline { font-size: 48px; line-height: 1.08349; font-weight: 600; letter-spacing: -0.003em; margin-bottom: 20px; color: #f5f5f7; }
        .section-subhead { font-size: 28px; line-height: 1.14286; font-weight: 400; letter-spacing: 0.007em; color: rgba(245, 245, 247, 0.8); margin-bottom: 40px; }
        .section-body { font-size: 21px; line-height: 1.381; font-weight: 400; color: rgba(245, 245, 247, 0.8); margin-bottom: 30px; }
        .split-section { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; min-height: 100vh; max-width: 1200px; margin: 0 auto; padding: 0 22px; }
        .benefits-visual { position: relative; height: 600px; display: flex; align-items: center; justify-content: center; }
        .benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%; }
        .benefit-card { background: rgba(45, 74, 53, 0.3); padding: 30px 20px; border-radius: 16px; text-align: center; backdrop-filter: blur(10px); border: 1px solid rgba(134, 239, 172, 0.2); transition: all 0.4s ease; position: relative; overflow: hidden; }
        .benefit-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(134, 239, 172, 0.1), transparent); transition: left 0.6s ease; }
        .benefit-card:hover::before { left: 100%; }
        .benefit-card:hover { background: rgba(45, 74, 53, 0.5); transform: translateY(-5px) scale(1.02); border-color: rgba(134, 239, 172, 0.4); box-shadow: 0 20px 40px rgba(45, 74, 53, 0.3); }
        .benefit-icon { font-size: 36px; margin-bottom: 16px; display: block; }
        .benefit-title { font-size: 19px; font-weight: 600; color: #86efac; margin-bottom: 8px; }
        .benefit-desc { font-size: 15px; color: rgba(245, 245, 247, 0.8); line-height: 1.4; }
        .quote-section { background: #000; padding: 120px 0; text-align: center; }
        .quote-container { max-width: 980px; margin: 0 auto; padding: 0 22px; }
        .quote-text { font-size: 40px; line-height: 1.1; font-weight: 600; color: #f5f5f7; margin-bottom: 30px; font-style: italic; }
        .quote-author { font-size: 19px; color: #86efac; font-weight: 400; }
        .final-cta { background: radial-gradient(50% 50% at 50% 50%, #2d4a35 0%, #000 100%); padding: 120px 0; text-align: center; }
        .cta-content { max-width: 692px; margin: 0 auto; padding: 0 22px; }
        .cta-headline { font-size: 48px; line-height: 1.08349; font-weight: 600; letter-spacing: -0.003em; margin-bottom: 16px; color: #f5f5f7; }
        .cta-subhead { font-size: 21px; line-height: 1.381; color: rgba(245, 245, 247, 0.8); margin-bottom: 40px; }
        .footer { background: #1a1a1a; padding: 40px 0; border-top: 1px solid #424245; }
        .footer-content { max-width: 980px; margin: 0 auto; padding: 0 22px; text-align: center; }
        .footer-links { display: flex; justify-content: center; gap: 32px; margin-bottom: 20px; flex-wrap: wrap; }
        .footer-links a { color: rgba(245, 245, 247, 0.8); text-decoration: none; font-size: 15px; }
        .footer-links a:hover { color: #f5f5f7; }
        .footer-copyright { color: rgba(245, 245, 247, 0.6); font-size: 13px; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .scroll-animate { opacity: 0; transform: translateY(30px); transition: all 1s ease; }
        .scroll-animate.animate { opacity: 1; transform: translateY(0); }
        @media (max-width: 1068px) { .split-section { grid-template-columns: 1fr; gap: 40px; text-align: center; } .section-headline { font-size: 40px; } .hero h1 { font-size: 48px; } .floating-bottle { width: 300px; height: 450px; } }
        @media (max-width: 734px) { .nav-links { display: none; } .hero h1 { font-size: 32px; } .hero .product-subtitle { font-size: 21px; } .section-headline { font-size: 32px; } .quote-text { font-size: 28px; } .cta-headline { font-size: 32px; } .benefits-grid { grid-template-columns: 1fr; } .cta-buttons { flex-direction: column; align-items: center; } }
        .glass-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 2000;
          background: rgba(30, 30, 30, 0.28);
          box-shadow: 0 2px 24px 0 rgba(0,0,0,0.08);
          backdrop-filter: blur(18px) saturate(1.5);
          -webkit-backdrop-filter: blur(18px) saturate(1.5);
          transition: transform 0.35s cubic-bezier(.4,0,.2,1);
        }
        .glass-header-content {
          max-width: 980px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.5rem;
          position: relative;
        }
        .glass-header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          flex: 1;
        }
        .glass-header-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .glass-header-link {
          color: #f5f5f7;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .glass-header-link:hover {
          opacity: 1;
          text-decoration: underline;
        }
        .glass-header-btn {
          background: linear-gradient(90deg, #2d4a35 60%, #86efac 100%);
          color: #fff;
          font-weight: 500;
          border: none;
          border-radius: 999px;
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          box-shadow: 0 2px 8px 0 rgba(45,74,53,0.08);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .glass-header-btn:hover {
          background: linear-gradient(90deg, #22543d 60%, #86efac 100%);
          transform: scale(1.04);
        }
        .glass-header-hamburger {
          display: none;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .glass-header-hamburger span {
          display: block;
          width: 28px;
          height: 3px;
          margin: 5px 0;
          background: #f5f5f7;
          border-radius: 2px;
          transition: 0.3s;
        }
        @media (max-width: 800px) {
          .glass-header-content {
            justify-content: center;
          }
          .glass-header-nav {
            display: none;
          }
          .glass-header-hamburger {
            display: block;
          }
        }
        .mobile-nav {
          display: none;
        }
        .mobile-nav.open {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: fixed;
          top: 64px;
          left: 0;
          width: 100vw;
          background: rgba(30,30,30,0.95);
          backdrop-filter: blur(18px);
          z-index: 3000;
          padding: 2rem 0 1.5rem 0;
          gap: 2rem;
          animation: fadeInDown 0.3s;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Glassmorphism Header with Hamburger for Mobile */}
      <div ref={headerRef} className="glass-header">
        <div className="glass-header-content">
          {/* Hamburger for mobile */}
          <button className="glass-header-hamburger" aria-label="Menu" onClick={() => setMenuOpen(v => !v)}>
            <span style={{transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none'}}></span>
            <span style={{opacity: menuOpen ? 0 : 1}}></span>
            <span style={{transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'}}></span>
          </button>
          {/* Logo Centered */}
          <div className="glass-header-logo">
            <svg className="crown-icon" viewBox="0 0 28 24" width={28} height={24} style={{stroke: '#2d4a35', fill: 'none', strokeWidth: 1.5}}>
              <path d="M6 18 L8 6 L14 12 L20 6 L22 18 L21 20 L7 20 Z" />
              <circle cx="8" cy="6" r="1.5" />
              <circle cx="14" cy="4" r="1.5" />
              <circle cx="20" cy="6" r="1.5" />
            </svg>
            <span className="brand-name" style={{fontWeight:600, fontSize:'1.25rem', letterSpacing:'-0.02em'}}>ADAMËVE</span>
          </div>
          {/* Desktop Nav */}
          <nav className="glass-header-nav">
            <a href="#overview" className="glass-header-link">Overview</a>
            <a href="#manfaat" className="glass-header-link">Manfaat</a>
            <a href="#specs" className="glass-header-link">Spesifikasi</a>
            <a href="#beli">
              <button className="glass-header-btn">Beli</button>
            </a>
          </nav>
        </div>
        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
          <a href="#overview" className="glass-header-link" onClick={e => {e.stopPropagation(); setMenuOpen(false);}}>Overview</a>
          <a href="#manfaat" className="glass-header-link" onClick={e => {e.stopPropagation(); setMenuOpen(false);}}>Manfaat</a>
          <a href="#specs" className="glass-header-link" onClick={e => {e.stopPropagation(); setMenuOpen(false);}}>Spesifikasi</a>
          <a href="#beli" onClick={e => {e.stopPropagation(); setMenuOpen(false);}}>
            <button className="glass-header-btn">Beli</button>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero" id="overview" style={{backgroundImage: 'url(/images/unsplash/hero-lifestyle.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-content" style={{background: 'rgba(30,30,30,0.65)', borderRadius: '32px', padding: '2rem 1.5rem', boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'}}>
          <h1>Post-Biotic + 8 Jelly Pack</h1>
          <div className="product-subtitle">Suplemen inovatif dalam bentuk jelly pack mudah bawa.<br />Nikmati kesihatan & kecantikan di mana-mana.</div>
          <p className="tagline">Formula revolusioner post-biotik kini dalam sachet jelly — lebih praktikal, sedap, dan mudah diambil bila-bila masa.</p>
          <div className="cta-buttons">
            <a href="#beli" className="btn-primary">Beli</a>
            <a href="#specs" className="btn-secondary">Ketahui lebih lanjut &gt;</a>
          </div>
        </div>
      </section>

      {/* Large Product Image */}
      <section className="large-image-section">
        <div className="product-hero-image" style={{backgroundImage: 'url(/images/unsplash/jelly-product.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          <div className="floating-bottle" style={{background: 'rgba(45,74,53,0.15)'}}>
            <div className="bottle-label">
              <div className="brand">ADAMËVE</div>
              <div className="product">POST-BIOTIC + 8 JELLY PACK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <img src="/images/unsplash/gallery1.jpg" alt="Wanita sihat dan ceria" className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform" />
          <img src="/images/unsplash/gallery2.jpg" alt="Gaya hidup aktif dan sihat" className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform" />
          <img src="/images/unsplash/gallery3.jpg" alt="Makanan sihat dan segar" className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform" />
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="content-section scroll-animate">
        <div className="section-eyebrow">Format Jelly Pack Terkini</div>
        <h2 className="section-headline">8 strain post-biotik dalam setiap sachet jelly.</h2>
        <p className="section-subhead">Setiap sachet jelly pack mengandungi teknologi mikrobiom paling canggih.</p>
        <p className="section-body">Post-Biotic + 8 kini hadir dalam bentuk jelly pack yang mudah dibawa ke mana-mana. Hanya koyak dan makan — tanpa air, tanpa leceh. Formula eksklusif ini menggabungkan 8 strain post-biotik klinikal untuk sokongan optimum sistem pencernaan dan kesihatan kulit anda.</p>
      </section>

      {/* Split Section - Benefits */}
      <section className="split-section" id="manfaat">
        <div className="scroll-animate">
          <div className="section-eyebrow">Manfaat Utama</div>
          <h2 className="section-headline">Kesihatan holistik dalam setiap jelly pack.</h2>
          <p className="section-body">Rasai transformasi menyeluruh dengan formula post-biotik dalam bentuk jelly pack yang direka khas untuk memberikan manfaat maksimum kepada kesihatan dalaman dan luaran anda — mudah, sedap, dan praktikal untuk gaya hidup moden.</p>
        </div>
        <div className="benefits-visual scroll-animate">
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">🌿</span>
              <div className="benefit-title">Usus Sihat</div>
              <div className="benefit-desc">Mikrobiom seimbang untuk pencernaan optimum</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">✨</span>
              <div className="benefit-title">Kulit Bercahaya</div>
              <div className="benefit-desc">Kecantikan natural dari dalam</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🛡️</span>
              <div className="benefit-title">Imuniti Kuat</div>
              <div className="benefit-desc">Sistem pertahanan badan yang kukuh</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">⚡</span>
              <div className="benefit-title">Tenaga Berterusan</div>
              <div className="benefit-desc">Vitaliti sepanjang hari</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section scroll-animate">
        <div className="quote-container flex flex-col md:flex-row items-center justify-center gap-8">
          <img src="/images/unsplash/testimonial.jpg" alt="Pelanggan gembira" className="w-32 h-32 rounded-full object-cover shadow-lg mb-4 md:mb-0" />
          <div>
            <blockquote className="quote-text">"Perubahan yang saya rasai dalam 30 hari pertama sungguh luar biasa. Sistem pencernaan lebih baik, kulit lebih cerah."</blockquote>
            <cite className="quote-author">— Dr. Siti Aminah, KL</cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" id="beli">
        <div className="cta-content scroll-animate">
          <h2 className="cta-headline">Mulakan transformasi anda hari ini.</h2>
          <p className="cta-subhead">Rasai perbezaan Post-Biotic + 8 untuk kesihatan dan kecantikan holistik.</p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">Beli Sekarang</a>
            <a href="#" className="btn-secondary">Cari kedai berdekatan &gt;</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">Dasar Privasi</a>
            <a href="#">Terma Penggunaan</a>
            <a href="#">Sokongan</a>
            <a href="#">Hubungi Kami</a>
          </div>
          <div className="footer-copyright">
            {`Copyright © ${new Date().getFullYear()} ADAMËVE. Hak cipta terpelihara. v1.0.0`}
          </div>
        </div>
      </footer>
    </>
  );
}