import Link from "next/link"
const Footer = () => {
    return (
        <footer className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red flex items-center justify-between text-red-500 uppercase">
            <Link href="/" className="font-bold">Massimo</Link>
            <p>&copy; 2024 Massimo. All rights reserved.</p>
        </footer>
    )
}

export default Footer