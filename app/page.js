import Hero from "@/components/main/Hero/hero";
import Video from "@/components/main/Video/video";
import Carousel from "@/components/main/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel />
      <Hero />
      <Video />
    </>
  );
}
