import profilePic from "../assets/Profile.webp";
import CV from "../assets/banuka_weerapperuma.pdf";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section className="pb-10 lg:mb-36">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Layout */}
        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-center">

          {/* Profile Image (TOP on mobile) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={profilePic}
              alt="profile"
              className="border border-stone-900 rounded-3xl max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

            <h1 className="
              text-4xl
              sm:text-5xl
              lg:text-7xl
              xl:text-8xl
              font-bold
              tracking-tight
              max-w-xl
              lg:max-w-none
            ">
              Banuka Weerapperuma
            </h1>

            <span className="mt-4 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>

            <p className="mt-6 max-w-lg text-lg sm:text-xl leading-relaxed tracking-tight text-stone-400">
              {HERO_CONTENT}
            </p>

            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-800 hover:bg-stone-200 transition"
            >
              Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
