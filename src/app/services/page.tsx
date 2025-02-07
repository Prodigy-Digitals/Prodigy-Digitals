import React from 'react'
import Scard from '../Components/Scard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'], // Use subsets for optimization
    weight: ['900'], // Specify weights you need
});

const Services = () => {
    const serviceData = [
        {
            img: "./s6.png",
            head: "Logo Design",
            text: "We understand that your logo is more than just a symbol—it’s the heart of your brand. It represents your values, vision, and uniqueness. Our logo designs are thoughtfully crafted to make a lasting impression and resonate with your audience",
            subhead: "What We Offer",
            arr: ["Custom Logo Design", "Versatile Styles", "Timeless Appeal"]
        },
        {
            img: "./s3.png",
            head: "Business Card Design",
            text: "We craft business cards that make a powerful first impression. Whether you're networking, pitching, or meeting clients, our designs ensure your card reflects professionalism and leaves a lasting impact.",
            subhead: "Our Offerings",
            arr: ["Custom Designs", "Premium Quality", "Double-Sided Cards", "Innovative Formats"]
        },
        {
            img: "./s9.png",
            head: "Poster Design",
            text: "Our posters are designed to grab attention and deliver your message effectively. From promotional posters to event announcements, we ensure your brand shines through with creative visuals",
            subhead: "What We Offer",
            arr: ["Custom Poster Design", "Event Announcements", "Marketing Posters"]
        },
        {
            img: "./s5.png",
            head: "Web Design",
            text: "We create custom, responsive websites that deliver exceptional user experiences and align with your business goals",
            subhead: "Our Services",
            arr: ["Custom Website Development", "Responsive Design", "E-commerce Solutions", "Website Maintenance"]
        },
        {
            img: "./s1.png",
            head: "UX/UI Design",
            text: "We specialize in creating intuitive and visually appealing user experiences. Our UX/UI designs are crafted to ensure seamless interaction, enhance usability, and align with your brand's identity.",
            subhead: "Our Offerings",
            arr: ["Custom UX/UI Design", "Responsive Design", "Web and Mobile App Design"]
        },
        {
            img: "./s4.png",
            head: "Social Media Management",
            text: "We craft tailored strategies to boost engagement, build brand visibility, and connect with your audience",
            subhead: "Our Services",
            arr: ["Custom Strategies", "Social Media Posts", "Content Creation", "Social Media Ads", "Performance Analytics"]
        },
        {
            img: "./s2.png",
            head: "Portfolio Design",
            text: "We take pride in transforming ideas into visually captivating and impactful designs. Our portfolio reflects the essence of innovation, precision, and dedication to delivering exceptional creative solutions",
            subhead: "What We Offer",
            arr: ["Customized Layouts", "Interactive Digital Portfolios", "Print-Ready Designs"]
        },

        {
            img: "./s7.png",
            head: "Magazine Design",
            text: "We design visually stunning magazines that engage readers and elevate your content. From layout to typography, we bring creativity and professionalism to every page",
            subhead: "What We Offer",
            arr: ["Magazine Layout Design", "Thematic Cover Designs", "Content-Driven Visuals"]
        },
        {
            img: "./s8.png",
            head: "Video Editing",
            text: "We craft captivating videos that leave a lasting impression. Whether it’s event highlights, promotional content, or social media reels, our video edits are tailored to tell your story with impact",
            subhead: "What We Offer",
            arr: ["Cinematic Video Edits", "Social Media Reels", "Event Highlights"]
        }

    ];

    return (
        <div className='w-full overflow-hidden'>
            <Navbar />
            <div className='uppercase text-[rgba(249,227,98,1)] flex justify-center text-center mt-32 mb-4  poppins.classname text-3xl sm:text-4xl font-extrabold'>Visual Identity Branding</div>
            <div className='flex flex-wrap justify-center gap-4'>
            {serviceData.slice(0, 3).map((item, index) => (
                <div key={index} className='-mb-16 sm:mb-0'>
                    <Scard
                        img={item.img}
                        head={item.head}
                        text={item.text}
                        subhead={item.subhead}
                        arr={item.arr}
                    />
                </div>
            ))}
            </div>

            <div className='uppercase text-[rgba(249,227,98,1)] flex justify-center text-center mt-20 mb-4 poppins.classname text-3xl sm:text-4xl font-extrabold'>Digital Presence & Experience</div>
            <div className='flex flex-wrap justify-center gap-4'>
            {serviceData.slice(3, 6).map((item, index) => (
                <div key={index} className='-mb-16 sm:mb-0 gap-4'>
                    <Scard
                        img={item.img}
                        head={item.head}
                        text={item.text}
                        subhead={item.subhead}
                        arr={item.arr}
                    />
                </div>
            ))}
            </div>

            <div className='uppercase text-[rgba(249,227,98,1)] flex justify-center text-center mt-20 mb-4 poppins.classname text-3xl sm:text-4xl font-extrabold'>Content & Marketing Design</div>
            <div className='flex flex-wrap justify-center mb-16 gap-4'>
            {serviceData.slice(6, 9).map((item, index) => (
                <div key={index} className='-mb-16 sm:mb-0'>
                    <Scard
                        img={item.img}
                        head={item.head}
                        text={item.text}
                        subhead={item.subhead}
                        arr={item.arr}
                    />
                </div>
            ))}
            </div>
            <Footer />
        </div>
    )
}

export default Services

