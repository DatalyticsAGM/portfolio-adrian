const CV_URL = 'https://drive.google.com/file/d/1I7ItXnAjj808H3tF4zXLUz8hAfddHyax/view?usp=drive_link';
const LINKEDIN_URL = 'https://www.linkedin.com/in/adriangallardomu%C3%B1oz/';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          Correo: <a href="mailto:adriangallardogm@gmail.com">adriangallardogm@gmail.com</a>
        </p>
        <div className="iconos">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a href={CV_URL} target="_blank" rel="noopener noreferrer" aria-label="Descargar CV">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
