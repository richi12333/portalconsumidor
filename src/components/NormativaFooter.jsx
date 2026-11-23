import {
  Ban,
  ShieldCheck,
  UserX,
  RefreshCw,
  Inbox,
  ExternalLink,
  ArrowUp,
} from 'lucide-react';

export default function NormativaFooter() {
  const reglas = [
    {
      titulo: 'Conductas estrictamente prohibidas',
      descripcion:
        'Queda prohibido el racismo, las faltas de respeto hacia los usuarios o la plataforma, el uso indebido de la información, la desinformación y la discriminación de todo tipo.',
      icon: Ban,
    },
    {
      titulo: 'Protección y anonimato del usuario',
      descripcion:
        'Resguardamos los datos personales de cada persona. Aplicamos censura automática a palabras inapropiadas y compartimos los casos de forma anónima para orientar a otros consumidores.',
      icon: ShieldCheck,
    },
    {
      titulo: 'Sanciones contra la discriminación',
      descripcion:
        'Cero tolerancia ante cualquier agresión. Dependiendo de la gravedad de la falta, la cuenta o acceso del infractor será bloqueado de forma temporal o indefinida.',
      icon: UserX,
    },
    {
      titulo: 'Combate a la información falsa',
      descripcion:
        'Actualizamos continuamente la plataforma: cualquier dato falso o engañoso detectado es borrado de inmediato y reemplazado por información nueva y verídica.',
      icon: RefreshCw,
    },
    {
      titulo: 'Resolución y canalización de quejas',
      descripcion:
        'Todas las quejas enviadas a nuestro buzón reciben respuesta y seguimiento, además de contar con enlaces directos hacia los buzones de los organismos oficiales correspondientes.',
      icon: Inbox,
    },
  ];

  const enlacesOficiales = [
    { nombre: 'PROFECO · Procuraduría Federal del Consumidor', url: 'https://www.gob.mx/profeco' },
    { nombre: 'CONDUSEF · Usuarios Financieros', url: 'https://www.condusef.gob.mx' },
    { nombre: 'Secretaría de Economía · Normatividad', url: 'https://www.gob.mx/se' },
  ];

  return (
    <>
      {/* Sección de Normativa y Moderación */}
      <section id="normativa" className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-zinc-200">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                Reglamento y Gobernanza
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#09090B] mt-2 tracking-tight">
                Normativa y Seguridad Comunitaria
              </h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
              Conoce las políticas que garantizan un espacio seguro, verídico y
              libre de abusos para todos los consumidores de la plataforma.
            </p>
          </div>

          {/* Grid de 5 Reglas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {reglas.map((regla, index) => {
              const Icon = regla.icon;
              return (
                <div
                  key={regla.titulo}
                  className="bg-[#FAFAF9] rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between hover:border-zinc-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-[#DC2626]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-zinc-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-base text-[#09090B] mb-2">
                      {regla.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {regla.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Tarjeta de Cierre / Compromiso */}
            <div className="bg-[#09090B] text-white rounded-2xl p-6 flex flex-col justify-between border border-zinc-800">
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-[#DC2626] text-white px-2.5 py-1 rounded">
                  Compromiso Activo
                </span>
                <h3 className="font-extrabold text-lg text-white mt-4">
                  Un consumidor informado es un consumidor protegido
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  Si detectas información desactualizada o alguna conducta que
                  vulnere estas reglas, repórtalo de inmediato en nuestro buzón.
                </p>
              </div>
              <a
                href="#buzon"
                className="mt-6 inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-[#09090B] text-xs font-extrabold uppercase tracking-wider py-3 px-4 rounded-xl transition-colors"
              >
                Ir al Buzón de Atención
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Institucional */}
      <footer className="bg-[#09090B] text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-12 gap-10 pb-10 border-b border-zinc-800">
            {/* Marca */}
            <div className="md:col-span-5 space-y-4">
              <a href="#" className="inline-flex items-center gap-3">
                <div className="bg-[#DC2626] text-white p-2 rounded-lg">
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
                <span className="font-black text-lg tracking-tight text-white uppercase">
                  Portal<span className="text-[#DC2626]">Consumidor</span>
                </span>
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
                Plataforma independiente de orientación preventiva, detección de
                publicidad engañosa y defensa de los derechos del consumidor
                para personas mayores de 18 años.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Información verificada y actualizada
              </div>
            </div>

            {/* Navegación */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Navegación
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#proposito" className="hover:text-white transition-colors">
                    Propósito y Diagnóstico
                  </a>
                </li>
                <li>
                  <a href="#valores" className="hover:text-white transition-colors">
                    Menú de Valores
                  </a>
                </li>
                <li>
                  <a href="#buzon" className="hover:text-white transition-colors">
                    Buzón de Quejas
                  </a>
                </li>
                <li>
                  <a href="#casos" className="hover:text-white transition-colors">
                    Muro de Casos Anónimos
                  </a>
                </li>
                <li>
                  <a href="#normativa" className="hover:text-white transition-colors">
                    Normativa y Moderación
                  </a>
                </li>
              </ul>
            </div>

            {/* Organismos Oficiales */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Portales Oficiales de Defensa
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {enlacesOficiales.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#DC2626] transition-colors"
                    >
                      <span>{item.nombre}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Barra Inferior */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>
              © {new Date().getFullYear()} PortalConsumidor. Todos los derechos
              reservados · Uso informativo y de orientación (+18 años).
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white font-semibold transition-colors"
            >
              Volver arriba
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}