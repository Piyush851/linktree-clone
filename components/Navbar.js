import React from "react"
import Link from "next/link"
import LinktreeIcon from "./icons/LinktreeIcon"

const Navbar = () => {
    return (
        <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-7xl">
            <div className="flex items-center justify-between rounded-full bg-white/90 backdrop-blur-md px-10 py-1 shadow-md border border-gray-200">

                {/* Left section */}
                <div className="flex items-center gap-12">

                    {/* Logo */}
                    <Link href="/" className="flex items-center justify-center h-full">
                        <div className="flex items-center justify-center h-20 w-20">
                            <LinktreeIcon />
                        </div>
                    </Link>

                    {/* Nav links */}
                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                        <li className="hover:text-black transition">
                            <Link href="/products">Products</Link>
                        </li>
                        <li className="hover:text-black transition">
                            <Link href="/templates">Templates</Link>
                        </li>
                        <li className="hover:text-black transition">
                            <Link href="/marketplace">Marketplace</Link>
                        </li>
                        <li className="hover:text-black transition">
                            <Link href="/learn">Learn</Link>
                        </li>
                        <li className="hover:text-black transition">
                            <Link href="/pricing">Pricing</Link>
                        </li>
                    </ul>
                </div>

                {/* Right section */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 transition"
                    >
                        Log in
                    </Link>

                    <Link
                        href="/signup"
                        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition"
                    >
                        Sign up free
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
