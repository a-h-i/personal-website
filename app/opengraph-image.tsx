import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const alt =
  'Ahmed H. Ismail, senior full-stack and platform engineer, on a street in Porto, Portugal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Read from disk rather than a URL: this route is prerendered at build time, and
// next/og cannot resolve /public by path at render time.
const photo = readFileSync(join(process.cwd(), 'public', 'me_wide.jpg'));
const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        backgroundColor: '#0f172a',
      }}
    >
      {/*
        The source is 2048x1152 (16:9) and the card is 1.905:1, so cover crops
        77px of height. Anchored to the top because there is almost no headroom
        above the subject — the crop has to come off the bottom.
      */}
      <img
        src={photoSrc}
        width={size.width}
        height={size.height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />

      {/*
        Scrim holds the type legible over the busy left third, and fades out
        before the face (which sits at roughly 62% across) so it is never veiled.
      */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          background:
            'linear-gradient(90deg, #0f172a 0%, rgba(15,23,42,0.94) 34%, rgba(15,23,42,0.55) 50%, rgba(15,23,42,0.00) 66%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 620,
          height: '100%',
          padding: '0 0 0 72px',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#34d399',
          }}
        >
          Porto · Portugal
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#f8fafc',
          }}
        >
          Ahmed H. Ismail
        </div>
        {/* Echoes the emerald rule the site's nav uses as its active marker. */}
        <div
          style={{
            marginTop: 26,
            width: 64,
            height: 3,
            backgroundColor: '#34d399',
          }}
        />
        {/*
          Two nodes in a flex column rather than one wrapping string: left to
          satori, "Lead" orphans onto a line of its own. A <br /> is not an
          option, since it would make the div multi-child without a display.
        */}
        <div
          style={{
            marginTop: 26,
            display: 'flex',
            flexDirection: 'column',
            fontSize: 30,
            lineHeight: 1.28,
            color: '#e2e8f0',
          }}
        >
          <div>Senior Full-Stack</div>
          <div>& Platform Engineer</div>
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 22,
            color: '#6ee7b7',
          }}
        >
          ahm3dhisham.com
        </div>
      </div>
    </div>,
    size,
  );
}
