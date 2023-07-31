import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
 import { useDispatch } from "react-redux";
import { updateExperiences } from "../../Redux/Experiences/Actions";
function UpdateExperienceModal(el) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch = useDispatch()
const [data,setData]= useState({
    _id:el.el._id,
    description:el.el.description,
    date:el.el.date ,
    company:el.el.company , 
    title:el.el.title
})
  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Update{" "}
      </button>

      <Modal show={show} onHide={handleClose} style={{ zIndex: 99999999999 }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form key={el.el._id}>
            <label for="description" style={{color:'red'}}>description:</label>
            <input
              type="text"
              id="description"
              defaultValue={el.el.description}
              name="description"
              onChange={(e)=>setData({...data,description:e.target.value})}
            /> 
            <br/>
            <label for="title" style={{color:'red'}}>title:</label>
            <input
              type="text"
              id="title"
              defaultValue={el.el.title}
              name="title"
              onChange={(e)=>setData({...data,title:e.target.value})}
            /> <br/>
             <label for="date" style={{color:'red'}}>date:</label>
            <input
              type="text"
              id="date"
              defaultValue={el.el.date}
              name="date"
              onChange={(e)=>setData({...data,date:e.target.value})}
            /> 
             <br/>
             <label for="company" style={{color:'red'}}>company:</label>
            <input
              type="text"
              id="company"
              defaultValue={el.el.company}
              name="company"
              onChange={(e)=>setData({...data,company:e.target.value})}
            /> 
             
              
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=>updateExperiences(dispatch,el.el._id,data)} >
        Save Changes
          </Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateExperienceModal;
