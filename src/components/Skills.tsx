"use client";

import {motion} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import {containerVariants, itemVariants} from "@/lib/animations";
const iconUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
const Skills = () => {
    const techStack = [
        // Frontend Technologies
        {
            name: "Vue",
            category: "Frontend",
            level: "Expert",
            icon: `${iconUrl}vuejs/vuejs-original.svg`,
            color: "text-green-400",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20",
        },
        {
            name: "React",
            category: "Frontend",
            level: "Advanced",
            icon: `${iconUrl}react/react-original.svg`,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
        },
        {
            name: "JavaScript",
            category: "Frontend",
            level: "Expert",
            icon: `${iconUrl}javascript/javascript-original.svg`,
            color: "text-yellow-400",
            bgColor: "bg-yellow-500/10",
            borderColor: "border-yellow-500/20",
        },
        {
            name: "TypeScript",
            category: "Frontend",
            level: "Advanced",
            icon: `${iconUrl}typescript/typescript-original.svg`,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
        },
        {
            name: "Tailwind CSS",
            category: "Frontend",
            level: "Expert",
            icon: `${iconUrl}tailwindcss/tailwindcss-original.svg`,
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
            borderColor: "border-cyan-500/20",
        },
        {
            name: "HTML5",
            category: "Frontend",
            level: "Expert",
            icon: `${iconUrl}html5/html5-original.svg`,
            color: "text-orange-400",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20",
        },

        // Backend Technologies
        {
            name: "Laravel",
            category: "Backend",
            level: "Expert",
            icon: `${iconUrl}laravel/laravel-original.svg`,
            color: "text-red-400",
            bgColor: "bg-red-500/10",
            borderColor: "border-red-500/20",
        },
        {
            name: "PHP",
            category: "Backend",
            level: "Expert",
            icon: `${iconUrl}php/php-original.svg`,
            color: "text-purple-400",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20",
        },
        {
            name: "Node.js",
            category: "Backend",
            level: "Intermediate",
            icon: `${iconUrl}nodejs/nodejs-original.svg`,
            color: "text-green-400",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20",
        },
        {
            name: "REST APIs",
            category: "Backend",
            level: "Advanced",
            icon: `${iconUrl}openapi/openapi-plain.svg`,
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20",
        },

        // Database Technologies
        {
            name: "MySQL",
            category: "Database",
            level: "Advanced",
            icon: `${iconUrl}mysql/mysql-original.svg`,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
        },
        {
            name: "MongoDB",
            category: "Database",
            level: "Intermediate",
            icon: `${iconUrl}mongodb/mongodb-original.svg`,
            color: "text-green-400",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20",
        },
        {
            name: "SQLite",
            category: "Database",
            level: "Advanced",
            icon: `${iconUrl}sqlite/sqlite-original.svg`,
            color: "text-gray-400",
            bgColor: "bg-gray-500/10",
            borderColor: "border-gray-500/20",
        },

        // Tools & Others
        {
            name: "Git",
            category: "Tools",
            level: "Advanced",
            icon: `${iconUrl}git/git-original.svg`,
            color: "text-orange-400",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20",
        },
        {
            name: "VS Code",
            category: "Tools",
            level: "Expert",
            icon: `${iconUrl}vscode/vscode-original.svg`,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
        },
        {
            name: "Vite",
            category: "Tools",
            level: "Advanced",
            icon: `${iconUrl}vitejs/vitejs-original.svg`,
            color: "text-purple-400",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20",
        },
    ];

    const categories = ["Frontend", "Backend", "Database", "Tools"];

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Expert":
                return "bg-primary text-primary-foreground";
            case "Advanced":
                return "bg-accent text-accent-foreground";
            default:
                return "bg-muted text-muted-foreground";
        }
    };

    return (
        <section
            id="skills"
            className="relative bg-card/20 py-20 lg:py-32 overflow-hidden"
        >
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
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    className="mx-auto max-w-7xl"
                >
                    {/* Section header */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 font-jetbrains font-bold text-4xl lg:text-5xl">
                            Skills &{" "}
                            <span className="gradient-text">Tech Stack</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
                            Technologies I work with to bring ideas to life
                        </p>
                    </motion.div>

                    {/* Modern tech grid by category */}
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category}
                            variants={itemVariants}
                            className="mb-16"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex justify-center items-center bg-gradient-to-r from-primary to-accent rounded-xl w-12 h-12">
                                    <span className="text-2xl">
                                        {category === "Frontend" && "🎨"}
                                        {category === "Backend" && "⚙️"}
                                        {category === "Database" && "🗄️"}
                                        {category === "Tools" && "🛠️"}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-jetbrains font-bold text-foreground text-2xl">
                                        {category}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {
                                            techStack.filter(
                                                (tech) =>
                                                    tech.category === category
                                            ).length
                                        }{" "}
                                        technologies
                                    </p>
                                </div>
                            </div>

                            <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                                {techStack
                                    .filter(
                                        (tech) => tech.category === category
                                    )
                                    .map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                y: -5,
                                            }}
                                            whileTap={{scale: 0.95}}
                                            className={`relative group p-6 rounded-2xl border-2 ${tech.borderColor} ${tech.bgColor} hover:bg-gradient-to-br hover:from-card hover:to-card/50 transition-all duration-300 cursor-pointer`}
                                        >
                                            {/* Technology icon */}
                                            <div className="text-center">
                                                <div className="mb-3 text-4xl group-hover:scale-110 transition-transform duration-300">
                                                    <div className="flex justify-center items-center">
                                                        <img
                                                            src={tech.icon}
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Technology name */}
                                                <h4 className="mb-2 font-jetbrains font-bold text-foreground text-sm">
                                                    {tech.name}
                                                </h4>
                                            </div>

                                            {/* Hover effect overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                                            {/* Glowing border effect */}
                                            <div
                                                className={`absolute inset-0 rounded-2xl border-2 ${tech.borderColor} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300`}
                                            />
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Experience stats section */}
                    <motion.div variants={itemVariants} className="mt-20">
                        <Card className="relative bg-gradient-to-r from-card via-card/80 to-card border-primary/20 overflow-hidden card-hover">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
                            <CardContent className="z-10 relative p-12">
                                <div className="mb-8 text-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="inline-block mb-4 text-6xl"
                                    >
                                        ☕
                                    </motion.div>
                                    <h3 className="mb-4 font-jetbrains font-bold text-3xl gradient-text">
                                        2.5+ Years of Passionate Development
                                    </h3>
                                    <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
                                        Building responsive, scalable web
                                        applications with modern technologies.
                                        Specialized in creating seamless user
                                        experiences and maintainable codebases
                                        that solve real-world problems.
                                    </p>
                                </div>

                                {/* Stats grid */}
                                <div className="gap-8 grid md:grid-cols-3 text-center">
                                    <div className="space-y-2">
                                        <div className="font-jetbrains font-bold text-primary text-4xl">
                                            10+
                                        </div>
                                        <div className="text-muted-foreground">
                                            Projects Built
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="font-jetbrains font-bold text-accent text-4xl">
                                            {techStack.length}+
                                        </div>
                                        <div className="text-muted-foreground">
                                            Technologies Mastered
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="font-jetbrains font-bold text-4xl gradient-text">
                                            ∞
                                        </div>
                                        <div className="text-muted-foreground">
                                            Lines of Code
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
