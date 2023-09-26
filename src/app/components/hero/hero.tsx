'use client'

import React from "react"

export const Hero = ({ title }: { title: string }) => {
    return (
        <div id="hero-banner" className={`bg-black text-white section section--xl`}>
            <div className="container container--xl">
                <h3 className="type-heading-1">{title}</h3>
            </div>
        </div>
    )
}