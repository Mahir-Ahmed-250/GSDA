import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import StickyNav from "./Components/Shared/Navbar/StickyNav";
import ScrollToTop from "react-scroll-to-top";
import ElearningCourses from "./Components/ElearningCoursesAll/ElearningCourses/ElearningCourses";
import ClassroomCourses from "./Components/ClassroomCoursesAll/ClassroomCourses/ClassroomCourses";
import Heros from "./Components/HerosAll/Heros";
import DigitalServices from "./Components/DigitalServices/DigitalServices";
import Login from "./Components/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <ScrollToTop smooth viewBox="0 0 12 7" svgPath="M5.95.03c-.267 0-.523.106-.712.294L.355 5.198c-.395.394-.395 1.03 0 1.424.394.393 1.032.393 1.426 0L5.95 2.46l4.172 4.162c.394.393 1.032.393 1.426 0 .394-.393.394-1.03 0-1.424L6.665.324C6.475.136 6.22.03 5.95.03z" />

      <StickyNav></StickyNav>
      <Routes>
        <Route path='/' element={<Home />}>

        </Route>
        <Route path='/home' element={<Home />}>

        </Route>
        <Route path='/elearning_courses' element={<ElearningCourses />} >

        </Route>
        <Route path='/classroom_courses' element={<ClassroomCourses />} >

        </Route>
        <Route path='/heros' element={<Heros />} >

        </Route>
        <Route path='/digital_services' element={<DigitalServices />} >

        </Route>
        <Route path='/login' element={<Login />} >

        </Route>

      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
