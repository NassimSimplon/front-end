import axios from "axios";
import { EXPERIENCES_URL } from "../../Utils/ApiUrls";
import { getExperiencesAction, deleteExperiencesAction,updateExperiencesAction, addExperiencesAction } from "./Slicer";

//@GET
export const getExperiences = async (dispatch)=>{
    const result = await axios.get(EXPERIENCES_URL).then(res=>{
        dispatch(getExperiencesAction(res.data))
    })
    return result;
}
//Delete
export const deleteExperiences= async (dispatch,id)=>{
    const result = await axios.delete(`${EXPERIENCES_URL}/delete/${id}`).then(res=>{
        dispatch(deleteExperiencesAction(res.data))
    })
    return result;
}

//PUT
export const updateExperiences = async (dispatch,id,body)=>{  
    const result = await axios.put(`${EXPERIENCES_URL}/update/${id}`,{...body}).then(res=>{
        dispatch(updateExperiencesAction(res.data))
    })
    return result;
}
//PUT
export const addExperiences = async (dispatch,body)=>{  
    const result = await axios.post(`${EXPERIENCES_URL}/add`,{...body}).then(res=>{
        dispatch(addExperiencesAction(res.data))
    })
    return result;
}