import { useState } from 'react';
import {
  UserX,
  ShieldCheck,
  Filter,
  CheckCircle2,
  Building,
  MessageSquareWarning,
} from 'lucide-react';

export default function CasosAnonimos({ casos = [] }) {
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');

  const categorias = [
    'Todos',
    'Publicidad engañosa',
    'Cobro indebido o estafa financiera',
    'Garantía o producto defectuoso',
    'Abuso comercial',
  ];

  const casosFiltrados =
    filtroCategoria === 'Todos'
      ? casos
      : casos.filter((caso) => caso.categoria === filtroCategoria);

  return (
    <section id="casos" className="py-20 bg-[#FAFAF9] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-zinc-200">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
              Experiencia Colectiva · Identidad Protegida
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#09090B] mt-2 tracking-tight">
              Muro de Casos Anónimos
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
            Consulta casos reales reportados por otros consumidores (con datos
            personales resguardados) para saber qué pasos seguir si enfrentas un
            abuso similar.
          </p>
        </div>

        {/* Barra de Filtros por Categoría */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#DC2626]" />
            Filtrar por:
          </span>
          {categorias.map((cat) => {
            const activo = filtroCategoria === cat;
            return (
              <button
                key={cat}
                onClick={() => setFiltroCategoria(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activo
                    ? 'bg-[#09090B] text-white shadow-sm'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:border-[#DC2626] hover:text-[#DC2626]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid de Casos Anónimos */}
        {casosFiltrados.length === 0 ? (
          <div className="mt-10 bg-white rounded-2xl border border-zinc-200 p-10 text-center">
            <p className="text-sm font-semibold text-zinc-600">
              No hay casos publicados en esta categoría todavía.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {casosFiltrados.map((caso) => (
              <article
                key={caso.id}
                className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Cabecera de la tarjeta: Anonimato + Folio */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-zinc-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#09090B] text-white flex items-center justify-center">
                        <UserX className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-xs font-extrabold text-[#09090B]">
                          Consumidor Anónimo
                        </span>
                        <span className="block text-[10px] text-zinc-400">
                          {caso.fecha}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded">
                      {caso.folio}
                    </span>
                  </div>

                  {/* Categoría y Empresa */}
                  <div className="mt-4 space-y-2">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded">
                      {caso.categoria}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#09090B]">
                      <Building className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span>Empresa: {caso.empresa}</span>
                    </div>
                  </div>

                  {/* Relato del caso */}
                  <div className="mt-3 flex items-start gap-2">
                    <MessageSquareWarning className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      “{caso.relato}”
                    </p>
                  </div>
                </div>

                {/* Cómo actuar / Orientación brindada */}
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <div className="bg-[#09090B] text-white rounded-xl p-3.5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Cómo actuar / Resolución
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {caso.orientacion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Nota de privacidad al pie de sección */}
        <div className="mt-8 flex items-center gap-2.5 text-xs text-zinc-500">
          <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
          <span>
            Todos los testimonios pasan por filtro de moderación para eliminar
            datos personales y lenguaje ofensivo antes de mostrarse[cite: 3].
          </span>
        </div>
      </div>
    </section>
  );
}