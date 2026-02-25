"use client"

import Image from "next/image"
import { featuredProducts } from "@/data"
import { addToCart } from "@/store/features/cartSlice"
import { useAppDispatch } from "@/store/hooks"

const Featured = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]" key={item.id}>
            {item.img && <div className="relative flex-1 w-full hover:rotate-60 transition-all duration-500">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>}

            <div className="flex flex-1 flex-col gap-4 items-center text-center justify-center">
              <h2 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h2>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      img: item.img,
                      unitPrice: item.price,
                      quantity: 1,
                    }),
                  )
                }
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
