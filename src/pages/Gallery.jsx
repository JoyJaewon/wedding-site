import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api/firebase";
import ImageCard from "../components/ImageCard";
import OurStory from "../components/OurStory";

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
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold my-2 mt-10">갤러리</h2>
        <div>"저희의 소중한 추억들을 여러분과 공유합니다"</div>
      </div>
      <OurStory />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {images &&
          images.map((image) => <ImageCard key={image.id} image={image} />)}
      </ul>
    </>
  );
}
