import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getFoodDataByName: builder.query({
      query: () => `/recipes`,
    }),
    getFoodDataDetailsByName: builder.query({
      query: (id) => `recipes/${id}`,
    }),
    getFoodRecipe: builder.query({
      query: (id) => `recipes/${id}`,
    }),
   
}),
})

export const { useGetFoodDataByNameQuery, useGetFoodDataDetailsByNameQuery, useGetFoodRecipeQuery } = foodApi