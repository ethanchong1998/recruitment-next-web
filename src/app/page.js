import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import LatestJobs from "@/components/LatestJobs";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Partner />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  );
}
