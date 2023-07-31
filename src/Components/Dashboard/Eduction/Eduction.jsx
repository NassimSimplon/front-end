import React,{useState} from 'react'
import styles from './Home.module.css';
import { getEducation, deleteEducation,addEducation } from '../../../Redux/education/Actions';
import { useDispatch, useSelector } from "react-redux";
import UpdateModal from '../uodateModal/uodateModal';
import Education from '../../Education';
const Eduction = () => {
  const dispatch = useDispatch();
  //Selectors
  const educationState = useSelector((state) => state.education.education);
  React.useEffect(() => {
    getEducation(dispatch);
  }, []);
  //data
  const [data,setData]= useState({
   
    icon:'',
    school:'',
    date:'',
    description:'',
    speciality:'',
    title:''
})
  
  return (
    <div className={styles.Eduction}>    
    <h1>Educations</h1>
    add Education
    <form  >
            <label for="image" style={{color:'red'}}>Image:</label>
            <input
              type="text"
              id="image"
            
              name="image"
              onChange={(e)=>setData({...data,icon:e.target.value})}
            /><br/>
            <label for="school" style={{color:'red'}}>School:</label>
            <input
              type="text"
              id="school"
            
              name="school"
              onChange={(e)=>setData({...data,school:e.target.value})}
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
            <label for="speciality" style={{color:'red'}}>speciality:</label>
            <input
              type="text"
              id="speciality"
              
              name="speciality"
              onChange={(e)=>setData({...data,speciality:e.target.value})}
            />
             <br/>
            <label for="date" style={{color:'red'}}>date:</label>
            <input
              type="text"
              id="date"
              
              name="date"
              onChange={(e)=>setData({...data,date:e.target.value})}
            />
          </form>
          <button onClick={()=>addEducation(dispatch,data)}> add Education</button>
     <div className={styles.cardsSection}>
     {educationState &&
      educationState?.map((el) => (
        <div key={el._id} className={styles.oneCard}>
          <img className={styles.oneCardImg} src={el.icon} />
          <h2 className={styles.oneCardTitle}>school: {el.school}</h2>
          <h2 className={styles.oneCardTitle}>title: {el.title}</h2>
          <h2 className={styles.oneCardTitle}>description : {el.description}</h2>
          <h2 className={styles.oneCardTitle}>date: {el.date}</h2>
          <h2 className={styles.oneCardTitle}>speciality: {el.speciality}</h2>
          
          <div className={styles.btnContainer}>
          <button className='' key={el._id} onClick={()=>deleteEducation(dispatch,el._id)}>delete</button>
        <UpdateModal el={el} />

          </div>
        </div>
      ))}

     </div>

    </div>
  )
}

export default Eduction