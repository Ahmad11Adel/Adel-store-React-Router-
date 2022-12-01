

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";


function ProductDetails(){
    const params = useParams();
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json())
        .then((product) => setProduct(product));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return(
        <div>
            <Product product={product} showButton={false} />



        </div>
        
    )
    
}
export default ProductDetails;