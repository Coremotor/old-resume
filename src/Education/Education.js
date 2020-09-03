import React, {useState} from "react";
import styles from './Education.module.css';
import {IconUrlBlock} from "../CoursesList/IconUrlBlock/IconUrlBlock";

const Education = () => {

    const [educationShow, setEducationShow] = useState({
        educationShow: false,
    })

    return (
        <section className={styles.education}>
            <div className={styles.educationTitleWrapper}
                 onClick={() => setEducationShow({educationShow: !educationShow.educationShow})}
            >
                <h2 className={styles.educationTitle}>Образование</h2>

                <IconUrlBlock obj={educationShow}/>
            </div>

            {
                educationShow.educationShow &&
                <ul>
                    <li className={styles.educationListItem}>
                        <h3>Online-университет Skillbox.</h3>
                        <p className={styles.educationListItemText}>Год поступления: 2019</p>
                        <p className={styles.educationListItemText}>Специализация: Профессия Web-Разработчик.</p>
                    </li>

                    <li className={styles.educationListItem}>
                        <h3>Марийский государственный технический университет</h3>
                        <p className={styles.educationListItemText}>Год поступления: 2002</p>
                        <p className={styles.educationListItemText}>Год окончания: 2007</p>
                        <p className={styles.educationListItemText}>Академическая степень: инженер</p>
                        <p className={styles.educationListItemText}>Факультет: лесопромышленный</p>
                        <p className={styles.educationListItemText}>Специализация: стандартизация, сертификация и
                            метрология</p>
                    </li>

                    <li className={styles.educationListItem}>
                        <h3>Поволжский государственный технический университет</h3>
                        <p className={styles.educationListItemText}>Год поступления: 2010</p>
                        <p className={styles.educationListItemText}>Год окончания: 2013</p>
                        <p className={styles.educationListItemText}>Академическая степень: магистр</p>
                        <p className={styles.educationListItemText}>Факультет: экономический</p>
                        <p className={styles.educationListItemText}>Специализация: банковское дело</p>
                    </li>
                </ul>
            }
        </section>
    )
}

export default Education;