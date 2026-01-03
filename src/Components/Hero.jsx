import profile from "../assets/profile.png";
import CV from "../assets/banuka_weerapperuma.pdf";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
    hidden : {opacity: 0 , x: -100 },
    visible : {
      opacity :1 ,
      x :0 ,
      transition : {
        duration: 0.5,
        staggerChildren: 0.5,
      }
    }
}

const childVariants = {
  hidden : { opacity : 0 , x: -100},
  visible : {opacity : 1 , x:0 , transition : {duration : 0.5 }}
}

const Hero = () => {
  const paragraphs = HERO_CONTENT.trim().split(/\n\s*\n/).slice(0, 2);

  return (
    <section className="pb-10 lg:mb-36">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Layout */}
        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:items-center">

          {/* Profile Image (TOP on mobile) */}
          <div className="pt-50 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.img
              src={profile}
              alt="profile"
              className="border border-stone-900 rounded-3xl max-w-xs sm:max-w-sm lg:max-w-md object-cover"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>

          {/* Text Content */}
          <motion.div 
            initial = "hidden"
            animate = "visible"
            variants={containerVariants}
          
          
           className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

            <motion.h2 
            variants={childVariants}
            className="text-4xl sm:text-5xl lg:text-7x xl:text-8xl font-bold tracking-tight max-w-xl lg:max-w-none">
              Banuka Weerapperuma
            </motion.h2>

            <motion.span 
            variants={childVariants}
            className="mt-4 bg-linear-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>

            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={childVariants}
                className="mt-6 max-w-lg text-lg sm:text-xl leading-relaxed tracking-tight text-stone-400"
              >
                {p}
              </motion.p>
            ))}

            <motion.a
            variants={childVariants}
              href={CV} target="_blank" rel="noopener noreferrer" download className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-800 hover:bg-stone-200 transition">
              Download Resume
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
