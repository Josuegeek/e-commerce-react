import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductModel } from '../models/product';

function Product() {
    const [product, setProduct] = React.useState<ProductModel>()
    const { productId } = useParams()

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProduct = async () => {
        setLoading(true); // Commencer le chargement
        setError(null); // Réinitialiser l'erreur

        try {
            const response = await axios.get(import.meta.env.VITE_API_URL+`products/${productId}`);
            setProduct(response.data); // Mettre à jour les données
        } catch (err) {
            setError('Erreur lors de la récupération des données'); // Gérer l'erreur
        } finally {
            setLoading(false); // Terminer le chargement
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            {loading && <p>Chargement...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div>
                {product?.id}
            </div>
        </div>
    )
}

export default Product