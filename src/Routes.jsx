
import {Routes, Route} from "react-router"
import Course from './components/courses/Course'
import Home from './pages/landing/Home/Home'
import Registration from "./pages/Registration/Registration"
function Routing() {
  return (
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/registration' element={<Registration/>} />
    </Routes>
  )
}

export default Routing