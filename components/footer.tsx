const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <p className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                STORE
              </p>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Discover premium quality products with exceptional design and craftsmanship. 
              Your satisfaction is our priority.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Shipping</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2025 STORE, developed by Shreenivas Nayakawadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;