import React, { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  // Auth state
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('coffee_user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  // Cart state
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('coffee_cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // User Orders
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('coffee_orders')
    return savedOrders ? JSON.parse(savedOrders) : []
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('coffee_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('coffee_user')
    }
  }, [user])

  useEffect(() => {
    localStorage.setItem('coffee_cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('coffee_orders', JSON.stringify(orders))
  }, [orders])

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const addToCart = (product, size = 'Ortacha', sugar = 'Ortacha') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === size && item.sugar === sugar
      )
      if (existingIndex > -1) {
        const updated = [...prevCart]
        updated[existingIndex].quantity += 1
        return updated
      } else {
        return [...prevCart, { ...product, size, sugar, quantity: 1, cartItemId: Date.now() }]
      }
    })
  }

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId))
  }

  const updateQuantity = (cartItemId, amount) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + amount
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const clearCart = () => setCart([])

  const createOrder = (deliveryInfo) => {
    const newOrder = {
      id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleString('uz-UZ'),
      items: [...cart],
      total: cartTotal + (cartTotal > 100000 ? 0 : 15000),
      status: 'Qabul qilindi',
      deliveryInfo
    }
    setOrders((prev) => [newOrder, ...prev])
    clearCart()
    return newOrder
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        orders,
        createOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)