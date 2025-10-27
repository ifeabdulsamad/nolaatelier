import React from "react";
import "../App.css";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-bg shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="w-[50px] h-[30px]">
          <img src="public/img/logo.png" alt="logo" />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          <a
            href="#about"
            className="text-brand font-bold hover:text-gray-900 transition"
          >
            Home
          </a>
          <a
            href="#me"
            className="text-brand font-bold hover:text-gray-900 transition"
          >
            About
          </a>
          <a
            href="#about"
            className="text-brand font-bold hover:text-gray-900 transition"
          >
            Gallery
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-brand text-white px-4 py-2 rounded-[200px] font-bold hover:bg-gray-900 transition"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand hover:text-gray-900 transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 pb-4 space-y-3">
          <a
            href="#home"
            className="block text-brand hover:text-gray-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>{" "}
          <a
            href="#about"
            className="block text-brand hover:text-gray-900 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>{" "}
          <a
            href="#gallery"
            className="block text-brand hover:text-gray-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="block bg-gray-900 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
