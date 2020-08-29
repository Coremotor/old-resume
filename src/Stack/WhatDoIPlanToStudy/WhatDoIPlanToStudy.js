import React from "react";
import styles from './WhatDoIPlanToStudy.module.css'

const WhatDoIPlanToStudy = () => {
    return (
        <section className={styles.whatDoIPlanToStudy}>
            <h2 className={styles.whatDoIPlanToStudyTitle}>В планах изучить:</h2>
            <ul className={styles.whatDoIPlanToStudyList}>
                <li className={styles.whatDoIPlanToStudyListItem}>Node.js (backend)</li>
                <li className={styles.whatDoIPlanToStudyListItem}>Vue.js</li>
                <li className={styles.whatDoIPlanToStudyListItem}>Базы данных</li>
                <li className={styles.whatDoIPlanToStudyListItem}>Symphony</li>
                <li className={styles.whatDoIPlanToStudyListItem}>Laravel</li>
                <li className={styles.whatDoIPlanToStudyListItem}>...</li>
                <li className={styles.whatDoIPlanToStudyListItem}>Идти по пути бесконечного изучения новых технологий :)</li>
            </ul>

        </section>
    )
}

export default WhatDoIPlanToStudy;