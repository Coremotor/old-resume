import React from "react";
import styles from './WhatDoIPlanToStudy.module.css'

const WhatDoIPlanToStudy = () => {
    return (
        <section className={styles.whatDoIPlanToStudy}>
            <h2 className={styles.whatDoIPlanToStudyTitle}>В планах изучить:</h2>
            <ul className={styles.whatDoIPlanToStudyList}>
                <li>React Native</li>
                <li>Vue.js</li>
                <li>Angular</li>
                <li>Electron</li>
                <li>...</li>
            </ul>
        </section>
    )
}

export default WhatDoIPlanToStudy;
