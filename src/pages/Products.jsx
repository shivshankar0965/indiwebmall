import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h1>Products</h1>
        <Outlet/>
    </div>
  )
}

export default Products