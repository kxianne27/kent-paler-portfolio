import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Container>
          <Hero />
        </Container>
      </main>
    </>
  );
}
