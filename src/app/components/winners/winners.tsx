'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { Close, Info } from "../icons"
import { data } from '@/app/lib/data';
import { gtag } from "@/app/lib";

export const Winners = ({ enabled }: { enabled: boolean }) => {
    let cardsIndex = 0;
    const { winnerGroups } = data;
    const cardGroups = useRef<HTMLDivElement[]>([]);

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

    if (!enabled) {
        return <></>
    }

    return (
        <div id="winners" className={`winners-wrap text-white section section--xl w-full flex items-center min-h-screen`}>
            <div className="container container--2xl">
                <div className="group-navigation">
                    {winnerGroups.map((item, groupIndex) => (
                        <React.Fragment key={groupIndex}>
                            <div className="group-navigation-item" key={groupIndex}>
                                <a className="group-card-link" href={`#${item.group.slug}`} onClick={(e) => handleLinkClick(e, groupIndex, item.group.name)}>
                                    {item.group.name}
                                </a>
                            </div>
                            {groupIndex < winnerGroups.length - 1 && <span> / </span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="winners">
                    {winnerGroups.map((item, groupIndex) => {
                        cardsIndex++;
                        return (
                            <div key={groupIndex} className="winner-group">
                                {item.group && (
                                    <div id={item.group.slug} data-id={cardsIndex} className="group-card" ref={(e) => createCardsGroupRefs(e, groupIndex)}>
                                        <div className={`group-card-inner`}>
                                            <h3 className={`group-card-title`}>{item.group.name}</h3>
                                            <p className="text-lg">{item.group.description}</p>
                                        </div>
                                        <Image priority className={`z-0`} src={item.group.imgSrc} layout="fill" style={{ objectFit: "fill" }} alt={item.group.name} />
                                    </div>
                                )}
                                {item.winners.map((winner, winnerIndex) => {
                                    cardsIndex++
                                    return (
                                        <div key={winnerIndex} data-id={cardsIndex} className="winner card group">
                                            <div className="winner-name">
                                                {winner.title}
                                                <div className="winner-tap-info">
                                                    <Info className="group-active:hidden group-hover:hidden" />
                                                </div>
                                            </div>
                                            <div className="winner-info">
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