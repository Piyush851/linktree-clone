import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const handle = params.handle

    const client = await clientPromise
    const db = client.db("linktree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle })

    if (!item) {
        notFound()
    }

    const links = Array.isArray(item.links) ? item.links : []

    return (
        <div className="flex min-h-screen bg-[#2665d6] justify-center items-center">
            <div className="flex flex-col items-center w-full max-w-md px-6">

                {/* Profile picture */}
                <img
                    src={item.pic}
                    alt={item.handle}
                    className="w-28 h-28 rounded-full mb-4"
                />

                {/* Handle */}
                <span className="font-bold text-xl text-white mb-2">
                    @{item.handle}
                </span>

                {/* Description */}
                <span className="w-80 text-center mb-6 text-white/80">
                    {item.desc}
                </span>

                {/* Links */}
                <div className="w-full">
                    {links.length === 0 && (
                        <p className="text-white text-center opacity-70">
                            No links added yet
                        </p>
                    )}

                    {links.map((linkItem, index) => (
                        <div
                            key={index}
                            className="py-4 px-4 bg-white shadow-lg rounded-xl my-4 text-center"
                        >
                            <Link
                                href={linkItem.link}
                                target="_blank"
                                className="font-semibold text-black"
                            >
                                {linkItem.linktext}
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
