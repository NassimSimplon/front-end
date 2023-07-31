import React from "react";
import { getSkills } from "../Redux/Compétences/Actions";
import { useDispatch, useSelector } from "react-redux";
const Compétences = () => {
  const dispatch = useDispatch();
  //Selectors
  const skills = useSelector((state) => state.skills.skills);
  React.useEffect(() => {
    getSkills(dispatch);
  }, []);
  return (
    <div id="Compétences">
      <h1>Compétences</h1>
      <div>
        {skills &&
          skills?.map((skill) => (
            <div key={skill._id} className="skills_card">
              <img src={skill.icon} loading="lazy" />
              <div>
                <h1>{skill.title}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Compétences;
