import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getSkillsAction = createAction('SKILLS/GET',(data)=>{
    return { payload:data}
})
//@DELETE
export  const deleteSKILLSAction = createAction('SKILLS/DELETE',(name)=>{
  return { payload:name}
})
//@Put
export  const updateSKILLSAction = createAction('SKILLS/PUT',(name)=>{
  return { payload:name}
})
//@Add
export  const addSKILLSAction = createAction('SKILLS/POST',(name)=>{
  return { payload:name}
})
export const skillsReducer = createReducer({
  skills:[]
}, (builder) => {
    builder
      .addCase('SKILLS/GET', (state, action) => {
      
        state.skills = action.payload
      }) .addCase('SKILLS/PUT', (state, action) => {
        const updatedEducation = action.payload.data;
        
        const indexToUpdate = state.skills.findIndex((item) => item._id === updatedEducation._id);
        if (indexToUpdate !== -1) {
          state.skills[indexToUpdate] = updatedEducation;
        }
      })   .addCase('SKILLS/DELETE', (state, action) => {
        const idToDelete = action.payload.data._id;
        state.skills = state.skills.filter((item) => item._id !== idToDelete);
      })   .addCase('SKILLS/POST', (state, action) => {
        const newEducation = action.payload.data;
        state.skills.push(newEducation);
      });
  })