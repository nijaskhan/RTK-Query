import React from 'react'
import { useGetAllProductsQuery } from '../features/apiSlice';

const ProductDatas = () => {
    const { data } = useGetAllProductsQuery();
    console.log(data);

    return (
        <>
            {
                data ? data.map((product) => (
                    <React.Fragment key={product.id}>
                        <ul>{product.name}</ul>
                    </React.Fragment>
                )) : <div>No products 😥</div>
            }
        </>
    )
}

export default ProductDatas
