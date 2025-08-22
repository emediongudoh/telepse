/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

import { useEffect, useState } from "react";
import Image from "next/image";

// Third-party imports
import { useMediaQuery } from "react-responsive";

// Third-party imports
import { LoaderCircle, Play } from "lucide-react";
import { Button } from "../ui/button";

export const VideoPlayer = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 500px)",
  });

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
            height: isSmallScreen ? "208" : "400",
            width: isSmallScreen ? "100%" : "896",
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
  }, [showVideo, isSmallScreen]);

  return (
    <div className="tiny--wrapper section">
      <>
        {showVideo ? (
          <div className="relative">
            {isLoading && (
              <div className="bg-opacity-80 absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-8 border-black bg-transparent">
                <LoaderCircle className="size-14 animate-spin" />
              </div>
            )}
            <div
              id="youtube-player"
              className="h-[208px] overflow-hidden rounded-2xl border-8 border-black sm:h-[400px] sm:w-[650px] md:w-[700px]"
            />
          </div>
        ) : (
          <div className="relative">
            <Image
              src="/Telepse_digital_marketing_agency_lagos_nigeria_banner_4.jpg"
              alt="Telepse_digital_marketing_agency_lagos_nigeria_banner_4"
              width={1000}
              height={1000}
              className="h-52 w-full rounded-2xl border-8 border-black object-cover sm:h-[400px]"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowVideo(true);
                  setIsLoading(true);
                }}
              >
                <Play className="size-14 cursor-pointer rounded-full bg-white p-3.5" />
              </Button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
