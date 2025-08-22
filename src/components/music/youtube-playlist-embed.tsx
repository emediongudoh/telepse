"use client";

export const YouTubePlaylistEmbed = () => {
  return (
    <iframe
      className="h-100 w-full rounded-2xl"
      src="https://www.youtube.com/embed/videoseries?list=PLZ1Rs2Gpz92w1djlEy7KMDRzpDHNMBp2c"
      title="YouTube playlist"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};
