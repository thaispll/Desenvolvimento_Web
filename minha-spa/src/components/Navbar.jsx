import {Link} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
//Componentes de navegação -reutilizáveis
//Criar barra de navegação
export function Navbar() {
  return (
      <nav className={styles.navbar}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/sobre" className={styles.link}>Sobre</Link>
      </nav>
  );
}