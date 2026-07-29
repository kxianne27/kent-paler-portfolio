import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Container>
        <Hero />
      </Container>
    </main>
  );
}
