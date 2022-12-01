import { Link } from "react-router-dom";
import '../App.css';

function Prouduct(props) {
    let {ay ,showButton}=props
    return(
        <div className='col-3 productcard'>
        <div className="card ">
            <img src='https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651
            ' className="card-img-top" alt={ay.title}/>
            <div className="card-body">
                <h5 className='title'>{ ay.title}</h5>
                <p className="card-text">{ ay.description}</p>
                <p> Price: {ay.price}$</p>
                
                {showButton && (
                        <Link className="btn btn-primary" to={`/product/${ay.id}`}>
                            Details
                        </Link>
          )}
                
                
            </div>
            
        </div>
    </div>
    )
    
}
export default Prouduct;