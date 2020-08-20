import React, {useState} from "react";
import {useSelector} from "react-redux";
import Course from "./Course/Course";
import styles from "./CoursesList.module.css";

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

                <h1 className={styles.coursesSectionTitle}>Список курсов</h1>
                {
                    coursesListShow.coursesListShow ? <div className={styles.arrowUp}/> :
                        <div className={styles.arrowDown}/>
                }
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