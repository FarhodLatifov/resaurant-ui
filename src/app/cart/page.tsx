"use client"

import Image from "next/image"
import { removeFromCart, selectCartItems, selectSubtotal, selectTotalItems } from "@/store/features/cartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

const SummaryRow = ({ label, value, valueClassName }: { label: string; value: string; valueClassName?: string }) => {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className={valueClassName}>{value}</span>
    </div>
  )
}

const CartPage = () => {
  const items = useAppSelector(selectCartItems)
  const totalItems = useAppSelector(selectTotalItems)
  const subtotal = useAppSelector(selectSubtotal)
  const dispatch = useAppDispatch()

  const serviceCost = 0
  const deliveryCost = 0
  const total = subtotal + serviceCost + deliveryCost

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-start overflow-y-scroll lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px-40">
        {items.length === 0 && <p className="mt-10 text-lg">Your cart is empty.</p>}

        {items.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.cartId}>
            <Image src={item.img} alt={item.title} width={100} height={100} />
            <div>
              <h2 className="uppercase font-bold text-xl">{item.title}</h2>
              <span>{item.optionTitle ?? "Standard"}</span>
            </div>
            <h2 className="font-bold">${(item.unitPrice * item.quantity).toFixed(2)}</h2>
            <button className="cursor-pointer ml-3" onClick={() => dispatch(removeFromCart(item.cartId))}>X</button>
          </div>
        ))}
      </div>

      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <SummaryRow label={`Subtotal (${totalItems} items)`} value={`$${subtotal.toFixed(2)}`} />
        <SummaryRow label="Service Cost" value={`$${serviceCost.toFixed(2)}`} />
        <SummaryRow label="Delivery Cost" value={deliveryCost === 0 ? "FREE" : `$${deliveryCost.toFixed(2)}`} valueClassName="text-green-500" />
        <hr className="my-2" />
        <SummaryRow label="TOTAL (INCL. VAT)" value={`$${total.toFixed(2)}`} valueClassName="text-red-500 font-bold" />
        <hr />
        <button className="bg-red-500 p-2 text-white rounded-md w-1/2 self-end" disabled={items.length === 0}>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage
