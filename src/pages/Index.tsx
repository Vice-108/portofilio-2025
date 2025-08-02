import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="bg-background min-h-screen">
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Index;
