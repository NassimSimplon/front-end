import React from "react";
import { getEducation } from "../Redux/education/Actions";
import { useDispatch, useSelector } from "react-redux";
import { openModalAction } from "../Redux/Modal/Slicer";
//@MODAL
const ReadMoreModal = React.lazy(() => import("./ReadMoreModal"));

const Education = () => {
  const dispatch = useDispatch();
  //Selectors
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const educationState = useSelector((state) => state.education.education);
  React.useEffect(() => {
    getEducation(dispatch);
  }, []);

  return (
    <div id="Education">
      <h1>Educations</h1>
      <div className=""></div>
      <div className="box">
        {educationState &&
          educationState?.map((el) => (
            <div key={el._id}>
              <img src={el.icon} />
              <h2>{el.school}</h2>
              <button onClick={() => dispatch(openModalAction(el))}>
                READ MORE
              </button>
            </div>
          ))}
      </div>
      {isModalOpen && (
        <React.Suspense fallback={<div>...load</div>}>
          <ReadMoreModal />
        </React.Suspense>
      )}
    </div>
  );
};

export default Education;
