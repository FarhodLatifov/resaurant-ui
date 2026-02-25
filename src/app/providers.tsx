"use client"

import { ReactNode, useEffect, useState } from "react"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import { setItems, selectCartItems, type CartItem } from "@/store/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

const STORAGE_KEY = "massimo_cart_v1"

const CartPersistence = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[]
        dispatch(setItems(Array.isArray(parsed) ? parsed : []))
      }
    } finally {
      setHydrated(true)
    }
  }, [dispatch])

  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, hydrated])

  return <>{children}</>
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <CartPersistence>{children}</CartPersistence>
    </Provider>
  )
}
