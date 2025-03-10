import { Product } from "../../types/products";


export const addToCart = (product : Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('/Cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1
    }
    else {
        cart.push({
            ...product, quantity: 1
        })
    }

    localStorage.setItem('/Cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('/Cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('/Cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('/Cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].quantity = quantity;
        localStorage.setItem('/Cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('/Cart') || '[]')
}