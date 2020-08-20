import React, {Fragment} from 'react';
// import styles from './App.module.css';
import CoursesList from "./CoursesList/CoursesList";
import Header from "./Header/Header";
import WhatCanISuggest from "./WhatCanISuggest/WhatCanISuggest";
import Stack from "./Stack/Stack";
import WorkExperience from "./WorkExperience/WorkExperience";


function App() {

    return (
        <Fragment>
            <Header/>
            <WhatCanISuggest/>
            <Stack/>
            <CoursesList/>
            <WorkExperience/>
        </Fragment>
    );
}

export default App;
