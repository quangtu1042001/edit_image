import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import { BsFillGridFill,BsCaretDownSquare } from "react-icons/bs";

import logo from "../asset/img/LeanWay.png"
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="left-nav">
                <Link to="/" className="site-title">
                    <img style={{ width: '100%' }} src={logo} alt=""></img>
                </Link>
            

            </div>
            <ul>

                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
            
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}