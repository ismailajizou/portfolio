import { env } from '@/env/client.mjs';
import { ImageResponse } from 'next/server';

const font = async () => {
  const data = await fetch(
    `${env.NEXT_PUBLIC_APP_URL}/fonts/SpaceMono-Bold.ttf`
  );
  const font = await data.arrayBuffer();
  return font;
};
// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Ismail Ajizou';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  const fontBuffer = await font();
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: 'black',
          fontSize: 96,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: 'center',
          fontFamily: 'Space Mono',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${env.NEXT_PUBLIC_APP_URL}/icons/icon.svg`}
          alt='Ismail Ajizou'
          width={200}
          height={200}
        />
        <div
          style={{
            backgroundImage:
              'linear-gradient(to right, #06b6d4, #3b82f6, #2563eb)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Ismail Ajizou
        </div>
      </div>
    ),
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageReponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Space Mono',
          data: fontBuffer,
          weight: 700,
        },
      ],
    }
  );
}
