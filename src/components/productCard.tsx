import { Link } from "react-router-dom";
import { ProductModel } from "../models/product";


function ProductCard(product: ProductModel) {

    return (
        <Link to={"products/"+product.id}>
            <div className="flex flex-col p-2 m-1 rounded-[1rem] hover:bg-gray-400 cursor-pointer hover:bg-opacity-20 transition-all">
                <img className=" rounded-[0.7rem]" src={product.images[0]} alt={`image du produit ${product.title}`} />
                <p className="text-xs" >{product.title}</p>
                <p>{product.regularPrice}</p>
            </div>
        </Link>

    )

}

export default ProductCard