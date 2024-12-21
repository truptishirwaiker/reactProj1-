import React from 'react'
import { useGetFoodDataDetailsByNameQuery } from '../features/APISlice'
import { useParams } from 'react-router-dom';

export default function Fooddetail() {
  const { id } = useParams()
    const { data, isError, isLoading } = useGetFoodDataDetailsByNameQuery(id);
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error loading food items.</div>;
    }
  return (
    
     <div> 
     <h1>{id}</h1>
     <h1>Single Data</h1>
     {data && <div>
         
         
      <h1>NAME:  {data.name}</h1>
      <hr />
      <h1>INGREDIENTS:  {data.ingredients}</h1>
      <hr />

      <h1>INSTRUCTIONS:  {data.instructions}</h1>
      <hr />
      <h1>CUISINE:  {data.cuisine}</h1>
      <hr />
      <h1>TAGS:  {data.tags}</h1>
      <br />
      <br />
          </div>
          
}
</div>
        )
      
      

  }