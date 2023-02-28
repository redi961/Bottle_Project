import Login from "./component/Page/Login";
import ImageUpload from './component/Page/ImageUpload'
import SignUp from './component/Page/Signup'
import "./App.css"
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path ="/" eaxct = {true} element ={<ImageUpload/>}/>
            <Route path ="/login" eaxct = {true} element ={<Login/>}/>
            <Route path ="/signup" exact = {true} element ={<SignUp/>}/>
        </Routes>
    );
}

export default App;
