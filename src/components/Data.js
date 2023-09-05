import React from 'react';
import { useGetAllProductsQuery, useGetProductQuery } from '../features/apiSlice';

const ProductDatas = () => {
    const { data, isLoading, isError } = useGetAllProductsQuery();
    const { data: user } = useGetProductQuery('1');

    return (
        <>
            <>
                <h2 style={{textDecoration: 'underline'}}>
                    List of Users
                </h2>
                {
                    isError ? (
                        <h3>Oh no, there was an error</h3>
                    ) : isLoading ? (
                        <h1>Loading...</h1>
                    ) : data ? data.map(user => (
                        <React.Fragment key={user.id}>
                            <ul>{user.name}</ul>
                            <li>{user.email}</li>
                        </React.Fragment>
                    )) : null
                }
            </>
            {
                user ? <h2>{user.name}</h2> : null
            }
        </>
    )
}

export default ProductDatas;
