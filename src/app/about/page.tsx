/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

import { useEffect, useState } from "react";

// Local imports
import { Break } from "@/components/home/break";
import { VideoPlayer } from "@/components/about/video-player";
import { ServicesAcordium } from "@/components/about/services-acordium";
import { TopTeam } from "@/components/about/top-team";
import { ShortStory } from "@/components/about/short-story";
import { AboutSocials } from "@/components/about/about-socials";
import { TestimonialSlider } from "@/components/home/testimonial-slider";
import { AboutBanner } from "@/components/about/about-banner";
import { PageBlock } from "@/components/page-block";

export default function AboutPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!showVideo) return;

    let player: any;

    const loadYouTubeScript = () => {
      return new Promise<void>(resolve => {
        if (window.YT && window.YT.Player) {
          resolve();
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          document.body.appendChild(tag);

          window.onYouTubeIframeAPIReady = () => {
            resolve();
          };
        }
      });
    };

    const createPlayer = () => {
      const interval = setInterval(() => {
        const el = document.getElementById("youtube-player");
        if (el && window.YT) {
          clearInterval(interval);

          player = new window.YT.Player("youtube-player", {
            height: "448",
            width: "448",
            videoId: "pjROXV35b8s",
            playerVars: {
              autoplay: 1,
            },
            events: {
              onReady: () => {
                setIsLoading(false); // ✅ stop loading spinner
              },
              onStateChange: (event: any) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                  player?.destroy(); // ✅ destroy the video player
                  setShowVideo(false); // ✅ show thumbnail again
                }
              },
            },
          });
        }
      }, 100);
    };

    loadYouTubeScript().then(createPlayer);

    // Cleanup when component unmounts or showVideo becomes false
    return () => {
      if (player?.destroy) {
        player.destroy();
      }
    };
  }, [showVideo]);

  return (
    <>
      <AboutBanner />

      <ShortStory />

      <Break />

      <VideoPlayer
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      <ServicesAcordium />
      {/* <OurServices /> */}

      <TestimonialSlider />

      <TopTeam />

      <PageBlock title="Find us on social">
        <AboutSocials />
      </PageBlock>
    </>
  );
}
