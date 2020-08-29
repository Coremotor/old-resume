import React, {useState} from "react";
import {useSelector} from "react-redux";
import Course from "./Course/Course";
import styles from "./CoursesList.module.css";
import {IconUrlBlock} from "./IconUrlBlock/IconUrlBlock";

function CoursesList() {

    const allCourses = useSelector(state => state);
    const coursesKeysArr = Object.keys(allCourses);

    const [coursesListShow, setCoursesListShow] = useState({
        coursesListShow: false,
    })

    const renderCourses = () => {
        return coursesKeysArr.map((name, index) => {
                return <Course key={index} name={name}/>
            }
        )
    }

    return (
        <section className={styles.coursesSection}>

            <div className={styles.coursesListTitleWrapper}
                 onClick={() => setCoursesListShow({coursesListShow: !coursesListShow.coursesListShow})}>

                <h2 className={styles.coursesSectionTitle}>Online-университет Skillbox. Профессия Web-Разработчик.</h2>

                <IconUrlBlock obj={coursesListShow}/>
            </div>

            {
                coursesListShow.coursesListShow &&
                <ul>
                    {
                        renderCourses()
                    }
                </ul>
            }
        </section>
    );
}

export default CoursesList;