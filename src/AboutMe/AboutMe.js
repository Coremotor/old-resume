import React, {useState} from "react";
import styles from './AboutMe.module.css';
import {IconUrlBlock} from "../CoursesList/IconUrlBlock/IconUrlBlock";

const AboutMe = () => {

    const [aboutMeShow, setAboutMeShow] = useState({
        aboutMeShow: false,
    })

    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutMeTitleWrapper}
                 onClick={() => setAboutMeShow({aboutMeShow: !aboutMeShow.aboutMeShow})}
            >

                <h2 className={styles.aboutMeTitle}>Обо мне</h2>

                <IconUrlBlock obj={aboutMeShow}/>

            </div>

            {
                aboutMeShow.aboutMeShow &&
                <ul className={styles.aboutMeList}>
                    <li className={styles.aboutMeListItem}>Прокачанные soft skills.</li>
                    <li className={styles.aboutMeListItem}>Спорт: хоккей.</li>
                    <li className={styles.aboutMeListItem}>Отдых: лес, костер, палатка.</li>
                    <li className={styles.aboutMeListItem}>Свободное время: семья, друзья, велик, самообучение.</li>
                </ul>
            }
        </section>
    )
}

export default AboutMe;