import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
 import { useDispatch } from "react-redux";
import { updateVies } from "../../Redux/Vie/Actions";
function UpdateVieModal(el) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch = useDispatch()
const [data,setData]= useState({
    _id:el.el._id,
    image:el.el.image,
    
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
              defaultValue={el.el.image}
              name="image"
              onChange={(e)=>setData({...data,image:e.target.value})}
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
           
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=>updateVies(dispatch,el.el._id,data)} >
        Save Changes
          </Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateVieModal;
