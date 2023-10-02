'use client'

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Instagram, Twitter, Youtube, Web } from "../icons"
import { data } from '@/app/lib/data';

gsap.registerPlugin(ScrollTrigger);

export const Winners = ({ enabled }: { enabled: boolean }) => {
    const { winnerGroups } = data;
    const slider = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (enabled) {
                const slideContainer = slider.current;
                const slideItems = slideContainer.querySelectorAll('.card');

                gsap.to(slideItems, {
                    xPercent: -100 * (slideItems.length - 1), // Calculate total width based on the number of items
                    ease: 'none',
                    scrollTrigger: {
                        trigger: slideContainer,
                        pin: true,
                        scrub: true,
                        snap: 1 / (slideItems.length - 1), // Calculate snap points
                        end: () => `+=${slideContainer.offsetWidth}`, // Adjust the end value based on container width
                    },
                });
            }
        }, slider.current); // Use slider.current to access the DOM element
        return () => ctx.revert();
    }, [enabled]);

    if (!enabled) {
        return <></>
    }

    return (
        <>

            <div id="winners" className={` text-white section section--xl`}>
                <div className="container container--2xl">
                    <div className="group-navigation">
                        {winnerGroups.map((group, groupIndex) => (
                            <React.Fragment key={groupIndex}>
                                <div className="group-navigation-item" key={groupIndex}>
                                    <Link className="group-card-link" href={`#${group.group.slug}`}>
                                        {group.group.name}
                                    </Link>
                                </div>
                                {groupIndex < winnerGroups.length - 1 && <span> / </span>}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="winners" ref={slider}>
                        {winnerGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="winner-group">
                                {group.group && (
                                    <div id={group.group.slug} className="group-card card">
                                        <div className={`group-card-inner`}>
                                            <h3 className={`group-card-title`}>{group.group.name} <ArrowRight className={`h-12 text-[140%]`} />
                                            </h3>
                                            <p className="text-lg">{group.group.description}</p>
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
        </>
    )
}