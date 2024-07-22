import styles from './styles.module.scss';

export const Footer = () => {
    console.log('footer')

    return (
        <footer className={styles.footer}>
            <div>Logo1</div>
            <div>Instagram</div>
            <div>Youtube</div>
            <div>Logo2</div>
        </footer>
    )
}