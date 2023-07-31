import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getEducationAction = createAction('EDUCATION/GET',(name)=>{
    return { payload:name}
})
//@DELETE
export  const deleteEducationAction = createAction('EDUCATION/DELETE',(name)=>{
  return { payload:name}
})
//@Put
export  const updateEducationAction = createAction('EDUCATION/PUT',(name)=>{
  return { payload:name}
})
//@Add
export  const addEducationAction = createAction('EDUCATION/POST',(name)=>{
  return { payload:name}
})

export const educationReducer = createReducer({
  education:[]
}, (builder) => {
    builder
      .addCase('EDUCATION/GET', (state, action) => {
        state.education = action.payload
      })
      .addCase('EDUCATION/DELETE', (state, action) => {
        const idToDelete = action.payload.data._id;
        state.education = state.education.filter((item) => item._id !== idToDelete);
      }).addCase('EDUCATION/PUT', (state, action) => {
        const updatedEducation = action.payload.data;
    
        const indexToUpdate = state.education.findIndex((item) => item._id === updatedEducation._id);
        if (indexToUpdate !== -1) {
          state.education[indexToUpdate] = updatedEducation;
        }
      })     .addCase('EDUCATION/POST', (state, action) => {
        const newEducation = action.payload.data;
        state.education.push(newEducation);
      });
  })
