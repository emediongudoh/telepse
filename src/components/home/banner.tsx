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
import CountUp from "react-countup";

// Local imports
import { SvgPattern } from "../svg-pattern";

export const Banner = () => {
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
    <section
      style={{
        backgroundImage: `url(/home-bg.jpg)`,
      }}
      className="bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <SvgPattern fill="#FFF" />

      <div className="wrapper grid min-h-[90vh] grid-cols-1 items-center p-4 md:grid-cols-2">
        {/* Banner content */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-semibold sm:text-6xl">
            Next level <br /> digital marketing <br /> at your own pace
          </h1>
          <p className="text-lg leading-loose">
            Adding value and delivering value through effective marketing
            strategies <br /> proven for your business growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button
                variant="ghost"
                size="lg"
                className="h-12 border border-black bg-white hover:bg-transparent"
              >
                Learn more{" "}
                <ArrowRightCircleIcon className="size-7 -rotate-45" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="default"
                size="lg"
                className="h-12 border border-black hover:bg-transparent hover:text-black"
              >
                Book free consultation <CalendarClock />
              </Button>
            </Link>

            <Image
              src="/up-arrow.png"
              alt="Up arrow"
              width={120}
              height={120}
              className="hidden size-20 -scale-x-100 object-contain sm:inline-block"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 sm:gap-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="fill-black"
                />
              ))}
            </div>

            <p className="text-lg">Rated 5/5 - from multiple industries</p>
          </div>
        </div>

        {/* Banner image */}
        <div className="relative hidden items-center justify-end justify-self-end md:flex">
          {showVideo ? (
            <div className="relative size-[448px]">
              {isLoading && (
                <div className="bg-opacity-80 absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-8 border-black bg-transparent">
                  <LoaderCircle className="size-14 animate-spin" />
                </div>
              )}
              <div
                id="youtube-player"
                className="size-full overflow-hidden rounded-2xl border-8 border-black"
              />
            </div>
          ) : (
            <div className="relative">
              <Image
                src="/banner.jpg"
                alt="Banner Thumbnail"
                width={400}
                height={400}
                className="size-[448px] rounded-2xl border-8 border-black object-cover"
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

          {!showVideo && (
            <div className="absolute bottom-0 left-1/4 flex -translate-x-1/4 translate-y-1/4 items-center gap-4 rounded-2xl bg-white p-4">
              <div className="rounded-2xl bg-[#F5B341] p-4">
                <Image
                  src="/trend.png"
                  alt="Trend"
                  width={100}
                  height={100}
                  className="size-10 object-contain"
                />
              </div>

              <div className="font-semibold">
                <h2 className="text-3xl">
                  <CountUp
                    start={0}
                    end={600}
                    duration={5}
                    enableScrollSpy
                    scrollSpyDelay={500}
                  />
                  %
                </h2>
                <p className="text-muted-foreground text-xl">
                  Increase in leads
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
