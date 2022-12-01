import Prouduct from "./product";
import{useEffect,useState} from 'react';
function  Productlist () {

    
    let api_url='https://fakestoreapi.com/products';
    let [products,setProducts]=useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(api_url)
          .then((res) => res.json())
          .then((data) => setProducts(data));
      };
      const getCategories = () => {
        fetch(`${api_url}/categories`)
          .then((res) => res.json())
          .then((data) => setCategories(data));
      };
      

     useEffect(() => {
    getProducts();
    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
    .then((res) => res.json())
    .then((data) => setProducts(data));
  };
   
    return(
        <>
        <h1 className="fs-1 fw-bold font-monospace mx-auto text-center mt-5 p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end
        ">Our Products</h1>
        <div className="ddd">
         <div className="container "> 
        
        


        <button onClick={() => {getProducts();}} className="btn btn-info">
            All
        </button>

        {categories.map((cat) => {  return (
            <button key={cat} onClick={() => {getProductInCategory(cat);}} className="btn btn-info" >
                {cat}
            </button>
        );
        })}

            <div className='row '>
                {products.map((pro)=>{ return(<Prouduct key={pro.id} ay={pro} showButton={true} />)})}
            </div>
            
            
         </div>
        </div>
        </>
    );
    
}
export default Productlist ;