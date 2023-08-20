import'./index.css'
import { Link } from "react-router-dom"
const ButtonEdit = () =>{
    return(<div>
        <Link to="/cutting">
        <button className="design">Create a design</button>
        </Link>
    </div>)
}
export default ButtonEdit