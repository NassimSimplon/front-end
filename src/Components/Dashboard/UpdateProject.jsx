import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
 import { useDispatch } from "react-redux";
import { updateProjects } from "../../Redux/Projects/Actions";
function UpdateProjectModal(el) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch = useDispatch()
const [data,setData]= useState({
    _id:el.el._id,
    description:el.el.description,
    video:el.el.video,
    github:el.el.github,
    image:el.el.image,
    url:el.el.url,
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
             <label for="image" style={{color:'red'}}>Image:</label>
            <input
              type="text"
              id="image"
              defaultValue={el.el.image}
              name="image"
              onChange={(e)=>setData({...data,image:e.target.value})}
            /> 
             <br/>
             <label for="video" style={{color:'red'}}>video:</label>
            <input
              type="text"
              id="video"
              defaultValue={el.el.video}
              name="video"
              onChange={(e)=>setData({...data,video:e.target.value})}
            /> 
             <br/>
             <label for="github" style={{color:'red'}}>github:</label>
            <input
              type="text"
              id="github"
              defaultValue={el.el.github}
              name="github"
              onChange={(e)=>setData({...data,github:e.target.value})}
            /> 
              <br/>
             <label for="url" style={{color:'red'}}>url:</label>
            <input
              type="text"
              id="url"
              defaultValue={el.el.url}
              name="url"
              onChange={(e)=>setData({...data,url:e.target.value})}
            /> 
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=>updateProjects(dispatch,el.el._id,data)} >
        Save Changes
          </Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateProjectModal;
