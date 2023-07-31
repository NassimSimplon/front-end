import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getVieAction = createAction('VIE/GET',(name)=>{
    return { payload:name}
})
//@DELETE
export  const deleteViesAction = createAction('VIE/DELETE',(name)=>{
  return { payload:name}
})
//@Put
export  const updateViesAction = createAction('VIE/PUT',(name)=>{
  return { payload:name}
})
//@Add
export  const addViesAction = createAction('VIE/POST',(name)=>{
  return { payload:name}
})
export const VieReducer = createReducer({
    vie:[]
}, (builder) => {
    builder
      .addCase('VIE/GET', (state, action) => {
        state.vie = action.payload
      }) .addCase('VIE/PUT', (state, action) => {
        const updatedEducation = action.payload.data;
        
        const indexToUpdate = state.vie.findIndex((item) => item._id === updatedEducation._id);
        if (indexToUpdate !== -1) {
          state.vie[indexToUpdate] = updatedEducation;
        }
      })   .addCase('VIE/DELETE', (state, action) => {
        const idToDelete = action.payload.data._id;
        state.vie = state.vie.filter((item) => item._id !== idToDelete);
      })   .addCase('VIE/POST', (state, action) => {
        const newEducation = action.payload.data;
        state.vie.push(newEducation);
      });
  })