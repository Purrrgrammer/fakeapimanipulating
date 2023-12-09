import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component";
// import Footer from "./component/footer";

const Root = () => {
  const location = useLocation();
  const path = location.pathname;
  const display = path === "/" ? true : false;

  return (
    <div className="bg-light">
      <Navbar />
      {display && (
        <div className="wrapper">
          <div className="typing-demo">
            Hi Welcome to XYZ, a text based social media.
          </div>
        </div>
      )}
      <div id="detail" className="page bg-light">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
