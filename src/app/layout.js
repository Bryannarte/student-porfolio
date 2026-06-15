'use client';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-sky-50 text-gray-800">
        {/* ✅ CUSTOM NAVBAR — No Flowbite Navbar used here */}
        <nav className="bg-white shadow-sm px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Logo / Brand */}
            <Link href="/" className="text-xl font-semibold text-gray-800 mb-3 md:mb-0">
              DP | Double Portfolio
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-6 font-medium">
              <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/skills" className="hover:text-blue-600">Skills</Link>
              <Link href="/projects" className="hover:text-blue-600">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-screen max-w-7xl mx-auto px-4 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white text-center py-4 shadow-inner text-sm text-gray-600">
          © 2026 Bryan Hyacinth Narte & Dapat Mark — All Rights Reserved
        </footer>
      </body>
    </html>
  );
}