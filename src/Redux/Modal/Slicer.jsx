import { createReducer,createAction } from "@reduxjs/toolkit"


//@open
export  const openModalAction = createAction('MODAL/OPEN',(name)=>{
    return { payload:name}
})
//@close
export  const closeModalAction = createAction('MODAL/CLOSE');
//Reducer
export const ModalReducer = createReducer({
  modal:{},
  isOpen:false
}, (builder) => {
    builder
      .addCase('MODAL/OPEN', (state, action) => {
        state.isOpen = true;
        state.modal = action.payload;
      }) ,
      builder
      .addCase('MODAL/CLOSE', (state, action) => {
        state.isOpen = false; 
      }) 
  })