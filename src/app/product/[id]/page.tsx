import { featuredProducts, pizzas } from "@/data"
import Image from "next/image"
import Price from "@/components/Price"

type Props = {
  params: Promise<{ id: string }>
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = await params
  const productId = Number(id)
  const product = [...featuredProducts, ...pizzas].find((item) => item.id === productId)

  if (!product) {
    return (
      <div className="p-4 lg:px-20 xl:px-40 text-red-500">
        <h2 className="text-2xl font-bold uppercase">Product not found</h2>
      </div>
    )
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      <div className="relative w-full h-1/2 md:h-[70%]">
        <Image src={product.img} alt={product.title} fill className="object-contain" />
      </div>
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h2 className="uppercase text-3xl font-bold xl:text-5xl">{product.title}</h2>
        <p>{product.desc}</p>
        <Price price={product.price} options={product.options} />
      </div>
    </div>
  )
}

export default SingleProductPage
