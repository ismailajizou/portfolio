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
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  // get the font
  const spaceMono = await font();
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
          fontSize: 24,
          fontWeight: 700,
          textAlign: 'center',
          fontFamily: 'Space Mono',
          borderRadius: '10%'
        }}
      >
        <div
          style={{
            backgroundImage:
              'linear-gradient(to right, #06b6d4, #3b82f6, #2563eb)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          IA
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageReponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Space Mono',
          data: spaceMono,
          weight: 700,
        },
      ],
    }
  );
}
