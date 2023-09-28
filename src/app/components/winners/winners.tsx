'use client'

import React from "react"
import Image from 'next/image';
import Link from 'next/link';

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
                                        <h3 className={`group-card-title`}>{group.group.name}</h3>
                                        <p>{group.group.description}</p>
                                    </div>
                                    <Image className={`z-0`} src={group.group.imgSrc} layout="fill" objectFit="cover" alt={group.group.name} />
                                </div>
                            )}
                            {group.winners.map((winner, winnerIndex) => (
                                <div key={winnerIndex} className="winner card">
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