import Avatar from "@/assets/avatar.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export const Banner = () => {
  return (
    <section className="section flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 md:flex-row md:items-center md:gap-x-20">
          <div className="flex-1 text-center font-secondary md:text-left">
            <motion.div
              variants={fadeIn("up", 0.3)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="font-primary">
                Hello<span> World, sou a</span>
              </h1>
              <div className="mb-6 text-3xl lg:text-5xl font-semibold uppercase">
                <span className="ml-4 text-white font-primary">Séfora</span>{" "}
                <p>
                  <TypeAnimation
                    className="text-accent"
                    sequence={["Hardware", 2000, "Software", 2000, "Automação", 2000, "Eletrônica", 2000]}
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
              Estudante apaixonada por tecnologia e inovação. Amo me envolver em novos projetos, com inovação e criatividade estou sempre em busca de novos desafios para continuar meu crescimento profissional.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              whileInView={"show"}
              initial="hidden"
              className="flex items-center gap-x-3 max-w-max mx-auto md:mx-0 mt-5 mb-5"
            >
              <button className="btn btn-lg">
                <a href="mailto:sefora@alunos.utfpr.edu.br" target="_blank">
                  Fale comigo!
                </a>
              </button>
            </motion.div>
            <div className="flex gap-x-2 max-w-max mx-auto md:mx-0">
              <a href="https://github.com/Sefora-Davanso" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/s%C3%A9fora/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/sefora.davanso/" target="_blank">
                <FaInstagram />
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
