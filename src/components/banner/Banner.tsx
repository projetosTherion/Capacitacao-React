import Avatar from "@/assets/avatar.svg";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
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
                Paula <span> Marukawa</span>
              </h1>
              <div className="mb-6 text-4xl lg:text-6xl font-semibold uppercase">
                <span className="ml-4 text-white">desenvolvedora</span>{" "}
                <p>
                  <TypeAnimation
                    className="text-accent"
                    sequence={["Html", 2000, "Css", 2000, "React", 2000, "PHP", 2000,"JavaScript", 2000]}
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
              Atualmente estudante de Engenharia de Computação na Universidade Federal do Paraná, campus Apucarana.
              Sou acessora na empresa junior Therion
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              whileInView={"show"}
              initial="hidden"
              className="flex items-center gap-x-3 max-w-max mx-auto md:mx-0 mt-5 mb-5"
            >
              <button className="btn btn-lg"><a href="mailto:mariaeduarda@therionej.com.br">Entre em contato</a></button>
              <a className="text-gradient btn-link" href="https://beacons.ai/pedroso?fbclid=PAAaZUZ7vjAEeBh3Txrks_YpJLI2zXpxXcSzBWOEpDENTVvZGGspQeYiJ95NU_aem_Af2Pz9zH9XiZ63aEmQ7hq7Voq7ThuBcZB5VpTt2gSPLID_Je-w2cSIjlxAdYFQI7cdo" target="_blank">
                Meu portifolio
              </a>
            </motion.div>
            <div className="flex gap-x-2 max-w-max mx-auto md:mx-0">
              <a href="https://github.com/paulagmaru" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/paula_gmarukawa" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100011023547580" target="_blank">
                <FaFacebook />
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
