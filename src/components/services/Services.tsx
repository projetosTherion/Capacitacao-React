import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "@/variants";
import { services } from "./data";

export const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* text and image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 md:bg-services bg-no-repeat bg-bottom mix-blend-lighten"
          >
            <h2 className="h2 text-accent">O que faço?</h2>
            <h3 className="h3">Entusiasta em programar e aprender</h3>
          </motion.div>

          {/* services */}
          <div className="flex flex-col flex-1 py-4">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              {services.map((list, index) => {
                const { name, description, url, link } = list; // Adicione a propriedade 'url' aqui
                return (
                  <div
                    key={index}
                    className="border-2 border-white/20 border-solid rounded-2xl p-2 mb-2 shadow-yellow-100 shadow-md hover:scale-105 transition duration-700 ease-out"
                  >
                    <div className="leading-normal">
                      <h4 className="text-2xl font-semibold font-primary leading-loose">
                        {name}
                      </h4>
                      <p className="font-secondary">{description}</p>
                    </div>
                    <div className="">
                      <a href={url} target="_blank" className="flex items-center gap-x-2"> {/* Use a propriedade 'url' aqui */}
                        <span className="text-gradient">{link}</span>
                        <i className="btn p-1 items-center flex">
                          <BsArrowRight />
                        </i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};