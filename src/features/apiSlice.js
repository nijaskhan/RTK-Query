import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/users'
        }),
        getProduct: builder.query({
            query: (userId) => `/users/${userId}`
        })
    })
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;