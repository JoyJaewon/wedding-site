import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api/firebase";
import ImageCard from "../components/ImageCard";

export default function Gallery() {
  const {
    isLoading,
    error,
    data: images,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: getImages,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {images &&
          images.map((image) => <ImageCard key={image.id} image={image} />)}
      </ul>
    </>
  );
}
