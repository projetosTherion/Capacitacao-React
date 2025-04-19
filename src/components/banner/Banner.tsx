import Avatar from "@/assets/1.png";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export const Banner = () => {
  return (
    <section className="section flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-20 ">
          <div className="flex-1 text-center font-secondary md:text-left">
            <motion.div
              variants={fadeIn("up", 0.3)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="text-4xl font-bold lg:text-7xl">
                Tiago<span> Fernandes Soucek</span>
              </h1>
              <div className="mb-6 text-4xl lg:text-6xl font-semibold uppercase">
                <span className="ml-4 text-white">desenvolvedor</span>{" "}
                <p>
                  <TypeAnimation
                    className="text-accent"
                    sequence={["HTML", 2000, "CSS", 2000, "Python", 2000, "Swift", 2000,"JavaScript", 2000]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </p>
              </div>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: false, amount: 1 }}
            >
              Estudante de Engenharia de Computação no sétimo período na Universidade Federal do Paraná, campus Apucarana.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              whileInView={"show"}
              initial="hidden"
              className="flex items-center gap-x-3 max-w-max mx-auto md:mx-0 mt-5 mb-5"
            >
              <button className="btn btn-lg"><a href="mailto:tiago.2004@alunos.utfpr.edu.br">Entre em contato</a></button>
            </motion.div>
            <div className="flex gap-x-2 max-w-max mx-auto md:mx-0">
              <a href="https://github.com/TttiagoTT" target="_blank">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/tiago-fernandes-soucek-73606a2b6" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            whileInView={"show"}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            className="hidden md:flex flex-1"
          >
            <img src={Avatar} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
