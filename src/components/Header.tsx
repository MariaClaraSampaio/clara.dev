export default function Header() {
  return (
    <header className="w-full flex justify-center pt-8">
      <div className="w-[60%] max-w-6xl bg-purple-400/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-12 py-4 flex items-center justify-center gap-20">
        <img 
          src="/logo.png"
          alt="Logo"
          className="w-16"
        />

        <nav className="flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </nav>

      </div>
    </header>
  );
}