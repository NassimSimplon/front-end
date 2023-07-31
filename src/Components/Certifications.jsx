import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCertifications } from "../Redux/Certifications/Actions";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Certifications = () => {
  const dispatch = useDispatch();
  //Selectors
  const certifState = useSelector((state) => state.certif.certifications);
  const handle = useFullScreenHandle();

  React.useEffect(() => {
    getCertifications(dispatch);
  }, []);

  return (
    <div id="certif">
      <h1>Certifications</h1>
      <div className="box">
        {certifState.map((el) => (
          <div key={el._id}>
            <img src={el.icon} loading="lazy" />
            <FullScreen handle={handle}>
              {handle.active && <img id="fullCertif" src={el.image} loading="lazy" />}
            </FullScreen>
            <h3>{el.title}</h3>
            <div
              className="eye"
              onClick={() => {
                handle.enter();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
