import banner from "../images/banner.svg";
import line from "../images/line.svg";


const Banner = ({ bannerSrc, title }) => {


  return (
    <div className="relative">
      <img
        src={bannerSrc}
        alt="banner"
        className="w-full h-[203px] md:h-[503px] flex-shrink-0  object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col gap-[22px]">
          <h1
            className="text-white text-center font-dm-serif-display text-[30.5px] md:text-[80.5px] lg:text-[108.5px] font-normal leading-[30.3px] md:leading-[122.3px] tracking-[-0.385px]"
          >
            {title}
          </h1>
          <div className="flex justify-center">
            <img
              src={line}
              alt="line"
              className="w-[198px] md:w-[298px]  h-[14px] md:h-[27px] flex-shrink-0 stroke-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
