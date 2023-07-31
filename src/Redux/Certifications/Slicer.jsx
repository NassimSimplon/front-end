import { createReducer,createAction } from "@reduxjs/toolkit"


//@GET
export  const getCertificationsAction = createAction('CERTIFICATIONS/GET',(data)=>{
    return { payload:data}
})
//@DELETE
export  const deleteCertificationSAction = createAction('CERTIFICATIONS/DELETE',(name)=>{
  return { payload:name}
})
//@Put
export  const updateCertificationSAction = createAction('CERTIFICATIONS/PUT',(name)=>{
  return { payload:name}
})
//@Add
export  const addCertificationsAction = createAction('CERTIFICATIONS/POST',(name)=>{
  return { payload:name}
})
export const CertificationsReducer = createReducer({
  certifications:[]
}, (builder) => {
    builder
      .addCase('CERTIFICATIONS/GET', (state, action) => {
      
        state.certifications = action.payload
      }) .addCase('CERTIFICATIONS/PUT', (state, action) => {
        const updatedEducation = action.payload.data;
        
        const indexToUpdate = state.certifications.findIndex((item) => item._id === updatedEducation._id);
        if (indexToUpdate !== -1) {
          state.certifications[indexToUpdate] = updatedEducation;
        }
      })   .addCase('CERTIFICATIONS/DELETE', (state, action) => {
        const idToDelete = action.payload.data._id;
        state.certifications = state.certifications.filter((item) => item._id !== idToDelete);
      })   .addCase('CERTIFICATIONS/POST', (state, action) => {
        const newEducation = action.payload.data;
        state.certifications.push(newEducation);
      });
  })