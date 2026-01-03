import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [iframeUrls, setIframeUrls] = useState(PROJECTS.map((p) => p.embedUrl || null));

  const setProjectIframe = (index, url) => {
    setIframeUrls((prev) => {
      const next = [...prev];
      next[index] = url;
      return next;
    });
  };

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          
          {/* Image or Embedded Live Site */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            {iframeUrls[index] ? (
                      (() => {
                        const vw = 250;
                        const vh = 200;
                        const ow = 1024; // original iframe width to scale from
                        const oh = 768; // original iframe height to scale from
                        const scale = Math.min(vw / ow, vh / oh);

                        return (
                          <div className="relative mb-6" style={{ width: vw, height: vh, overflow: "hidden" }}>
                            <div style={{ transformOrigin: "0 0", transform: `scale(${scale})` }}>
                              <iframe
                                src={iframeUrls[index]}
                                title={project.title}
                                width={ow}
                                height={oh}
                                style={{ border: 0, display: "block" }}
                              />
                            </div>
                            <a
                              href={iframeUrls[index]}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute inset-0"
                              aria-label={`Open ${project.title} in new tab`}
                            />
                          </div>
                        );
                      })()
            ) : (
              
              
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />

            )}

            {project.deploys && project.deploys.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.deploys.map((d, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setProjectIframe(index, d.url)}
                    className="mr-2 mb-2 rounded bg-stone-800 px-3 py-1 text-sm font-medium text-stone-300"
                  >
                    {d.name || `Deploy ${i + 1}`}
                  </button>
                ))}
              </div>
            )}
            
          </motion.div>

          {/* Content */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold text-2xl">
              {project.title}
            </h3>

            <p className="mb-4 text-stone-400">
              {project.description}
            </p>

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="mr-2 rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
