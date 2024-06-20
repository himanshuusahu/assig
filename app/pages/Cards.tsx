import Image from "next/image";
const var1 = [
  {
    src: "/1.png",
    title: "BOOK WITH",
    value: "ONLY 20%",
  },
  {
    src: "/2.png",
    title: "PAYMENT PLAN",
    value: "Easy 70/30",
  },
  {
    src: "/3.png",
    title: "HANDOVER ON",
    value: "Q2 2027",
  },
  {
    src: "/4.png",
    title: "AREA STARTS FROM",
    value: "700 sqmt",
  },
];
const Cards = () => {
  return (
    <div className=" bg-[#F4F9FF]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 ">
        {var1.map((var1, index) => (
          <div
            key={index}
            className="flex flex-col  items-center my-4 md:my-8 text-[#00357B] font-semibold"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 ">
              <Image
                src={var1.src}
                alt={var1.title}
                width={48}
                height={48}
                className="object-contain "
              />
            </div>
            <h1 className="mt-4 text-sm">{var1.title}</h1>
            <p className="text-2xl sm:text-3xl font-oswald">{var1.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
