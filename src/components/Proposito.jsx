import { Compass, AlertTriangle, Target, Users, Scale } from 'lucide-react';

export default function Proposito() {
  const bloques = [
    {
      tag: '01 · El Porqué',
      title: 'Frenar el consumo desinformado',
      description:
        'Orientamos a consumidores que aún compran de manera irresponsable, han sido víctimas de propaganda engañosa o desconocen las leyes que respaldan su dinero.',
      icon: Compass,
      borderTop: 'border-t-4 border-t-[#09090B]',
      iconStyle: 'bg-zinc-100 text-[#09090B]',
    },
    {
      tag: '02 · Planteamiento del Problema',
      title: 'Falta de atención especializada',
      description:
        'Al no existir una plataforma dedicada exclusivamente a esta guía preventiva, muchos compradores caen en estafas o falsas promociones sin saber cómo defenderse.',
      icon: AlertTriangle,
      borderTop: 'border-t-4 border-t-[#DC2626]',
      iconStyle: 'bg-red-50 text-[#DC2626]',
    },
    {
      tag: '03 · Objetivo Principal',
      title: 'Acompañamiento y acción real',
      description:
        'Brindar el apoyo necesario para actuar frente a cualquier abuso empresarial, evitar gastos innecesarios y dar seguimiento de la mano de autoridades competentes.',
      icon: Target,
      borderTop: 'border-t-4 border-t-[#09090B]',
      iconStyle: 'bg-zinc-100 text-[#09090B]',
    },
  ];

  return (
    <section id="proposito" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-zinc-200">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
              Diagnóstico y Misión
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#09090B] mt-2 tracking-tight">
              ¿Por qué existe PortalConsumidor?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
            Sin orientación clara, el consumidor pierde tiempo y patrimonio; al
            mismo tiempo, las marcas que engañan destruyen su propia
            credibilidad en el mercado.
          </p>
        </div>

        {/* 3 Tarjetas Estructurales */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {bloques.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.tag}
                className={`bg-[#FAFAF9] rounded-xl border border-zinc-200 ${item.borderTop} p-7 flex flex-col justify-between hover:shadow-md transition-shadow`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                      {item.tag}
                    </span>
                    <div className={`p-2.5 rounded-lg ${item.iconStyle}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#09090B] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Franja Inferior: Público Objetivo + Doble Impacto */}
        <div className="grid lg:grid-cols-12 gap-6 mt-8">
          {/* Público Objetivo */}
          <div className="lg:col-span-5 bg-[#09090B] text-white rounded-xl p-7 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#DC2626] text-white">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Alcance de la Plataforma
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-extrabold text-white">
                Consumidores de 18 años en adelante
              </h3>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                Dirigido a toda persona mayor de edad con capacidad de compra
                que busque convertirse en un comprador responsable, detectar
                publicidad falsa y conocer sus derechos antes de pagar.
              </p>
            </div>
          </div>

          {/* Doble Consecuencia */}
          <div className="lg:col-span-7 bg-[#FAFAF9] border border-zinc-200 rounded-xl p-7 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-100 text-[#DC2626]">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
                ¿A quién afecta el problema?
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className="border-l-2 border-[#DC2626] pl-4">
                <h4 className="font-bold text-sm text-[#09090B]">
                  Impacto en el Consumidor
                </h4>
                <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                  Gasta dinero en cosas que no necesita o termina pagando de más
                  al caer en promociones falsas y estafas.
                </p>
              </div>

              <div className="border-l-2 border-[#09090B] pl-4">
                <h4 className="font-bold text-sm text-[#09090B]">
                  Impacto en la Empresa
                </h4>
                <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                  Al hacerse público el abuso, la marca pierde credibilidad,
                  clientes, ética comercial y reputación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}