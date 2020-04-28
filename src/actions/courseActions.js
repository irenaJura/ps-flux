import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

// action creater function
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      // action
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses,
    });
  });
}
