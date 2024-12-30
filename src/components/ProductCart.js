import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export const ProductCart=({product})=>{
    const {id, name, price, image} = product;

     const navigate = useNavigate();
   const goToCart=()=>{
        navigate("/Cart")
    }
    return(
        <div className="productCard">

            <img src={image} alt={name}/>
            <p>No:- {id}</p>
            <p className="name">{name}</p>
            <div className="action">
                <p>{price}</p>
                <button onClick={goToCart}>Add to Cart</button>
            </div>
        </div>
    )
}