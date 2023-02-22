import Login from "./component/Page/Login";
import ImageUpload from './component/Page/ImageUpload'
import "./App.css"
import Sidebar from "./component/sidebar/Sidebar";

function App() {
    return (
        <div>
            <Sidebar/>
            <ImageUpload/> 
            {/* <Login/> */}
        </div>
    );
}

export default App;
