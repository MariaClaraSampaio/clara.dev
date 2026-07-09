import ParticlesBackground from './ParticlesBackground';

export default function AboutMe() {
  return (
    <section className="relative min-h-screen flex items-center bg-black/70 overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-16 flex items-center justify-center h-full">
        <div className="max-w-[520px]">
          <h2 className="text-3xl font-bold text-center text-white mb-4">About Me</h2>
          <p className="text-white/80 text-center leading-8">
           I'm a Systems Developer with experience building modern, responsive, and user-focused web applications. I specialize in creating clean interfaces, developing efficient solutions, and transforming ideas into functional digital experiences.
           
           I'm passionate about technology, software development, and continuous learning. I enjoy exploring new tools, improving my skills, and staying updated with the latest trends in the tech world.
           
           I have experience working with technologies such as React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, and Firebase, focusing on creating scalable applications with great performance and user experience.
           

          </p>

        </div>
      </div>
    </section>
  );
}