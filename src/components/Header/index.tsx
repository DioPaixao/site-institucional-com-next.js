import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.menu}>
            <h1>Front-End Study</h1>

            <nav className={styles.nav_bar}>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                </ul>
            </nav>

            <a href="#"><button>Entrar</button></a>
        </header>
    );
}