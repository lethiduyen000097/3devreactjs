import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h5>Nav Header</h5>
            <ul>
                <Link to="/tablecomponent" >
                    <li>TableComponent</li>
                </Link>
                <Link to='/createuser'>
                    <li>CreateUser</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav