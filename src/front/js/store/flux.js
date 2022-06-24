import { SignupPage } from "../pages/SignupPage";
import { useContext, useEffect, useState } from "react"

const BASE_URL = process.env.BACKEND_URL

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			users: [

			],
			lessons: [

			],
			teachers: [

			],
			students: [

			],
			teacherId: [

			],
			lessonId: [

			],
			teacherfoto: [

			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			getUsersData: () => {
				// fetching data from the backend
				fetch(BASE_URL + "/api/users")

					.then(resp => resp.json())
					.then(dataUsers => setStore({
						users: [...getStore().users, dataUsers]
					}))

					.catch(error => console.log("Error loading message from backend Users", error));
			},

		// 	postUserData: () => {
				
		// 		// fetching data from the backend
		// 		fetch((BASE_URL + "api/users"), {
		// 			headers: {
		// 				'Content-Type': 'application/json'
		// 			},
		// 			method: "POST",
		// 			body: JSON.stringify({
		// 				"email": document.getElementById("email").value,
    //         "email": SignupPage,
		// 				"password": document.getElementById("password").value,
		// 				// "is_teacher": document.getElementById("confirm_teacher").value,
		// 			})
		// 		})

		// 	},

		// 	postStudentData: () => {

		// 	fetch((BASE_URL + "api/student"), {
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		method: "POST",
		// 		body: JSON.stringify({
		// 			"email": document.getElementById("email").value,
		// 			"password": document.getElementById("password").value,
		// 			"first_name": document.getElementById("First_Name").value,
		// 			"last_name": document.getElementById("Surnames").value,
		// 		})
		// 	})

		// },

		// postTeacherData: () => {

		// 	fetch((BASE_URL + "api/teacher"), {
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		method: "POST",
		// 		body: JSON.stringify({
		// 			"email": document.getElementById("email").value,
		// 			"password": document.getElementById("password").value,
		// 			"first_name": document.getElementById("First_Name").value,
		// 			"last_name": document.getElementById("Surnames").value,
		// 			"subjects1": document.getElementById("subjects1").value,
        //   "subjects2": document.getElementById("subjects2").value,
        //   "subjects3": document.getElementById("subjects3").value,
        //   "subjects4": document.getElementById("subjects4").value,
		// 			"fun_info": document.getElementById("fun_info").value,
		// 			"why_you_teach": document.getElementById("why_you_teach").value,
		// 			"years_experience": document.getElementById("years_experience").value,
		// 		})
		// 	})

		// },

			// TEST FUNCTION 			
			saveData: () => {
				console.log(document.getElementById("lesson_title").value)
			},

			// WORK IM PROGRESS - NOT DONE BUT WORKING

			getLessonsData: () => {
				// fetching data from the backend
				fetch(BASE_URL + "/api/lessons")
					.then(resp => resp.json())
					.then(dataLesson_Content => setStore({
						lessons: [...getStore().lessons, dataLesson_Content]
					}))

					.catch(error => console.log("Error loading message from backend Lessons", error));
			},

			// postLessonsData: () => {
				
			// 	// fetching data from the backend
			// 	fetch((BASE_URL + "api/lessons"), {
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		},
			// 		method: "POST",
			// 		body: JSON.stringify({
			// 			"title": document.getElementById("lessonContent_title").value,
			// 			"subject": document.getElementById("lessonContent_subject").value,
			// 			"introduction": document.getElementById("lessonContent_introduction").value,
			// 			"written_content": document.getElementById("lessonContent_mainpart").value,
			// 			"summary": document.getElementById("lessonContent_summary").value
			// 		})
			// 	})
				
			// },

			getTeacherData: () => {
				// fetching data from the backend
				fetch(BASE_URL + "/api/teacher")
					.then(resp => resp.json())
					.then(dataTeacher => setStore({
						teachers: [...getStore().teachers, dataTeacher]
					}))

					.catch(error => console.log("Error loading message from backend Teacher", error));
			},
			
			getStudentData: () => {
				// fetching data from the backend
				fetch(BASE_URL + "/api/student")
					.then(resp => resp.json())
					.then(dataStudent => setStore({
						students: [...getStore().students, dataStudent]
					}))

					.catch(error => console.log("Error loading message from backend Student", error));
			},

			onClickSaveTeacherId: (teacher) => {
				setStore({
					teacherId: [teacher]
				})
				// getStore().teacherId? window.location.href='https://3000-marinosig-teachandlearn-9lxwlzxqgeo.ws-eu47.gitpod.io/teacherpage' : null
			},

			onClickSaveLessonId: (Lesson) => {
				setStore({
					lessonId: [Lesson]
				})
				// getStore().teacherId? window.location.href='https://3000-marinosig-teachandlearn-9lxwlzxqgeo.ws-eu47.gitpod.io/teacherpage' : null
			},

			// getRandonPictureAPI: () => {
			// 	// fetching data from the backend
			// 	fetch("https://randomuser.me/api/")
			// 	.then(respAPI => respAPI.json())
			// 	.then(apiTeacherFoto => setStore({
			// 		teacherfoto: [...getStore().teacherfoto, apiTeacherFoto]
			// 	}))

			//   },


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

