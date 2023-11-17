import { useNavigate } from "react-router-dom";



function Navbar() {
    let navi = useNavigate()




    return (
        <nav className="navbar navbar-expand-lg py-3 shadow-sm" style={{background:"orange"}}>
        <div className="container">
            <div className="navbar-brand fw-bold fs-4"  onClick={()=>navi("/")}>Ready 2 Cook</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <div className="nav-link active fw-bold" aria-current="page" onClick={()=>navi("/")} style={{ fontSize: "18px" }}>Home</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link fw-bold" onClick={()=>navi("/recipes")} style={{ fontSize: "18px" }}>Recipes</div>
                    </li>
                </ul>
                <div className="buttons">
                    <div className="btn btn-dark" onClick={()=>navi("/login")}>
                        <i className="fa fa-sign-in me-1"></i>Login</div>
                    <div className="btn btn-dark ms-2" onClick={()=>navi("/register")}>
                        <i className="fa fa-user-plus me-1"></i>Register</div>
                </div>
            </div>
        </div>
    </nav>
    );
  }
export default Navbar;