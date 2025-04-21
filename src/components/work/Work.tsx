import { motion } from "framer-motion";
import Img1 from "@/assets/portfolio-img1.jpeg";
import Img2 from "@/assets/portfolio-img2.png";
import { Workimg } from "./workimg";

// Variantes de fade-in padrão
const fadeInVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeInVariants}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-full flex-col"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-7">
            {/* text */}
            <div className="md:p-5">
              <h2 className="h2 leading-tight text-accent">Meus projetos</h2>
              <button className="btn btn-sm mt-7"><a href="https://github.com/ThiagoCristovao" target="_blank">Ver todos os projetos</a></button>
            </div>
            {/* img */}
            <Workimg
              img={Img1}
              nameProjeto={"Máquinas de Jogos"}
              title={"Máquinas"}
            />
            {/* img */}
            <Workimg
              img={Img2}
              nameProjeto={"Site automatizado"}
              title={"Site"}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};