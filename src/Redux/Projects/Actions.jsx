import axios from "axios";
 import { PROJECTS_URL } from "../../Utils/ApiUrls";
import { getProjectsAction, deleteProjectsAction,updateProjectsAction, addProjectsAction } from "./Slicer";

//@GET
export const getProjects = async (dispatch)=>{
    const result = await axios.get(PROJECTS_URL).then(res=>{
        dispatch(getProjectsAction(res.data))
    })
    return result;
}

//Delete
export const deleteProjects= async (dispatch,id)=>{
    const result = await axios.delete(`${PROJECTS_URL}/delete/${id}`).then(res=>{
        dispatch(deleteProjectsAction(res.data))
    })
    return result;
}

//PUT
export const updateProjects = async (dispatch,id,body)=>{  
    const result = await axios.put(`${PROJECTS_URL}/update/${id}`,{...body}).then(res=>{
        dispatch(updateProjectsAction(res.data))
    })
    return result;
}
//PUT
export const addProjects = async (dispatch,body)=>{  
    const result = await axios.post(`${PROJECTS_URL}/add`,{...body}).then(res=>{
        dispatch(addProjectsAction(res.data))
    })
    return result;
}