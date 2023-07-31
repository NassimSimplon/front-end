import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getVie } from '../Redux/Vie/Actions';
const Vie = () => {
    const dispatch = useDispatch();
    //Selectors
     const vieState = useSelector((state) => state.vie.vie);
     React.useEffect(()=>{
        getVie(dispatch);
       },[]);
     console.log(vieState,'vieState')
  return (
    <div id='vie'>
         <h1 className='vie'>Vie Associative</h1><div className="marquee">
{vieState && vieState?.map((el)=>(
    <div className="slide" key={el._id}> 
    <img src={el.image} alt='img' />
    <h3>{el.title}</h3>
	</div>
))}
</div>
</div>
  )
}

export default Vie