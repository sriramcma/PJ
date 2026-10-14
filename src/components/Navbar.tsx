import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Mission', href: '#mission' },
    { label: 'Narrative', href: '#about' },
    { label: 'The Work', href: '#work' },
    { label: 'Substance', href: '#substance' },
    { label: 'Milestones', href: '#milestones' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF6F0]/92 backdrop-blur-md border-b border-[#1A1918]/8 py-3.5 shadow-[0_4px_30px_rgba(18,56,56,0.03)]'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in high-fashion editorial display serif */}
        <a
          href="#mission"
          className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BA4836] min-w-0"
          aria-label="Padmini Janaki Homepage"
        >
          <span className="font-display text-xl sm:text-2xl tracking-[0.06em] text-[#123838] group-hover:text-[#BA4836] transition-colors truncate font-normal">
            Padmini Janaki
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#BA4836] inline-block mb-1 group-hover:scale-125 transition-transform shrink-0" />
        </a>

        {/* Zone 2: 4-5 clean text navigation links with generous tracking */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase font-medium text-[#575450]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative hover:text-[#123838] transition-colors py-1 group focus-visible:outline-none"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#BA4836] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConnect}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#123838] hover:text-white border border-[#123838]/30 hover:border-[#BA4836] hover:bg-[#BA4836] rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1918] hover:text-[#BA4836] focus-visible:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4EFE6] border-b border-[#1A1918]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1A1918]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#1A1918]/5 hover:text-[#BA4836] tracking-[0.18em] uppercase text-xs"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConnect();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs tracking-[0.18em] uppercase font-semibold text-white bg-[#123838] hover:bg-[#BA4836] rounded-full transition-colors"
              >
                <span>Connect with Padmini</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
