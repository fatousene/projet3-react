import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from "./profil/ProfilePhoto";
import FullName from "./profil/Fullname"
import Adresse from "./profil/Adresse"
import "./index.css"
const App = () =>(
  
    <div className="App">
    <br></br>
    <h1 id="h1"  className="container bg-dark text-light">MON PROFIL</h1>
    <br></br>
    <div className="row">
     <div className="col-sm-4"><ProfilePhoto /></div>
     <div className="col-sm-8">
    <FullName/> 
    <Adresse/>
    </div>
    </div>
    </div>
  );


export default App;
