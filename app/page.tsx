import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";

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
      </Container>
    </>
  );
}
