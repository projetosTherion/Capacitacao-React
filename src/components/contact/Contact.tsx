import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
// Remova a importação de 'node-fetch' para usar o 'fetch' nativo do navegador

import { fadeIn } from "@/variants";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vivacious-sweatsuit-wasp.cyclic.app/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json(); // Leia a resposta como JSON

      console.log(responseData);

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
        // Lógica adicional após o envio bem-sucedido
        // Popup de sucesso
        window.alert("Formulário enviado com sucesso!");

      } else {
        console.error("Erro ao enviar o formulário");
        // Lógica adicional para lidar com erros
        window.alert("Erro ao enviar o formulário");
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
      window.alert("Erro ao enviar o formulário");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-2xl uppercase text-accent font-medium">
                Contato
              </h4>
              <h2 className="text-5xl lg:text-8xl uppercase mb-7">
                Converse comigo!
              </h2>
            </div>
          </motion.div>
          {/*form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 flex flex-col gap-y-5 border rounded-2xl p-6 pb-14 items-start"
          >
            <input
              onChange={handleChange}
              value={formData.nome}
              name="nome"
              className="bg-transparent border-b py-2 text-white placeholder:text-white outline-none w-full"
              type="name"
              placeholder="seu nome"
              required
            />
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              className="bg-transparent border-b py-2 text-white placeholder:text-white outline-none w-full"
              type="email"
              placeholder="seu melhor email"
              required
            />
            <textarea
              onChange={handleChange}
              value={formData.mensagem}
              name="mensagem"
              className="bg-transparent border-b py-10 text-white placeholder:text-white outline-none w-full resize-none mb-5"
              placeholder="mensagem"
              required
            ></textarea>
            <button type="submit" className="btn btn-sm">
              Enviar
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
