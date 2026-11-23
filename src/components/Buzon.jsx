import { useState } from 'react';
import {
  Send,
  ShieldCheck,
  Search,
  Building2,
  CheckCircle2,
  Clock,
  Lock,
  ExternalLink,
} from 'lucide-react';

export default function Buzon({ onNuevoCaso }) {
  const [formData, setFormData] = useState({
    categoria: 'Publicidad engañosa',
    empresa: '',
    descripcion: '',
    correo: '',
    publicarAnonimo: true,
  });

  const [folioGenerado, setFolioGenerado] = useState(null);
  const [busquedaFolio, setBusquedaFolio] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState(null);

  // Filtro de palabras inapropiadas
  const censurarTexto = (texto) => {
    const groserias = [
      'idiota',
      'estupido',
      'estúpido',
      'imbecil',
      'imbécil',
      'pendejo',
      'cabron',
      'cabrón',
      'malditos',
      'mierda',
    ];
    let limpio = texto;
    groserias.forEach((palabra) => {
      const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
      limpio = limpio.replace(regex, '***');
    });
    return limpio;
  };

  // Instituciones y secretarías con enlace directo a su portal oficial
  const organismos = [
    {
      siglas: 'PROFECO',
      nombre: 'Procuraduría Federal del Consumidor',
      aplicaEn: 'Publicidad engañosa, promociones falsas, garantías y precios.',
      url: 'https://www.gob.mx/profeco',
      categorias: [
        'Publicidad engañosa',
        'Garantía o producto defectuoso',
        'Abuso comercial',
      ],
    },
    {
      siglas: 'CONDUSEF',
      nombre: 'Comisión Nacional para la Protección de Usuarios Financieros',
      aplicaEn: 'Cargos no reconocidos, créditos engañosos, bancos y seguros.',
      url: 'https://www.condusef.gob.mx',
      categorias: ['Cobro indebido o estafa financiera'],
    },
    {
      siglas: 'Secretaría de Economía',
      nombre: 'Portal Oficial de Normatividad y Comercio',
      aplicaEn: 'Regulación comercial, comercio electrónico y denuncias formales.',
      url: 'https://www.gob.mx/se',
      categorias: [
        'Publicidad engañosa',
        'Abuso comercial',
        'Cobro indebido o estafa financiera',
      ],
    },
  ];

  // Folios de ejemplo para probar el rastreador
  const foliosDemo = {
    'PC-2026-104': {
      folio: 'PC-2026-104',
      categoria: 'Publicidad engañosa',
      empresa: 'Tienda ElectroMax',
      estado: 'Canalizado a institución competente (PROFECO)',
    },
    'PC-2026-209': {
      folio: 'PC-2026-209',
      categoria: 'Cobro indebido o estafa financiera',
      empresa: 'Financiera Rápida MX',
      estado: 'En revisión y validación de pruebas',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.empresa.trim() || !formData.descripcion.trim()) return;

    const numeroAleatorio = Math.floor(100 + Math.random() * 900);
    const nuevoFolio = `PC-2026-${numeroAleatorio}`;
    const descripcionCensurada = censurarTexto(formData.descripcion.trim());

    const reporte = {
      folio: nuevoFolio,
      categoria: formData.categoria,
      empresa: formData.empresa.trim(),
      descripcion: descripcionCensurada,
      estado: 'Recibido · En análisis de orientación',
      fecha: 'Hoy',
    };

    setFolioGenerado(reporte);

    if (formData.publicarAnonimo && typeof onNuevoCaso === 'function') {
      onNuevoCaso({
        id: Date.now(),
        folio: nuevoFolio,
        categoria: formData.categoria,
        empresa: formData.empresa.trim(),
        relato: descripcionCensurada,
        orientacion:
          'Caso recibido. Se recomendó conservar comprobantes de pago/capturas de la promoción y presentar queja formal ante el organismo correspondiente.',
        fecha: 'Recién publicado',
      });
    }

    setFormData({
      categoria: 'Publicidad engañosa',
      empresa: '',
      descripcion: '',
      correo: '',
      publicarAnonimo: true,
    });
  };

  const handleBuscarFolio = (e) => {
    e.preventDefault();
    const clave = busquedaFolio.trim().toUpperCase();
    if (folioGenerado && folioGenerado.folio === clave) {
      setResultadoBusqueda(folioGenerado);
    } else if (foliosDemo[clave]) {
      setResultadoBusqueda(foliosDemo[clave]);
    } else {
      setResultadoBusqueda({ noEncontrado: true });
    }
  };

  return (
    <section id="buzon" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-zinc-200">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
              Atención y Canalización
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#09090B] mt-2 tracking-tight">
              Buzón de Quejas y Seguimiento
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
            Envía tu caso de forma confidencial y enlázate directamente con los
            portales oficiales de las instituciones y secretarías competentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-10">
          {/* Columna Izquierda (7 cols): Formulario del Buzón */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#FAFAF9] rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <h3 className="font-extrabold text-lg text-[#09090B]">
                  Registrar nuevo reporte
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 bg-white border border-zinc-200 px-3 py-1 rounded-full">
                  <Lock className="w-3.5 h-3.5 text-[#DC2626]" />
                  Identidad protegida
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Tipo de problema
                  </label>
                  <select
                    value={formData.categoria}
                    onChange={(e) =>
                      setFormData({ ...formData, categoria: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm font-medium text-[#09090B] focus:border-[#DC2626] focus:outline-none"
                  >
                    <option value="Publicidad engañosa">
                      Publicidad engañosa
                    </option>
                    <option value="Cobro indebido o estafa financiera">
                      Cobro indebido o estafa financiera
                    </option>
                    <option value="Garantía o producto defectuoso">
                      Garantía o producto defectuoso
                    </option>
                    <option value="Abuso comercial">
                      Abuso comercial / Incumplimiento
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Marca o empresa involucrada
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Tienda Online XYZ"
                    value={formData.empresa}
                    onChange={(e) =>
                      setFormData({ ...formData, empresa: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-[#09090B] focus:border-[#DC2626] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Describe lo sucedido (sin datos personales sensibles)
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Explica la promoción falsa, el cobro de más o el abuso que sufriste..."
                  value={formData.descripcion}
                  onChange={(e) =>
                    setFormData({ ...formData, descripcion: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-[#09090B] focus:border-[#DC2626] focus:outline-none"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  * El sistema censura automáticamente palabras inapropiadas
                  para mantener el respeto en la plataforma.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Correo para respuesta privada (Opcional)
                </label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com (nunca se hará público)"
                  value={formData.correo}
                  onChange={(e) =>
                    setFormData({ ...formData, correo: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-[#09090B] focus:border-[#DC2626] focus:outline-none"
                />
              </div>

              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.publicarAnonimo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      publicarAnonimo: e.target.checked,
                    })
                  }
                  className="mt-1 accent-[#DC2626] w-4 h-4"
                />
                <span className="text-xs text-zinc-600 leading-relaxed">
                  Autorizo compartir mi caso de forma{' '}
                  <strong className="text-[#09090B]">100% anónima</strong> en el
                  muro comunitario para que otros consumidores sepan cómo
                  actuar ante un problema similar.
                </span>
              </label>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Enviar queja al buzón
              </button>

              {folioGenerado && (
                <div className="p-4 rounded-xl bg-[#09090B] text-white border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      Queja registrada correctamente
                    </span>
                    <span className="font-mono text-xs font-black bg-[#DC2626] px-2.5 py-0.5 rounded">
                      {folioGenerado.folio}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Guarda tu folio{' '}
                    <strong className="text-white">{folioGenerado.folio}</strong>{' '}
                    para consultar su seguimiento. Haz clic en el organismo
                    correspondiente a la derecha para ir directo a su portal
                    oficial.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Columna Derecha (5 cols): Seguimiento + Enlaces Directos a Instituciones */}
          <div className="lg:col-span-5 space-y-6">
            {/* Módulo de Seguimiento */}
            <div className="bg-[#09090B] text-white rounded-2xl p-6 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#DC2626]" />
                <h3 className="font-extrabold text-base">
                  Seguimiento de tu caso
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Consulta el estatus de tu reporte ingresando tu folio (prueba
                con <span className="font-mono text-zinc-200">PC-2026-104</span>).
              </p>

              <form onSubmit={handleBuscarFolio} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ej. PC-2026-104"
                  value={busquedaFolio}
                  onChange={(e) => setBusquedaFolio(e.target.value)}
                  className="flex-1 rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-[#DC2626] focus:outline-none uppercase font-mono"
                />
                <button
                  type="submit"
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-2 rounded-lg font-bold text-sm inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  Rastrear
                </button>
              </form>

              {resultadoBusqueda && (
                <div className="pt-3 border-t border-zinc-800 text-xs">
                  {resultadoBusqueda.noEncontrado ? (
                    <p className="text-red-400 font-semibold">
                      Folio no encontrado. Verifica el código e intenta de nuevo.
                    </p>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Empresa:</span>
                        <span className="font-bold text-white">
                          {resultadoBusqueda.empresa}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Estatus:</span>
                        <span className="font-bold text-emerald-400">
                          {resultadoBusqueda.estado}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Directorio Destacado de Instituciones y Secretarías */}
            <div className="bg-[#FAFAF9] rounded-2xl border-2 border-[#09090B] p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-zinc-200">
                <div className="p-2 rounded-lg bg-[#DC2626] text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-base text-[#09090B] uppercase tracking-tight">
                    Canalización Oficial Directa
                  </h3>
                  <p className="text-xs text-zinc-600">
                    Haz clic para abrir el sitio oficial de cada institución
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {organismos.map((org) => {
                  const esRecomendado = org.categorias.includes(
                    formData.categoria
                  );
                  return (
                    <div
                      key={org.siglas}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        esRecomendado
                          ? 'bg-white border-[#DC2626] shadow-md'
                          : 'bg-white border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-black text-base text-[#09090B]">
                          {org.siglas}
                        </span>
                        {esRecomendado && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-[#DC2626] text-white px-2.5 py-0.5 rounded-full">
                            Sugerido para tu caso
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-zinc-700 mt-0.5">
                        {org.nombre}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        {org.aplicaEn}
                      </p>

                      {/* Botón de redirección directa a la página oficial */}
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-3.5 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                          esRecomendado
                            ? 'bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-sm'
                            : 'bg-[#09090B] hover:bg-zinc-800 text-white'
                        }`}
                      >
                        Ir al portal oficial de {org.siglas}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] font-medium text-zinc-600">
                <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>
                  Los enlaces se abren en una pestaña nueva directamente en los
                  dominios oficiales del gobierno.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}