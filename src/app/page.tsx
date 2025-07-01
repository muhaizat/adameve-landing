import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <i className="fas fa-crown text-white text-lg"></i>
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-gray-900 tracking-wide">ADAMËVE</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Simply Complements</div>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
                Products
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/auth/login" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-gray-900 mb-6">
            Premium Supplements<br />
            <span className="text-amber-600">For Optimal Health</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ADAMËVE offers premium supplement solutions designed to support natural detox, 
            improve gut health with post-biotics, and enhance skin brightening from within.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signup"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <i className="fas fa-leaf"></i>
              Get Started
            </Link>
            <Link 
              href="#products"
              className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <i className="fas fa-eye"></i>
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully formulated supplements to support your health and beauty goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-seedling text-white text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Detox Supplement</h3>
              <p className="text-gray-600 mb-6">
                Natural detox formula that helps cleanse toxins from your body and boost metabolism for better digestive health.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500"></i>
                  Supports natural detoxification
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500"></i>
                  Improves digestive health
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-green-500"></i>
                  Boosts daily energy
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bacteria text-white text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Post-Biotics</h3>
              <p className="text-gray-600 mb-6">
                Premium post-biotics supplement for improved gut health and better digestive system function.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-500"></i>
                  Enhances gut health
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-500"></i>
                  Strengthens immune system
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-blue-500"></i>
                  Improves nutrient absorption
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 text-center border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-gem text-white text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Skin Brightening</h3>
              <p className="text-gray-600 mb-6">
                Special formula to brighten skin from within using high-quality natural ingredients for radiant complexion.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-pink-500"></i>
                  Brightens skin naturally
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-pink-500"></i>
                  Reduces pigmentation
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-pink-500"></i>
                  Anti-aging properties
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/auth/signup"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <i className="fas fa-shopping-cart"></i>
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">About ADAMËVE</h2>
              <p className="text-lg text-gray-600 mb-6">
                ADAMËVE is committed to providing premium supplement solutions that support your health and beauty goals. 
                Our products are carefully formulated using high-quality natural ingredients to ensure maximum effectiveness and safety.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We focus on three key areas: natural detoxification, gut health improvement through post-biotics, 
                and skin brightening from within. Each product is designed to work synergistically to promote overall wellness.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Natural Ingredients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-crown text-white text-3xl"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600">
                  Every ADAMËVE product undergoes rigorous quality testing to ensure you receive only the finest supplements 
                  that meet our high standards for purity and effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have experienced the benefits of ADAMËVE premium supplements.
          </p>
          <Link 
            href="/auth/signup"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <i className="fas fa-rocket"></i>
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                  <i className="fas fa-crown text-white text-lg"></i>
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold tracking-wide">ADAMËVE</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Simply Complements</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Premium supplement solutions for optimal health and beauty. 
                Naturally formulated to support your wellness journey.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <i className="fab fa-facebook text-sm"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <i className="fab fa-tiktok text-sm"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/auth/login" className="hover:text-white transition-colors">Sign In</Link></li>
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <i className="fas fa-phone text-xs"></i>
                  +60 11-5405 4882
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-envelope text-xs"></i>
                  hello@adameve.my
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-map-marker-alt text-xs mt-1"></i>
                  <span>8-2-2A, Jalan Medan PB 2A,<br />43650 Bandar Baru Bangi, Selangor</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ADAMËVE. All rights reserved. | Premium Supplements Malaysia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}