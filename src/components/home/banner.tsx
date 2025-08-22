/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Third-party imports
import {
  ArrowRightCircleIcon,
  CalendarClock,
  LoaderCircle,
  Play,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import { useMediaQuery } from "react-responsive";

// Local imports
import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";
import { Paragraph } from "../paragraph";
import { CountupCard } from "./countup-card";

export const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const isMediumScreen = useMediaQuery({
    query: "(max-width: 768px)",
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
            height: isSmallScreen ? "240" : "400",
            width: isSmallScreen ? "320" : "400",
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
    <section
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg.jpg)`,
      }}
      className="bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <SvgPattern fill="#FFF" />

      <div className="wrapper grid min-h-[90vh] grid-cols-1 items-center gap-8 p-4 md:grid-cols-2">
        {/* Banner content */}
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          {isMediumScreen && (
            <Title
              align="center"
              size="lg"
              weight="bold"
            >
              Next level <br /> digital marketing <br /> at your own pace
            </Title>
          )}

          {!isMediumScreen && (
            <Title
              size="lg"
              weight="bold"
            >
              Next level <br /> digital marketing <br /> at your own pace
            </Title>
          )}

          <Paragraph>
            Adding value and delivering value through effective marketing
            strategies <br /> proven for your business growth.
          </Paragraph>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about">
              <Button
                variant="ghost"
                size="xl"
                className="border border-black bg-white hover:bg-black hover:text-white"
              >
                Learn more{" "}
                <ArrowRightCircleIcon className="size-7 -rotate-45" />
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="xl"
              className="border border-black text-black hover:bg-black hover:text-white"
            >
              Book free consultation <CalendarClock />
            </Button>

            <Image
              src="/Telepse_digital_marketing_agency_lagos_nigeria_up_arrow.png"
              alt="Telepse_digital_marketing_agency_lagos_nigeria_up_arrow"
              width={100}
              height={100}
              className="hidden size-20 -scale-x-100 object-contain sm:inline-block"
            />
          </div>

          {/* Rating */}
          <div className="space-y-4">
            <div className="flex justify-center gap-2 sm:gap-4 md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="fill-black"
                />
              ))}
            </div>

            <Paragraph>Rated 5/5 - from multiple industries</Paragraph>
          </div>
        </div>

        {/* Telepse_digital_marketing_agency_lagos_nigeria_banner image */}
        <div className="relative flex items-center justify-center justify-self-center md:justify-end md:justify-self-end">
          {showVideo ? (
            <div className="relative h-[240px] w-[320px] sm:h-[400px] sm:w-[550px]">
              {isLoading && (
                <div className="bg-opacity-80 absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-8 border-black bg-transparent">
                  <LoaderCircle className="size-14 animate-spin" />
                </div>
              )}
              <div
                id="youtube-player"
                className="h-[240px] w-[320px] overflow-hidden rounded-2xl border-8 border-black sm:h-full sm:w-full"
              />
            </div>
          ) : (
            <div className="relative">
              <Image
                src="/Telepse_digital_marketing_agency_lagos_nigeria_banner.jpg"
                alt="Telepse_digital_marketing_agency_lagos_nigeria_banner"
                width={500}
                height={500}
                className="h-60 w-80 rounded-2xl border-8 border-black object-cover sm:h-[400px] sm:w-[550px]"
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

          {!showVideo && <CountupCard />}
        </div>
      </div>
    </section>
  );
};
