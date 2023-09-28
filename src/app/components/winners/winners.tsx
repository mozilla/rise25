'use client'

import React from "react"
import Image from 'next/image';

const winners = [
    {
        imgSrc: "/headshots/headshot-image-1.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-2.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-3.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-4.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-5.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-6.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-7.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-8.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-9.jpg",
        title: "Dries Depoorter"
    },
    {
        imgSrc: "/headshots/headshot-image-10.jpg",
        title: "Dries Depoorter"
    }
]

export const Winners = () => {
    return (
        <div id="winners" className={`bg-black text-white section section--xl`}>
            <div className="container container--2xl">

                <div className="winners flex gap-4 overflow-x-scroll">
                    {winners.map((item, index) => (
                        <div className="winner w-full aspect-[3/4] relative bg-primary min-w-[400px]" key={index}>
                            <Image src={item.imgSrc} layout="fill" objectFit="cover" alt={item.title} />
                        </div>
                    ))}
                </div>


            </div >
        </div >
    )
}