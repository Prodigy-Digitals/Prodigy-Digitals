import React from 'react';
import dynamic from 'next/dynamic';
import { Splide as SplideType, SplideSlide as SplideSlideType } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Scard from './Scard';

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
      img: "./s3.png",
      head: "Business Card Design",
      text: "We craft business cards that make a powerful first impression. Whether you're networking, pitching, or meeting clients, our designs ensure your card reflects professionalism and leaves a lasting impact.",
      subhead: "Our Offerings",
      arr: ["Custom Designs","Premium Quality","Double-Sided Cards","Innovative Formats"]
    },
    {
      img: "./s4.png",
      head: "Social Media Management",
      text: "We craft tailored strategies to boost engagement, build brand visibility, and connect with your audience",
      subhead: "Our Services",
      arr: ["Custom Strategies","Social Media Posts","Content Creation","Social Media Ads","Performance Analytics"]
    },
    {
      img: "./s5.png",
      head: "Web Design",
      text: "We create custom, responsive websites that deliver exceptional user experiences and align with your business goals",
      subhead: "Our Services",
      arr: ["Custom Website Development","Responsive Design","E-commerce Solutions","Website Maintenance"]
    },
    {
      img: "./s6.png",
      head: "Logo Design",
      text: "We understand that your logo is more than just a symbol—it’s the heart of your brand. It represents your values, vision, and uniqueness. Our logo designs are thoughtfully crafted to make a lasting impression and resonate with your audience",
      subhead: "What We Offer",
      arr: ["Custom Logo Design","Versatile Styles","Timeless Appeal"]
    },
    {
      img: "./s7.png",
      head: "Magazine Design",
      text: "We design visually stunning magazines that engage readers and elevate your content. From layout to typography, we bring creativity and professionalism to every page",
      subhead: "What We Offer",
      arr: ["Magazine Layout Design","Thematic Cover Designs","Content-Driven Visuals"]
    },
    {
      img: "./s8.png",
      head: "Video Editing",
      text: "We craft captivating videos that leave a lasting impression. Whether it’s event highlights, promotional content, or social media reels, our video edits are tailored to tell your story with impact",
      subhead: "What We Offer",
      arr: ["Cinematic Video Edits","Social Media Reels","Event Highlights"]
    }
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
      <Splide
        options={splideOptions}
        className="services-splide py-8"
      >
        {serviceData.map((service, index) => (
          <SplideSlide key={index}>
            <div className="p-2">
              <Scard {...service} />
            </div>
          </SplideSlide>
        ))}
      </Splide>

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
