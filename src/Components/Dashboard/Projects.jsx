import React from "react";
import { addProjects, deleteProjects, getProjects } from "../../Redux/Projects/Actions"
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import styles from "./Eduction/Home.module.css";
import UpdateProjectModal from "./UpdateProject";
const Project = () => {
  const isAuthenticated = localStorage.getItem('token');
  if(!isAuthenticated){
    window.location.pathname = '/log'
  }
  const dispatch = useDispatch();
  //Selectors
  const skills = useSelector((state) => state.projects.projects);
  React.useEffect(() => {
    getProjects(dispatch);
  }, []);
  const [data, setData] =  React.useState({
   
    description: "",
    title: "",
    image:"",
    video:'',
    github:"",
    url:""
  });
  return (
    <div>
      <Navbar />
      <div id="empty"></div>
      <h1>add Project</h1>
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
            <label for="description" style={{color:'red'}}>description:</label>
        <input
              type="text"
              id="description"
       
              name="description"
              onChange={(e)=>setData({...data,description:e.target.value})}
            />
                <br/>
            <label for="video" style={{color:'red'}}>video:</label>
        <input
              type="text"
              id="video"
       
              name="video"
              onChange={(e)=>setData({...data,video:e.target.value})}
            />
                  <br/>
            <label for="github" style={{color:'red'}}>github:</label>
        <input
              type="text"
              id="github"
       
              name="github"
              onChange={(e)=>setData({...data,github:e.target.value})}
            />
                <br/>
            <label for="url" style={{color:'red'}}>url:</label>
        <input
              type="text"
              id="url"
       
              name="url"
              onChange={(e)=>setData({...data,url:e.target.value})}
            />
        
          </form>
          <button onClick={()=>addProjects(dispatch,data)}>Save Add Skills</button>
      <div className={styles.cardsSection}>
        {skills &&
          skills?.map((skill) => (
            <div key={skill._id} className={styles.oneCard}>
         
              <img className={styles.oneCardImg} src={skill.image} />
              <h2 className={styles.oneCardTitle}><span>title:</span> {skill.title}</h2>
              <h2 className={styles.oneCardTitle}><span>description:</span> {skill.description}</h2>
              <h2 className={styles.oneCardTitle}><span>github:</span>{skill.github}</h2>
              <h2 className={styles.oneCardTitle}><span>video:</span> {skill.video}</h2>
              <h2 className={styles.oneCardTitle}><span>url:</span> {skill.url}</h2>

              <div className={styles.btnContainer}>
                <UpdateProjectModal el={skill} />
                <button onClick={() => deleteProjects(dispatch, skill._id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;
