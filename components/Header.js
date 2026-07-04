'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const enlaces = [
  { href: '/', texto: 'Inicio' },
  { href: '/#experiencia', texto: 'Experiencia' },
  { href: '/#proyectos', texto: 'Proyectos' },
  { href: '/#formacion', texto: 'Formación' },
  { href: '/#contacto', texto: 'Contacto' },
  { href: '/cv/', texto: 'CV' }
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const ruta = usePathname();

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">Adrián Gallardo</Link>
        <button
          className="menu-btn"
          aria-label="Abrir menú"
          onClick={() => setAbierto(!abierto)}
        >
          ☰
        </button>
        <nav className={`nav${abierto ? ' abierto' : ''}`}>
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={ruta === e.href ? 'activo' : ''}
              onClick={() => setAbierto(false)}
            >
              {e.texto}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
