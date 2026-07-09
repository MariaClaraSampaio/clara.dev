import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* camada escura por cima do vídeo */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* conteúdo */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutMe />
      </div>

    </div>
  );
}

export default App;