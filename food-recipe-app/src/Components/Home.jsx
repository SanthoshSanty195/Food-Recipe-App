import bg from '../Images/bg.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navi = useNavigate()

    const style = {
        color: "orange"
    }

    return (
        <>
            <div className="card text-bg-dark border-0">
                <img src={bg} className="img-fluid" alt="bg" style={{height:"600px"}} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container d-flex justify-content-center">
                        <h5 className="card-title display-3 fw-bolder mb-0" style={style}>SEARCH RECIPES</h5>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="btn btn-outline-warning" onClick={()=>navi("/recipes")}>SEARCH</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;