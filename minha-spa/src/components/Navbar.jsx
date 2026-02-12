import {Link} from 'react-router-dom';

//Componentes de navegação -reutilizáveis
//Criar barra de navegação
export function Navbar() {
    return (
        <nav style={{padding: '1rem', borderBottom: '1px solid #ccc'}}>
          <Link to="/" style={{ marginRight: '10px'}}>Home</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
    );
  }