import React, { useEffect, useRef } from 'react';
import './LiveWallpaper.css';

const LiveWallpaper = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="live-wallpaper">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        className="wallpaper-video"
      >
        <source src="/sung-jinwoo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default LiveWallpaper; 