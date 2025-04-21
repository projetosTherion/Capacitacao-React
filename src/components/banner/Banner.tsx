import Avatar from "@/assets/avatar.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// Variantes de fade-in padrão
const fadeInVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const Banner = () => {
  return (
    <section className="section flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-20">
          <div className="flex-1 text-center font-secondary md:text-left">
            <motion.div
              variants={fadeInVariants}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="text-4xl font-bold lg:text-7xl">
                Thiago<span> Cristovão</span>
              </h1>
              <div className="mb-6 text-4xl lg:text-6xl font-semibold uppercase">
                <span className="ml-4 text-white">Desenvolvedor</span>{" "}
                <p>
                  <TypeAnimation
                    className="text-accent"
                    sequence={["Playwright", 2000, "Angular", 2000, "TypeScript", 2000]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </p>
              </div>
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: false, amount: 1 }}
            >
              Atualmente no 7º período do curso de Engenharia de Computação na UTFPR e estagiário da empresa Firepot Gaming.
            </motion.p>
            <motion.div
              variants={fadeInVariants}
              whileInView={"show"}
              initial="hidden"
              className="flex items-center gap-x-3 max-w-max mx-auto md:mx-0 mt-5 mb-5"
            >
              <button className="btn btn-lg">
                <a href="mailto:thiagocristovao@alunos.utfpr.edu.br" target="_blank">
                  Fale comigo!
                </a>
              </button>
            </motion.div>
            <div className="flex gap-x-2 max-w-max mx-auto md:mx-0">
              <a href="https://github.com/ThiagoCristovao" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/thiago-cristov%C3%A3o-85ab98207/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/th_cristovao/?next=%2F" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeInVariants}
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