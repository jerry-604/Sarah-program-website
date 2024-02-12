// components/YouTubeVideo.js
import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="relative pt-[56%] overflow-hidden rounded-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
