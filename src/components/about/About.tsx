import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "@/variants";

export const About = () => {
  const [ref, InView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 md:flex-row md:items-center md:gap-y-0">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre mim.</h2>
            <h3 className="h3">Sou desenvolvedora júnior FullStack</h3>
            <p>
              Estou finalizando o curso de Engenharia de Computação na UTFPR. Tenho grande experiência em projetos voltados para eletrônica e microcontroladores, como automações e sistemas embarcados. Minhas habilidades são tanto em software quanto em soluções integradas com hardware.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={0} end={10} duration={3} /> : null}
                  +
                </div>
                <div className="text-sm tracking-[2px]">
                  Projetos<br />
                  Realizados
                </div>
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={0} end={15} duration={3} /> : null}
                  +
                </div>
                <div className="text-sm tracking-[2px]">
                  Linguagens <br />
                  de Programação
                </div>
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  Projetos <br />
                  desenvolvidos do zero
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-5">
              <button className="btn btn-lg">
                <a href="mailto:sefora@alunos.utfpr.edu.br">Vamos conversar</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
