import React from "react";
import { addSkills, deleteSkills, getSkills } from "../../Redux/Compétences/Actions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import styles from "./Eduction/Home.module.css";
import UpdateSkillsModal from "./UpdateSkills";
const Compétences = () => {
  const isAuthenticated = localStorage.getItem('token');
  if(!isAuthenticated){
    window.location.pathname = '/log'
  }
  const dispatch = useDispatch();
  //Selectors
  const skills = useSelector((state) => state.skills.skills);
  React.useEffect(() => {
    getSkills(dispatch);
  }, []);
  const [data, setData] =  React.useState({
    icon: "",
    title: "",
  });
  return (
    <div>
      <Navbar />
      <div id="empty"></div>
      <h1>add Skills</h1>
      <form >
            <label for="image" style={{color:'red'}}>Image:</label>
            <input
              type="text"
              id="image"
            
              name="image"
              onChange={(e)=>setData({...data,icon:e.target.value})}
            /> 
            <br/>
            <label for="title" style={{color:'red'}}>title:</label>
            <input
              type="text"
              id="title"
       
              name="title"
              onChange={(e)=>setData({...data,title:e.target.value})}
            />
        
          </form>
          <button onClick={()=>addSkills(dispatch,data)}>Save Add Skills</button>
      <div className={styles.cardsSection}>
        {skills &&
          skills?.map((skill) => (
            <div key={skill._id} className={styles.oneCard}>
              <img className={styles.oneCardImg} src={skill.icon} />

              <h2 className={styles.oneCardTitle}>title: {skill.title}</h2>

              <div className={styles.btnContainer}>
                <UpdateSkillsModal el={skill} />
                <button onClick={() => deleteSkills(dispatch, skill._id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Compétences;
