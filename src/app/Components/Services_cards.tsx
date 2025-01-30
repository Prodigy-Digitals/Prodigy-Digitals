import React from 'react';
import dynamic from 'next/dynamic';
import { Splide as SplideType, SplideSlide as SplideSlideType } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Scard from './Scard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Define TypeScript interfaces for better type safety
interface ServiceItem {
  img: string;
  head: string;
  text: string;
  subhead: string;
  arr: string[];
}

// Dynamically import Splide components with proper typing
const Splide = dynamic<typeof SplideType>(
  () => import('@splidejs/react-splide').then(mod => mod.Splide),
  { ssr: false }
);

const SplideSlide = dynamic<typeof SplideSlideType>(
  () => import('@splidejs/react-splide').then(mod => mod.SplideSlide),
  { ssr: false }
);

const ServicesCards: React.FC = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const serviceData: ServiceItem[] = [
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
    {
      img: "./s1.png",
      head: "UX/UI Design",
      text: "We specialize in creating intuitive and visually appealing user experiences. Our UX/UI designs are crafted to ensure seamless interaction, enhance usability, and align with your brand's identity.",
      subhead: "Our Offerings",
      arr: ["Custom UX/UI Design", "Responsive Design", "Web and Mobile App Design"]
    },
    {
      img: "./s1.png",
      head: "UX/UI Design",
      text: "We specialize in creating intuitive and visually appealing user experiences. Our UX/UI designs are crafted to ensure seamless interaction, enhance usability, and align with your brand's identity.",
      subhead: "Our Offerings",
      arr: ["Custom UX/UI Design", "Responsive Design", "Web and Mobile App Design"]
    },
    {
      img: "./s1.png",
      head: "UX/UI Design",
      text: "We specialize in creating intuitive and visually appealing user experiences. Our UX/UI designs are crafted to ensure seamless interaction, enhance usability, and align with your brand's identity.",
      subhead: "Our Offerings",
      arr: ["Custom UX/UI Design", "Responsive Design", "Web and Mobile App Design"]
    },
    {
      img: "./s1.png",
      head: "UX/UI Design",
      text: "We specialize in creating intuitive and visually appealing user experiences. Our UX/UI designs are crafted to ensure seamless interaction, enhance usability, and align with your brand's identity.",
      subhead: "Our Offerings",
      arr: ["Custom UX/UI Design", "Responsive Design", "Web and Mobile App Design"]
    },

  ];

  const splideOptions: Options = {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    resetProgress: false,
    arrows: false,
    perPage: 3,
    pagination: false,
    gap: '1rem',
    breakpoints: {
      1536: {
        perPage: 3,
        gap: '1.5rem',
      },
      1280: {
        perPage: 3,
        gap: '1.25rem',
      },
      1024: {
        perPage: 2,
        gap: '1rem',
      },
      768: {
        perPage: 2,
        gap: '1rem',
      },
      640: {
        perPage: 1,
        gap: '0.75rem',
        arrows: false,
      }
    }
  };

  return (
    <div className="relative z-0 px-4 md:px-6 lg:px-8">
      <Slider {...settings}>
        {serviceData.map((service, index) => (
            <div key={index} className="p-2">
              <Scard {...service} />
            </div>
        ))}
      </Slider>

      <style jsx global>{`
        .services-splide .splide__arrows {
          @apply hidden lg:block;
        }
        
        .services-splide .splide__arrow {
          @apply bg-gray-800/50 hover:bg-gray-700/70 text-white transition-all duration-300;
        }
        
        .services-splide .splide__pagination {
          @apply bottom-0;
        }
        
        .services-splide .splide__pagination__page {
          @apply bg-gray-400 opacity-50 transition-opacity duration-300;
        }
        
        .services-splide .splide__pagination__page.is-active {
          @apply bg-gray-800 opacity-100;
        }
      `}</style>
    </div>
  );
};

export default ServicesCards;