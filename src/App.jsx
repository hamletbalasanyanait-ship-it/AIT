import "./App.css";
import Header from "./components/Header";
import FiksvacHeraxosakap from "./components/sakagner/fiksvac heraxosakap/FiksvacHeraxosakap";
import Footer from "./components/sakagner/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero-banner">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOGLW0JFwK5aXNkjfZgi8kaUDdf47utnJ8EkAvTGXfA&s"
            alt="Team Telecom Armenia"
          />
        </section>

        <FiksvacHeraxosakap />
      </main>

      <Footer />
    </>
  );
}

export default App;