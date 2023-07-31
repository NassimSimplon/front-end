import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getProjectsAction = createAction('PROJECTS/GET',(name)=>{
    return { payload:name}
})
//@DELETE
export  const deleteProjectsAction = createAction('PROJECTS/DELETE',(name)=>{
  return { payload:name}
})
//@Put
export  const updateProjectsAction = createAction('PROJECTS/PUT',(name)=>{
  return { payload:name}
})
//@Add
export  const addProjectsAction = createAction('PROJECTS/POST',(name)=>{
  return { payload:name}
})
export const ProjectsReducer = createReducer({
  projects:[]
}, (builder) => {
    builder
      .addCase('PROJECTS/GET', (state, action) => {
        state.projects = action.payload
      })  .addCase('PROJECTS/DELETE', (state, action) => {
        const idToDelete = action.payload.data._id;
        state.projects = state.projects.filter((item) => item._id !== idToDelete);
      }).addCase('PROJECTS/PUT', (state, action) => {
        const updatedProjects = action.payload.data;
    
        const indexToUpdate = state.projects.findIndex((item) => item._id === updatedProjects._id);
        if (indexToUpdate !== -1) {
          state.projects[indexToUpdate] = updatedProjects;
        }
      })     .addCase('PROJECTS/POST', (state, action) => {
        const newProjects = action.payload.data;
        state.projects.push(newProjects);
      });
  })