import React from "react";
import styles from './WhatAmStudyingNow.module.css'

const WhatAmStudyingNow = () => {
    return (
        <section className={styles.whatAmStudyingNow}>
            <h2 className={styles.whatAmStudyingNowTitle}>В процессе изучения:</h2>
            <ul className={styles.whatAmStudyingNowList}>
                <li>React</li>
                <li>React Native</li>
            </ul>
        </section>
    )
}

export default WhatAmStudyingNow;