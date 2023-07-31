import React from "react";
import { addExperiences, deleteExperiences, getExperiences } from "../../Redux/Experiences/Actions"
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import styles from "./Eduction/Home.module.css";
import UpdateExperienceModal from "./UpdateExperienceModal";
const Experience = () => {
  const isAuthenticated = localStorage.getItem('token');
  if(!isAuthenticated){
    window.location.pathname = '/log'
  }
  const dispatch = useDispatch();
  //Selectors
  const skills = useSelector((state) => state.experiences.experiences);
  React.useEffect(() => {
    getExperiences(dispatch);
  }, []);
  const [data, setData] =  React.useState({
   
    description: "",
    title: "",
    date:"",
    company:'' 
  });
  return (
    <div>
      <Navbar />
      <div id="empty"></div>
      <h1>add Project</h1>
      <form >
            <label for="date" style={{color:'red'}}>date:</label>
            <input
              type="text"
              id="date"
            
              name="date"
              onChange={(e)=>setData({...data,date:e.target.value})}
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
            <label for="description" style={{color:'red'}}>description:</label>
        <input
              type="text"
              id="description"
       
              name="description"
              onChange={(e)=>setData({...data,description:e.target.value})}
            />
                <br/>
            <label for="company" style={{color:'red'}}>company:</label>
        <input
              type="text"
              id="company"
       
              name="company"
              onChange={(e)=>setData({...data,company:e.target.value})}
            />
                
               
        
          </form>
          <button onClick={()=>addExperiences(dispatch,data)}>Save Add Skills</button>
      <div className={styles.cardsSection}>
        {skills &&
          skills?.map((skill) => (
            <div key={skill._id} className={styles.oneCard}>
              <img className={styles.oneCardImg} src={skill.date} />
              <h2 className={styles.oneCardTitle}>title: {skill.title}</h2>
              <h2 className={styles.oneCardTitle}>description: {skill.description}</h2>
              <h2 className={styles.oneCardTitle}>company: {skill.company}</h2>

              

              <div className={styles.btnContainer}>
                <UpdateExperienceModal el={skill} />
                <button onClick={() => deleteExperiences(dispatch, skill._id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
