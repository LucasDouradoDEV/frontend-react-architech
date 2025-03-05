import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './MainLayout.css';

type MainLayoutProps = {
  children: ReactNode;
};

// const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-layout">
      {/* Header */}
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children} {/* Conteúdo da página será injetado aqui */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Meu Projeto</p>
      </footer>
    </div>
  );
};

// export default MainLayout;
