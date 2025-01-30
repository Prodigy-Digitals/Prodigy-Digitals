import React from 'react';
import dynamic from 'next/dynamic';
import Scard from './Scard';

// Dynamically import Splide to avoid SSR issues
const Splide = dynamic(() => import('@splidejs/react-splide'), { ssr: false });
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

const Services_Cards = () => {
  const serviceData = [
    {
      img: "./s1.png",
      head: "UX/UI Design",
      text: "We specialize in creating intuitive and visually appealing user experiences. Our UX/UI designs are crafted to ensure seamless interaction, enhance usability, and align with your brand's identity.",
      subhead: "Our Offerings",
      arr: ["Custom UX/UI Design", "Responsive Design", "Web and Mobile App Design"]
    },
    {
      img: "./s2.png",
      head: "Portfolio Design",
      text: "We take pride in transforming ideas into visually captivating and impactful designs. Our portfolio reflects the essence of innovation, precision, and dedication to delivering exceptional creative solutions",
      subhead: "What We Offer",
      arr: ["Customized Layouts", "Interactive Digital Portfolios", "Print-Ready Designs"]
    },
    // ... add other service data similarly
  ];

  return (
    <div className="relative z-0 px-4 md:px-6 lg:px-8">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 3000,
          resetProgress: false,
          arrows: false,
          perPage: 3,
          pagination: false,
          gap: '1rem',
          breakpoints: {
            1536: { // 2xl
              perPage: 3,
              gap: '1.5rem',
            },
            1280: { // xl
              perPage: 3,
              gap: '1.25rem',
            },
            1024: { // lg
              perPage: 2,
              gap: '1rem',
            },
            768: { // md
              perPage: 2,
              gap: '1rem',
            },
            640: { // sm
              perPage: 1,
              gap: '0.75rem',
              arrows: false,
            }
          },
          classes: {
            // Custom classes for Splide elements
            arrows: 'splide__arrows custom-arrows',
            arrow: 'splide__arrow custom-arrow',
            prev: 'splide__arrow--prev custom-prev',
            next: 'splide__arrow--next custom-next',
            pagination: 'splide__pagination custom-pagination',
            page: 'splide__pagination__page custom-page'
          }
        }}
        className="services-splide"
      >
        {serviceData.map((service, index) => (
          <SplideSlide key={index}>
            <div className="p-2">
              <Scard
                img={service.img}
                head={service.head}
                text={service.text}
                subhead={service.subhead}
                arr={service.arr}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <style jsx>{`
        .services-splide {
          padding: 2rem 0;
        }
        
        :global(.custom-arrows) {
          @apply hidden lg:block;
        }

        :global(.custom-arrow) {
          @apply bg-gray-800/50 hover:bg-gray-700/70 text-white transition-all duration-300;
        }

        :global(.custom-pagination) {
          @apply bottom-0;
        }

        :global(.custom-page) {
          @apply bg-gray-400 opacity-50 transition-opacity duration-300;
        }

        :global(.custom-page.is-active) {
          @apply bg-gray-800 opacity-100;
        }
      `}</style>
    </div>
  );
};

export default Services_Cards;
