import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const foodApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/', }), // Replace with your API base URL
  endpoints:(builder)=>({
    getFoodItems: builder.query({
      query: () => `/recipes?skip=5&limit=10`,
     }),
    
   getFoodItemsByName: builder.query({
    query: (name) => `/recipes/${name}`,
   }),
      }),
    })

    
    
  
export const { useGetFoodItemsQuery, useGetFoodItemsByNameQuery } = foodApi;
