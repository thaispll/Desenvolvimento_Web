import styles from '../styles/Sobre.module.css' ;

export function Sobre(){
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}> Sobre o projeto</h1>
                <p className={styles.subtitle}>Conheça as tecnologias aplicadas nessa SPA.</p>
            </header>

        <section className={styles.content}>
        <p>Este projeto bla bla bla bla <strong> React</strong></p>
        <div className={styles.card}>
            <h3>Capacidades Técnicas:</h3>
            <ul className={styles.list}>
            <li>Estrutura de Frame</li>
            <li>Gerenciamento de Rotas</li>
            <li>Estilização por componentes</li>
            </ul>
        </div>
        </section>
        <footer className={styles.footer}>
        <p>Desenvolvido durante o aprendizado de Front-End</p>
        </footer>
        </div>
    );
}