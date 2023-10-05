/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'
import { data } from './lib/data'
// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Mozilla | Rise25'
export const size = {
    width: 1000,
    height: 569,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    const { ogImage } = data;

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 120,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img alt={alt} src={`data:image/png;base64,${ogImage}`} />
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}