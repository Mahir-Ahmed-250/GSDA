import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import StickyNav from "./Components/Shared/Navbar/StickyNav";
import ElearningCourses from "./Components/ElearningCoursesAll/ElearningCourses/ElearningCourses";
import ClassroomCourses from "./Components/ClassroomCoursesAll/ClassroomCourses/ClassroomCourses";
import Heros from "./Components/HerosAll/Heros";
import DigitalServices from "./Components/DigitalServices/DigitalServices";
import Login from "./Components/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import SingleCourse from "./Components/SingleCourse/SingleCourse";

function App() {
  return (
    <div>
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
        <Route path='/classroom_courses/:id' element={<SingleCourse />}>

        </Route>
        <Route path='/heros' element={<Heros />} >

        </Route>
        <Route path='/digital_services' element={<DigitalServices />} >

        </Route>
        <Route path='/login' element={<Login />} >

        </Route>
        <Route path='/registration' element={<Registration />} >

        </Route>

      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
