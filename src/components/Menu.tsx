import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CartIcon from "./CartIcon"

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/contact" },
]

const Menu = () => {
  const [open, setOpen] = useState(false)
  const user = false

  return (
    <div>
      <div>
        {!open ? <Image src="/open.png" alt="Open Menu" width={20} height={20} onClick={() => setOpen((prev) => !prev)} /> : <Image src="/close.png" alt="Open Menu" width={20} height={20} onClick={() => setOpen((prev) => !prev)} />}
      </div>
      {open && <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center text-3xl flex-col justify-center gap-8 w-full z-10">
        {links.map((link) => (
          <Link href={link.url} key={link.id} onClick={() => setOpen((prev) => !prev)}>{link.title}</Link>
        ))}
        {!user ? <Link href="/login" onClick={() => setOpen((prev) => !prev)}>Login</Link> : <Link href="/orders" onClick={() => setOpen((prev) => !prev)}>Orders</Link>}
        <CartIcon onClick={() => setOpen(false)} />
      </div>}
    </div>
  )
}

export default Menu
