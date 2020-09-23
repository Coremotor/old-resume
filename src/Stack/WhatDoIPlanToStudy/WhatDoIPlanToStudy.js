import React from "react";
import styles from './WhatDoIPlanToStudy.module.css'

const WhatDoIPlanToStudy = () => {
    return (
        <section className={styles.whatDoIPlanToStudy}>
            <h2 className={styles.whatDoIPlanToStudyTitle}>В планах изучить:</h2>
            <ul className={styles.whatDoIPlanToStudyList}>
                <li>Node.js (backend)</li>
                <li>Базы данных</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Symfony</li>
                <li>...</li>
                <li>Идти по пути бесконечного изучения новых технологий и совешенствования уже полученных знаний :)</li>
            </ul>
        </section>
    )
}

export default WhatDoIPlanToStudy;
