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
          {/*image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/*text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre mim.</h2>
            <h3 className="h3">Sou desenvolvedor FullStack, entusiasta em Segurança e Estudante</h3>
            <p>
              Atualmente sou integrante da empresa junior Therion, onde trabalho com desenvolvimento
              web, impressão e prototipagem 3D e vários outros serviços da área.
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
                  {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                  +
                </div>
                <div className="text-sm tracking-[2px]">
                  Cursos <br />
                  Completos
                </div>
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  Anos de <br />
                  Experiencia
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <button className="btn btn-lg"><a href="mailto:arthurpetroli@alunos.utfpr.edu.br">Vamos conversar</a></button>
              <a href="https://www.linkedin.com/in/arthur-petroli-351013144/" target="_blank" className="text-gradient btn-link">
                Meu Portifolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
