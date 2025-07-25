import { useState } from "react";

// layout
import Layout from "../layouts/MainLayout";

// component
import HeroDetailMenu from "../components/HeroDetailMenu";

// images
import detailImg from "../assets/images/Hero.png";

// icons
import { FaMapMarkerAlt } from "react-icons/fa";

const DetailMenu = () => {
  const [activeTab, setActiveTab] = useState("menu");

  const tabs = [
    { key: "menu", label: "Menu" },
    { key: "reviews", label: "Reviews" },
    { key: "photos", label: "Photos" },
  ];

  return (
    <Layout>
      <HeroDetailMenu
        imageUrl={detailImg}
        name="Wing Heng"
        rating={4.9}
        reviews={230}
        openTime="Open 24 hours"
        address="Jl. Tanjung Duren Raya, Jakarta Barat"
      />
      {/* Location */}
      <section className="px-4 py-8 rounded-lg max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-4">
          Peek the Location
        </h2>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-md mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.646509660136!2d106.78612317499447!3d-6.178251360534192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6abefc4ed7f%3A0xe51ec7fa40e8e517!2sJl.%20Tanjung%20Duren%20Raya%2C%20Jakarta%20Barat!5e0!3m2!1sen!2sid!4v1721123349777!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="w-full h-64"
          ></iframe>
        </div>

        {/* Address & Button */}
        <div className="flex justify-between items-center text-sm text-green-800 font-medium px-2">
          <p>Jl. Tanjung Duren Raya, Jakarta Barat</p>
          <button className="bg-white border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-gray-100 transition">
            Get Direction
          </button>
        </div>
      </section>

      {/* Menu Tabs */}
      <div className="mt-6 max-w-5xl mx-auto">
        <div className="flex justify-around border rounded-full bg-white shadow-sm overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full py-2 text-sm font-medium transition ${
                activeTab === tab.key
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "menu" && (
            <p className="text-center text-gray-600">[Menu Section]</p>
          )}
          {activeTab === "reviews" && (
            <p className="text-center text-gray-600">[Review Section]</p>
          )}
          {activeTab === "photos" && (
            <p className="text-center text-gray-600">[Photos Section]</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DetailMenu;
