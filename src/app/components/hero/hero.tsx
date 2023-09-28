'use client'

import React from "react"
import Link from 'next/link';

export const Hero = ({ title }: { title: string }) => {
    return (
        <div id="hero-banner" className={`text-white section section--xl`}>
            <div className="container container--2xl">
                <h3 className="type-heading-1">{title}</h3>
                <Link className="btn btn-light" href="#winners">See the winners</Link>
            </div>
        </div>
    )
}