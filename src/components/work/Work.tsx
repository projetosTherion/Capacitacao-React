import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Img1 from "@/assets/portfolio-img1.png";
import Img2 from "@/assets/portfolio-img2.png";
import Img3 from "@/assets/portfolio-img3.png";
import { Workimg } from "./workimg";

export const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.3)}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-full flex-col"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-7">
            {/* text */}
            <div className="md:p-5">
              <h2 className="h2 leading-tight text-accent" style={{ color: "#f5eba9" }}>Meus trabalhos</h2>
              <p className="">
                Um pouquinho de meus ultimos trabalhos pessoais.
              </p>
              <button className="btn btn-sm mt-7"><a href="https://github.com/mariaeduardapedroso" target="_blank">Ver todos os projetos</a></button>
            </div>
            {/* img */}
            <Workimg
              img={Img1}
              nameProjeto={"Layout responsivo"}
              title={"Apeperia"}
              url={"https://mariaeduardapedroso.github.io/Alura-Layout-Responsivo/"}
            />
            {/* img */}
            <Workimg
              img={Img2}
              nameProjeto={"Site HTML + CSS"}
              title={"Alura Barbearia"}
              url={"https://mariaeduardapedroso.github.io/Alura-HTML-E-CSS-final/"}
            />
            {/* img */}
            <Workimg
              img={Img3}
              nameProjeto={"Site com javaScript"}
              title={"Calculadora de gasto de combustivel"}
              url={"https://mariaeduardapedroso.github.io/calcular-litros/"}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
