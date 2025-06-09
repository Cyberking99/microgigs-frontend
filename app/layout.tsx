import '@coinbase/onchainkit/styles.css';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
    description: "Decentralized Gig Marketplace",
      icons: {
        icon: "/favicon.ico",
      },
    other: {
      "fc:frame": JSON.stringify({
        version: process.env.NEXT_PUBLIC_VERSION,
        imageUrl: process.env.NEXT_PUBLIC_IMAGE_URL,
        button: {
          title: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: URL,
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL,
            splashBackgroundColor: `#${process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR}`,
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      {/* <meta name="fc:frame" content='{"version":"next","imageUrl":"https://micro-gigs.vercel.app/image.png","button":{"title":"🚩 Start","action":{"type":"launch_frame","name":"MicroGig","url":"https://micro-gigs.vercel.app","splashImageUrl":"https://micro-gigs.vercel.app/splash.png","splashBackgroundColor":"#2563EB"}}}' /> */}
        </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
