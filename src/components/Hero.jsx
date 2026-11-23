import {
  ArrowRight,
  AlertOctagon,
  Scale,
  ShoppingBag,
  Lock,
  Building2,
} from 'lucide-react';

export default function Hero() {
  const ejes = [
    {
      num: '01',
      title: 'Orientación antes de comprar',
      desc: 'Evalúa si realmente necesitas el producto y frena gastos impulsivos o innecesarios.',
      icon: ShoppingBag,
    },
    {
      num: '02',
      title: 'Alerta de publicidad engañosa',
      desc: 'Identifica promociones manipuladas a tiempo para no terminar pagando de más.',
      icon: AlertOctagon,
    },
    {
      num: '03',
      title: 'Defensa y canalización oficial',
      desc: 'Conoce tus derechos como consumidor y enlaza tu caso con secretarías e instituciones.',
      icon: Scale,
    },
  ];

  return (
    <section className="relative bg-[#FAFAF9] border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Titular de Alto Impacto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              Guía y Defensa del Consumidor · +18 Años
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-[#09090B] tracking-tight leading-[1.08]">
              Que no te vendan humo.{' '}
              <span className="text-[#DC2626] underline decoration-red-200 decoration-4 underline-offset-8">
                Compra con criterio
              </span>{' '}
              y haz valer tus derechos.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Te damos herramientas reales para prevenir estafas, detectar
              propaganda falsa y dar seguimiento a cualquier abuso comercial
              con el respaldo de las autoridades competentes.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href="#buzon"
                className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-6 py-3.5 rounded-lg shadow-sm transition-all"
              >
                Reportar caso en el buzón
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#casos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-[#09090B] font-bold px-6 py-3.5 rounded-lg border border-zinc-300 transition-all"
              >
                Explorar casos anónimos
              </a>
            </div>

            {/* Garantías Rápidas */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-zinc-200 text-xs sm:text-sm font-semibold text-zinc-700">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#DC2626]" />
                <span>Denuncias 100% anónimas</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#DC2626]" />
                <span>Redirección a organismos oficiales</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Panel Oscuro de Observatorio */}
          <div className="lg:col-span-5">
            <div className="bg-[#09090B] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-zinc-800">
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                    Radar de Protección
                  </span>
                  <h2 className="text-lg font-extrabold text-white mt-0.5">
                    3 frentes contra el abuso
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#DC2626]/15 border border-[#DC2626]/40 text-[#DC2626] text-xs font-bold">
                  Activo
                </span>
              </div>

              <div className="divide-y divide-zinc-800/90">
                {ejes.map((eje) => {
                  const Icon = eje.icon;
                  return (
                    <div key={eje.num} className="py-5 flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-[#DC2626] bg-zinc-900 border border-zinc-800 px-2 py-1 rounded mt-0.5">
                        {eje.num}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#DC2626] shrink-0" />
                          <h3 className="font-bold text-sm text-white">
                            {eje.title}
                          </h3>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                          {eje.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span>Público objetivo: +18 años</span>
                <span className="text-zinc-200 font-semibold">
                  Información verificada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}