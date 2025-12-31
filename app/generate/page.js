"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSearchParams } from 'next/navigation'

const Generate = () => {

    const searchParams = useSearchParams()

    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((prevLinks) =>
            prevLinks.map((item, i) =>
                i === index ? { link, linktext } : item
            )
        )
    }

    const addLink = () => {
        setLinks((prev) => [...prev, { link: "", linktext: "" }])
    }

    const submitLinks = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": link,
            "linktext": text,
            "handle": handle,
            "pic": pic,
            "desc": desc,
        });

        console.log(raw)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if(result.success) {
            toast(result.message)
        } else {
            toast.error(result.message)
        }
        // setlinktext("")
        setLinks([{ link: "", linktext: "" }])
        setpic("")
        sethandle("")

    }

    return (
        <div className='bg-[#d2e823] min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-25'>
            {/* Left Column */}
            <div className="flex justify-center items-center flex-col px-6 lg:px-0">
                <div className='flex flex-col gap-5 my-8 w-full max-w-sm'>
                    <h1 className='text-[#254f1a] font-bold text-5xl text-center lg:text-left'>Create your Linktree</h1>
                    <div className="item">

                        <h2 className='font-semibold text-2xl text-black'>Step 1: Claim your Handle</h2>
                        <div className="mx-4">
                            <input value={handle} onChange={e => { sethandle(e.target.value) }} className='bg-white p-3 mx-3 rounded-2xl my-2 text-black focus:outline-blue-600' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    {/* link text and link */}
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-black'>Step 2: Add Links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className="mx-4 flex">
                                <input value={item.linktext} onChange={e => { handleChange(index, item.link, e.target.value) }} className='bg-white p-3 mx-3 rounded-2xl text-black my-2 focus:outline-blue-600' type="text" placeholder='Enter link text' />
                                <input value={item.link} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='bg-white p-3 rounded-2xl text-black ml-3 my-2 focus:outline-blue-600' type="text" placeholder='Enter link' />
                            </div>
                        })}
                        <button onClick={() => addLink()} className="bg-[#254f1a] text-white p-3 px-8 mx-8 rounded-2xl font-semibold cursor-pointer">Add Link</button>
                        <ToastContainer />
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-black'>Step 3: Add a picture and description</h2>
                        <div className="mx-4 flex flex-col">
                            <input value={pic} onChange={e => { setpic(e.target.value) }} className='bg-white p-3 rounded-2xl text-black mx-5 my-2 focus:outline-blue-600' type="text" placeholder='Enter link to your picture' />
                            <input value={desc} onChange={e => { setdesc(e.target.value) }} className='bg-white p-3 rounded-2xl text-black mx-5 my-2 focus:outline-blue-600' type="text" placeholder='Enter your description' />
                            <button disabled={pic==""||handle==""||links[0].linktext==""} onClick={() => { submitLinks() }} className="bg-[#254f1a] w-fit disable:bg-[#aeff99] my-3 text-white p-3 px-8 mx-6 rounded-2xl font-semibold cursor-pointer">Create your LinkTree</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* Right column */}
            <div className="flex items-center justify-end px-6 lg:px-24 lg:items-end">
                <img className='w-full max-w-md lg:max-w-lg object-contain' src="/generate.png" alt="generate" />
            </div>
        </div>
    )
}

export default Generate