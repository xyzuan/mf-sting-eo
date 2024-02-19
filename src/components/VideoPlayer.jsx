import React, { useRef, useEffect } from 'react';
import JSMpeg from 'jsmpeg-player';

const VideoPlayer = () => {
  const canvasRef = useRef(null);
  const playerRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const url = `ws://${window.location.hostname}:5000/`;
    const player = new JSMpeg.Player(url, { canvas });
    playerRef.current = player;

    return () => {
      player.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} id="video-canvas" />;
};

export default VideoPlayer;