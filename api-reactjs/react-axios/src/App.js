import React, {useEffect, useState} from "react";
import api from "./services/api";
import './App.css';

export default function App() {
    const[username] = useState('thaispll');
    const[user, setUser] = useState(null);
    const[repos, setRepos] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    
    
    //carrega dados da API
    useEffect(() =>{
      async function loadData( userToSearch = username){
        try{
          setLoading(true);
          setError(null);

          //Carrega usuário
          const userResponse = await api.get(`/users/${userToSearch}`); //API Responde
          setUser(userResponse.data); //Extrai os dados da API

          const reposResponse = await api.get(`/users/${userToSearch}/repos?per_page=6&sort=updated`); 
          setRepos(reposResponse.data); 

        } catch(error){
          console.error('Erro', error);
          setError(`Usuário ${userToSearch} não encontrado`);

        } finally{
          setLoading(false);
        }
      }
      loadData();
    }, [username]);

    if(loading){
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Carregando perfil...</p>
        </div>
      );
    }

    if(error || !user) {
      return(
        <div className="error-container">
          <h2>❌ {error}</h2>
          <button onClick={ () => window.location.reload()}> Tentar novamente</button>
        </div>
      )
    }

    return(
      <div className="app-container">
        <div className="profile-card"></div>
          <header className="profile-header">
            <img src={user.avatar_url} alt={user.name} className="avatar"/>
            <div className="user-info">
              <h1>{user.name || user.login}</h1>
              <p>{user.bio || "Sem bio disponível"}</p>
              <div className="status">
                <span><strong>{user.followers}</strong> seguidores</span>
                <span><strong>{user.following}</strong> seguindo</span>
              </div>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="github-link">
                Ver perfil completo
              </a>
            </div>
          </header>

          <main className="repos-section">
            <h2>Repositórios recentes</h2>
            <div className="repos-grid">
              {repos.map(repo => (
                <div key={repo.id} className="repo-card">
                  <h3>{repo.name}</h3>
                  <p>{repo.description || "Sem descrição."}</p>
                  <div className="repo-footer">
                    <span> {repo.stargazers_count} stars</span>
                    <span> {repo.forks_count} forks</span>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      Acessar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
      </div>
    );
}

