import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductModel } from '../models/product';
import { Link } from "react-router-dom";

function Product() {

    const [quantity, setQuantity] = React.useState<number>(0)

    const handleAddQuantityClick = ()=>{
        let q = (quantity+1)
        setQuantity(q)
    }
    const handleSubQuantityClick = ()=>{
        if(quantity>0){
            let q = (quantity-1)
            setQuantity(q)
        }
    }

    const [product, setProduct] = React.useState<ProductModel>()
    const { productId } = useParams()

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const str = import.meta.env.VITE_API_URL+`products/${productId}`
    
    const fetchProduct = async () => {
        setLoading(true); // Commencer le chargement
        setError(null); // Réinitialiser l'erreur

        try {
            const response = await axios.get(str);
            setProduct(response.data); // Mettre à jour les données
        } catch (err) {
            setError('Erreur lors de la récupération des données'); // Gérer l'erreur
        } finally {
            setLoading(false); // Terminer le chargement
        }
    }

    useEffect(() => {
        fetchProduct();
        console.log(product?.isSoldOut, productId, str)
    }, []);

    return (
        <div className='flex w-full flex-col max-w-[1024px] gap-3'>
            <Link className='text-blue-600' to='/'>
                Back to Home
            </Link>
            {loading && <p>Chargement...</p>}
            {error && <p className="text-red-500">{error} Error</p>}
            <div className='flex w-full gap-4'>
                <div className='flex flex-col gap-3'>
                    <img className='max-w-[500px]' src={product?.images[0]} alt="product image" />
                    <img className='max-w-[250px]' src={product?.images[1]} alt="product image 2" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl'>{product?.title}</p>
                    <div className='flex gap-1'>
                        <p className='font-bold'>{product?.regularPrice}</p>
                        <p className='text-xs'>{product?.isSoldOut}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xs'>Quantity</p>
                        <div className='flex border w-fit rounded items-center'>
                            <div onClick={handleSubQuantityClick} className='flex justify-center w-[30px] p-1 cursor-pointer text-center hover:bg-gray-500 hover:bg-opacity-30'>
                                -
                            </div>
                            <p className='flex justify-center w-[30px]'>{quantity}</p>
                            <div onClick={handleAddQuantityClick} className='flex w-[30px] p-1 cursor-pointer justify-center hover:bg-gray-500 hover:bg-opacity-30'>
                                +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product