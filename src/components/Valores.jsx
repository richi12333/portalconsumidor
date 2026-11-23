import { useState } from 'react';
import { Eye, HeartHandshake, Lock, Scale, ShieldCheck } from 'lucide-react';

export default function Valores() {
  const valores = [
    {
      id: 'veracidad',
      num: '01',
      titulo: 'Veracidad y Transparencia',
      subtitulo: 'Cero tolerancia a la desinformación',
      descripcion:
        'Toda guía preventiva, alerta y caso publicado pasa por revisión constante. Cualquier dato falso o manipulado se elimina de inmediato y se reemplaza con información verídica y comprobable.',
      regla: 'Depuración inmediata de información falsa y actualización continua.',
      icon: Eye,
    },
    {
      id: 'respeto',
      num: '02',
      titulo: 'Respeto e Inclusión',
      subtitulo: 'Entorno libre de discriminación',
      descripcion:
        'Garantizamos un espacio seguro para cualquier persona. Quedan estrictamente prohibidos el racismo, las faltas de respeto hacia los usuarios o la plataforma y cualquier tipo de discriminación.',
      regla: 'Bloqueo temporal o indefinido según la gravedad de la agresión.',
      icon: HeartHandshake,
    },
    {
      id: 'confidencialidad',
      num: '03',
      titulo: 'Confidencialidad Total',
      subtitulo: 'Protección de identidad y datos',
      descripcion:
        'Resguardamos la información personal de cada consumidor. Los casos compartidos para orientar a otros usuarios se publican de forma anónima y con censura automática de palabras inapropiadas.',
      regla: 'Anonimato garantizado en el muro comunitario y resguardo de datos.',
      icon: Lock,
    },
    {
      id: 'responsabilidad',
      num: '04',
      titulo: 'Consumo Responsable',
      subtitulo: 'Prevención y respaldo institucional',
      descripcion:
        'Brindamos la información necesaria para comprar con criterio, mantenerte alerta ante publicidad falsa y ejercer tus derechos con el respaldo de instituciones y secretarías competentes.',
      regla: 'Orientación preventiva y canalización directa a organismos oficiales.',
      icon: Scale,
    },
  ];

  const [activo, setActivo] = useState(valores[0]);

  return (
    <section id="valores" className="py-20 bg-[#FAFAF9] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl">
          <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
            Principios de la Plataforma
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#09090B] mt-2 tracking-tight">
            Menú de Valores
          </h2>
          <p className="text-zinc-600 mt-3 text-sm sm:text-base leading-relaxed">
            Selecciona cada uno de los cuatro pilares para conocer las reglas y
            garantías que protegen a nuestra comunidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-12 items-center">
          {/* Columna Izquierda: 4 Círculos + Barras Horizontales (inspirado en el boceto) */}
          <div className="lg:col-span-6 space-y-4">
            {valores.map((valor) => {
              const Icon = valor.icon;
              const isSelected = activo.id === valor.id;

              return (
                <button
                  key={valor.id}
                  onClick={() => setActivo(valor)}
                  className="w-full group flex items-center text-left cursor-pointer focus:outline-none"
                >
                  {/* Círculo izquierdo */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10 border-4 transition-all ${
                      isSelected
                        ? 'bg-[#DC2626] border-[#FAFAF9] text-white shadow-md scale-105'
                        : 'bg-[#09090B] border-[#FAFAF9] text-white group-hover:bg-[#DC2626]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Barra rectangular conectada */}
                  <div
                    className={`-ml-5 pl-8 pr-5 py-4 flex-1 rounded-r-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#09090B] border-[#09090B] text-white shadow-lg'
                        : 'bg-white border-zinc-200 text-[#09090B] group-hover:border-red-300'
                    }`}
                  >
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                        {valor.titulo}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${
                          isSelected ? 'text-zinc-400' : 'text-zinc-500'
                        }`}
                      >
                        {valor.subtitulo}
                      </p>
                    </div>
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#DC2626] text-white'
                          : 'bg-zinc-100 text-zinc-500'
                      }`}
                    >
                      {valor.num}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Columna Derecha: Tarjeta de Detalle del Valor Activo */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-zinc-200 border-l-4 border-l-[#DC2626] p-8 sm:p-10 shadow-sm">
              {(() => {
                const ActiveIcon = activo.icon;
                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 text-[#DC2626] flex items-center justify-center">
                        <ActiveIcon className="w-7 h-7" />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                        Pilar {activo.num} / 04
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                        {activo.subtitulo}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#09090B] mt-1">
                        {activo.titulo}
                      </h3>
                    </div>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                      {activo.descripcion}
                    </p>

                    <div className="pt-5 border-t border-zinc-200 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                          Aplicación en la plataforma
                        </span>
                        <span className="text-sm font-bold text-[#09090B]">
                          {activo.regla}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}