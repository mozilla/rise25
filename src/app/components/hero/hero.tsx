'use client'

import React from "react"
import Link from 'next/link';
import { useScene } from '../../context/scene-context';

export const Hero = ({ enabled, title }: { enabled: boolean, title: string }) => {
    const { setScene } = useScene();

    if (!enabled) {
        return <></>
    }

    return (
        <div id="hero-banner" className={`text-white section section--xl`}>
            <div className="container container--2xl">
                <div className="space-y-4 lg:space-y-6">
                    <h3 className="type-heading-1">{title}</h3>
                    <Link className="btn btn-light" href="#" onClick={(e) => {
                        e.preventDefault();
                        setScene(2);
                    }}>See the winners</Link>
                </div>
            </div>
        </div>
    )
}