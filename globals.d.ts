declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: unknown;
  }
}
