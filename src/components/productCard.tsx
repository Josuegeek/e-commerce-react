import { ProductModel } from "../models/product";


function ProductCard(product:ProductModel){

    return(
        <div>
            <img src={product.images[0]} alt={`image du produit ${product.title}`} />
            <p>{product.title}</p>
            <p>{product.regularPrice}</p>
        </div>
    )

}

export default ProductCard