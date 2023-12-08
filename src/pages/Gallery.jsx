import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api/firebase";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();
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

  const licenseKey = process.env.REACT_APP_LIGHTGALLERY_LICENSE_KEY;

  return (
    <div className="w-full text-center px-3 lg:px-10">
      <div className="text-4xl font-light my-2 mt-24 text-3">
        {t("Gallery")}
      </div>
      <div className="text-lg text-5 mb-10">" {t("gallery-sub")}"</div>
      <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        speed={500}
        elementClassNames="gallery-masonry"
        licenseKey={licenseKey}
      >
        {images.map((image) => (
          <a
            key={image.id}
            className="gallery-item"
            data-src={image.image}
            href={image.image}
            data-sub-html={`<h4>${image.title}</h4>`}
          >
            <img
              className="gallery-image"
              src={image.image}
              alt={image.title}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
