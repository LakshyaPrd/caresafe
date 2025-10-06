import Image from 'next/image';

function Footer() {
  return (
    <div>
        <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center ">
                    <Image
                    src='/caresafe.png'
                    alt="CareSafe Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                    priority // Loads the logo immediately
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  CareSafe
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                Secure, intelligent, and accessible healthcare record management 
                powered by AI and cloud technology.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 CareSafe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer