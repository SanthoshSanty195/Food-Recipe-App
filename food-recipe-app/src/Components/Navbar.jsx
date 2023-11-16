import { useNavigate } from "react-router-dom";



function Navbar() {
    let navi = useNavigate()




    return (
        <nav className="navbar navbar-expand-lg py-3 shadow-sm" style={{background:"orange"}}>
        <div className="container">
            <a className="navbar-brand fw-bold fs-4" href="#" onClick={()=>navi("/")}>Ready 2 Cook</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active fw-bold" aria-current="page" href="#" onClick={()=>navi("/")} style={{ fontSize: "18px" }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold" href="#" onClick={()=>navi("/recipes")} style={{ fontSize: "18px" }}>Recipes</a>
                    </li>
                </ul>
                <div className="buttons">
                    <a href="" className="btn btn-dark" onClick={()=>navi("/login")}>
                        <i className="fa fa-sign-in me-1"></i>Login</a>
                    <a href="" className="btn btn-dark ms-2" onClick={()=>navi("/register")}>
                        <i className="fa fa-user-plus me-1"></i>Register</a>
                </div>
            </div>
        </div>
    </nav>
    );
  }
export default Navbar;