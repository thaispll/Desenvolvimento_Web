import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Sobre} from './pages/Sobre'
import {Home} from './pages/Home';
//Rotas no React: mecanismo para navegação entre diferentes páginas ou componentes em uma aplicação  de página única(SPA)

//importação direta de uma página
function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <main style={{padding: '2px'}}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App