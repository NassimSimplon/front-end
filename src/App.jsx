import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
 //Pages
const Home = React.lazy(() => import("./Pages/Home"));
const LogIn = React.lazy(() => import("./Pages/Login"));
const PageNotFound = React.lazy(() => import("./Utils/PageNotFound"));
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));
const Compétences = React.lazy(() =>
  import("./Components/Dashboard/Compétences")
);
const Certification = React.lazy(() => import("./Components/Dashboard/certif"));
const Project = React.lazy(() => import("./Components/Dashboard/Projects"));
const Experience = React.lazy(() =>
  import("./Components/Dashboard/Experience")
);
const VieAssoc = React.lazy(() => import("./Components/Dashboard/VieAssoc"));

const App = () => {
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      <div className={loader ? "loader" : "loaderNone"}>
        <div id="loading" title="Walid">
          Walid
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/log" element={<LogIn />} />
        <Route exact path="*" element={<PageNotFound />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Dashboard/Compétences" element={<Compétences />} />
        <Route
          exact
          path="/Dashboard/Certification"
          element={<Certification />}
        />
        <Route exact path="/Dashboard/Project" element={<Project />} />
        <Route exact path="/Dashboard/Experience" element={<Experience />} />
        <Route exact path="/Dashboard/VieAssoc" element={<VieAssoc />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
