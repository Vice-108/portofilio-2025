"use client";

import {motion} from "framer-motion";
import {Github, Linkedin, Mail, Coffee} from "lucide-react";
import {Button} from "@/components/ui/button";
import heroImage from "@/assets/hero-cat.png";
import {containerVariants, itemVariants} from "@/lib/animations";

const Hero = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <section className="relative flex justify-center items-center pt-28 min-h-screen overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-primary/20 rounded-full w-2 h-2"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="z-10 relative mx-auto px-4 container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="items-center gap-12 grid lg:grid-cols-2"
                >
                    {/* Left side - Text content */}
                    <div className="space-y-8">
                        <motion.div
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            <motion.h1
                                className="font-jetbrains font-bold text-6xl lg:text-7xl"
                                variants={itemVariants}
                            >
                                <span className="text-foreground">Vikas</span>{" "}
                                <span className="gradient-text">Kumar</span>{" "}
                                <span className="text-foreground">Singh</span>
                            </motion.h1>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-3 text-muted-foreground text-xl lg:text-2xl"
                            >
                                <Coffee className="w-6 h-6 text-accent" />
                                <span className="font-jetbrains">
                                    Turning caffeine into code
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="max-w-lg text-muted-foreground text-lg lg:text-xl leading-relaxed"
                        >
                            Web developer with 2.5+ years of experience
                            specializing in{" "}
                            <span className="font-semibold text-primary">
                                Vue 3
                            </span>
                            ,{" "}
                            <span className="font-semibold text-primary">
                                Laravel
                            </span>
                            , and{" "}
                            <span className="font-semibold text-primary">
                                Tailwind CSS
                            </span>
                            .
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                onClick={handleContactClick}
                                size="lg"
                                className="font-jetbrains animate-glow-pulse hero-glow"
                            >
                                Let's Connect
                            </Button>

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <a
                                        href="https://github.com/Vice-108"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/kumarsinghvikas/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <a
                                        href="mailto:kumarsinghvikas2552003@gmail.com"
                                        aria-label="Send Email"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side - Cat illustration */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src={heroImage}
                                alt="Cute cat developer illustration"
                                className="drop-shadow-2xl w-full max-w-md lg:max-w-lg object-contain"
                            />

                            {/* Glowing effect behind the cat */}
                            <div className="-z-10 absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-glow-pulse" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={itemVariants}
                    className="bottom-8 left-1/2 absolute -translate-x-1/2 transform"
                >
                    <motion.div
                        animate={{y: [0, 10, 0]}}
                        transition={{duration: 2, repeat: Infinity}}
                        className="flex justify-center border-2 border-primary rounded-full w-6 h-10"
                    >
                        <motion.div
                            animate={{y: [0, 12, 0]}}
                            transition={{duration: 2, repeat: Infinity}}
                            className="bg-primary mt-2 rounded-full w-1 h-3"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
