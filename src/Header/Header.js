import React from "react";
import styles from './Header.module.css';
import Photo from "./Photo/Photo";
import WhoIWantToBe from "./WhoIWantToBe/WhoIWantToBe";

const Header = () => {
    return(
        <header className={styles.header}>
            <Photo/>
            <WhoIWantToBe/>
        </header>
    )
}

export default Header;