"use client";

import {motion} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import {Mountain, Cat, Music} from "lucide-react";
import codingCatImage from "@/assets/coding-cat.png";
import {
    containerVariants,
    itemVariants,
    defaultTransition,
} from "@/lib/animations";

const About = () => {
    const interests = [
        {icon: Mountain, label: "Mountains", color: "text-primary"},
        {icon: Cat, label: "Cats", color: "text-accent"},
        {icon: Music, label: "LOFI Beats", color: "text-primary"},
    ];

    return (
        <section id="about" className="py-20 lg:py-32">
            <div className="mx-auto px-4 container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    transition={defaultTransition}
                    className="mx-auto max-w-6xl"
                >
                    {/* Section header */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-4 font-jetbrains font-bold text-4xl lg:text-5xl">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
                            Getting to know the developer behind the code
                        </p>
                    </motion.div>

                    <div className="items-center gap-12 grid lg:grid-cols-2">
                        {/* Left side - Content */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            <Card className="card-hover">
                                <CardContent className="p-8">
                                    <h3 className="mb-6 font-jetbrains font-bold text-primary text-2xl">
                                        My Journey
                                    </h3>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            I'm a Web web developer with{" "}
                                            <span className="font-semibold text-primary">
                                                2.5+ years of experience
                                            </span>{" "}
                                            specializing in building responsive,
                                            scalable web applications using Vue
                                            3, Laravel, and Tailwind CSS.
                                        </p>
                                        <p>
                                            I love creating clean UIs, writing
                                            maintainable code, and solving
                                            real-world problems — especially
                                            when there's a{" "}
                                            <span className="text-accent">
                                                good cup of coffee
                                            </span>{" "}
                                            involved.
                                        </p>
                                        <p>
                                            I've contributed to a custom CRM
                                            platform, led UI design for internal
                                            tools, and built AI-integrated
                                            interfaces like Lumina. My approach
                                            focuses on user experience and code
                                            quality.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Interests */}
                            <motion.div variants={itemVariants}>
                                <h4 className="mb-4 font-jetbrains font-bold text-xl">
                                    When I'm not coding...
                                </h4>
                                <div className="gap-4 grid grid-cols-3">
                                    {interests.map((interest, index) => (
                                        <motion.div
                                            key={interest.label}
                                            variants={itemVariants}
                                            whileHover={{scale: 1.05}}
                                            className="bg-card/50 p-4 border hover:border-primary/50 border-border/50 rounded-lg text-center transition-colors"
                                        >
                                            <interest.icon
                                                className={`w-8 h-8 mx-auto mb-2 ${interest.color}`}
                                            />
                                            <span className="font-jetbrains text-muted-foreground text-sm">
                                                {interest.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right side - Cat illustration */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center"
                        >
                            <motion.div
                                className="relative"
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            >
                                <div className="relative">
                                    <img
                                        src={codingCatImage}
                                        alt="Cat coding illustration"
                                        className="drop-shadow-2xl w-full max-w-sm object-contain"
                                    />

                                    {/* Floating code symbols */}
                                    <motion.div
                                        className="-top-4 -right-4 absolute font-jetbrains text-primary text-2xl"
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {"</>"}
                                    </motion.div>

                                    <motion.div
                                        className="-bottom-4 -left-4 absolute font-jetbrains text-accent text-xl"
                                        animate={{
                                            rotate: [0, -10, 10, 0],
                                            y: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1,
                                        }}
                                    >
                                        {"{}"}
                                    </motion.div>

                                    <motion.div
                                        className="top-1/2 -left-8 absolute font-jetbrains text-primary text-lg"
                                        animate={{
                                            x: [0, -5, 0],
                                            opacity: [0.6, 1, 0.6],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5,
                                        }}
                                    >
                                        {"()"}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
