import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/productCard';



function Home() {

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true); // Commencer le chargement
        setError(null); // Réinitialiser l'erreur

        try {
            const response = await axios.get(import.meta.env.VITE_API_URL+'products');
            setData(response.data); // Mettre à jour les données
        } catch (err) {
            setError('Erreur lors de la récupération des données'); // Gérer l'erreur
        } finally {
            setLoading(false); // Terminer le chargement
        }
    };

    // Utiliser useEffect pour appeler fetchData au chargement du composant
    useEffect(() => {
        fetchData();
    }, []);

    return (
        
        <div className="grid grid-cols-4 w-full max-w-[1024px]">
            {loading && <p>Chargement...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {data.map(item => (
                <ProductCard {
                    ...item
                }></ProductCard>
            ))}
        </div>
    )
}

export default Home