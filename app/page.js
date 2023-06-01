import Hero from "@/components/main/Hero/hero";
import ProcessPage from "@/components/main/Process/page";
import Video from "@/components/main/Video/video";
import BlogPage from "@/components/main/blog/blog";
import Carousel from "@/components/main/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel />
      <Hero />
      <ProcessPage />
      <BlogPage />
    </>
  );
}
