'use client'

import React from "react"
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Instagram, Twitter, Youtube, Web } from "../icons"

const winnerGroups = [
    {
        group: {
            name: "Activists",
            slug: "activists",
            description: "Activists using the internet to drive social and political change by amplifying their voices and making a difference in the world.",
            imgSrc: "/gradients/card-gradient-1.png",
        },
        winners: [
            {
                imgSrc: "/headshots/headshot-image-1.jpg",
                title: "Dries Depoorter",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-2.jpg",
                title: "Kay Lopez",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-3.jpg",
                title: "Fanny Hidvegi",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-4.jpg",
                title: "Julia Janssen",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
        ]
    },
    {
        group: {
            name: "Builders",
            slug: "builders",
            description: "Activists using the internet to drive social and political change by amplifying their voices and making a difference in the world.",
            imgSrc: "/gradients/card-gradient-2.png",
        },
        winners: [
            {
                imgSrc: "/headshots/headshot-image-5.jpg",
                title: "Christian (Chris) Smalls",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-6.jpg",
                title: "Rob Morris",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-7.jpg",
                title: "Keoni Mahelona",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
        ]
    },
    {
        group: {
            name: "Artists",
            slug: "artists",
            description: "Activists using the internet to drive social and political change by amplifying their voices and making a difference in the world.",
            imgSrc: "/gradients/card-gradient-3.png",
        },
        winners: [
            {
                imgSrc: "/headshots/headshot-image-1.jpg",
                title: "Larissa (Larz) May",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-2.jpg",
                title: "Nyamekye Wilson",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-3.jpg",
                title: "Trisha Prabhu",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-4.jpg",
                title: "Dries Depoorter",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
        ]
    },
    {
        group: {
            name: "Creators",
            slug: "creators",
            description: "Activists using the internet to drive social and political change by amplifying their voices and making a difference in the world.",
            imgSrc: "/gradients/card-gradient-4.png",
        },
        winners: [
            {
                imgSrc: "/headshots/headshot-image-8.jpg",
                title: "Finn Myrstad",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-9.jpg",
                title: "Natalia Domagala",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-10.jpg",
                title: "Marlena Myles",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            }
        ]
    },
    {
        group: {
            name: "Advocates",
            slug: "advocates",
            description: "Activists using the internet to drive social and political change by amplifying their voices and making a difference in the world.",
            imgSrc: "/gradients/card-gradient-5.png",
        },
        winners: [
            {
                imgSrc: "/headshots/headshot-image-8.jpg",
                title: "Vitus Spehar",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-9.jpg",
                title: "Abbie Richards",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            },
            {
                imgSrc: "/headshots/headshot-image-10.jpg",
                title: "Ahmad Hegab",
                bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC, and LA, working on brands like; General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
                socialMedia: [
                    { platform: "YouTube", url: "https://www.youtube.com/user/driesdepoorter" },
                    { platform: "Twitter", url: "https://twitter.com/driesdepoorter" },
                    { platform: "Instagram", url: "https://www.instagram.com/driesdepoorter/" },
                    { platform: "Web", url: "https://www.driesdepoorter.com/" },
                ],
            }
        ]
    },
]

export const Winners = () => {
    return (
        <div id="winners" className={` text-white section section--xl`}>
            <div className="container container--2xl">
                <div className="group-navigation">
                    {winnerGroups.map((group, groupIndex) => (
                        <>
                            <div className="group-navigation-item" key={groupIndex}>
                                <Link className="group-card-link" href={`#${group.group.slug}`}>
                                    {group.group.name}
                                </Link>
                            </div>
                            {groupIndex < winnerGroups.length - 1 && <span> / </span>}
                        </>
                    ))}
                </div>

                <div className="winners">
                    {winnerGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="winner-group">
                            {group.group && (
                                <div id={group.group.slug} className="group-card card">
                                    <div className={`group-card-inner`}>
                                        <h3 className={`group-card-title`}>{group.group.name} <ArrowRight className={`h-12 text-[140%]`} />
                                        </h3>
                                        <p>{group.group.description}</p>
                                    </div>
                                    <Image className={`z-0`} src={group.group.imgSrc} layout="fill" objectFit="cover" alt={group.group.name} />
                                </div>
                            )}
                            {group.winners.map((winner, winnerIndex) => (
                                <div key={winnerIndex} className="winner card group">
                                    <div className="winner-name">{winner.title}</div>
                                    <div className="winner-info">
                                        <div className="winner-social">
                                            {winner.socialMedia.map((social, socialIndex) => (
                                                <a className="winner-social-link" key={socialIndex} href={social.url} target="_blank" rel="noopener noreferrer">
                                                    {social.platform === "Instagram" && <Instagram />}
                                                    {social.platform === "Twitter" && <Twitter />}
                                                    {social.platform === "YouTube" && <Youtube />}
                                                    {social.platform === "Web" && <Web />}
                                                </a>
                                            ))}
                                        </div>
                                        <div className="winner-bio" dangerouslySetInnerHTML={{ __html: winner.bio }} />
                                    </div>
                                    <Image src={winner.imgSrc} layout="fill" objectFit="cover" alt={winner.title} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}