"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaInfo, FaBriefcase } from "react-icons/fa";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const NavigationMenu: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("#home");

  const navItems: NavItem[] = [
    { href: "#home", label: "Home", icon: <FaHome /> },
    { href: "#about", label: "About", icon: <FaInfo /> },
    { href: "#work", label: "Work", icon: <FaBriefcase /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "#home"; // Default to home on load

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If section is in the viewport
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = `#${section.id}`;
        }
      });

      // Update active section state and URL
      setActiveSection(currentSection);
      // Update the URL without reloading the page
      if (window.location.hash !== currentSection) {
        window.history.replaceState(null, "", currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Also update active section when the page loads and set the initial hash
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#home");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 right-4 md:top-1/2 md:-translate-y-1/2 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={`flex items-center justify-center rounded-full border-2 transition ${
            activeSection === item.href
              ? "text-white border-green-500"
              : "bg-black text-gray-700 border-gray-300 hover:border-green-300"
          } w-5 h-5`} // Responsive size
          aria-label={item.label}
        >
          <div
            className={`w-2 h-2 bg-white rounded-full`} // The circular dot
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavigationMenu;
