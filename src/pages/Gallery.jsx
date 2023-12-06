import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api/firebase";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function Gallery() {
  const {
    isLoading,
    error,
    data: images,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: getImages,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full text-center">
      <h2 className="text-2xl font-bold my-2 mt-10">갤러리</h2>
      <div>"저희의 소중한 추억들을 여러분과 공유합니다"</div>
      <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        speed={500}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map((image) => (
          <a
            key={image.id}
            className="block overflow-hidden rounded-lg shadow-md cursor-pointer transition-all hover:scale-105"
            data-src={image.image}
            href={image.image}
            data-sub-html={`<h4>${image.title}</h4>`}
          >
            <img
              className="w-full h-full object-cover"
              src={image.image}
              alt={image.title}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
