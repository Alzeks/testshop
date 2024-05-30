import { Link } from "react-router-dom";
import './sideBar.css'
function SideBar(){
return(
    <div className="sidebar">
        <h2><Link to='/'>Home</Link></h2>
        <h2><Link to='/phones'>Phones</Link></h2>
        <h2><Link to='/tvs'>Tvs</Link></h2>
    </div>
)
}

export default SideBar;