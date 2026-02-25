import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CartIcon from "./CartIcon"

const links = [
  { title: "Home", url: "/" },
  { title: "Menu", url: "/menu" },
  { title: "Working Hours", url: "/" },
  { title: "Contact", url: "/contact" },
]

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div>
        {!open ? <Image src="/open.png" alt="Open Menu" width={20} height={20} onClick={() => setOpen((prev) => !prev)} /> : <Image src="/close.png" alt="Open Menu" width={20} height={20} onClick={() => setOpen((prev) => !prev)} />}
      </div>
      {open && <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center text-3xl flex-col justify-center gap-8 w-full z-10">
        {links.map((link) => (
          <Link href={link.url} key={link.title} onClick={() => setOpen((prev) => !prev)}>{link.title}</Link>
        ))}
        <Link href="/login" onClick={() => setOpen((prev) => !prev)}>Login</Link>
        <CartIcon onClick={() => setOpen(false)} />
      </div>}
    </div>
  )
}

export default Menu
