import React from "react";
import { addCertifications, deleteCertifications, getCertifications } from "../../Redux/Certifications/Actions"
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import styles from "./Eduction/Home.module.css";
import UpdateCertificationModal from "./updateCertif";
const Certification = () => {
  const isAuthenticated = localStorage.getItem('token');
  if(!isAuthenticated){
    window.location.pathname = '/log'
  }
  const dispatch = useDispatch();
  //Selectors
  const skills = useSelector((state) => state.certif.certifications);
  React.useEffect(() => {
    getCertifications(dispatch);
  }, []);
  const [data, setData] =  React.useState({
   
    icon: "",
    title: "",
    image:""
  });
  return (
    <div>
      <Navbar />
      <div id="empty"></div>
      <h1>add Certification</h1>
      <form >
            <label for="image" style={{color:'red'}}>Image:</label>
            <input
              type="text"
              id="image"
            
              name="image"
              onChange={(e)=>setData({...data,image:e.target.value})}
            /> 
            <br/>
            <label for="title" style={{color:'red'}}>title:</label>
            <input
              type="text"
              id="title"
       
              name="title"
              onChange={(e)=>setData({...data,title:e.target.value})}
            />
          <br/>
            <label for="icon" style={{color:'red'}}>icon:</label>
        <input
              type="text"
              id="icon"
       
              name="icon"
              onChange={(e)=>setData({...data,icon:e.target.value})}
            />
        
          </form>
          <button onClick={()=>addCertifications(dispatch,data)}>Save Add Skills</button>
      <div className={styles.cardsSection}>
        {skills &&
          skills?.map((skill) => (
            <div key={skill._id} className={styles.oneCard}>
              <img className={styles.oneCardImg} src={skill.icon} />
              <img className={styles.oneCardImg} src={skill.image} />
              <h2 className={styles.oneCardTitle}>title: {skill.title}</h2>

              <div className={styles.btnContainer}>
                <UpdateCertificationModal el={skill} />
                <button onClick={() => deleteCertifications(dispatch, skill._id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Certification;
