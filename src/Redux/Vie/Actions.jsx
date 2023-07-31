import axios from "axios";
import { getVieAction,deleteViesAction ,updateViesAction,addViesAction} from "./Slicer";
import { VIE_URL } from "../../Utils/ApiUrls";

//@GET
export const getVie = async (dispatch)=>{
    const result = await axios.get(VIE_URL).then(res=>{
        dispatch(getVieAction(res.data))
    })
    return result;
}
//Delete
export const deleteVies= async (dispatch,id)=>{
    const result = await axios.delete(`${VIE_URL}/delete/${id}`).then(res=>{
        dispatch(deleteViesAction(res.data))
    })
    return result;
}

//PUT
export const updateVies = async (dispatch,id,body)=>{  
    const result = await axios.put(`${VIE_URL}/update/${id}`,{...body}).then(res=>{
        dispatch(updateViesAction(res.data))
    })
    return result;
}
//PUT
export const addVies = async (dispatch,body)=>{  
    const result = await axios.post(`${VIE_URL}/add`,{...body}).then(res=>{
        dispatch(addViesAction(res.data))
    })
    return result;
}