'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const enlacesES = [
  { href: '/', texto: 'Inicio' },
  { href: '/#experiencia', texto: 'Experiencia' },
  { href: '/#proyectos', texto: 'Proyectos' },
  { href: '/#formacion', texto: 'Formación' },
  { href: '/#contacto', texto: 'Contacto' },
  { href: '/cv/', texto: 'CV' }
];

const enlacesEN = [
  { href: '/en/', texto: 'Home' },
  { href: '/en/#experiencia', texto: 'Experience' },
  { href: '/en/#proyectos', texto: 'Projects' },
  { href: '/en/#formacion', texto: 'Education' },
  { href: '/en/#contacto', texto: 'Contact' },
  { href: '/en/cv/', texto: 'CV' }
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const ruta = usePathname() || '/';
  const esIngles = ruta === '/en' || ruta.startsWith('/en/');
  const enlaces = esIngles ? enlacesEN : enlacesES;

  const sinPrefijo = esIngles ? ruta.replace(/^\/en\/?/, '/') : ruta;
  const rutaAlterna = esIngles
    ? (sinPrefijo === '' ? '/' : sinPrefijo)
    : (ruta === '/' ? '/en/' : `/en${ruta}`);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href={esIngles ? '/en/' : '/'} className="logo">Adrián Gallardo</Link>
        <button
          className="menu-btn"
          aria-label={esIngles ? 'Open menu' : 'Abrir menú'}
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
          <Link
            href={rutaAlterna}
            className="idioma"
            title={esIngles ? 'Ver en español' : 'Switch to English'}
            onClick={() => setAbierto(false)}
          >
            {esIngles ? '🇪🇸 ES' : '🇬🇧 EN'}
          </Link>
        </nav>
      </div>
    </header>
  );
}
