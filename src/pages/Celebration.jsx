import React from "react";
import Layout from "../layout/Layout";
import MasonryGallery from "../components/MasonryGallery";

const autisamImages = [
  "/assets/images/celebration/autism/2.webp",
  "/assets/images/celebration/autism/3.webp",
  "/assets/images/celebration/autism/4.webp",
  "/assets/images/celebration/autism/5.webp",
  "/assets/images/celebration/autism/6.webp",

];

const hearingImages = [
  "/assets/images/celebration/hearing/1.webp",
  "/assets/images/celebration/hearing/2.webp",
  "/assets/images/celebration/hearing/3.webp",
  "/assets/images/celebration/hearing/4.webp",
  "/assets/images/celebration/hearing/5.webp",
  "/assets/images/celebration/hearing/6.webp",
  "/assets/images/celebration/hearing/7.webp",
  "/assets/images/celebration/hearing/8.webp",
  "/assets/images/celebration/hearing/9.webp",

];

function Celebration() {
  return (
    <Layout>
      <div>
        <div className="header-height" />
        <div>
          <img
            loading="lazy"
            src="assets/images/banner/celebrationbanner.webp"
            className="img-fluid"
            alt="Banner"
          />
        </div>

        {/* Awareness Section */}
        <section className="my-10">
        <MasonryGallery images={autisamImages} title="Celebration of World Autism Awareness Day" />
        </section>

        {/* Celebration Section */}
        <section className="my-10">
        <MasonryGallery images={hearingImages} title="Celebration of World Hearing Day " />
        </section>
      </div>
    </Layout>
  );
}

export default Celebration;
