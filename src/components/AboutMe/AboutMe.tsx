export default function AboutMe() {
  return (
    <section className="min-h-screen bg-black px-8 py-24 lg:px-16">

      {/* Cabeçalho */}
      <div className="mb-32 text-center">
        <h1 className="text-5xl font-bold text-white lg:text-6xl">
          Por trás do código
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Quem é Clara?
        </p>
      </div>


      <div className="mx-auto flex max-w-6xl flex-col gap-32">


        {/* Diploma */}
        <div className="flex flex-col items-center gap-16 lg:flex-row">

          <img
            src="./formatura.png"
            alt="Formatura"
            className="w-full max-w-[420px] rounded-3xl shadow-2xl"
          />

          <div className="max-w-xl">

            <h2 className="text-3xl font-semibold text-white">
              Diploma Técnico em Informática
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Concluí o curso Técnico em Informática pela EEEP (Escola Estadual
              de Educação Profissional). Durante minha formação, desenvolvi uma
              base sólida em programação, desenvolvimento web, banco de dados,
              redes de computadores e fundamentos de software. Através de
              projetos práticos e trabalhos em equipe, pude transformar
              conhecimentos teóricos em experiências reais na área de
              tecnologia.
            </p>

          </div>

        </div>



        {/* Siará Tech */}
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">

          <img
            src="./SiaraTech.png"
            alt="Siará Tech Summit"
            className="w-full max-w-[420px] rounded-3xl shadow-2xl"
          />

          <div className="max-w-xl">

            <h2 className="text-3xl font-semibold text-white">
              Siará Tech Summit
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Participar do Siará Tech Summit foi uma experiência que ampliou
              minha visão sobre tecnologia e inovação. Durante o evento, tive a
              oportunidade de conhecer profissionais da área, acompanhar novas
              tendências tecnológicas e entender como a tecnologia pode
              transformar negócios e a sociedade. Essa experiência fortaleceu
              ainda mais minha vontade de construir soluções digitais e
              continuar evoluindo na área.
            </p>

          </div>

        </div>




        {/* Diretora de Imprensa */}
        <div className="flex flex-col items-center gap-16 lg:flex-row">

          <img
            src="./gremio.png"
            alt="Diretora de Imprensa"
            className="w-full max-w-[420px] rounded-3xl shadow-2xl"
          />

          <div className="max-w-xl">

            <h2 className="text-3xl font-semibold text-white">
              Diretora de Imprensa
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Atuei como Diretora de Imprensa na minha escola, liderando a
              equipe responsável pela criação de conteúdos digitais, cobertura
              de eventos e comunicação institucional. Essa experiência
              desenvolveu minhas habilidades de liderança, criatividade,
              organização e trabalho em equipe, além de aprimorar minha
              capacidade de transmitir ideias através da comunicação e da
              produção de conteúdo.
            </p>

          </div>

        </div>





        {/* Baixista */}
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">

          <img
            src="./contrabaixo.png"
            alt="Baixista"
            className="w-full max-w-[420px] rounded-3xl shadow-2xl"
          />

          <div className="max-w-xl">

            <h2 className="text-3xl font-semibold text-white">
              Baixista da Banda Escolar
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Fazer parte da banda da minha escola como baixista me ensinou
              valores importantes como disciplina, dedicação e colaboração. A
              música me mostrou a importância de trabalhar em conjunto, ouvir
              diferentes perspectivas e buscar evolução constante —
              características que também levo para minha jornada na tecnologia
              e no desenvolvimento de software.
            </p>

          </div>

        </div>




        {/* StarCap */}
        <div className="flex flex-col items-center gap-16 lg:flex-row">

          <img
            src="./starcap.png"
            alt="StarCap"
            className="w-full max-w-[420px] rounded-3xl shadow-2xl"
          />

          <div className="max-w-xl">

            <h2 className="text-3xl font-semibold text-white">
              Desenvolvedora Front-End na StarCap
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Atualmente faço parte da StarCap, uma startup fintech onde tenho
              a oportunidade de participar do desenvolvimento de uma plataforma
              financeira e vivenciar na prática um ambiente profissional de
              tecnologia.

              <br />
              <br />

              Durante essa experiência, venho aprimorando meus conhecimentos em
              tecnologias como React, TypeScript, Tailwind CSS, Next.js e
              Firebase, além de aprender sobre organização de código,
              versionamento, colaboração em equipe e desenvolvimento de
              soluções reais.

              <br />
              <br />

              Fazer parte da StarCap tem sido uma etapa muito importante na
              minha jornada, pois cada desafio me incentiva a evoluir, buscar
              novas soluções e desenvolver não apenas minhas habilidades
              técnicas, mas também minha comunicação, autonomia e capacidade
              de trabalhar em equipe.
            </p>

          </div>

        </div>


      </div>

    </section>
  );
}