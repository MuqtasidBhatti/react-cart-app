import React from 'react'

const Products = ({ products, cart, setCart }) => {

    const addCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id)

        if (existingItem) {
            setCart(
                cart.map(item => (
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ))
            )
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
                🛍 Products
            </h2>

            <div className='space-y-4'>
                {products.map(product => (
                    <div
                        key={product.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4"
                    >
                        <div>
                            <p className="text-lg font-semibold">
                                {product.name}
                            </p>
                            <p className="text-gray-500">
                                Rs {product.price}
                            </p>
                        </div>

                        <button
                            onClick={() => addCart(product)}
                            className="px-5 py-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
