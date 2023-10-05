'use client'

import React from "react"
import Link from 'next/link';
import { useScene } from '../../context/scene-context';
import { gtag } from "@/app/lib";

export const Hero = ({ enabled, title }: { enabled: boolean, title: string }) => {
    const { setScene } = useScene();

    if (!enabled) {
        return <></>
    }

    return (
        <div id="hero-banner" className={`text-white section section--xl`}>
            <div className="container container--2xl">
                <div className="space-y-4 lg:space-y-6">
                    <h1 className="type-heading-1">Mozilla Presents:<br />25 visionaries reshaping our digital future.</h1>
                    <Link className="btn btn-light" href="#" onClick={(e) => {
                        e.preventDefault();
                        setScene(2);
                        gtag({
                            action: `Link to: winners`,
                            category: "See winners button click"
                        })
                    }}>See the winners</Link>
                </div>
            </div>
        </div>
    )
}