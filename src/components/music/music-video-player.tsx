import Image from "next/image";

// Third-party imports
import { LoaderCircle, Play } from "lucide-react";
import { Button } from "../ui/button";

interface MusicVideoPlayerProps {
  showVideo: boolean;
  isLoading: boolean;
  setShowVideo: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}

export const MusicVideoPlayer = ({
  showVideo,
  isLoading,
  setShowVideo,
  setIsLoading,
}: MusicVideoPlayerProps) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <>
        {showVideo ? (
          <div className="relative h-48 w-[960px] sm:h-[448px]">
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
              src="/offer-banner-3.jpg"
              alt="Banner Thumbnail"
              width={1200}
              height={1200}
              className="h-48 w-[960px] rounded-2xl border-8 border-black object-cover sm:h-[448px]"
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
