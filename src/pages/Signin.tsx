import Signincard from "../components/Signincard";

export const Signin = () => {
  const coupleImages = [
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734950409/happy-smiling-young-couple-having-dinner-while-talking-eachother-during-candle-light-dinner_ndq9wr.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734949570/young-asian-and-indian-couple-enjoy-having-relaxing-time-in-the-rain-together-in-the-public-park-while-sitting-together-on-the-bench-during-weekend-free-photo_wn5vcp.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734949571/9cf2e098dcc0f7eb1c55b8312b554e0e_kirmht.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734949570/ai-generated-diwali-happiness-traditional-embrace-of-an-indian-couple-in-ethnic-clothing-photo_fhmduv.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734949570/ai-generated-celebrating-parenthood-happy-indian-couple-embracing-at-home-photo_sr52f7.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734948349/a9720ae02302e88a923fd1a7e915e5f3_e3zgqh.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734965526/360_F_63555541_BlgelHG9EWWd5ihCxkGvCGRv00DIVeiX_p7mfco.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734965527/DSC_8324_hen4mu.jpg",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-100">
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-8 overflow-hidden">
        {coupleImages.map((imageUrl, idx) => (
          <div
            key={idx}
            className="relative w-full h-48 sm:h-56 lg:h-64 rounded-2xl bg-cover bg-center shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:z-10 group"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >

            <div className="absolute inset-0 w-full h-full rounded-2xl backdrop-blur-[6px] backdrop-brightness-90 group-hover:backdrop-blur-0 transition-all duration-500" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto">
        <div className="transform transition-all duration-300 hover:scale-[1.02] px-4 sm:px-0">
          <Signincard />
        </div>
      </div>
    </div>
  );
};

export default Signin;
