import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proposito from './components/Proposito';
import Valores from './components/Valores';
import Buzon from './components/Buzon';
import CasosAnonimos from './components/CasosAnonimos';
import NormativaFooter from './components/NormativaFooter';

export default function App() {
  const [casos, setCasos] = useState([
    {
      id: 1,
      folio: 'PC-2026-104',
      categoria: 'Publicidad engañosa',
      empresa: 'Tienda ElectroMax',
      relato:
        'Anunciaban una pantalla con 50% de descuento real en su banner, pero al llegar a caja subieron el precio base al doble para simular la oferta.',
      orientacion:
        'Se orientó al usuario a tomar captura del anuncio original y presentar denuncia en PROFECO por publicidad engañosa conforme a la Ley Federal de Protección al Consumidor.',
      fecha: 'Hace 2 días',
    },
    {
      id: 2,
      folio: 'PC-2026-209',
      categoria: 'Cobro indebido o estafa financiera',
      empresa: 'Financiera Rápida MX',
      relato:
        'Me cobraron un supuesto seguro obligatorio de apertura que nunca autoricé ni venía especificado en el contrato inicial.',
      orientacion:
        'Se canalizó el expediente hacia CONDUSEF para exigir la cancelación del cargo no reconocido y el reembolso íntegro.',
      fecha: 'Hace 5 días',
    },
    {
      id: 3,
      folio: 'PC-2026-318',
      categoria: 'Garantía o producto defectuoso',
      empresa: 'Muebles Confort Hogar',
      relato:
        'Entregaron un sofá con la estructura rota y la tienda se negaba a aplicar la garantía argumentando que era daño por uso.',
      orientacion:
        'Con el recibo de entrega del mismo día, se respaldó la queja formal ante PROFECO logrando el cambio físico sin costo.',
      fecha: 'Hace 1 semana',
    },
  ]);

  const agregarCaso = (nuevoCaso) => {
    setCasos((prev) => [nuevoCaso, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#09090B] antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Proposito />
        <Valores />
        <Buzon onNuevoCaso={agregarCaso} />
        <CasosAnonimos casos={casos} />
      </main>
      <NormativaFooter />
    </div>
  );
}