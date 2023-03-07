import Login from "./component/Page/Login";
import ImageUpload from './component/Page/ImageUpload'
import "./App.css"
import Plotly from "./component/Plot/Plotly";
import ImageList from "./component/Page/ImageList"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from"./component/Page/Signup";

function App() {
    return (
        < BrowserRouter > <Routes>
            <Route path="/" element={<ImageUpload/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/ImageUpload" element={<ImageUpload/>}></Route>
            <Route path="/Plotly" element={<Plotly/>}></Route>
            <Route path="ImageList" element={<ImageList/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
