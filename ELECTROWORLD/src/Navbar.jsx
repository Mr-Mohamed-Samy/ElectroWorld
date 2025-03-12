import filter from './assets/filter.jpeg'
function Navbar(){

    return(
        <>
            <div className="navbar">
                <h2><a href="./index.html">ELECTROWORLD</a></h2>
                <input type="search" className="searchBar" placeholder="Looking for something specific ?"/>
                <button className='filterBtn'><img src={filter} className='filterLogo'/></button>
                <a href="" className='acc'>Sign in</a>
                <a href="" className='acc'>Sign up</a>
            </div>
            

        </>
    );

}
export default Navbar