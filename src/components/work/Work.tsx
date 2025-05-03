import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Img1 from "@/assets/portfolio-img1.png";
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
              <h2 className="h2 leading-tight text-accent">Meus trabalhos</h2>
              <p className="">
                Um pouquinho de meus ultimos trabalhos pessoais.
              </p>
              <button className="btn btn-sm mt-7"><a href="https://github.com/TTtiagoTT" target="_blank">Ver todos os projetos</a></button>
            </div>
            {/* img */}
            <Workimg
              img={Img1}
              nameProjeto={"Layout responsivo"}
              title={"Apeperia"}
              url={"https://github.com/TTtiagoTT"}
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
};
