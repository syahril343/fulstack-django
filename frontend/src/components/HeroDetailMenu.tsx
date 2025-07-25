import React from "react";
import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

type HeroDetailMenuProps = {
  imageUrl: string;
  name: string;
  rating: number;
  reviews: number;
  openTime: string;
  address: string;
};

const HeroDetailMenu: React.FC<HeroDetailMenuProps> = ({
  imageUrl,
  name,
  rating,
  reviews,
  openTime,
  address,
}) => {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 md:p-12">
        <div className="text-white space-y-2 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>

          <div className="flex flex-wrap items-center gap-x-4 text-sm md:text-base text-gray-100">
            <span className="flex items-center gap-1 text-yellow-400">
              <FaStar /> {rating} ({reviews} reviews)
            </span>
            <span className="flex items-center gap-1 text-red-300">
              <FaClock /> {openTime}
            </span>
          </div>

          <p className="flex items-center gap-1 text-gray-200 text-sm md:text-base">
            <FaMapMarkerAlt className="text-red-400" /> {address}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroDetailMenu;
