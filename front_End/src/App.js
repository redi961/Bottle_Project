import "./App.css"
import Login from "./component/Page/Login";
import ImageUpload from './component/Page/ImageUpload'
import Plotly from "./component/Plot/Plotly";
import Signup from "./component/Page/Signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ImageUpload/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/ImageUpload" element={<ImageUpload/>}></Route>
                <Route path="/Plotly" element={<Plotly/>}></Route>
                <Route path="/Signup" element={<Signup/>}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
