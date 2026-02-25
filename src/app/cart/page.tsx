import Image from "next/image"

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500  lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px-40">
        <div className="flex items-center justify-between mb-4 ">
          <Image src={"/temporary/p1.png"} alt="" width={100} height={100} />
          <div className="">
            <h2 className="uppercase font-bold text-xl">Sicilian</h2>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between ">
          <span className="">Subtotal (3items)</span>
          <span className="">$81.80</span>
        </div>
        <div className="flex justify-between ">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between ">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2"/>
        <div className="flex justify-between ">
          <span className="">TOTAL (INCL. VAT)</span>
          <span className="text-red-500 font-bold">$81.70</span>
        </div>
        <hr className=""/>
        <button className="bg-red-500 p-2 text-white rounded-md w-1/2 self-end">CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage