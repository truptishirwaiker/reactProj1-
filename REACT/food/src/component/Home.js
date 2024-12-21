import React from 'react'
import { Link } from 'react-router-dom';
import { useGetFoodDataByNameQuery } from '../features/APISlice'

export default function Home() {
  
  
  const { data, isLoading, isError }= useGetFoodDataByNameQuery();
  
     
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error loading food items.</div>;
    }
  return (
    <div>
       <h1>FOODITEMS</h1>
        {data?.recipes?.map((item) => (
         <div key={item.id}>
           <Link to={`/recipes/${item.id}`}>
       
         <button>{item.name}</button></Link></div>))
      
        }
        
      </div>
          
      )}

    
    
