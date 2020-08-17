import React from "react";
import {useSelector} from "react-redux";
import Course from "../Course/Course";
import styles from "./CoursesList.module.css";

function CoursesList() {

    const allCourses = useSelector(state => state);
    const coursesKeysArr = Object.keys(allCourses);

    const renderCourses = () => {
        return coursesKeysArr.map((name, index) => {
                return <Course key={index} name={name}/>
            }
        )
    }

    return (
        <section className='container'>

            <h1>Список курсов</h1>

            {
                renderCourses()
            }
        </section>
    );
}

export default CoursesList;