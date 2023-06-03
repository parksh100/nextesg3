import Hero from "@/components/main/Hero/hero";
import ProcessPage from "@/components/main/Process/page";
import BlogPage from "@/components/main/blog/blog";
import Carousel from "@/components/main/carousel";
import ContactForm from "@/components/main/Contact/contact-form";
import Footer from "@/components/main/Footer/footer";

export default function Home() {
  return (
    <>
      <Carousel />
      <Hero />
      <ProcessPage />
      <BlogPage />
      <ContactForm />
      <Footer />
    </>
  );
}
