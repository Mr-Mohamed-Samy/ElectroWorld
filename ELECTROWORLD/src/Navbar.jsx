import { Link } from "react-router-dom";
import filter from './assets/filter.jpeg'
function Navbar(){

    return(
        <>
            <div className="navbar">
                <h2><Link to="/">ELECTROWORLD</Link></h2>
                <input type="search" className="searchBar" placeholder="Looking for something specific ?"/>
                <button className='filterBtn'><img src={filter} className='filterLogo'/></button>
                <Link to="/Signin">Sign in</Link>
                <Link to="/Signup">Sign up</Link>
                <a href="" className='aboutUs'>About us</a>
            </div>
            

        </>
    );

}
export default Navbar