"use client";

import { useState } from "react";
import Image from "next/image";

// Third-party imports
import { ChevronDown } from "lucide-react";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";
import { YouTubePlaylistEmbed } from "./youtube-playlist-embed";
import { SvgPattern } from "../svg-pattern";
import { YouTubeChannelEmbed } from "./youtube-channel-embed";

interface About2tteeProps {
  bio: string[];
  musicPlatforms: { platform: string; url: string; logo: string }[];
  watchLive: string;
  bookingEmail: string;
  latestProject: string;
  socialPlatforms: { platform: string; url: string; logo: string }[];
}

export const About2ttee = ({
  bio,
  musicPlatforms,
  watchLive,
  bookingEmail,
  latestProject,
  socialPlatforms,
}: About2tteeProps) => {
  const [selected, setSelected] = useState<
    | "bio"
    | "listen"
    | "watchLive"
    | "bookingEmail"
    | "latestProject"
    | "playlistUrl"
    | "youtubeChannel"
    | "social"
  >("youtubeChannel");

  const tabs = [
    { key: "bio", label: "Bio" },
    { key: "youtubeChannel", label: "Youtube" },
    { key: "listen", label: "Listen" },
    { key: "watchLive", label: "Live" },
    { key: "latestProject", label: "Latest" },
    { key: "playlistUrl", label: "Playlist" },
    { key: "bookingEmail", label: "Bookings" },
    { key: "social", label: "Social" },
  ] as const;

  return (
    <section className="bg-brand-yellow relative">
      <SvgPattern fill="#FFF" />

      <div className="section wrapper w-full pt-16 pb-16">
        <Title
          size="lg"
          weight="normal"
        >
          About 2ttee
        </Title>

        <div className="mt-8 grid grid-cols-12 gap-8">
          <div className="col-span-full flex gap-8 md:col-span-4">
            <Image
              src="/Telepse_digital_marketing_agency_lagos_nigeria_2ttee.jpg"
              alt="Telepse_digital_marketing_agency_lagos_nigeria_2ttee"
              width={500}
              height={500}
              className="h-[500px] w-52 rounded-2xl border-4 border-black object-cover"
            />

            {/* Sidebar Tabs */}
            <div className="flex flex-1 flex-col gap-4">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setSelected(tab.key)}
                  //   className={`cursor-pointer rounded-md px-4 py-2 text-left text-lg font-medium transition ${
                  //     selected === tab.key
                  //       ? "bg-black text-white"
                  //       : "bg-white text-black hover:bg-gray-100"
                  //   }`}
                  className={`flex cursor-pointer justify-between py-2 text-lg font-semibold transition ${selected === tab.key ? "border-b-2 border-black" : "border-b-2 border-white"}`}
                >
                  {tab.label} <ChevronDown />
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="col-span-full rounded-2xl bg-white p-4 sm:p-6 md:col-span-8">
            {/* 1. Bio */}
            {selected === "bio" && (
              <div className="space-y-2">
                {bio.map((paragraph, index) => (
                  <Paragraph key={index}>{paragraph}</Paragraph>
                ))}
              </div>
            )}

            {selected === "youtubeChannel" && <YouTubeChannelEmbed />}

            {/* 2. Listen */}
            {selected === "listen" && (
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                {musicPlatforms.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="flex flex-1 transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                  >
                    <Image
                      src={item.logo}
                      alt={item.platform}
                      width={100}
                      height={100}
                      className="size-16 object-cover"
                    />
                    <Paragraph
                      align="center"
                      size="lg"
                    >
                      {item.platform}
                    </Paragraph>
                  </a>
                ))}
              </div>
            )}

            {/* 3. Watch live performance */}
            {selected === "watchLive" && (
              <iframe
                className="h-[400px] w-full rounded-2xl"
                src={watchLive}
                title="2ttee live performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}

            {/* 4. Bookings */}
            {selected === "bookingEmail" && (
              <div className="flex h-100 flex-col items-center justify-center gap-2 rounded-2xl bg-white p-6">
                <Image
                  src="/music_icons/email.png"
                  alt="Email"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Paragraph size="xl">
                  <a href={`mailto:${bookingEmail}`}>{bookingEmail}</a>
                </Paragraph>
              </div>
            )}

            {/* 5. Latest project */}
            {selected === "latestProject" && (
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/music_icons/Album-Pre-Order_-Feb.-1-March-31.png"
                  alt="Album Project"
                  width={500}
                  height={500}
                  className="h-[400px] w-full rounded-2xl object-cover"
                />
                {/* <Paragraph size="lg">{latestProject}</Paragraph> */}
                <p
                  className="text-center text-lg leading-loose sm:text-xl"
                  dangerouslySetInnerHTML={{ __html: latestProject }}
                />
              </div>
            )}

            {/* 6. Playlist */}
            {selected === "playlistUrl" && <YouTubePlaylistEmbed />}

            {/* 7. Social */}
            {selected === "social" && (
              <div className="flex h-full items-center justify-center gap-12">
                {socialPlatforms.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="flex transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                  >
                    <Image
                      src={item.logo}
                      alt={item.platform}
                      width={100}
                      height={100}
                      className="size-16 object-cover"
                    />
                    <Paragraph
                      align="center"
                      size="lg"
                    >
                      {item.platform}
                    </Paragraph>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full -rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </section>
  );
};
