import Login from "./component/Page/Login";
import ImageUpload from './component/Page/ImageUpload'
import "./App.css"
import Sidebar from "./component/sidebar/Sidebar";
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path ="/" eaxct ={true} element ={<ImageUpload/>}/>
            <Route path ="/login" eaxct ={true} element ={<Login/>}/>
        </Routes>
    );
}

export default App;
