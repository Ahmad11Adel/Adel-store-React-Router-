import { Link } from "react-router-dom";


function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-white text-dark fixed-top h-4 ">
        <div className="container  " >
    
            <Link className="navbar-brand fs-1 text-danger fw-bold Edit" to="/">Adel store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
                </button>
    
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-a active text-dark"  to="/">Home</Link>
              </li>
              
              <li className="nav-item  px-3">
                <a className="nav-a text-dark" href="/#">Our products</a>
              </li>
    
              <li className="nav-item px-3">
                <Link className="nav-a text-dark " to="about"  > About</Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success bg-white" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
export default NavBar;