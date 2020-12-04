import React from "react";
import "./VideoCard.css";
function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://images.unsplash.com/photo-1607062088573-f6b259c6ea0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
      <p>This is a film about cosing</p>
      <h2>Movie title</h2>
      <p>Number of likes</p>
    </div>
  );
}

export default VideoCard;
