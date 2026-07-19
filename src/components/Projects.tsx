import ParticlesBackground from "./ParticlesBackground";

const projects = [
  {
    title: "StarCap",
    description:
      "Fintech platform focused on financial management, where I contribute to the development of modern interfaces and real-world solutions.",
    technologies:
      "React • Next.js • TypeScript • Tailwind CSS • Firebase",
  },
  {
    title: "Sistema de Agendamento",
    description:
      "A scheduling system developed to organize appointments and improve user experience through a simple and efficient interface.",
    technologies:
      "HTML • CSS • JavaScript • Node.js • MySQL",
  },
  {
    title: "Bloco de Notas",
    description:
      "A notes application with authentication and data management, created to practice full-stack development concepts.",
    technologies:
      "React • Node.js • SQLite • Authentication",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen flex items-center bg-black/70 overflow-hidden py-24">
      <ParticlesBackground />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-8 lg:px-16">

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">
            Projetos
          </h1>

          <p className="mt-4 text-white/60 text-lg">
            Algumas soluções que desenvolvi durante minha jornada na tecnologia.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
              bg-purple-300/20
              backdrop-blur-md
              border
              border-white/20
              rounded-2xl
              p-8
              shadow-lg
              hover:scale-105
              transition-transform
              duration-500
              hover:shadow-purple-950
              "
            >

              <h2 className="text-2xl font-bold text-white">
                {project.title}
              </h2>


              <p className="mt-5 text-white/80 leading-7">
                {project.description}
              </p>


              <p className="mt-6 text-sm text-purple-200">
                {project.technologies}
              </p>


              <button
                className="
                mt-8
                rounded-lg
                bg-purple-500
                px-5
                py-2
                text-white
                hover:bg-purple-600
                transition
                "
              >
                Ver projeto
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}