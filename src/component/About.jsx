import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 d-flex justify-content-center align-items-start flex-column">
          <Link to="/about">About Me</Link>
          <Link to="/about/ts">Technical Skills</Link>
          <Link to="/about/nts">Non - Technical Skills</Link>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default About;
