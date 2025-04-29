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
            <h3 className="h3">sou desenvolvedora junior FullStack</h3>
            <p>
              Atualmente sou presidente da empresa junior therion na qual trabalha com desenvolvimento
              web, impressão e prototipagem 3D e vários outros serviços da area. Também sou estagiaria na empresa
              ItLab na qual trabalho com Front-end e Back-end todos os dias.
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
              <button className="btn btn-lg"><a href="mailto:mariaeduarda@therionej.com.br">Vamos conversar</a></button>
              <a href="https://beacons.ai/pedroso?fbclid=PAAaZUZ7vjAEeBh3Txrks_YpJLI2zXpxXcSzBWOEpDENTVvZGGspQeYiJ95NU_aem_Af2Pz9zH9XiZ63aEmQ7hq7Voq7ThuBcZB5VpTt2gSPLID_Je-w2cSIjlxAdYFQI7cdo" target="_blank" className="text-gradient btn-link">
                Meu Portifolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
