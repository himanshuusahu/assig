// import React from 'react'

// function hero() {
//   return (
   
//   )
// }

// export default hero
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/heroSection.jpeg";
const textProperty = [
  { label: "Rental Returns of", value: " UPTO 11%**" },
  { label: "Capital Appreciation of", value: " UPTO 32%**" },
];



const Hero = () => {
  return (
    <section className="relative md:h-screen overflow-hidden">
      <div className="relative md:h-full">
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            src={heroImg}
            alt="damac"
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#062349] to-[rgba(24,141,249,0.05)] opacity-80"></div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4">
          <nav>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-8 sm:py-12 bg-transparent ">
              <Link href="/">
                <Image src="/logo.png" alt="Damac" width={160} height={50} />
              </Link>
              <button className="g-transparent border max-[768px]:hidden text-black	 hover:text-black-700 hover:border-gray-700 px-8 py-4 rounded-md">
                Enquire Now
              </button>
              <Image alt="a" className="uppercase rounded md:hidden" src = "/menu.png"width={60} height={50}/>
             
              
            </div>
          </nav>

          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mt-20">
              <div>
                <h1 className="text-4xl  lg:text-5xl font-semibold font-oswald">
                  HARBOUR LIGHTS DE{" "}
                  <span className="text-[#17ABFF]">GRESOGONO</span>
                </h1>
                <p className="text-[16px] sm:text-xl md:text-2xl font-medium my-4">
                  1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
                </p>
              </div>

              <ul className="mt-12">
                {textProperty.map((property, index) => (
                  <li
                    key={index}
                    className="p-3 bg-slate-900/65 my-2 max-w-96 border-l-4 border-[#17ABFF]"
                  >
                    {property.label} <strong>{property.value}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 bg-transparent flex justify-center md:justify-end md:m-0 m-6 mb-8 md:mb-0 items-end">
              <div className="max-w-[305px] bg-[#000]/10 backdrop-blur-md  shadow-2xl border  pt-10 rounded-xl  ">
                <div className="px-6">
                  <p className="font-light tracking-wide">
                    PRICING STARTS FROM
                  </p>
                  <p className="text-5xl font-medium my-1 font-oswald">
                    $ 425,000
                  </p>
                  <p className="text-2xl  my-2 font-oswald">AED 1.3 Million</p>
                  <button className="bg-[#17ABFF] w-full my-4 mb-8 py-3 px-10 rounded-md text-sm font-medium hover:bg-[#17ABFF]/60 border border-[#17ABFF] hover:border-[#fff] transition">
                    GET A PRESENTATION
                  </button>
                </div>

                <p className="px-6 py-4 border-t-2 border-[rgba(0,0,0,0.3)] text-[#98C5E8] text-[13px]">
                  Get an Expert&apos;s Presentation of Real Estate in Dubai for
                  Life and investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
