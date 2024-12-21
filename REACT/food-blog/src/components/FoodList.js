import React from 'react'
import { useGetFoodItemsQuery } from '../api/foodApi'

const PostsCard = ({ content }) => {
  return (
    <div className="col-lg-12 mb-3 " key={content.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{content.name}</h5>

        </div>
      </div>
    </div>
  )
}

function FoodList() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } =  useGetFoodItemsQuery()

  let postContent

  if (isLoading) {
    postContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    postContent = posts.map((item) => {
      return <PostsCard content={item} key={item.id} />
    })
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }

  return <div>{postContent}</div>
}

export default FoodList