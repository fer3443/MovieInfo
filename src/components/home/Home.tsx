import { FormSearch } from "../form/FormSearch";
import { Navbar } from "../navbar/Navbar";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="main">
        <section className="section-home section">
          <div className="container-home container grid">
            <h1 className="section-title">Bienvenido a Movie Info</h1>
            <h3 className="section-subtitle">Aqui encontraras toda la informacion sobre tus peliculas favoritas</h3>
           <FormSearch/>
          </div>
        </section>
      </main>
    </>
  );
};