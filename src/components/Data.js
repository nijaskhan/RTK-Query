import React from 'react';
import { useGetAllProductsQuery, useCreateProductMutation, useDeleteProductMutation } from '../features/apiSlice';

const ProductDatas = () => {
    const { refetch: usersRefetch, data, isLoading, isError } = useGetAllProductsQuery();
    console.log(data, "users");
    // const { data: user } = useGetProductQuery('1');
    const [createProduct] = useCreateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const createUser = () => {
        createProduct({
            name: 'soman',
            email: 'soman@gmail.com',
            mobile: 3467982312,
            password: 'sivasankaran'
        }).then((res) => {
            console.log(res, 'response');
            usersRefetch();
        })
    }
    const deleteUser = (productId) => () => {
        deleteProduct(productId).then((res) => {
            console.log(res, 'delete response');
            usersRefetch();
        })
    }

    return (
        <>
            <h2 style={{ textDecoration: 'underline' }}>
                List of Users
            </h2>
            {
                isError ? (
                    <h3>Oh no, there was an error</h3>
                ) : isLoading ? (
                    <h1>Loading...</h1>
                ) : data?.users.length > 0 ? data.users.map(user => (
                    <React.Fragment key={user._id}>
                        <ul>{user.name}</ul>
                        <li>{user.email}</li>
                        <button onClick={deleteUser(user._id)}>Delete {user.name}</button>
                    </React.Fragment>
                )) : null
            }
            <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                <button onClick={createUser} style={{backgroundColor: 'red'}}>create user</button>
            </div>
        </>
    )
}

export default ProductDatas;
