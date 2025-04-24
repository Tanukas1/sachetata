import React, { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./MasonryGallery.css";

const MasonryGallery = ({ images, title ,subtitle}) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const msnry = new Masonry(gridRef.current, {
      itemSelector: ".masonry-item",
      percentPosition: true,
      gutter: 0, 
    });

    imagesLoaded(gridRef.current, () => {
      msnry.layout();
    });

    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: false,
      animated: true,
    });

    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  return (
    <div className="container mx-auto px-4 padding">
      <div className="section-heading text-center mb-4">
        <h2>{title}</h2>
        <span className="heading-border" />
        <p>{subtitle}</p>
      </div>

      <div ref={gridRef} className="row no-gutters masonry-grid">
        {images.map((src, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 masonry-item">
            <a href={src} data-fancybox="gallery">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="img-fluid p-2"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
