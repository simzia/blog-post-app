import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
      <div className="flex flex-1 flex-col ">
        <Header />
        <div className="main-wrapper flex flex-1 flex-col ">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
}

export default App;
