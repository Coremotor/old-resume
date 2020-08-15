import {ON_COURSE_TITLE_CLICK_HANDLER} from "../actionTypes/titleClickHandlerTypes";
import {ON_MODULE_TITLE_CLICK_HANDLER} from "../actionTypes/titleClickHandlerTypes";

export function onCourseTitleClickHandler(
    courseShowVar,
    courseId,
    courseTitle
) {
    return {
        type: ON_COURSE_TITLE_CLICK_HANDLER,
        courseShowVar: courseShowVar,
        courseId: courseId,
        courseTitle: courseTitle,
    }
}

export function onModuleTitleClickHandler(
    courseId,
    moduleShowVar,
    moduleId,
) {
    return {
        type: ON_MODULE_TITLE_CLICK_HANDLER,
        courseId: courseId,
        moduleShowVar: moduleShowVar,
        moduleId: moduleId,
    }
}

