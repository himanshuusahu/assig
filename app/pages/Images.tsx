"use client";

import Image from "next/image";
import { useState } from "react";
 const galleryImages = [
    "/i-1.png",
    "/i-2.jpg",
    "/i-3.jpg",
    "/i-4.jpg",
    "/i-5.jpg",
  ];
  


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);


  
  return (
    <section className="p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end gap-2">
          <button className="bg-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">
            EXTERIORS
          </button>
          <button className="border border-[#00357B] text-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">
            INTERIORS
          </button>
        </div>
        <br />
        

      
        
        <div
          className="relative w-full h-52 sm:h-64 md:h-[400px] lg:h-[500px] transition cursor-pointer"
      
        >
          <Image
            src={selectedImage}
            alt="Selected"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8 mb-6">
          {galleryImages
            .filter((src) => src !== selectedImage)
            .map((src, index) => (
              <div
                key={index}
              
                className="relative w-full h-16 sm:h-28 md:h-32 cursor-pointer transition hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
        </div>
     
      </div>
    </section>
  );
};

export default Gallery;
