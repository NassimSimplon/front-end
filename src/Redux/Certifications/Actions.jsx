import axios from "axios";
import { getCertificationsAction ,deleteCertificationSAction,updateCertificationSAction,addCertificationsAction} from "./Slicer";
import { CERTIFICATIONS_URL } from "../../Utils/ApiUrls";

//@GET
export const getCertifications = async (dispatch)=>{
    const result = await axios.get(CERTIFICATIONS_URL).then(res=>{
        dispatch(getCertificationsAction(res.data))
    })
    return result;
}
//Delete
export const deleteCertifications= async (dispatch,id)=>{
    const result = await axios.delete(`${CERTIFICATIONS_URL}/delete/${id}`).then(res=>{
        dispatch(deleteCertificationSAction(res.data))
    })
    return result;
}

//PUT
export const updateCertifications = async (dispatch,id,body)=>{  
    const result = await axios.put(`${CERTIFICATIONS_URL}/update/${id}`,{...body}).then(res=>{
        dispatch(updateCertificationSAction(res.data))
    })
    return result;
}
//PUT
export const addCertifications = async (dispatch,body)=>{  
    const result = await axios.post(`${CERTIFICATIONS_URL}/add`,{...body}).then(res=>{
        dispatch(addCertificationsAction(res.data))
    })
    return result;
}