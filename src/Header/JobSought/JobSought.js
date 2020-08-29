import React from "react";
import styles from './JobSought.module.css';

const JobSought = () => {
    return (
        <section className={styles.jobSought}>
            <h1 className={styles.jobSoughtTitle}>Соискаемая должность</h1>
            <p className={styles.jobSoughtText}>Front-end developer</p>
            <p className={styles.jobSoughtText}>Демаков Андрей Иванович</p>
        </section>
    )
}

export default JobSought;