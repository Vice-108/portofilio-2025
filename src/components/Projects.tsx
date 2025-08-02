"use client";

import React from "react";
import {motion} from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Github, ExternalLink, Code, Sparkles} from "lucide-react";
import {containerVariants, itemVariants} from "@/lib/animations";
import codesnip from "@/assets/codesnip.png";
import lumina from "@/assets/lumina.png";
import FreelanceWorks from "@/components/FreelanceWorks";

// Use the same icon URL as in Skills.tsx
const iconUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

// Function to get tech icon URL or JSX component
const getTechIcon = (tech) => {
    // Special case for AI Integration - return the Sparkles component
    if (tech === "AI Integration") {
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }

    const iconMap = {
        // Languages
        JavaScript: `${iconUrl}javascript/javascript-original.svg`,
        TypeScript: `${iconUrl}typescript/typescript-original.svg`,
        HTML: `${iconUrl}html5/html5-original.svg`,
        CSS: `${iconUrl}css3/css3-original.svg`,
        PHP: `${iconUrl}php/php-original.svg`,

        // Frameworks & Libraries
        "Vue 3": `${iconUrl}vuejs/vuejs-original.svg`,
        Vue: `${iconUrl}vuejs/vuejs-original.svg`,
        React: `${iconUrl}react/react-original.svg`,
        Laravel: `${iconUrl}laravel/laravel-original.svg`,
        "Tailwind CSS": `${iconUrl}tailwindcss/tailwindcss-original.svg`,
        "Node.js": `${iconUrl}nodejs/nodejs-original.svg`,
        Pinia: `https://images.seeklogo.com/logo-png/46/1/pinia-logo-png_seeklogo-467284.png`,

        // Database
        MongoDB: `${iconUrl}mongodb/mongodb-original.svg`,
        MySQL: `${iconUrl}mysql/mysql-original.svg`,
        SQLite: `${iconUrl}sqlite/sqlite-original.svg`,
    };

    return iconMap[tech] || null;
};

// Helper function to render the appropriate icon component
const renderTechIcon = (tech) => {
    const icon = getTechIcon(tech);

    // If icon is a React element (like our Sparkles component)
    if (React.isValidElement(icon)) {
        return icon;
    }

    // If icon is a string URL
    if (typeof icon === "string") {
        return <img src={icon} alt={tech} className="w-5 h-5" />;
    }

    // If no icon found
    return null;
};

const Projects = () => {
    const projects = [
        {
            title: "Codesnip",
            imageSrc: codesnip,
            imageAlt: "Codesnip Project",
            description:
                "A comprehensive code snippet manager built with Laravel and Vue 3. Features user authentication, category management, syntax highlighting, and search functionality for organizing and sharing code snippets.",
            longDescription:
                "Codesnip is a Web web application designed to help developers organize, store, and share their code snippets efficiently. Built with Laravel for robust backend functionality and Vue 3 for a reactive user interface.",
            technologies: [
                "Laravel",
                "Vue 3",
                "MySQL",
                "Tailwind CSS",
                "PHP",
                "JavaScript",
            ],
            github: "https://github.com/Vice-108/codesnip",
            live: null,
            icon: Code,
            color: "text-primary",
            features: [
                "User Authentication & Authorization",
                "Code Syntax Highlighting",
                "Category & Tag Management",
                "Advanced Search & Filtering",
                "Responsive Design",
            ],
        },
        {
            title: "Lumina",
            imageSrc: lumina,
            imageAlt: "Lumina Project",
            description:
                "An AI-powered chat interface built with Vue 3, featuring real-time conversations, message history, and a beautiful dark theme. Uses SQLite for data persistence and Pinia for state management.",
            longDescription:
                "Lumina represents the future of AI interaction with a sleek, intuitive interface. Built entirely with modern frontend technologies, it showcases the power of Vue 3 ecosystem for complex applications.",
            technologies: [
                "Vue",
                "SQLite",
                "Pinia",
                "Tailwind CSS",
                "JavaScript",
                "AI Integration",
            ],
            github: "https://github.com/Vice-108/Lumina",
            live: null,
            icon: Sparkles,
            color: "text-accent",
            features: [
                "Real-time AI Chat Interface",
                "Message History & Persistence",
                "Dark Theme UI",
                "State Management with Pinia",
                "Responsive Mobile Design",
            ],
        },
    ];

    return (
        <section id="projects" className="py-20 lg:py-32">
            <div className="mx-auto px-4 container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    className="mx-auto max-w-6xl"
                >
                    {/* Section header */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 font-jetbrains font-bold text-4xl lg:text-5xl">
                            Featured{" "}
                            <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
                            A showcase of applications I've built with modern
                            technologies
                        </p>
                    </motion.div>

                    {/* Projects grid */}
                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                className="group"
                            >
                                <Card className="overflow-hidden card-hover">
                                    <div
                                        className={`grid lg:grid-cols-2 gap-6 ${
                                            index % 2 === 1
                                                ? "lg:grid-flow-col-dense"
                                                : ""
                                        }`}
                                    >
                                        {/* Project info */}
                                        <div
                                            className={`p-8 ${
                                                index % 2 === 1
                                                    ? "lg:col-start-2"
                                                    : ""
                                            }`}
                                        >
                                            <CardHeader className="mb-6 p-0">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div
                                                        className={`p-2 rounded-lg bg-card`}
                                                    >
                                                        <project.icon
                                                            className={`w-6 h-6 ${project.color}`}
                                                        />
                                                    </div>
                                                    <CardTitle className="font-jetbrains text-2xl">
                                                        {project.title}
                                                    </CardTitle>
                                                </div>
                                                <CardDescription className="text-base leading-relaxed">
                                                    {project.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="space-y-6 p-0">
                                                {/* Technologies */}
                                                <div>
                                                    <h4 className="mb-3 font-jetbrains font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                                                        Technologies
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map(
                                                            (tech) => (
                                                                <motion.div
                                                                    key={tech}
                                                                    whileHover={{
                                                                        scale: 1.05,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.2,
                                                                    }}
                                                                >
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="flex items-center gap-2 hover:bg-primary hover:border-primary font-jetbrains hover:text-primary-foreground transition-colors"
                                                                    >
                                                                        {renderTechIcon(
                                                                            tech
                                                                        )}
                                                                        {tech}
                                                                    </Badge>
                                                                </motion.div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Features */}
                                                <div>
                                                    <h4 className="mb-3 font-jetbrains font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                                                        Key Features
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {project.features.map(
                                                            (feature, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-center gap-2 text-muted-foreground text-sm"
                                                                >
                                                                    <div className="flex-shrink-0 bg-primary rounded-full w-1.5 h-1.5" />
                                                                    {feature}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>

                                                {/* Action buttons */}
                                                <div className="flex gap-3 pt-4">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                        className="hover:bg-primary font-jetbrains hover:text-primary-foreground transition-colors"
                                                    >
                                                        <a
                                                            href={
                                                                project.github
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2"
                                                        >
                                                            <Github className="w-4 h-4" />
                                                            View Code
                                                        </a>
                                                    </Button>

                                                    {project.live && (
                                                        <Button
                                                            size="sm"
                                                            asChild
                                                            className="font-jetbrains"
                                                        >
                                                            <a
                                                                href={
                                                                    project.live
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                                Live Demo
                                                            </a>
                                                        </Button>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </div>

                                        {/* Project visual */}
                                        <div className="relative flex justify-center items-center p-5 border border-x border-y-0">
                                            <img
                                                src={project.imageSrc}
                                                alt={project.imageAlt}
                                                className="mx-auto border-4 border-primary-800 rounded-lg w-full object-fill aspect-video"
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <FreelanceWorks />

                    {/* More projects call-to-action */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <Card className="bg-gradient-to-r from-card to-card/50 p-8 border-primary/20 card-hover">
                            <CardContent className="p-0">
                                <h3 className="mb-4 font-jetbrains font-bold text-xl">
                                    More Projects Coming Soon
                                </h3>
                                <p className="mb-6 text-muted-foreground">
                                    I'm constantly working on new projects and
                                    exploring emerging technologies. Check out
                                    my GitHub for the latest updates and
                                    contributions.
                                </p>
                                <Button
                                    variant="outline"
                                    asChild
                                    className="hover:bg-primary font-jetbrains hover:text-primary-foreground transition-colors"
                                >
                                    <a
                                        href="https://github.com/Vice-108"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        View All Projects
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
