'use client'

import React from "react"
import Link from 'next/link';
import Image from "next/image";
import { useScene } from '../../context/scene-context';

export const Header = () => {
    const { setScene } = useScene();

    return (
        <header className="header sticky top-0 z-50 w-full ">

            <div className="px-4 sm:px-6 container container--2xl">
                <div className="flex items-center justify-between py-6 gap-4">
                    <Link href="#" onClick={(e) => {
                        e.preventDefault();
                        setScene(2);
                    }}>See the winners</Link>
                    <div className="flex justify-start">
                        <Link href="/" onClick={(e) => {
                            e.preventDefault();
                            setScene(1);
                        }}>
                            <span className="sr-only">Rise25</span>
                            <Image
                                height={70}
                                width={70}
                                className="w-auto h-6"
                                src="/logo.svg"
                                alt="Rise25"
                            />
                        </Link>
                    </div>
                    <Link href="/">Celebrate with us</Link>
                </div>
            </div>

        </header>
    )
}