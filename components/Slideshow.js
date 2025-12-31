"use client"

import Image from "next/image"

const slides = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNzN2I0cGNlMThjZWx0ZTh6cXo3YzQ0NXB6bWZkM3p1cW5nZXh6ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7aD2saalBwwftBIY/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHV0Mml1eDg5bXl4c2RjY3J4NHlnbGF6bnh0Y2NlbGJldHFtcWZ2YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3d1ZmZyb2J2cGQ1ZmxhYzZ2ZWJvZmh0b2V4b2R1YTRlOHN6dW9mYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgzoKnwFNmISR8I/giphy.gif",
]

export default function Slideshow() {
    const duplicatedSlides = [...slides, ...slides]

    return (
        <div className="relative mt-6 w-100 h-180 rounded-[3rem] shadow-2xl overflow-hidden z-10">

            <div className="absolute top-0 left-0 right-0 h-16 bg-white z-20 flex items-center justify-center border-b border-gray-100">
                <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
            </div>

            {/* The Scrolling Track */}
            <div className="absolute inset-0 flex flex-col gap-4 p-4 mt-20 animate-infinite-scroll">
                {duplicatedSlides.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-full h-50 shrink-0 aspect-4/3 rounded-2xl overflow-hidden shadow-md"
                    >
                        <Image
                            src={src}
                            alt="Linktree slide"
                            fill
                            unoptimized
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Fade overlay at bottom for smooth exit */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-20 pointer-events-none" />

            {/* Inline styles for the custom animation */}
            <style jsx>{`
        @keyframes scroll {
            0% {
            transform: translateY(0);
            }
            100% {
            transform: translateY(-50%); /* Move up by half the height (the length of original list) */
            }
        }
        .animate-infinite-scroll {
            animation: scroll 15s linear infinite;
        }
        /* Pause on hover if you want interactivity */
        .animate-infinite-scroll:hover {
            animation-play-state: paused;
        }
        `}</style>
        </div>
    )
}