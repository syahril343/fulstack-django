import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-12">
        {/* Kolom Kiri */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Restaurant Dishcovery</h2>
          <div className="flex space-x-4">
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
            <FaYoutube className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Kolom Tengah */}
        <div className="space-y-3">
          <p className="cursor-pointer hover:underline">About Us</p>
          <p className="cursor-pointer hover:underline">Terms of service</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Help Center</p>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-3">
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">Explore</p>
          <p className="cursor-pointer hover:underline">Saved</p>
          <p className="cursor-pointer hover:underline">FAQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
