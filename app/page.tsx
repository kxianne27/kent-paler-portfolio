import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />

        <About />
      </Container>
    </>
  );
}
