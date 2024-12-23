import Carousel from "./Carousel";

const Quote = () => {
  return (
    <div className="bg-red-100 flex flex-col justify-center items-center px-4 py-8 h-full">
      <div className="max-w-lg mb-6 text-center">
        <p className="text-xl sm:text-2xl font-semibold text-red-600">
          "Welcome to SaptJanm. Discover a platform designed to bring people closer, 
          helping you find the life partner you’ve always dreamed of. Take the first step toward your forever."
        </p>
      </div>
      <div className="w-full max-w-3xl">
        <Carousel />
      </div>
    </div>
  );
};

export default Quote;

