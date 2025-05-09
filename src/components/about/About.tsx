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
            <h3 className="h3">Sou estudante de Engenharia de Computação da UTFPR</h3>
            <p>
              Atualmente sou assessor de financeiro da empresa junior Therion a qual trabalha com desenvolvimento
              web, impressão e prototipagem 3D e vários outros serviços da área. Estou no quarto período do curso
              de Engenharia de Computação ainda com pouca experiência na área mas sempre em busca de mais conhecimentos 
              acerca de programação e impressão 3D, por isso entrei na empresa júnior Therion.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
              <div className="">
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">

                </div>
              </div>

              <div className="">
                <div className="text-4xl text-gradient font-tertiary mb-2">
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-5">
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};