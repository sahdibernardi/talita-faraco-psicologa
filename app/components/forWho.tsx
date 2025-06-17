export default function ForWho() {
  return(
    <section id="para-quem" className="relative -mt-1 bg-[#E9E8E5] text-[#143C6B] py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl uppercase md:text-5xl mb-12 text-center">Psicoterapia para você que...</h2>
          <div className="text-lg w-full flex flex-col items-center justify-center">
            <div className="w-9/12">
              <p className="mb-6">
                • experimenta sentimentos frequentes e/ou intensos de <b>tristeza, ansiedade e angústia</b>.
              </p>
              <p className="mb-6">
                • sente-se confuso, <b>inseguro</b> ou com <b>medo</b> sobre seu futuro.
              </p>
              <p className="mb-6">
                • sofre com sua <b>autoestima</b> ou gostaria de mudar algo na forma como vive a vida.
atualmente.
              </p>
              <p className="mb-6">
                • enfrenta algum <b>luto</b> ou está atravessando uma fase de <b>mudança</b> significativa em sua vida.
              </p>
              <p className="mb-6">
                • gostaria de melhorar seus <b>relacionamentos</b> amorosos, familiares e sociais.
              </p>
              <p className="mb-6">
                • enfrenta uma doença que te traz <b>sofrimento</b> e que mudou sua vida de forma inesperada.
              </p>
              <p className="mb-36">
                • procura desenvolver seu <b>autoconhecimento</b> e autenticidade. 
              </p>
            </div>
          </div>
        </div>
        {/* Smooth gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#E9E8E5] to-[#3d5a80]"></div>
      </section>
  )
}
