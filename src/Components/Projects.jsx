import React from 'react'
import { getProjects } from '../Redux/Projects/Actions'
import { useDispatch, useSelector } from "react-redux";
import HoverVideoPlayer from 'react-hover-video-player'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Projects = () => {
    const dispatch = useDispatch();
    const [zoomIt,seyZoomIt] = React.useState(false)
    const [showMore,setShowMore] = React.useState(false)
    //Selectors
    const projectState = useSelector((state)=>state.projects.projects);
    const handle = useFullScreenHandle();
    React.useEffect(() => {
        getProjects(dispatch);
      }, []); 
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div id="projects">
        <h1>Projects</h1>
       
       <div className='projects_demo'>
       <Carousel responsive={responsive}>
         {projectState && projectState?.map((el)=>(
            <div   key={el._id} id={zoomIt? "vi" :"walid"} onMouseOver={()=>seyZoomIt(true)}>
            <HoverVideoPlayer 
      videoSrc={el.video}
      pausedOverlay={
        <img  
          src={el.image}
          alt=""
          style={{
            width: '101%',
 
            objectFit: 'cover',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    /><FullScreen handle={handle} >
         {handle.active &&   
            <video poster={el.image} controls>
              <source src={el.video} type="video/mp4" />
            </video>
   } </FullScreen>
    <div className='content'>
      <h2>{el.title}</h2>
      <p className={!showMore ? 'more' : null}>{el.description}</p>
      <button onClick={()=>setShowMore(prev=>!prev)}> Plus</button>
    </div>
    <div className='icon_box'>
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" style={{width:'20px' ,height:'20px'}} fill="black" className="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>
  </div>
    <div><svg xmlns="http://www.w3.org/2000/svg" style={{width:'20px' ,height:'20px'}} fill="black" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></div>
    
    <div    onClick={() => {
                handle.enter();
              }}>
    <svg xmlns="http://www.w3.org/2000/svg" style={{width:'16px' ,height:'16px'}} fill="black" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
</svg>
    </div>
    </div>
    </div>
        ))}</Carousel>
       </div>
 
    </div>
  )
}

export default Projects