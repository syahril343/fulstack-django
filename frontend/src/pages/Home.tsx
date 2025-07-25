import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../layouts/MainLayout"; //layout
// icons
import { FaSearch, FaChevronDown } from "react-icons/fa";
// images
import imgHero from "../assets/images/Hero.png";
import food1 from "../assets/images/food1.png";
import top1 from "../assets/images/top1.png";
import top2 from "../assets/images/top2.png";

const data = [
  {
    name: "Restaurant A",
    desc: "Body text for whatever you’d like to add more to the subheading.",
    rating: 2.5,
    image: food1,
  },
  {
    name: "Restaurant B",
    desc: "Body text for whatever you’d like to add more to the subheading.",
    rating: 4,
    image: food1,
  },
  {
    name: "Restaurant C",
    desc: "Body text for whatever you’d like to add more to the subheading.",
    rating: 4,
    image: food1,
  },
  {
    name: "Restaurant D",
    desc: "Body text for whatever you’d like to add more to the subheading.",
    rating: 3.5,
    image: food1,
  },
];

const topItems = [
  {
    name: "Bakmi GM",
    desc: "lorem ipsum",
    image: top1,
  },
  {
    name: "Ikkudo ichi",
    desc: "lorem ipsum",
    image: top2,
  },
  {
    name: "Bakmi GM",
    desc: "lorem ipsum",
    image: top1,
  },
  {
    name: "Ikkudo ichi",
    desc: "lorem ipsum",
    image: top2,
  },
  {
    name: "Bakmi GM",
    desc: "lorem ipsum",
    image: top1,
  },
  {
    name: "Ikkudo ichi",
    desc: "lorem ipsum",
    image: top2,
  },
];

const reviews = [
  {
    text: "A terrific piece of praise",
    name: "Name",
    desc: "Description",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "A fantastic bit of feedback",
    name: "Name",
    desc: "Description",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "A genuinely glowing review",
    name: "Name",
    desc: "Description",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    text: "A fantastic bit of feedback",
    name: "Name",
    desc: "Description",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "A genuinely glowing review",
    name: "Name",
    desc: "Description",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const half = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (half ? 1 : 0);
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-black text-xl">
          ★
        </span>
      ))}
      {half && <span className="text-black text-xl">☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-black text-xl">
          ☆
        </span>
      ))}
    </div>
  );
};

const cities = {
  Jakarta:
    "https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed",
  Bandung:
    "https://maps.google.com/maps?q=Bandung&t=&z=13&ie=UTF8&iwloc=&output=embed",
  Surabaya:
    "https://maps.google.com/maps?q=Surabaya&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("Jakarta");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image */}
          <div
            className="w-full h-[400px] bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${imgHero})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>

            {/* Search Bar */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%]">
              <div className="relative bg-white rounded-md shadow-md flex items-center px-4 py-2">
                <FaSearch className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Search food/restaurant you want to look at....."
                  className="flex-grow outline-none text-sm text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-[#fff4ee] py-12 px-12 mt-20 rounded-3xl">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#a32020] mb-4">
                Choose Your Food!
              </h2>
              <p className="text-gray-700 mb-6">
                Lorem ipsum, maybe bisa shares more info about the website, or
                generally gets people psyched to keep scrolling.
              </p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 duration-300">
                More
              </button>
            </div>

            {/* Right Side */}
            <div>
              <h3 className="text-right text-xl md:text-3xl font-bold text-green-800 mb-2">
                See the Map
              </h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
                {/* Top Controls */}
                <div className="flex justify-between items-center mb-4">
                  {/* Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="appearance-none bg-gray-100 text-gray-800 px-4 py-1 pr-8 rounded-md text-sm focus:outline-none"
                    >
                      {Object.keys(cities).map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-2 top-2.5 text-xs text-gray-600 pointer-events-none" />
                  </div>
                </div>

                {/* Map Iframe */}
                <div className="w-full h-64 md:h-72 rounded-md overflow-hidden">
                  <iframe
                    src={cities[selectedCity]}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Explore Button */}
                <div className="mt-4 text-center">
                  <button className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
                    Explore Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rekomendasi */}
        <section className="px-6 py-10 md:px-0 mt-10">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900">
              Recomendation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <div key={index} className="bg-white rounded-md shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-md"
                />
                <div className="px-2 py-4">
                  <StarRating rating={item.rating} />
                  <h3 className="font-semibold mt-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-md text-lg duration-300">
              More
            </button>
          </div>
        </section>

        {/* Top Food */}
        <section className=" px-6 py-10 md:px-0 overflow-hidden mt-10">
          {/* Title */}
          <div className="flex items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900">
              Top Of The Week
            </h2>
          </div>

          {/* Marquee */}
          <div className="marquee-wrapper">
            <div className="marquee-track flex gap-4">
              {[...topItems, ...topItems].map((item, index) => (
                <div
                  key={index}
                  className="w-64 min-w-[250px] bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Reviews */}
        <section>
          <div className="py-10 px-4 md:px-0">
            <h2 className="text-3xl font-bold text-red-700 mb-8">
              Our Reviews
            </h2>
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md min-h-[180px]">
                    <p className="text-lg font-medium mb-4">“{review.text}”</p>
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-gray-500 text-sm">{review.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
