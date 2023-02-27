import Login from "./component/Page/Login";
import ImageUpload from './component/Page/ImageUpload'
import "./App.css"
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
    );
}

export default App;
