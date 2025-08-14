export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center space-y-4">
        
        {/* Top Links */}
        <div className="flex space-x-8 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="hover:text-gray-700">Terms of Service</a>
          <a href="#" className="hover:text-gray-700">Contact Us</a>
        </div>

        {/* Icons */}
        <div className="flex space-x-4 text-gray-500">
          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.53 0-4.58 2.07-4.58 4.62 0 .36.04.72.12 1.05A12.94 12.94 0 013 1.64a4.64 4.64 0 00-.62 2.33c0 1.6.8 3.02 2.02 3.85a4.47 4.47 0 01-2.07-.58v.06c0 2.23 1.57 4.1 3.64 4.52a4.53 4.53 0 01-2.06.08c.58 1.82 2.27 3.15 4.27 3.19A9.05 9.05 0 012 19.54 12.78 12.78 0 008.29 21c7.55 0 11.68-6.34 11.68-11.84 0-.18 0-.36-.01-.54A8.58 8.58 0 0023 3z" />
            </svg>
          </a>

          {/* Image / Placeholder icon */}
          <a href="#" aria-label="Image" className="hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM5 5h14v6l-3.5-3.5-4.5 4.5-3.5-3.5L5 11V5z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          ©2025 Tech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
