


// src/components/FoodDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFoodItemsByNameQuery } from '../api/foodApi';

const FoodDetails = () => {
  const { id } = useParams();
  const { data: foodItem, isLoading, isError } = useGetFoodItemsByNameQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading food item details.</div>;
  }

  return (
    <div>
      <h1>{foodItem.name}</h1>
      <p>Description: {foodItem.description}</p>
      
    </div>
  );
};

export default FoodDetails;
