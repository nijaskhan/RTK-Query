import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/api/admin/get-users'
        }),
        getProduct: builder.query({
            query: (userId) => `/users/${userId}`
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: '/api/users/signup',
                method: 'POST',
                body: product
            })
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `api/admin/delete-user/${productId}`,
                method: 'GET'
            })
        })
    })
});

export const {
    useGetAllProductsQuery,
    useGetProductQuery,
    useCreateProductMutation,
    useDeleteProductMutation
} = productsApi;