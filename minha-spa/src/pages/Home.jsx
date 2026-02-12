import styles from '../styles/Home.module.css';
export function Home(){
    return (
        <div className={styles.container}>
            <div>
                <h1>Bem-vindo à nossa Single Page Application</h1>
                <p>Este é um ex. de renderização via componentes</p>
            </div>

            <div className={styles.content}>
                <p>Se você está vendo isso, é pq funcionou!</p>
            </div>
        </div>

    );
}
//SPA é um único arquivo HTML que usa Virtual DOM para troca de componentes