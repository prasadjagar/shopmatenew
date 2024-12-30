import "./CartCard.css"
export const CartCard=({name1})=>{
   const {name, price, image}  = name1;   
    return(
        <div className="cartCard">
            <img src={image} alt="name" />
            <p className="productName">{name}</p>
            <p className="productPrice">{price}</p>
            <button>Remove</button>
        </div>
    )
}