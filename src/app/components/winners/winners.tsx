'use client'

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Instagram, Twitter, Youtube, Web } from "../icons"
import { data } from '@/app/lib/data';
import { gtag } from "@/app/lib";

gsap.registerPlugin(ScrollTrigger);

export const Winners = ({ enabled }: { enabled: boolean }) => {
    const { winnerGroups } = data;
    const cardGroups = useRef<HTMLDivElement[]>([]);
    const slider = useRef<HTMLDivElement | null>(null);
    let cardsIndex = 0;

    const createCardsGroupRefs = (card: HTMLDivElement | null, index: number) => {
        if (card) {
            (cardGroups.current as HTMLDivElement[])[index] = card;
        }
    };

    const animateSlider = (enabled: boolean, slider: React.RefObject<HTMLDivElement | null>) => {
        let ctx = gsap.context(() => {
            if (enabled && slider.current) {
                const slideContainer = slider.current;
                const slideItems = gsap.utils.toArray<HTMLDivElement>('.card');
                const slideContainerWidth = slideItems[0].offsetWidth * slideItems.length;
                //responsive
                let mm = gsap.matchMedia();
                
                mm.add("(min-width: 640px)", () => {
                    gsap.to(slideItems, {
                        xPercent: -100 * (slideItems.length), // Calculate total width based on the number of items
                        ease: 'none',
                        scrollTrigger: {
                            trigger: slideContainer,
                            markers: true, // we need to keep this for some reason, otherwise horizontal scroll doesn't work
                            pin: true,
                            scrub: true,
                            snap: 1 / (slideItems.length - 1), // Calculate snap points
                            start: 'top top',
                            end: () => `+=${slideContainerWidth}`, // Adjust the end value based on container width
                        },
                    });
                });
                
            }
        }, slider);
        return () => ctx.revert();
    };

    const updateAnimationOnResize = () => {
        // Destroy the existing animation and re-animate on resize
        gsap.timeline().clear();
        animateSlider(enabled, slider);
    };

    const onSlideTo = (index: number) => {
        if (cardGroups.current.length > index && cardGroups.current[index]) {
            const slideItems = gsap.utils.toArray<HTMLDivElement>('.card');
            const currentSlideIndex = Number(cardGroups.current[index].dataset.id);
            gsap.to(slideItems, {
                xPercent: -100 * (currentSlideIndex - 1),
                ease: 'none',
            })
        }
    }

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, index: number, location: string) => {
        event.preventDefault();

        onSlideTo(index);

        gtag({
            action: `Link to: ${location}`,
            category: "Cards nav item click"
        })
    }

    useEffect(() => {
        // Attach a window resize event listener
        window.addEventListener('resize', updateAnimationOnResize);
        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('resize', updateAnimationOnResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
        if (enabled && slider.current) {
            animateSlider(enabled, slider);
        }
    }, [enabled]);


    if (!enabled) {
        return <></>
    }


    return (
        <div id="winners" className={`winners-wrap text-white section section--xl w-full flex items-center min-h-screen`} ref={slider}>
            <div className="container container--2xl">
                <div className="group-navigation">
                    {winnerGroups.map((group, groupIndex) => (
                        <React.Fragment key={groupIndex}>
                            <div className="group-navigation-item" key={groupIndex}>
                                <Link className="group-card-link" href={`/`} onClick={(e) => handleLinkClick(e, groupIndex, group.group.name)}>
                                    {group.group.name}
                                </Link>
                            </div>
                            {groupIndex < winnerGroups.length - 1 && <span> / </span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="winners" >
                    {winnerGroups.map((group, groupIndex) => {
                        cardsIndex++;
                        return (
                            <div key={groupIndex} className="winner-group">
                                {group.group && (
                                    <div id={group.group.slug} data-id={cardsIndex} className="group-card card" ref={(e) => createCardsGroupRefs(e, groupIndex)}>
                                        <div className={`group-card-inner`}>
                                            <h3 className={`group-card-title`}>{group.group.name} <ArrowRight className={`h-12 text-[140%]`} />
                                            </h3>
                                            <p className="text-lg">{group.group.description}</p>
                                        </div>
                                        <Image className={`z-0`} src={group.group.imgSrc} layout="fill" objectFit="cover" alt={group.group.name} />
                                    </div>
                                )}
                                {group.winners.map((winner, winnerIndex) => {
                                    cardsIndex++
                                    return (
                                        <div key={winnerIndex} data-id={cardsIndex} className="winner card group">
                                            <div className="winner-name">{winner.title}</div>
                                            <div className="winner-info">
                                                <div className="winner-bio" dangerouslySetInnerHTML={{ __html: winner.bio }} />
                                            </div>
                                            <Image src={winner.imgSrc} layout="fill" objectFit="cover" alt={winner.title} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}