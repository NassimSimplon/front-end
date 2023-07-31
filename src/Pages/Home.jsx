import React from 'react'
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
//Components
const Description = React.lazy(() => import("../Components/Description"));
const Apropos = React.lazy(() => import("../Components/Apropos"));
const Education = React.lazy(() => import("../Components/Education"));
const Compétences = React.lazy(() => import("../Components/Compétences"))
const Certifications = React.lazy(() => import("../Components/Certifications"))
const Projects = React.lazy(() => import("../Components/Projects"))
const Experiences = React.lazy(() => import("../Components/Experiences"));
const Vie = React.lazy(() => import("../Components/Vie"));


const Home = () => {
  return (
    <section>
        <Navbar />
    <div id='empty'></div>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Description/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Apropos/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Education/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Compétences/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Certifications/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
  <Projects/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
  <Experiences/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
  <Vie/>
 </React.Suspense>

 

 <Footer />


    </section>
  )
}

export default Home