'use client'

import React from "react"
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
    { name: 'Website Privacy Notice', href: 'https://mozilla.org/privacy/websites/' },
    { name: 'Cookies', href: 'https://www.mozilla.org/privacy/websites/#cookies' },
    { name: 'Legal', href: 'https://www.mozilla.org/about/legal/terms/mozilla/' },
]

export const Footer = () => {

    return (
        <footer className="footer relative py-4 lg:py-6 w-full">

            <div className="container container--2xl">
                <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row lg:justify-between lg:items-end">
                    <div className="space-y-8 max-w-[80ch]">
                        <Link href="https://foundation.mozilla.org/" target="_blank" rel="nofollow noreferrer">
                            <span className="sr-only">Mozilla Foundation</span>
                            <Image
                                height={32}
                                width={110}
                                className="w-auto h-4 lg:h-6"
                                src="/mozilla-logo-wordmark.svg"
                                alt="Mozilla Foundation"
                            />
                        </Link>
                        <p className="type-body-xs">Portions of this content are ©1998–{new Date().getFullYear()} by individual mozilla.org contributors. Content available under a <Link href="https://www.mozilla.org/en-US/foundation/licensing/website-content/" target="_blank">Creative Commons license.</Link></p>
                    </div>
                    <nav className="flex gap-6" role="navigation">
                        {navigation.map((item) => (
                            <Link className="type-body-xs" key={item.name} href={item.href}>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

        </footer>
    )
}