import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getExperiencesAction = createAction('EXPERIENCES/GET',(name)=>{
    return { payload:name}
})
//@DELETE
export  const deleteExperiencesAction = createAction('EXPERIENCES/DELETE',(name)=>{
  return { payload:name}
})
//@Put
export  const updateExperiencesAction = createAction('EXPERIENCES/PUT',(name)=>{
  return { payload:name}
})
//@Add
export  const addExperiencesAction = createAction('EXPERIENCES/POST',(name)=>{
  return { payload:name}
})
export const ExperiencesReducer = createReducer({
    experiences:[]
}, (builder) => {
    builder
      .addCase('EXPERIENCES/GET', (state, action) => {
        state.experiences = action.payload
      }) 
      .addCase('EXPERIENCES/DELETE', (state, action) => {
        const idToDelete = action.payload.data._id;
        state.experiences = state.experiences.filter((item) => item._id !== idToDelete);
      })
      .addCase('EXPERIENCES/PUT', (state, action) => {
        const updatedProjects = action.payload.data;
    
        const indexToUpdate = state.experiences.findIndex((item) => item._id === updatedProjects._id);
        if (indexToUpdate !== -1) {
          state.experiences[indexToUpdate] = updatedProjects;
        }
      })     .addCase('EXPERIENCES/POST', (state, action) => {
        const newProjects = action.payload.data;
        state.experiences.push(newProjects);
      });
  })