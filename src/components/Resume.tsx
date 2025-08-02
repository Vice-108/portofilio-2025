"use client";

import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {
    Download,
    FileText,
    Briefcase,
    GraduationCap,
    Award,
    Cpu,
} from "lucide-react";
import {containerVariants, itemVariants} from "@/lib/animations";

// Use the same icon URL as in Skills.tsx
const iconUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

// Updated getTechIcon function to use DevIcons
const getTechIcon = (tech) => {
    const iconMap = {
        // Languages
        JavaScript: `${iconUrl}javascript/javascript-original.svg`,
        TypeScript: `${iconUrl}typescript/typescript-original.svg`,
        HTML: `${iconUrl}html5/html5-original.svg`,
        CSS: `${iconUrl}css3/css3-original.svg`,
        SQL: `${iconUrl}mysql/mysql-original.svg`,
        Python: `${iconUrl}python/python-original.svg`,

        // Frameworks
        "Vue 3": `${iconUrl}vuejs/vuejs-original.svg`,
        React: `${iconUrl}react/react-original.svg`,
        Laravel: `${iconUrl}laravel/laravel-original.svg`,
        "Tailwind CSS": `${iconUrl}tailwindcss/tailwindcss-original.svg`,
        "Node.js": `${iconUrl}nodejs/nodejs-original.svg`,

        // Database
        MongoDB: `${iconUrl}mongodb/mongodb-original.svg`,
        MySQL: `${iconUrl}mysql/mysql-original.svg`,
        SQLite: `${iconUrl}sqlite/sqlite-original.svg`,

        // Tools
        Git: `${iconUrl}git/git-original.svg`,
        "VS Code": `${iconUrl}vscode/vscode-original.svg`,
        "Fetch API": `${iconUrl}javascript/javascript-original.svg`,
    };

    return iconMap[tech] || null;
};

const Resume = () => {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement("a");
        link.href = "/Vikas Kumar Singh Resume A.pdf"; // Path to the PDF in public folder
        link.download = "Vikas Kumar Singh Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const experiences = [
        {
            title: "Software Engineer",
            company: "IPACCT Pvt. Ltd.",
            duration: "Jan 2023 - Present",
            description:
                "Contributing to the design and development of a custom CRM platform tailored for client-server network and traffic management.",
            achievements: [
                "Engineered modular Vue components with dynamic APIs ensuring high responsiveness",
                "Led development of core features with best practices in code structure and state management",
                "Contributed to UI/UX design, improving usability and reducing training time",
                "Unified multiple platforms into a centralized CRM boosting efficiency by 40%",
                "Integrated UIDAI Aadhaar verification for secure identity authentication",
                "Collaborated in an agile environment with sprint planning and cross-functional coordination",
            ],
        },
    ];

    const projects = [
        {
            title: "Codesnip",
            description:
                "A code snippet manager with language conversion support",
            technologies: ["Vue 3", "Laravel", "Tailwind CSS", "MySQL"],
            achievements: [
                "Developed with Laravel and Vue 3 Composition API",
                "Implemented secure authentication with Laravel's built-in auth",
                "Built complete CRUD operations using MySQL and RESTful controllers",
                "Designed responsive UI with Tailwind CSS and shadcn-vue components",
            ],
            link: "https://github.com/Vice-108/codesnip",
        },
        {
            title: "Lumina",
            description: "AI-powered chat interface for local Ollama models",
            technologies: ["Vue 3", "Fetch API", "SQLite", "Tailwind CSS"],
            achievements: [
                "Developed interface for interacting with local AI models with streamed responses",
                "Integrated SQLite for persisting chat history and managing multiple chat rooms",
                "Added syntax highlighting, code formatting, and markdown rendering",
                "Used Fetch API response streaming for smooth, incremental AI responses",
                "Built with Vue 3, Tailwind CSS, Vue Router, and Pinia",
            ],
            link: "https://github.com/Vice-108/Lumina",
        },
    ];

    const education = [
        {
            degree: "Master of Computer Applications",
            institution: "Chandigarh University",
            duration: "2023 - 2025",
        },
        {
            degree: "Bachelor of Computer Applications",
            institution: "GLA University",
            duration: "2020 - 2023",
        },
    ];

    const skills = {
        languages: ["SQL", "HTML", "CSS", "JavaScript"],
        frameworks: ["Vue 3", "React", "Laravel", "Tailwind CSS"],
        database: ["MongoDB", "MySQL", "SQLite"],
        tools: ["Git", "VS Code"],
    };

    const certifications = ["Python", "SQL", "CSS", "JavaScript"];

    return (
        <section id="resume" className="bg-card/20 py-20 lg:py-32">
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
                            Resume &{" "}
                            <span className="gradient-text">Experience</span>
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl">
                            My professional experience, education, and technical
                            skills
                        </p>

                        {/* Download button */}
                        <Button
                            size="lg"
                            className="font-jetbrains hero-glow"
                            onClick={handleDownload}
                        >
                            <Download className="mr-2 w-5 h-5" />
                            Download Resume
                        </Button>
                    </motion.div>

                    <div className="gap-8 grid lg:grid-cols-2">
                        {/* Left column - Experience */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            <Card className="card-hover">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-jetbrains">
                                        <Briefcase className="w-6 h-6 text-primary" />
                                        Professional Experience
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    {experiences.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="relative pl-6 border-primary/20 border-l-2 last:border-l-0"
                                        >
                                            {/* Timeline dot */}
                                            <div className="top-0 -left-2 absolute bg-primary border-2 border-background rounded-full w-4 h-4"></div>

                                            <div className="space-y-3">
                                                <div>
                                                    <h3 className="font-jetbrains font-bold text-foreground text-lg">
                                                        {exp.title}
                                                    </h3>
                                                    <p className="font-semibold text-primary">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-muted-foreground text-sm">
                                                        {exp.duration}
                                                    </p>
                                                </div>

                                                <p className="text-muted-foreground">
                                                    {exp.description}
                                                </p>

                                                <ul className="space-y-2">
                                                    {exp.achievements.map(
                                                        (achievement, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start gap-2 text-sm"
                                                            >
                                                                <div className="flex-shrink-0 bg-accent mt-2 rounded-full w-1.5 h-1.5" />
                                                                <span className="text-muted-foreground">
                                                                    {
                                                                        achievement
                                                                    }
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Projects */}
                            <Card className="card-hover">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-jetbrains">
                                        <FileText className="w-6 h-6 text-primary" />
                                        Notable Projects
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    {projects.map((project, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="relative pl-6 border-primary/20 border-l-2 last:border-l-0"
                                        >
                                            {/* Timeline dot */}
                                            <div className="top-0 -left-2 absolute bg-primary border-2 border-background rounded-full w-4 h-4"></div>

                                            <div className="space-y-3">
                                                <div>
                                                    <div className="flex justify-between items-center">
                                                        <h3 className="font-jetbrains font-bold text-foreground text-lg">
                                                            {project.title}
                                                        </h3>
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary text-sm hover:underline"
                                                        >
                                                            View Project
                                                        </a>
                                                    </div>
                                                    <p className="text-muted-foreground">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-2">
                                                    {project.technologies.map(
                                                        (tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant="outline"
                                                                className="flex items-center gap-2 bg-background/50"
                                                            >
                                                                {getTechIcon(
                                                                    tech
                                                                ) && (
                                                                    <img
                                                                        src={getTechIcon(
                                                                            tech
                                                                        )}
                                                                        alt={
                                                                            tech
                                                                        }
                                                                        className="w-5 h-5"
                                                                    />
                                                                )}
                                                                {tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>

                                                <ul className="space-y-2">
                                                    {project.achievements.map(
                                                        (achievement, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start gap-2 text-sm"
                                                            >
                                                                <div className="flex-shrink-0 bg-accent mt-2 rounded-full w-1.5 h-1.5" />
                                                                <span className="text-muted-foreground">
                                                                    {
                                                                        achievement
                                                                    }
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Right column - Education & Skills */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            {/* Education */}
                            <Card className="card-hover">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-jetbrains">
                                        <GraduationCap className="w-6 h-6 text-accent" />
                                        Education
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {education.map((edu, index) => (
                                        <div key={index} className="space-y-2">
                                            <div>
                                                <h3 className="font-jetbrains font-bold text-foreground text-lg">
                                                    {edu.degree}
                                                </h3>
                                                <p className="font-semibold text-accent">
                                                    {edu.institution}
                                                </p>
                                                <p className="text-muted-foreground text-sm">
                                                    {edu.duration}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Skills */}
                            <Card className="card-hover">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-jetbrains">
                                        <Award className="w-6 h-6 text-primary" />
                                        Technical Skills
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="mb-2 font-semibold text-sm">
                                                Languages
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.languages.map(
                                                    (skill) => (
                                                        <Badge
                                                            key={skill}
                                                            variant="secondary"
                                                            className="flex items-center gap-2 font-jetbrains"
                                                        >
                                                            {getTechIcon(
                                                                skill
                                                            ) && (
                                                                <img
                                                                    src={getTechIcon(
                                                                        skill
                                                                    )}
                                                                    alt={skill}
                                                                    className="w-5 h-5"
                                                                />
                                                            )}
                                                            {skill}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="mb-2 font-semibold text-sm">
                                                Frameworks & Libraries
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.frameworks.map(
                                                    (skill) => (
                                                        <Badge
                                                            key={skill}
                                                            variant="secondary"
                                                            className="flex items-center gap-2 font-jetbrains"
                                                        >
                                                            {getTechIcon(
                                                                skill
                                                            ) && (
                                                                <img
                                                                    src={getTechIcon(
                                                                        skill
                                                                    )}
                                                                    alt={skill}
                                                                    className="w-5 h-5"
                                                                />
                                                            )}
                                                            {skill}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="mb-2 font-semibold text-sm">
                                                Database
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.database.map(
                                                    (skill) => (
                                                        <Badge
                                                            key={skill}
                                                            variant="secondary"
                                                            className="flex items-center gap-2 font-jetbrains"
                                                        >
                                                            {getTechIcon(
                                                                skill
                                                            ) && (
                                                                <img
                                                                    src={getTechIcon(
                                                                        skill
                                                                    )}
                                                                    alt={skill}
                                                                    className="w-5 h-5"
                                                                />
                                                            )}
                                                            {skill}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="mb-2 font-semibold text-sm">
                                                Tools
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.tools.map((skill) => (
                                                    <Badge
                                                        key={skill}
                                                        variant="secondary"
                                                        className="flex items-center gap-2 font-jetbrains"
                                                    >
                                                        {getTechIcon(skill) && (
                                                            <img
                                                                src={getTechIcon(
                                                                    skill
                                                                )}
                                                                alt={skill}
                                                                className="w-5 h-5"
                                                            />
                                                        )}
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Certifications */}
                            <Card className="card-hover">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-jetbrains">
                                        <Award className="w-6 h-6 text-primary" />
                                        Certifications
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-muted-foreground">
                                        HackerRank certifications in programming
                                        languages and technologies
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {certifications.map((cert) => (
                                            <motion.div
                                                key={cert}
                                                whileHover={{scale: 1.05}}
                                                transition={{duration: 0.2}}
                                            >
                                                <Badge
                                                    variant="secondary"
                                                    className="flex items-center gap-2 hover:bg-primary font-jetbrains hover:text-primary-foreground transition-colors"
                                                >
                                                    {getTechIcon(cert) && (
                                                        <img
                                                            src={getTechIcon(
                                                                cert
                                                            )}
                                                            alt={cert}
                                                            className="w-5 h-5"
                                                        />
                                                    )}
                                                    {cert}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick stats */}
                            <Card className="card-hover">
                                <CardContent className="p-6">
                                    <div className="gap-6 grid grid-cols-2 text-center">
                                        <div>
                                            <div className="mb-2 font-jetbrains font-bold text-3xl gradient-text">
                                                2.5+
                                            </div>
                                            <div className="text-muted-foreground text-sm">
                                                Years Experience
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-2 font-jetbrains font-bold text-3xl gradient-text">
                                                10+
                                            </div>
                                            <div className="text-muted-foreground text-sm">
                                                Projects Built
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Resume summary section */}
                    <motion.div variants={itemVariants} className="mt-16">
                        <Card className="bg-gradient-to-r from-card to-card/50 p-8 border-primary/20 card-hover">
                            <CardContent className="p-0 text-center">
                                <FileText className="mx-auto mb-4 w-16 h-16 text-primary" />
                                <h3 className="mb-4 font-jetbrains font-bold text-2xl">
                                    Web Developer
                                </h3>
                                <p className="mx-auto mb-6 max-w-3xl text-muted-foreground">
                                    Specialized in building scalable,
                                    maintainable Vue.js applications using the
                                    Composition API, Pinia, Vue Router, and
                                    Tailwind CSS, integrated with a robust
                                    Laravel backend and REST APIs. Passionate
                                    about creating elegant solutions to complex
                                    problems.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button
                                        variant="outline"
                                        className="hover:bg-primary font-jetbrains hover:text-primary-foreground transition-colors"
                                        onClick={handleDownload}
                                    >
                                        <Download className="mr-2 w-4 h-4" />
                                        Download PDF
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="hover:bg-primary font-jetbrains hover:text-primary-foreground transition-colors"
                                        onClick={() => {
                                            const contactSection =
                                                document.getElementById(
                                                    "contact"
                                                );
                                            contactSection?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }}
                                    >
                                        <FileText className="mr-2 w-4 h-4" />
                                        Contact Me
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
