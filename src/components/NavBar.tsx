"use client";

import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {Menu, X, Download} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation links
    const navLinks = [
        {label: "About", href: "#about"},
        {label: "Skills", href: "#skills"},
        {label: "Projects", href: "#projects"},
        {label: "Resume", href: "#resume"},
        {label: "Contact", href: "#contact"},
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({behavior: "smooth"});
    };

    // Handle resume download
    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "/Vikas Kumar Singh Resume A.pdf"; // Path to the PDF in public folder
        link.download = "Vikas Kumar Singh Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header
            className={cn(
                "top-0 right-0 left-0 z-50 fixed transition-all duration-300",
                isScrolled
                    ? "bg-card/90 backdrop-blur-md border-b border-border/50 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto px-4 container">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="flex items-center gap-2"
                    >
                        <span className="font-jetbrains font-bold text-xl gradient-text">
                            {"<VKS/>"}
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex justify-center items-center">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.label}
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{
                                        delay: 0.1 * navLinks.indexOf(link),
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(link.href);
                                        }}
                                        className="font-jetbrains text-muted-foreground hover:text-primary text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Side - Resume Download */}
                    <div className="hidden md:flex items-center">
                        {/* Resume Download Button */}
                        <Button
                            size="sm"
                            className="font-jetbrains text-xs"
                            onClick={handleResumeDownload}
                        >
                            <Download className="mr-2 w-3 h-3" />
                            Resume
                        </Button>
                    </div>

                    {/* Mobile Menu Controls */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Mobile Resume Download */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleResumeDownload}
                            className="w-8 h-8"
                            aria-label="Download Resume"
                        >
                            <Download className="w-4 h-4" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="w-8 h-8"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false} // Prevent initial animation
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: {
                        opacity: 1,
                        maxHeight: "400px", // Adjust based on your content
                        visibility: "visible",
                    },
                    closed: {
                        opacity: 0,
                        maxHeight: "0px",
                        visibility: "hidden",
                    },
                }}
                transition={{
                    duration: 0.25, // Slightly faster
                    ease: [0.4, 0, 0.2, 1], // Custom easing
                }}
                className="md:hidden bg-card/95 backdrop-blur-md border-b border-border/50 overflow-hidden will-change-[max-height,opacity]"
            >
                <div className="px-4 py-4 w-full">
                    {/* Remove mx-auto container here */}
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link.href);
                                    }}
                                    className="block py-2 font-jetbrains text-muted-foreground hover:text-primary text-sm transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Download Resume in Mobile Menu */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                        <Button
                            size="sm"
                            variant="outline"
                            className="w-full font-jetbrains text-xs"
                            onClick={handleResumeDownload}
                        >
                            <Download className="mr-2 w-3 h-3" />
                            Download Resume
                        </Button>
                    </div>
                </div>
            </motion.div>
        </header>
    );
};

export default Navbar;
