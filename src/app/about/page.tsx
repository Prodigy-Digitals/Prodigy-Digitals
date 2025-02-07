"use client";
import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {


    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="w-full flex justify-center mt-32 flex-col gap-12">
                <div className="flex justify-center text-5xl font-extrabold">Why Choose<a className="text-[rgba(249,227,98,1)] ml-3">Prodigy</a>?</div>
                <div className=" flex items-center justify-center flex-row">
                    <div className="text-[rgba(249,227,98,1)] text-6xl flex items-center font-extrabold w-16 h-16 mr-8">I</div>
                    <div className="w-64 flex items-center font-bold text-xl">Innovative Designs</div>
                </div>
                <div className=" flex items-center justify-center flex-row">
                    <div className="text-[rgba(249,227,98,1)] text-6xl flex items-center font-extrabold w-16 h-16 mr-8">C</div>
                    <div className="w-64 flex items-center font-bold text-xl">Customized Solutions</div>
                </div>
                <div className=" flex items-center justify-center flex-row">
                    <div className="text-[rgba(249,227,98,1)] text-6xl flex items-center font-extrabold w-16 h-16 mr-8">T</div>
                    <div className="w-64 flex items-center font-bold text-xl">Timely Delivery</div>
                </div>
                <div className=" flex items-center justify-center flex-row">
                    <div className="text-[rgba(249,227,98,1)] text-6xl flex items-center font-extrabold w-16 h-16 mr-8">C</div>
                    <div className="w-64 flex items-center font-bold text-xl">Colloborative Process</div>
                </div>
            </div>
            <div className="flex justify-center w-full mb-8 sm:mb-12 md:mb-14 mt-48 sm:mt-32"><Contact /></div>
            <Footer />
        </div>
    );
};

export default About;
