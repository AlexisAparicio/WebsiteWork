import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart | Count
    const [count, setCount] = useState(0)

    //Product Detail | Open Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Menu | Open Product Detail
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail | Show Products
    const [productsToShow, setProductsToShow] = useState({})

    //Shopping Cart | Cart Products
    const [cartProducts, setCartProducts] = useState([])

    console.log(count)
    return(
        <ShoppingCartContext.Provider value={{count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productsToShow,
        setProductsToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}