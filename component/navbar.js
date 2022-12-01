function NavBar(){
  return(
      <nav className="navbar navbar-expand-lg bg-white text-dark fixed-top h-5 ">
      <div className="container  " >
  
          <a className="navbar-brand fs-1 text-danger fw-bold Edit" href="/#">Adel store</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
              </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active text-dark" aria-current="page" href="/#">Home</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-a text-dark" href="/#">Our products</a>
            </li>
  
            <li className="nav-item ">
              <a className="nav-a text-dark " href="/#" role="button" > About</a>
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