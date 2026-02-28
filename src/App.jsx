import React, { useState } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Samsung",
      price: 200000
    },

    {
      id: 2,
      name: "Mouse",
      price: 12000
    },

    {
      id: 3,
      name: "Headphone",
      price: 4500
    },

    {
      id: 4,
      name: "Breaking the Scarcity Book",
      price: 1200
    },

    {
      id: 5,
      name: "Dumbells",
      price: 5400
    },

    {
      id: 6,
      name: "Iphone",
      price: 540000
    },

  ])

  const [cart, setCart] = useState([])

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <Cart cart={cart} setCart={setCart} />
        <Products products={products} cart={cart} setCart={setCart} />
      </div>
    </div>
  )
}

export default App
