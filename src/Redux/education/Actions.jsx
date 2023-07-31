import axios from "axios";
import { getEducationAction, deleteEducationAction,updateEducationAction, addEducationAction } from "./Slicer";
import { EDUCATION_URL } from "../../Utils/ApiUrls";

//GET
export const getEducation = async (dispatch)=>{
    const result = await axios.get(EDUCATION_URL).then(res=>{
        dispatch(getEducationAction(res.data))
    })
    return result;
}

//Delete
export const deleteEducation = async (dispatch,id)=>{
    const result = await axios.delete(`${EDUCATION_URL}/delete/${id}`).then(res=>{
        dispatch(deleteEducationAction(res.data))
    })
    return result;
}

//PUT
export const updateEducation = async (dispatch,id,body)=>{  
    const result = await axios.put(`${EDUCATION_URL}/update/${id}`,{...body}).then(res=>{
        dispatch(updateEducationAction(res.data))
    })
    return result;
}
//PUT
export const addEducation = async (dispatch,body)=>{  
    const result = await axios.post(`${EDUCATION_URL}/add`,{...body}).then(res=>{
        dispatch(addEducationAction(res.data))
    })
    return result;
}