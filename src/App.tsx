import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component";
import Footer from "./component/footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div id="detail" className="page">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
