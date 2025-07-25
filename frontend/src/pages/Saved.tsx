import { Link } from "react-router-dom";

// layout
import Layout from "../layouts/MainLayout";

// icons
import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

// images
import imgHero from "../assets/images/heroSaved.png";
import top1 from "../assets/images/top1.png";
import top2 from "../assets/images/top2.png";
import food1 from "../assets/images/food1.png";

const data = [
  {
    name: "Wing Heng",
    rating: 4.9,
    reviews: 230,
    open: "Open 24 hours",
    address: "Jl. Tanjung Duren Raya, Jakarta Barat",
    image: top1,
  },
  {
    name: "Wing Heng",
    rating: 4.9,
    reviews: 230,
    open: "Open 24 hours",
    address: "Jl. Tanjung Duren Raya, Jakarta Barat",
    image: top2,
  },
  {
    name: "Wing Heng",
    rating: 4.9,
    reviews: 230,
    open: "Open 24 hours",
    address: "Jl. Tanjung Duren Raya, Jakarta Barat",
    image: food1,
  },
  {
    name: "Wing Heng",
    rating: 4.9,
    reviews: 230,
    open: "Open 24 hours",
    address: "Jl. Tanjung Duren Raya, Jakarta Barat",
    image: top1,
  },
  {
    name: "Wing Heng",
    rating: 4.9,
    reviews: 230,
    open: "Open 24 hours",
    address: "Jl. Tanjung Duren Raya, Jakarta Barat",
    image: top2,
  },
  {
    name: "Wing Heng",
    rating: 4.9,
    reviews: 230,
    open: "Open 24 hours",
    address: "Jl. Tanjung Duren Raya, Jakarta Barat",
    image: food1,
  },
];

const Saved = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat rounded-3xl"
        style={{ backgroundImage: `url(${imgHero})` }}
      >
        <div className="absolute rounded-3xl inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Let’s look at what you saved
          </h1>
          <p className="text-base md:text-lg max-w-xl">
            Subheading with description of your shopping site
          </p>
        </div>
      </section>

      {/* Saved Restourant */}
      <section className="min-h-screen py-10 px-6 md:px-0 mt-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-red-800 mb-10">
          Saved Restaurant
        </h2>

        <div className="space-y-10">
          {data.map((resto, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start justify-between bg-white rounded-lg shadow-md p-6 gap-6"
            >
              {/* Left Side */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-green-800">
                  {resto.name}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mt-2 space-x-4">
                  <span className="flex items-center gap-1 text-yellow-600">
                    <FaStar /> {resto.rating} ({resto.reviews} reviews)
                  </span>
                  <span className="flex items-center gap-1 text-rose-600">
                    <FaClock /> {resto.open}
                  </span>
                </div>

                <p className="mt-2 text-gray-700 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-rose-600" /> {resto.address}
                </p>

                <div className="mt-4 flex gap-2">
                  <button className="bg-black text-white px-4 py-2 rounded hover:opacity-80">
                    Unsave
                  </button>
                  <Link
                    to={`/detail-menu`}
                    className="bg-gray-100 border px-4 py-2 rounded hover:bg-gray-200 inline-block"
                  >
                    View Detail
                  </Link>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="md:w-60 flex-shrink-0">
                <img
                  src={resto.image}
                  alt={resto.name}
                  className="w-full h-40 object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-10 text-center">
          <button className="bg-white text-red-700 border border-red-700 px-6 py-2 rounded hover:bg-red-100">
            Load More
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Saved;
