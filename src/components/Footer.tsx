"use client";

import {motion} from "framer-motion";
import {Github, Linkedin, Mail, Heart, Code, Coffee} from "lucide-react";
import {Button} from "@/components/ui/button";
import footerCatImage from "@/assets/footer-cat.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/Vice-108",
            label: "GitHub",
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/kumarsinghvikas/",
            label: "LinkedIn",
        },
        {
            icon: Mail,
            href: "mailto:kumarsinghvikas2552003@gmail.com",
            label: "Email",
        },
    ];

    const quickLinks = [
        {label: "About", href: "#about"},
        {label: "Skills", href: "#skills"},
        {label: "Projects", href: "#projects"},
        {label: "Resume", href: "#resume"},
        {label: "Contact", href: "#contact"},
    ];

    return (
        <footer className="bg-card/50 border-t border-border">
            <div className="mx-auto px-4 py-12 container">
                <div className="gap-8 grid md:grid-cols-4">
                    {/* Brand section */}
                    <div className="space-y-4 md:col-span-2">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className="flex items-center gap-4"
                        >
                            <img
                                src={footerCatImage}
                                alt="Footer cat"
                                className="w-16 h-16 object-contain"
                            />
                            <div>
                                <h3 className="font-jetbrains font-bold text-xl">
                                    Vikas Kumar Singh
                                </h3>
                                <p className="font-jetbrains text-muted-foreground">
                                    Web Developer
                                </p>
                            </div>
                        </motion.div>

                        <p className="max-w-md text-muted-foreground">
                            Passionate about creating beautiful, functional web
                            applications that solve real-world problems. Always
                            learning, always building.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.div
                                    key={social.label}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        asChild
                                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </a>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-4">
                        <h4 className="font-jetbrains font-semibold text-foreground">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element =
                                                document.querySelector(
                                                    link.href
                                                );
                                            element?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="space-y-4">
                        <h4 className="font-jetbrains font-semibold text-foreground">
                            Built With
                        </h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>React & TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Framer Motion</li>
                            <li>Shadcn UI</li>
                            <li>Vite</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="font-jetbrains text-muted-foreground text-sm">
                            © {currentYear} Vikas Kumar Singh. All rights
                            reserved.
                        </p>

                        {/* Made with love message */}
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className="flex items-center gap-2 text-muted-foreground text-sm"
                        >
                            <span>Made with</span>
                            <motion.div
                                animate={{scale: [1, 1.2, 1]}}
                                transition={{duration: 1.5, repeat: Infinity}}
                            >
                                <Coffee className="w-4 h-4 text-accent" />
                            </motion.div>
                            <span>+</span>
                            <motion.div
                                animate={{
                                    y: [0, -2, 0],
                                }}
                                transition={{duration: 2, repeat: Infinity}}
                                className="text-accent"
                            >
                                🐱
                            </motion.div>
                            <span>+</span>
                            <motion.div
                                animate={{
                                    rotateY: [0, 180, 360],
                                }}
                                transition={{duration: 3, repeat: Infinity}}
                            >
                                <Code className="w-4 h-4 text-primary" />
                            </motion.div>
                        </motion.div>

                        {/* Back to top */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                window.scrollTo({top: 0, behavior: "smooth"});
                            }}
                            className="hover:bg-primary font-jetbrains hover:text-primary-foreground transition-colors"
                        >
                            Back to Top ↑
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
