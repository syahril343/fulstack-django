import { useState } from "react";

// layout
import Layout from "../layouts/MainLayout";

// icons
import { FaSearch, FaStar } from "react-icons/fa";
// images
import food1 from "../assets/images/food1.png";

const foods = [
  {
    name: "Ayam Goreng Kalasan, Warung Agor",
    rating: 4.9,
    reviews: 230,
    image: food1, // ganti sesuai gambar
  },
  {
    name: "Bakmi Ayam, Bakmi gang Kelinci",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Cheesecake, Artirasa Puri",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Steak Ayam, Warung Steak Kemanggisan",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Ayam Goreng Kalasan, Warung Agor",
    rating: 4.9,
    reviews: 230,
    image: food1, // ganti sesuai gambar
  },
  {
    name: "Bakmi Ayam, Bakmi gang Kelinci",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Cheesecake, Artirasa Puri",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Steak Ayam, Warung Steak Kemanggisan",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Ayam Goreng Kalasan, Warung Agor",
    rating: 4.9,
    reviews: 230,
    image: food1, // ganti sesuai gambar
  },
  {
    name: "Bakmi Ayam, Bakmi gang Kelinci",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Cheesecake, Artirasa Puri",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Steak Ayam, Warung Steak Kemanggisan",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Ayam Goreng Kalasan, Warung Agor",
    rating: 4.9,
    reviews: 230,
    image: food1, // ganti sesuai gambar
  },
  {
    name: "Bakmi Ayam, Bakmi gang Kelinci",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Cheesecake, Artirasa Puri",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Steak Ayam, Warung Steak Kemanggisan",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Ayam Goreng Kalasan, Warung Agor",
    rating: 4.9,
    reviews: 230,
    image: food1, // ganti sesuai gambar
  },
  {
    name: "Bakmi Ayam, Bakmi gang Kelinci",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Cheesecake, Artirasa Puri",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
  {
    name: "Steak Ayam, Warung Steak Kemanggisan",
    rating: 4.9,
    reviews: 230,
    image: food1,
  },
];

const Explore = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const foodsPerPage = 12;

  // Pagination logic
  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = foods.slice(indexOfFirstFood, indexOfLastFood);
  const totalPages = Math.ceil(foods.length / foodsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <section>
        <div className="min-h-screen py-10 px-4 md:px-0">
          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="flex items-center bg-white rounded-md px-4 py-2 shadow">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search food/restaurant you want to look at..."
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <button className="bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800">
              Recommendation
            </button>
            <button className="bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800">
              Top Rating
            </button>
            <button className="bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800">
              Near You
            </button>
          </div>

          {/* Food Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
            {currentFoods.map((item, index) => (
              <div key={index} className="bg-white rounded-md shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <div className="p-3">
                  <p className="text-green-700 font-semibold text-sm mb-2">
                    {item.name}
                  </p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaStar className="text-yellow-500 mr-1" />
                    {item.rating}
                    <span className="ml-1 text-gray-400">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === i + 1
                    ? "bg-green-700 text-white"
                    : "bg-white text-gray-700"
                } hover:bg-green-600 hover:text-white transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Explore;
