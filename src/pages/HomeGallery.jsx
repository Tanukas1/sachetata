import React, { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./Gallery.css"; 
const previewImages = [
  {
    src: "assets/images/gallery/g-1.webp",
    caption: "Session on red flags of hearing loss, Roorkee",
  },
  {
    src: "assets/images/gallery/g-2.webp",
    caption: "Awareness session for families",
  },
  {
    src: "assets/images/gallery/g-3.webp",
    caption: "Road side awareness campaign at Janeshwar Mishra Park, Lucknow",
  },
  {
    src: "assets/images/gallery/g-4.webp",
    caption: "Teacher training session",
  },
  {
    src: "assets/images/gallery/g-11.webp",
    caption: "Sensitization for CwSN at a govt School, Jaipur",
  },
  {
    src: "assets/images/gallery/g-13.webp",
    caption: "Sensitization for CwSN at Kangan, J&K",
  },
];

function HomeGallery() {
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

    Fancybox.bind("[data-fancybox='home-gallery']", {
      Toolbar: false,
      animated: true,
    });

    return () => {
      Fancybox.unbind("[data-fancybox='home-gallery']");
    };
  }, []);

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="section-heading text-center mb-4">
          <h2>Gallery</h2>
          <span className="heading-border" />
        </div>

        <div ref={gridRef} className="row no-gutters masonry-grid">
          {previewImages.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 masonry-item">
              <a
                href={item.src}
                data-fancybox="home-gallery"
                data-caption={item.caption}
                className="hover-overlay-wrapper d-block position-relative"
              >
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid p-2"
                />
                <div className="hover-overlay">
                  <div className="hover-text">{item.caption}</div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="/gallery" class="default-btn">
            {" "}
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeGallery;
