"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <section className="bg-[#d2e823] min-h-screen grid lg:grid-cols-2 items-center overflow-hidden">

        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 lg:ml-[10vw] space-y-6">
          <p className="text-[#254f1a] font-extrabold text-5xl md:text-6xl tracking-tighter">
            A link in bio built for you.
          </p>
          <p className="text-[#254f1a] text-lg font-medium max-w-md">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="pt-4 flex gap-4">
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Enter your handle" className="focus:outline-blue-600 bg-white text-black p-5 border-none rounded-xl w-1/2" />
            <button onClick={createTree} className="bg-[#254f1a] text-white px-8 py-4 rounded-full font-semibold cursor-pointer">
              Claim your Linktree
            </button>
          </div>
        </div>

        {/* Right Content (Slideshow) */}
        <div className="flex items-center justify-center lg:mr-[10vw] p-10 relative">
          {/* Background Blob/Decoration (Optional, matches screenshot vibe) */}
          <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />

          <Slideshow />
        </div>
      </section>

      <section className="bg-[#502274] min-h-screen flex flex-col justify-center items-center ">
        <p className="text-5xl font-bold mt-5">Jumpstart your corner of the internet today</p>
        <div className="p-4 flex gap-5">
          <input type="text" placeholder="linktr.ee/" className="bg-white text-black p-5 border-none rounded-xl" />
          <button className="bg-[#d2e823] text-black p-3 rounded-4xl cursor-pointer px-6 font-bold">claim your Linktree</button>
        </div>
        <div className="p-16">
          <Footer />
        </div>
      </section>
    </main>
  );
}
