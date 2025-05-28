import React from 'react';
import './LiveWallpaper.css';

const LiveWallpaper = () => {
  return (
    <div className="live-wallpaper">
      <video autoPlay loop muted playsInline className="wallpaper-video">
        <source src="/sung-jinwoo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default LiveWallpaper; 