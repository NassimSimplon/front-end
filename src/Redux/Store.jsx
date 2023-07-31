import { configureStore } from "@reduxjs/toolkit";
import {educationReducer} from  './education/Slicer'
import { ModalReducer } from "./Modal/Slicer";
import { skillsReducer } from "./Compétences/Slicer";
import { CertificationsReducer } from "./Certifications/Slicer";
import { ProjectsReducer } from "./Projects/Slicer";
import { ExperiencesReducer } from "./Experiences/Slicer";
import { VieReducer } from "./Vie/Slicer";


const store = configureStore({
    reducer:{
   education:educationReducer,
   modal:ModalReducer,
   skills:skillsReducer,
   certif:CertificationsReducer,
   projects:ProjectsReducer,
   experiences:ExperiencesReducer,
   vie:VieReducer,
    }
})
export default store;