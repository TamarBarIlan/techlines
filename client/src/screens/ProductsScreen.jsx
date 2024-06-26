import { Box } from "@chakra-ui/react"
import ProductCard from "../components/ProductCard";
import axios from 'axios'
import { useEffect, useState } from "react";
// import { response } from 'express';

const ProductsScreen = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios
            .get('/api/products')
            .then((response) => {
                setData(response.data.products);
            })
            .catch(error => {
                console.error('Error fatching data: ', error);
            });
    }, []);
    
    return(
        <> 
            { data.length > 1 && (
                <Box>
                    <ProductCard product={data[0]} loading={false}/>
                </Box>
            )}  
        </>
    );
};

export default ProductsScreen;

