export default function About() {
  return(
    <section id="sobre" className="relative bg-[#E9E8E5] text-[#143C6B] py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl uppercase md:text-5xl mb-12 text-center">Sobre mim</h2>
          <div className="text-lg w-full flex flex-col items-center justify-center">
            <div className="w-9/12">
              <p className="mb-2">Olá!</p>
              <p className="font-bold mb-4">Me chamo Talita,</p>
              <p className="mb-6">
                Nasci em Florianópolis e por lá se fala rápido e muito. Sou extrovertida e falante desde pequenininha, mas sempre tive olhos e ouvidos atentos e curiosos. 
              </p>
              <p className="mb-6">
                Na mesma proporção que gosto de contar histórias, gosto de ouvi-las. E à medida que fui crescendo, foi na escuta que me realizei. Ouvindo atentamente e cuidando daquilo que é escutado: assim me encontrei como profissional. 
              </p>
              <p className="mb-6 font-bold">
                Honrar a confiança daqueles que compartilham suas angústias, pensamentos e sentimentos virou uma missão e um compromisso.
              </p>
              <p className="mb-6">
                Hoje sou Psicóloga Clínica e Hospitalar, <b>especialista em Oncologia</b>. Possuo experiência em atendimento psicológico clínico, ambulatorial, atividades de ensino e pesquisa, avaliação psicológica e na assistência hospitalar em unidades de internação de todas os níveis de complexidade, cuidando de pacientes, famílias e profissionais da saúde. Me oriento pela Fenomenologia-Existencial e sou uma estudiosa entusiasta dos Cuidados Paliativos e abordagens do Luto.
              </p>
              <p className="mb-6 font-bold">
                Aqui me apresento, para que você, que busca ajuda especializada, justa e respeitosa, <b>saiba que pode contar comigo</b>.
              </p>
              <p className="mb-2">
                Psicóloga Talita F Cantelli
              </p>
              <p className="mb-6">
                CRP 06/176527.
              </p>
            </div>
          </div>
        </div>
        {/* Smooth gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#E9E8E5] to-[#3d5a80]"></div>
      </section>
  )
}
