import Login from "./component/Page/Login";
import ImageUpload from './component/Page/ImageUpload'
import "./App.css"
<<<<<<< HEAD
import Plotly from "./component/Plot/Plotly";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<ImageUpload/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/ImageUpload" element={<ImageUpload/>}></Route>
                    <Route path="/Plotly" element={<Plotly/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
=======
import Sidebar from "./component/sidebar/Sidebar";
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path ="/" eaxct ={true} element ={<ImageUpload/>}/>
            <Route path ="/login" eaxct ={true} element ={<Login/>}/>
        </Routes>
>>>>>>> e8079a7d12299d6b611da2b5d7dc9916c7fbdd6e
    );
}

export default App;
