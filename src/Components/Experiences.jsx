import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from '../Redux/Experiences/Actions';

function Experiences() {
    const dispatch = useDispatch();
    //Selectors
     const experiencesState = useSelector((state) => state.experiences.experiences);
   React.useEffect(()=>{
    getExperiences(dispatch);
   },[]);
  return (
    <div id='Experiences'>
     <div className='top_bar'>
      <h1>Experiences</h1>
     <div className='card-section'>
     {experiencesState && experiencesState?.map(el=>(
      <div className='exp' key={el._id}>
  <div className='num'>
    <h1>{experiencesState.length + 1}</h1>
  </div>
  <div className='content'>
  <h2>{el.title}</h2>
  <h3>Company : {el.company} </h3>
  <h4>Date: {el.date}</h4>
  <p>{el.description}</p>
  </div>
</div>
     ))}

     </div>
     </div>
  
    </div>
  )
}

export default Experiences  