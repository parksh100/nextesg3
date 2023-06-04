import Hero from "@/components/main/Hero/Hero";
import ProcessPage from "@/components/main/Process/page";
import BlogPage from "@/components/main/blog/Blog";
import Carousel from "@/components/main/Carousel";
import ContactForm from "@/components/main/Contact/ContactForm";
import Footer from "@/components/main/Footer/Footer";

export default function Home() {
  return (
    <>
      <Carousel />
      <Hero />
      <ProcessPage />
      <BlogPage />
      <ContactForm />
    </>
  );
}
