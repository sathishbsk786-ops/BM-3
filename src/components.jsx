// src/components.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Nav() {
  const location = useLocation();
  const linkClass = (path) =>
    location.pathname === path
      ? "opacity-100 border-b-2 border-[var(--accent)] pb-1"
      : "opacity-80 hover:opacity-100 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/BM_1.png"
            alt="BM Designs"
            className="w-36 brightness-125 drop-shadow-md"
          />
        </Link>

        <div className="space-x-6 text-white text-sm tracking-wide">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link to="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link to="/packages" className={linkClass("/packages")}>
            Packages
          </Link>
          <Link to="/consultation" className={linkClass("/consultation")}>
            Consultation
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
