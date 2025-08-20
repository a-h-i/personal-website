import { ImageResponse } from 'next/og';
import SiteIcon from '@/ui/SiteIcon';

export default async function OpengraphImage() {
  return new ImageResponse(
    (<div
      style={{
        fontSize: 64, background: "#0f172b", color: "white",
        width: "100%", height: "100%", display: "flex", padding: 80, alignItems: "flex-end"
      }}
    >
      <SiteIcon />
      <p>Ahmed Ismail — Senior Software Developer</p>
    </div>)
  );
}