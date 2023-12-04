import React from "react";

export default function ImageCard({ image }) {
  const { image: imageUrl, title } = image;
  if (!imageUrl || !title) {
    return <div>Image not available</div>;
  }

  return (
    <li className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105">
      <img className="w-full" src={imageUrl} alt={title} />
    </li>
  );
}
