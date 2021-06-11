import styles from './styles.module.scss';

export function SectionOne(){
    return (
        <div className={styles.sectionOne}>
            <h1>Exemplo de título bacaninha</h1>

            <div className={styles.circlesContainer}>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
                <div className={styles.circles}></div>
            </div>
        </div>
    )
}