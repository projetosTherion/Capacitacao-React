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
            <h2 className="h2" style={{ color: "#f5eba9" }} >Sobre mim.</h2>
            <h3 className="h3">Sou estudante apaixonado por tecnologia</h3>
            <p>
            Atualmente sou membro trainee da empresa júnior Therion, onde trabalho com desenvolvimento 
            web e outras soluções tecnológicas. Amo aprender e criar soluções inovadoras!
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={5} end={10} duration={3} /> : null}
                  +
                </div>
                <div className="text-sm tracking-[2px]">
                  Projetos<br />
                  Realizados
                </div>
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                  {InView ? <CountUp start={5} end={5} duration={5} /> : null}
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
              <button className="btn btn-lg"><a href="luisdessia@gmail.com">Vamos conversar</a></button>
              <a href="https://github.com/luisdessia" target="_blank" className="text-gradient btn-link">
                Meu Portifolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};