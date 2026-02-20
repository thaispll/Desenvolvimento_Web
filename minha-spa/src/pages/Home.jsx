import styles from '../styles/Home.module.css';
export function Home(){
    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>Bem-vindo à nossa Single Page Application</h1>
                <p className={styles.subtitle}>Este é um ex. de renderização via componentes</p>
            </header>
            <section className={styles.features}>
                <div className={styles.card}>
                    <h3>Componentes</h3>
                    <p>Dividindo a interface em partes reutilizáveis.</p>
                </div>
                <div className={styles.card}>
                    <h3>CSS Modules</h3>
                    <p>Estilos que não vazam pra outras páginas.</p>
                </div>
            </section>
        </div>
    );
}
//SPA é um único arquivo HTML que usa Virtual DOM para troca de componentes