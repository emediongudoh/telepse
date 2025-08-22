"use client";

import { YOUTUBE_VIDEOS } from "@/constants";

export const YouTubeChannelEmbed = () => {
  return (
    <div className="tiny--wrapper section aspect-video w-full">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed?listType=playlist&list=UUdpggibNNsQvHU1ntKGvVzQ"
        // src="http://youtube.com/channel/UCdpggibNNsQvHU1ntKGvVzQ"
        title="YouTube channel uploads"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {YOUTUBE_VIDEOS.map((item, index) => (
          <iframe
            key={index}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed?listType=playlist&list=UUdpggibNNsQvHU1ntKGvVzQ&index=2"
            // src="http://youtube.com/channel/UCdpggibNNsQvHU1ntKGvVzQ"
            title="YouTube channel uploads"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
};
