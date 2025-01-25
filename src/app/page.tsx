// import Image from "next/image";

import LandingPage from "@/app/components/landing/landingpage";
import NavigationMenu from "@/app/components/navigation/navigation";
import AboutPage from "./components/about/about";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <section id="home" className="min-h-screen py-4"><LandingPage /></section>
      <section id="about" className="min-h-screen  py-16"><AboutPage/></section>
      <section id="work" className="min-h-screen py-16">Work Content</section>

    </>
  );
}
