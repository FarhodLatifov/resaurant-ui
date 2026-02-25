import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/store/store"

export type CartItem = {
  cartId: string
  title: string
  img: string
  optionTitle?: string
  unitPrice: number
  quantity: number
}

type AddToCartPayload = {
  id: number
  title: string
  img: string
  unitPrice: number
  quantity?: number
  optionTitle?: string
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
    },
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const payload = action.payload
      const safeQty = Math.max(1, Math.min(99, payload.quantity ?? 1))
      const optionTitle = payload.optionTitle?.trim() || undefined
      const cartId = `${payload.id}-${optionTitle ?? "default"}`
      const existing = state.items.find((item) => item.cartId === cartId)

      if (existing) {
        existing.quantity = Math.min(99, existing.quantity + safeQty)
        return
      }

      state.items.push({
        cartId,
        title: payload.title,
        img: payload.img,
        optionTitle,
        unitPrice: payload.unitPrice,
        quantity: safeQty,
      })
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
    },
  },
})

export const { setItems, addToCart, removeFromCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectTotalItems = (state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectSubtotal = (state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)

export default cartSlice.reducer
