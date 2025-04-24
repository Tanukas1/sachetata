// import React, { useEffect } from 'react';
// import $ from 'jquery';
// // import 'nivo-slider/jquery.nivo.slider.css';
// import { WOW } from 'wowjs';
// window.jQuery = $;
// const Crausel = () => {
//   useEffect(() => {
//     // Initialize Nivo Slider
//     $('#main-slider').nivoSlider({
//       effect: 'fade', // Specify effects here
//       animSpeed: 500, // Slide transition speed
//       pauseTime: 3000, // How long each slide will show
//       startSlide: 0, // Set starting Slide (0 index)
//       directionNav: true, // Next & Prev navigation
//       controlNav: false, // 1,2,3... navigation
//       pauseOnHover: true, // Stop animation while hovering
//       manualAdvance: false, // Force manual transitions
//     });
//     // Initialize WOW.js for animations
//     new WOW().init();
//   }, []);

//   return (
//     <section className="slider-section">
//       <div className="slider-wrapper">
//         <div id="main-slider" className="nivoSlider">
//           <img src="assets/img/slider-1.webp" alt="" title="#slider-caption-1" />
//           <img src="assets/img/slider-2.webp" alt="" title="#slider-caption-2" />
//           <img src="assets/img/slider-3.webp" alt="" title="#slider-caption-3" />
//         </div>
//         <div id="slider-caption-1" className="nivo-html-caption slider-caption">
//           <div className="display-table">
//             <div className="table-cell">
//               <div className="container">
//                 <div className="slider-text">
//                   <h5 className="wow fadeInBottom">Join Us Today</h5>
//                   <h1 className="wow leFadeInRight sequence">Better Life for People</h1>
//                   <p className="wow fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br />Forget what you can get and see what you can give.</p>
//                   <a href="#" className="default-btn wow fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
//                   <a href="#" className="default-btn wow fadeInBottom" data-wow-delay="0.8s">Donate Now</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="slider-caption-2" className="nivo-html-caption slider-caption">
//           <div className="display-table">
//             <div className="table-cell">
//               <div className="container">
//                 <div className="slider-text">
//                   <h1 className="wow fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Together we <br />can make a Difference</h1>
//                   <p className="wow fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br />Forget what you can get and see what you can give.</p>
//                   <a href="#" className="default-btn wow fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
//                   <a href="#" className="default-btn wow fadeInBottom" data-wow-delay="0.8s">Donate Now</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div id="slider-caption-3" className="nivo-html-caption slider-caption">
//           <div className="display-table">
//             <div className="table-cell">
//               <div className="container">
//                 <div className="slider-text">
//                   <h5 className="wow fadeInBottom">Join Us Today</h5>
//                   <h1 className="wow lePushReleaseFrom sequence" data-wow-delay="1s">Give a little. Change a lot.</h1>
//                   <p className="wow fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br />Forget what you can get and see what you can give.</p>
//                   <a href="#" className="default-btn wow fadeInBottom" data-wow-delay="0.8s">Join With Us</a>
//                   <a href="#" className="default-btn wow fadeInBottom" data-wow-delay="0.8s">Donate Now</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Crausel;
