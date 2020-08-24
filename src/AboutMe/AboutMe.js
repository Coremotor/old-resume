import React, {useState} from "react";
import styles from './AboutMe.module.css';

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

                {
                    aboutMeShow.aboutMeShow ? <div className={styles.arrowUp}/> :
                        <div className={styles.arrowDown}/>
                }
            </div>

            {
                aboutMeShow.aboutMeShow &&
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            }
        </section>
    )
}

export default AboutMe;