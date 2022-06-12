export const BASE_URL ="https://3001-brunomorais-teachandlea-317x510bpq5.ws-eu47.gitpod.io"


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

			]
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
				fetch(BASE_URL+"/api/users")
				
					.then(resp => resp.json())
					.then(dataUsers => setStore({ 
						users: [...getStore().users, dataUsers]
					 }))
				
					.catch(error => console.log("Error loading message from backend Users", error));
			},
				// WORK IM PROGRESS - NOT DONE

			// postUsersData: () => {
			// 	// fetching data from the backend
			// 	fetch(BASE_URL+"/api/users", {method: "POST"})
				
			// 		.then(resp => resp.json())
			// 		.then(dataUsers => setStore({ 
			// 			users: [...getStore().users, dataUsers]
			// 		 }))
				
			// 		.catch(error => console.log("Error loading message from backend Users", error));
			// },

			getLessonsData: () => {
				// fetching data from the backend
				fetch(BASE_URL+"/api/lessons")
					.then(resp => resp.json())
					.then(dataLesson_Content => setStore({ 
						lessons: [...getStore().lessons, dataLesson_Content]
					 }))
				
					.catch(error => console.log("Error loading message from backend Lessons", error));
			},
			getTeacherData: () => {
				// fetching data from the backend
				fetch(BASE_URL+"/api/teacher")
					.then(resp => resp.json())
					.then(dataTeacher => setStore({ 
						teachers: [...getStore().teachers, dataTeacher]
					 }))
				
					.catch(error => console.log("Error loading message from backend Teacher", error));
			},
			getStudentData: () => {
				// fetching data from the backend
				fetch(BASE_URL+"/api/student")
					.then(resp => resp.json())
					.then(dataStudent => setStore({ 
						students: [...getStore().students, dataStudent]
					 }))
				
					.catch(error => console.log("Error loading message from backend Student", error));
			},
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
