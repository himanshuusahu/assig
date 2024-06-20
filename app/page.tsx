import Hero from "./pages/hero";
import Cards from "./pages/Cards";
import Cards1 from "./pages/Cards1";
import Gallery from "./pages/Images";

export default function Home() {
  return (
   <main>
    <div>
      {/* <Navbar/> */}
      
      <Hero/>
      <Cards></Cards>
      <div className="max-w-6xl mx-auto text-[#00357B] flex flex-col items-center mt-14 px-4">
        <h1 className="text-center text-3xl sm:text-4xl font-light whitespace-pre-wrap leading-[0.8] sm:leading-[0.8] ">
          {`HARBOUR\nLIGHT`}
        </h1>
        <p className="text-[10px] mt-2">de GRISOGONO</p>
        <p className="text-[6px] leading-[0.2]">GENEVE</p>

        <div className="max-w-3xl text-center mt-10">
          <h1 className="text-3xl sm:text-4xl font-medium font-oswald uppercase">
            Features & Amenities
          </h1>
          <p className="text-black my-4">Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront lifestyle. Its maritime-inspired amenities
            provide an unmatched seaside experience, offering a life of
            tranquility and bliss.</p>
        </div>
      </div>
      <Cards1></Cards1>
      <Gallery></Gallery>
      <footer className="bg-[#091D41] text-center py-8 text-sm">
      <p>© DAMAC Copyright 2024, All rights reserved.</p>
    </footer>
    </div>

   </main>
  );
}
