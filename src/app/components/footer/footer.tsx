'use client'

import React from "react"
import Link from 'next/link';

const navigation = [
    { name: 'Website Privacy Notice', href: 'https://mozilla.org/privacy/websites/' },
    { name: 'Cookies', href: 'https://www.mozilla.org/privacy/websites/#cookies' },
    { name: 'Legal', href: 'https://www.mozilla.org/about/legal/terms/mozilla/' },
]

export const Footer = () => {

    return (
        <footer className="relative py-4 lg:py-6 w-full">

            <div className="container container--xl">
                <div className="flex flex-col gap-4 lg:gap-6">
                    <p>Portions of this content are ©1998–2022 by individual mozilla.org contributors. Content available under a Creative Commons license.</p>
                    <nav className="flex gap-6" role="navigation">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="underline hover:text-primary">
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

        </footer>
    )
}