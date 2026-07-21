"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-orange-100">
      {/* Top Bar */}
      <div className="bg-[#F59E0B] text-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2 text-[10px] sm:text-xs lg:text-sm">
          <p className="truncate">
            Electronic Security &amp; Automation Solutions
          </p>

          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 whitespace-nowrap">
            <span className="flex items-center gap-1 whitespace-nowrap">
  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
  <span className="text-[10px] sm:text-xs lg:text-sm font-medium">
    +91 9813018335 / 99911 35731
  </span>
</span>

            <span className="hidden sm:inline">
              GeM | PAN India
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl flex h-16 sm:h-18 lg:h-20 items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col flex-shrink-0">
          <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#D97706]">
            COREFIX
          </span>

          <span className="text-[10px] sm:text-xs text-gray-500">
            Technologies LLP
          </span>
        </Link>

        {/* Search */}
        <div className="flex flex-1 max-w-[160px] sm:max-w-xs md:max-w-md lg:max-w-xl mx-2 sm:mx-4 lg:mx-8">
          <div className="flex w-full items-center rounded-full border border-orange-200 bg-white overflow-hidden">
            <input
              className="flex-1 px-2 sm:px-3 lg:px-5 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm outline-none"
              placeholder="Search Products..."
            />

            <button className="bg-[#F59E0B] hover:bg-[#D97706] px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 text-white transition">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button className="hidden lg:flex rounded-full bg-[#F59E0B] px-6 py-3 font-semibold text-white hover:bg-[#D97706] transition">
            Request Quote
          </button>

          <button className="rounded-full p-2 sm:p-3 hover:bg-orange-100">
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button className="xl:hidden rounded-full p-2 sm:p-3 hover:bg-orange-100">
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}