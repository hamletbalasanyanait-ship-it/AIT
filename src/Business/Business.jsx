import Header from "../components/business/Header";
import Hero from "../components/business/Hero";
import Tariffs from "../components/business/Tariffs";
import Services from "../components/business/Services";
import JoinForm from "../components/business/JoinForm";
import VirtualPbx from "../components/business/VirtualPbx";
import Footer from "../components/business/Footer";
import "./business.css";

export default function Business() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tariffs />
        <Services />
        <JoinForm />
        <VirtualPbx />
      </main>
      <Footer />
    </>
  );
}