import React, {Fragment} from 'react';
import styles from './App.module.css';
import CoursesList from "./CoursesList/CoursesList";
import Header from "./Header/Header";
import WhatCanISuggest from "./WhatCanISuggest/WhatCanISuggest";
import Stack from "./Stack/Stack";
import WorkExperience from "./WorkExperience/WorkExperience";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";


function App() {

    return (
        <Fragment>
            <div className={styles.textWrapper}>
                <small className={styles.text}>App create on React Redux</small>
                <small className={styles.text}>version 0.1.0-&alpha;</small>
            </div>
            <Header/>
            <WhatCanISuggest/>
            <Stack/>
            <CoursesList/>
            <Education/>
            <WorkExperience/>
            <AboutMe/>
            <Footer/>
        </Fragment>
    );
}

export default App;
