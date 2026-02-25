"use client"

import { useEffect, useState } from "react"

type Option = {
  title: string
  additionalPrice: number
}

type Props = {
  price: number
  options?: Option[]
}

const Price = ({ price, options = [] }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)
  const [total, setTotal] = useState(price)

  useEffect(() => {
    const additional = options[selected]?.additionalPrice ?? 0
    setTotal(quantity * (price + additional))
  }, [quantity, selected, options, price])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>

      {options.length > 0 && (
        <div className="flex gap-4">
          {options.map((option, index) => {
            const isActive = selected === index
            return (
              <button
                key={option.title}
                onClick={() => setSelected(index)}
                className={`min-w-[6rem] p-2 ring-2 rounded-md transition 
                  ${isActive ? "bg-red-400 text-white ring-red-400" : "bg-white text-red-500 ring-red-400"}`}
              >
                {option.title}
              </button>
            )
          })}
        </div>
      )}

      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => Math.min(9, q + 1))}>
              {">"}
            </button>
          </div>
        </div>

        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Price
