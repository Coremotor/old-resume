import React from "react";
import styles from './WhatDoIPlanToStudy.module.css'

const WhatDoIPlanToStudy = () => {
    return (
        <section className={styles.whatDoIPlanToStudy}>
            <h2 className={styles.whatDoIPlanToStudyTitle}>В планах изучить:</h2>
            <ul className={styles.whatDoIPlanToStudyList}>
                <li>Vue.js</li>
                <li>Node.js (backend)</li>
                <li>Базы данных</li>
                <li>Java</li>
                <li>...</li>
                <li>Идти по пути бесконечного изучения новых технологий :)</li>
            </ul>
        </section>
    )
}

export default WhatDoIPlanToStudy;