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
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1735208342/indian-couple-piggyback-happy-young-having-fun-indoors-56830261_ypqx6a.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1735208342/hq720_pdzd8v.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1734965526/indian-young-couple-stock-image_exprbc.jpg",
    "https://res.cloudinary.com/decvzw9a8/image/upload/v1735208590/wpldbrdw75f61_z9bpec.jpg"
  ];

  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-100">
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 overflow-hidden">
        {coupleImages.map((imageUrl, idx) => (
          <div
            key={idx}
            className="relative w-full h-48 sm:h-56 lg:h-64 rounded-2xl shadow-lg group transform transition-all duration-300 ease-in-out"
          >
            {/* Image with default blur and hover effect */}
            <img
              className="absolute inset-0 w-full h-full rounded-2xl object-cover transition-all duration-500 blur-sm group-hover:blur-none"
              src={imageUrl}
              alt={`couple ${idx}`}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/40 group-hover:bg-transparent transition-all duration-500" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto">
        <div className="transform transition-all duration-300 hover:scale-[1.02] px-0 sm:px-0">
          <Signincard />
        </div>
      </div>
    </div>
  );
};

export default Signin;
