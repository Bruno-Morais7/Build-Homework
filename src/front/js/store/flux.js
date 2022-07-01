import { SignupPage } from "../pages/SignupPage";
import { useContext, useEffect, useState } from "react";

const BASE_URL = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      users: [],
      lessons: [],
      teachers: [],
      students: [],
      teacherId: [],
      lessonId: [],
      teacherfoto: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      getUsersData: () => {
        // fetching data from the backend
        fetch(BASE_URL + "/api/users")
          .then((resp) => resp.json())
          .then((dataUsers) =>
            setStore({
              users: [...getStore().users, dataUsers],
            })
          )

          .catch((error) =>
            console.log("Error loading message from backend Users", error)
          );
      },




      // TEST FUNCTION
      saveData: () => {
        console.log(document.getElementById("lesson_title").value);
      },


      getLessonsData: () => {
        // fetching data from the backend
        fetch(BASE_URL + "/api/lessons")
          .then((resp) => resp.json())
          .then((dataLesson_Content) =>
            setStore({
              lessons: [...getStore().lessons, dataLesson_Content],
            })
          )

          .catch((error) =>
            console.log("Error loading message from backend Lessons", error)
          );
      },


      getTeacherData: () => {
        fetch(BASE_URL + "/api/teacher")
          .then((resp) => resp.json())
          .then((dataTeacher) =>
            setStore({
              teachers: [...getStore().teachers, dataTeacher],
            })
          )

          .catch((error) =>
            console.log("Error loading message from backend Teacher", error)
          );
      },

      getStudentData: () => {
        fetch(BASE_URL + "/api/student")
          .then((resp) => resp.json())
          .then((dataStudent) =>
            setStore({
              students: [...getStore().students, dataStudent],
            })
          )

          .catch((error) =>
            console.log("Error loading message from backend Student", error)
          );
      },

      onClickSaveTeacherId: (teacher) => {
        setStore({
          teacherId: [teacher],
        });
      },

      onClickSaveLessonId: (Lesson) => {
        setStore({
          lessonId: [Lesson],
        });

      },

    },
  };
};

export default getState;
