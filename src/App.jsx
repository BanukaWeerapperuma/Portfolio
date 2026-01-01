import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">

          {/* Grid gradient */}
          <div className="
            absolute inset-0
            bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
            bg-size-[14px_24px]
          " />

          {/* Radial glow */}
          <div className="
            absolute top-[-10%] left-1/2
            h-200 w-250
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]
          " />

        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero/>
      </div>

    </div>
  );
};

export default App;
