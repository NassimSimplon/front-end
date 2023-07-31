import axios from "axios";
import { getSkillsAction,deleteSKILLSAction ,updateSKILLSAction,addSKILLSAction} from "./Slicer";
import { SKILLS_URL } from "../../Utils/ApiUrls";

//@GET
export const getSkills = async (dispatch)=>{
    const result = await axios.get(SKILLS_URL).then(res=>{
        dispatch(getSkillsAction(res.data))
    })
    return result;
}
//Delete
export const deleteSkills= async (dispatch,id)=>{
    const result = await axios.delete(`${SKILLS_URL}/delete/${id}`).then(res=>{
        dispatch(deleteSKILLSAction(res.data))
    })
    return result;
}

//PUT
export const updateSkills = async (dispatch,id,body)=>{  
    const result = await axios.put(`${SKILLS_URL}/update/${id}`,{...body}).then(res=>{
        dispatch(updateSKILLSAction(res.data))
    })
    return result;
}
//PUT
export const addSkills = async (dispatch,body)=>{  
    const result = await axios.post(`${SKILLS_URL}/add`,{...body}).then(res=>{
        dispatch(addSKILLSAction(res.data))
    })
    return result;
}