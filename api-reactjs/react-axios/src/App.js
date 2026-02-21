import React, {useEffect, useState} from "react";
import api from "./services/api";

export default function App() {
    const[user, setUser] = useState(null);
    
    //carrega dados da API
    useEffect(() =>{
      async function loadUser(){
        try{
          const response = await api.get('/user');
          setUser(response.data);
        } catch(error){
          console.error('Erro', error)
        }   
      }
      loadUser();
    }, []);

    if(!user) return <div>Carregando...</div>;

    return(
      <div className={App}>
        <p>Usuário: {user.login}</p>
        <p>Biografia: {user.bio || 'Sem biografia'}</p>
      </div>
    );
}

