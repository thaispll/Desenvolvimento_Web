import { useState } from 'react' //hook para gerenciar estado local(variáveis que mudam)
import reactLogo from './assets/react.svg' //importar a imagem do react
import viteLogo from '/vite.svg' //importa a imagem logo do Vite
import './App.css' //puxando arquivos

//componente App
function App() {
  const [count, setCount] = useState(0)
//retornar a UI - User Interface - interface do usuário
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Olá, mundo
      </p>
    </>
  )
}

export default App
//define o que o carro faz. É o componente principal da aplicação
//Ele organiza onde a Navbar fica, quais as Routes(rotas)
//e agrupa todos os outros sub-componentes
//coloco tudo que quero q apareça em todas as páginas