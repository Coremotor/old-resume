import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <small className={styles.footerText}>&copy; Andrey Demakov 2020</small>

            <small className={styles.footerText}>
                <a  className={styles.footerLink} href="https://ya.ru/" target="_blank"
                   rel="noopener noreferrer">Код приложения-резюме на Github</a>
            </small>
        </footer>
    )
}

export default Footer;