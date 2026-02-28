import React from 'react'

const Cart = ({ cart, setCart }) => {

    const increase = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ))
    }

    const decrease = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ))
    }

    const remove = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <div className="w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl hover:shadow-indigo-200 transition-all duration-300">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-wide ">
                🛒 Cart
            </h2>

            {cart.length === 0 && (
                <p className="text-center text-gray-500">
                    Cart is empty
                </p>
            )}

            {cart.map(item => (
                <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:item-center justify-between gap-4 border-b py-4"
                >
                    <div>
                        <p className=" text-lg font-semibold">
                            {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            Rs {item.price} × {item.quantity}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => decrease(item.id)}
                            disabled={item.quantity === 1}
                            className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-40 transition"
                        >
                            -
                        </button>

                        <span className="px-3 font-semibold">
                            {item.quantity}
                        </span>

                        <button
                            onClick={() => increase(item.id)}
                            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                            +
                        </button>


                        <button
                            onClick={() => remove(item.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            {cart.length > 0 && (
                <div className="mt-6 text-right">
                    <p className="text-xl font-bold text-gray-800">
                        Total: Rs {total}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Cart
