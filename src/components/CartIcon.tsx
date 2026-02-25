import Link from "next/link"
import Image from "next/image"
import type { MouseEventHandler } from "react"

type Props = {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const CartIcon = ({ onClick }: Props) => {
  return (
    <Link href="/cart" className="flex items-center gap-4" onClick={onClick}>
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="Cart Icon" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon
