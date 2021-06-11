import styles from './styles.module.scss';

export function Main(){
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerLeft}>
                <h1>Exemplo de<br/> título do Hero</h1>
                <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.</p>
                <a href="#"><button>Saiba mais</button></a>
            </div>

            <div className={styles.mainContainerRigth}>
                <div className={styles.imagem}></div>
            </div>
        </div>
    )
}