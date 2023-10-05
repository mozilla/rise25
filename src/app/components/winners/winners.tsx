'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Info } from "../icons"
import { data } from '@/app/lib/data';
import { gtag } from "@/app/lib";

export const Winners = ({ enabled }: { enabled: boolean }) => {
    let cardsIndex = 0;
    const { winnerGroups } = data;
    const cardGroups = useRef<HTMLDivElement[]>([]);
    const [focusedCardIndex, setFocusedCardIndex] = useState<number | null>(0)
    const [isCardExpanded, setIsCardExpanded] = useState(false)

    const createCardsGroupRefs = (card: HTMLDivElement | null, index: number) => {
        if (card) {
            (cardGroups.current as HTMLDivElement[])[index] = card;
        }
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, index: number, location: string) => {
        gtag({
            action: `Link to: ${location}`,
            category: "Cards nav item click"
        })
    }

    console.log("FOCUSED CARD INDEX: ", focusedCardIndex);

    if (!enabled) {
        return <></>
    }

    return (
        <div id="winners" className={`winners-wrap text-white section section--xl w-full flex items-center min-h-screen`}>
            <div className="container container--2xl">
                <nav className="group-navigation">
                    <ul className="group-navigation-list">
                        {winnerGroups.map((item, groupIndex) => (
                            <React.Fragment key={groupIndex}>
                                <li className="group-navigation-item" key={groupIndex}>
                                    <a className="group-card-link" href={`#${item.group.slug}`} onClick={(e) => handleLinkClick(e, groupIndex, item.group.name)}>
                                        {item.group.name}
                                    </a>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>

                <div className="winners">
                    {winnerGroups.map((item, groupIndex) => {
                        return (
                            <div key={groupIndex} className="winner-group">
                                {item.group && (
                                    <div id={item.group.slug} className="group-card" ref={(e) => createCardsGroupRefs(e, groupIndex)}>
                                        <div className={`group-card-inner`}>
                                            <h2 className={`group-card-title`}>{item.group.name}</h2>
                                            <p className="text-lg">{item.group.description}</p>
                                        </div>
                                        <Image priority className={`z-0`} src={item.group.imgSrc} layout="fill" style={{ objectFit: "fill" }} alt={item.group.name} />
                                    </div>
                                )}
                                {item.winners.map((winner, winnerIndex) => {
                                    const cardIndex = groupIndex * item.winners.length + winnerIndex + 1;

                                    return (
                                        <div
                                            key={winnerIndex}
                                            tabIndex={0}
                                            className={`winner card group`}
                                            aria-label={`Winner: ${winner.title}`}
                                            aria-selected={focusedCardIndex === cardIndex ? 'true' : 'false'}
                                            aria-expanded={focusedCardIndex === cardIndex && isCardExpanded ? 'true' : 'false'}
                                            onFocus={() => setFocusedCardIndex(cardIndex)}
                                        >
                                            <div className="winner-footer">
                                                <h3 className="winner-name">{winner.title}</h3>
                                                <div className="winner-icon">
                                                    <Info className="group-active:hidden group-hover:hidden" />
                                                </div>
                                            </div>
                                            <div className="winner-modal" tabIndex={0}
                                                onFocus={() => setIsCardExpanded(focusedCardIndex === cardIndex)}
                                                onBlur={() => {
                                                    setIsCardExpanded(false)
                                                    setFocusedCardIndex(null)
                                                }}
                                            >
                                                <div className="winner-bio" dangerouslySetInnerHTML={{ __html: winner.bio }} />
                                            </div>
                                            <Image src={winner.imgSrc} layout="fill" style={{ objectFit: "cover" }} placeholder="blur" blurDataURL={winner.blurImgSrc} alt={winner.title} />
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