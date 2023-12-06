import React, { useState, useEffect } from "react";
import { getVideo } from "../api/firebase";

const OurStory = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo().then((fetchedVideos) => {
      setVideos(fetchedVideos);
    });
  }, []);

  return (
    <div className="mt-7">
      {videos.map((videoUrl, index) => (
        <video
          key={index}
          className="w-full"
          poster="/images/video-poster.jpg"
          controls
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default OurStory;
