import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Resume } from "@/components/resume/Resume";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />
        <div className="my-12 border-t border-slate-200" />
        <About />
        <div className="my-12 border-t border-slate-200" />
        <Experience />
        <div className="my-12 border-t border-slate-200" />
        <Projects />
        <div className="my-12 border-t border-slate-200" />
        <Resume />
        <div className="my-12 border-t border-slate-200" />
        <Contact />
      </Container>

      <Footer />
    </>
  );
}
