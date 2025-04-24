import React, { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Layout from "../layout/Layout";
import "./Gallery.css"; 

const galleryImages = [
  {
    src: "assets/images/gallery/g-5.webp",
    caption: "Teacher empowerment program at APS Jaipur",
  },
  {
    src: "assets/images/gallery/g-6.webp",
    caption: "Teacher empowerment program at APS Jaipur",
  },
  {
    src: "assets/images/gallery/g-7.webp",
    caption: "Early identification drive at Army Goodwill School, Kashmir,  J&K",
  },
  {
    src: "assets/images/gallery/g-8.webp",
    caption: "Medical camp at Kashmir, J&K",
  },
  {
    src: "assets/images/gallery/g-9.webp",
    caption: "Orientation of teachers regarding communication difficulties at APS, Jaipur",
  },
  {
    src: "assets/images/gallery/g-10.webp",
    caption: "Teacher empowerment program at Army Goodwill School, Pahalgaon, J&K",
  },
  {
    src: "assets/images/gallery/g-11.webp",
    caption: "Sensitization for CwSN at a govt School, Jaipur",
  },
  {
    src: "assets/images/gallery/g-12.webp",
    caption: "Teachers training workshop  at Anantnag, J&K",
  },
  {
    src: "assets/images/gallery/g-13.webp",
    caption: "Sensitization for CwSN at Kangan, J&K",
  },
  {
    src: "assets/images/gallery/g-14.webp",
    caption: "Early identification drive at Army Goodwill School, Kashmir, J&K",
  },
  {
    src: "assets/images/gallery/g-15.webp",
    caption: "Awareness session on hearing prevention and vocal hygiene at a school, J&K ",
  },
  {
    src: "assets/images/gallery/g-16.webp",
    caption: "Orientation of teachers regarding communication difficulties at a school, Lucknow",
  },
  {
    src: "assets/images/gallery/g-17.webp",
    caption: "Orientation of teachers and students regarding inclusion at a school in Kashmir",
  },
  {
    src: "assets/images/gallery/g-18.webp",
    caption: "Teacher orientation session on identification of red flags of developmental disorders at Delhi Cantt.",
  },
  {
    src: "assets/images/gallery/g-19.webp",
    caption: "Session on how to cater to the needs of children with hearing impairment at CAPPS, Lucknow Cantt",
  },
  {
    src: "assets/images/gallery/g-20.webp",
    caption: "Orientation of parents ron red flags for communication difficulties, Lucknow Cantt",
  },
  {
    src: "assets/images/gallery/g-21.webp",
    caption: "Orientation of parents regarding communication difficulties at Roorkee ",
  },
];

function Gallery() {
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
    <Layout>
      <div className="header-height" />
      <div>
        <img
          loading="lazy"
          src="assets/images/banner/gallerybanner.webp"
          className="img-fluid"
          alt="Banner"
        />
      </div>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Gallery</h2>
            <span className="heading-border d-block mx-auto mb-3" />
            <p>
              Discover the transformative initiatives and programs at Sachetataa
              Foundation dedicated to empowering.
            </p>
          </div>

          <div ref={gridRef} className="row no-gutters masonry-grid">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-4 masonry-item"
              >
                <a
                  href={item.src}
                  data-fancybox="gallery"
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
        </div>
      </section>
    </Layout>
  );
}

export default Gallery;
