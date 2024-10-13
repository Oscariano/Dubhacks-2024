import React, { useEffect } from "react";
import "aframe";
import "./AFrameScene.css";

const AFrameScene = () => {
  useEffect(() => {
    // Logic to handle A-Frame interaction if needed
  }, []);

  return (
    <a-scene>
      {/* 20 Planes with animations */}
      <a-plane
        position="-10 10 -5"
        width="2"
        height="1.8"
        class="clickable"
        material="src: url(https://images.unsplash.com/photo-1520171363530-4c56f3cba4d5);"
        animation="property: position; to: -5 3.6 -5; dur: 1000; delay: 0; easing: ease-in-out;"
      ></a-plane>

      <a-plane
        position="-10 -10 -5"
        width="1.6"
        height="1.8"
        class="clickable"
        material="src: url(https://images.unsplash.com/photo-1520171363530-4c56f3cba4d5);"
        animation="property: position; to: -3.2 3.6 -5; dur: 1000; delay: 200; easing: ease-in-out;"
      ></a-plane>

      <a-plane
        position="10 10 -5"
        width="2.9"
        height="1.8"
        class="clickable"
        material="src: url(https://images.unsplash.com/photo-1520171363530-4c56f3cba4d5);"
        animation="property: position; to: -0.95 3.6 -5; dur: 1000; delay: 400; easing: ease-in-out;"
      ></a-plane>

      <a-plane
        position="10 -10 -5"
        width="2.1"
        height="1.8"
        class="clickable"
        material="src: url(https://images.unsplash.com/photo-1520171363530-4c56f3cba4d5);"
        animation="property: position; to: 1.55 3.6 -5; dur: 1000; delay: 600; easing: ease-in-out;"
      ></a-plane>

      <a-plane
        position="-15 0 -5"
        width="3.4"
        height="1.8"
        class="clickable"
        material="src: url(https://images.unsplash.com/photo-1520171363530-4c56f3cba4d5);"
        animation="property: position; to: 4.3 3.6 -5; dur: 1000; delay: 800; easing: ease-in-out;"
      ></a-plane>

      {/* Additional planes (remaining 15 planes) */}

      {/* Sky and lighting */}
      <a-sky color="#e6a900"></a-sky>
      <a-light
        type="directional"
        position="0 4 4"
        intensity="1"
        color="#FFF"
      ></a-light>

      {/* Camera */}
      <a-entity camera position="0 3 10" look-controls wasd-controls></a-entity>
    </a-scene>
  );
};

export default AFrameScene;
