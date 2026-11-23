import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Propósito', href: '#proposito' },
    { label: 'Valores', href: '#valores' },
    { label: 'Buzón de Quejas', href: '#buzon' },
    { label: 'Casos Anónimos', href: '#casos' },
    { label: 'Normativa', href: '#normativa' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Franja superior de alerta ciudadana */}
      <div className="bg-[#09090B] text-zinc-300 text-[11px] font-medium py-1.5 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>Plataforma independiente de orientación y defensa (+18 años)</span>
          </div>
          <span className="hidden sm:inline text-zinc-400">
            Cero tolerancia a publicidad engañosa
          </span>
        </div>
      </div>

      {/* Barra principal */}
      <div className="bg-[#FAFAF9]/95 backdrop-blur border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo con Isotipo de Observatorio */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-[#DC2626] text-white p-2 rounded-lg shadow-sm group-hover:bg-[#B91C1C] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight text-[#09090B] leading-none uppercase">
                  Portal<span className="text-[#DC2626]">Consumidor</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mt-1">
                  Observatorio Ciudadano
                </span>
              </div>
            </a>

            {/* Enlaces Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-zinc-700 hover:text-[#DC2626] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Botón Principal Desktop */}
            <div className="hidden md:flex items-center">
              <a
                href="#buzon"
                className="inline-flex items-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all"
              >
                Denunciar Abuso
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Botón Menú Móvil */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-800 hover:bg-zinc-200/70"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú desplegable Móvil */}
        {menuOpen && (
          <div className="md:hidden bg-[#FAFAF9] border-b border-zinc-200 px-4 pt-2 pb-4 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-800 hover:bg-red-50 hover:text-[#DC2626]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#buzon"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-[#DC2626] text-white text-sm font-bold px-4 py-2.5 rounded-lg mt-3"
            >
              Denunciar Abuso
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}