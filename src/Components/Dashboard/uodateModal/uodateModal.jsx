import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateEducation } from '../../../Redux/education/Actions';
import { useDispatch } from "react-redux";
function UpdateModal(el) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch = useDispatch()
const [data,setData]= useState({
    _id:el.el._id,
    icon:el.el.icon,
    school:el.el.school,
    date:el.el.date,
    description:el.el.description,
    speciality:el.el.speciality,
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
            <label for="image" style={{color:'red'}}>Image:</label>
            <input
              type="text"
              id="image"
              defaultValue={el.el.icon}
              name="image"
              onChange={(e)=>setData({...data,icon:e.target.value})}
            /><br/>
            <label for="school" style={{color:'red'}}>School:</label>
            <input
              type="text"
              id="school"
              defaultValue={el.el.school}
              name="school"
              onChange={(e)=>setData({...data,school:e.target.value})}
            />
            <br/>
            <label for="title" style={{color:'red'}}>title:</label>
            <input
              type="text"
              id="title"
              defaultValue={el.el.title}
              name="title"
              onChange={(e)=>setData({...data,title:e.target.value})}
            />
            <br/>
            <label for="description" style={{color:'red'}}>description:</label>
            <input
              type="text"
              id="description"
              defaultValue={el.el.description}
              name="description"
              onChange={(e)=>setData({...data,description:e.target.value})}
            />
            <br/>
            <label for="speciality" style={{color:'red'}}>speciality:</label>
            <input
              type="text"
              id="speciality"
              defaultValue={el.el.speciality}
              name="speciality"
              onChange={(e)=>setData({...data,speciality:e.target.value})}
            />
             <br/>
            <label for="date" style={{color:'red'}}>date:</label>
            <input
              type="text"
              id="date"
              defaultValue={el.el.date}
              name="date"
              onChange={(e)=>setData({...data,date:e.target.value})}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>updateEducation(dispatch,el.el._id,data)} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
