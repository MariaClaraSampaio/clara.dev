export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center pt-8 z-50">
      <div className="w-[60%] max-w-6xl bg-purple-0/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-12 py-4 flex items-center justify-center gap-20">
        <img 
          src="/logo.png"
          alt="Logo"
          className="w-16"
        />

        <nav className="flex gap-8 text-white">
          <a href="#" className="hover:text-purple-400">
            Home
          </a>
          <a href="#" className="hover:text-purple-400">
            Sobre
          </a>
          <a href="#" className="hover:text-purple-400">
            Projetos
          </a>
          <a href="#" className="hover:text-purple-400">
            Contato
          </a>
        </nav>

      </div>
    </header>
  );
}