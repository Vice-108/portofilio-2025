import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import profoods from "@/assets/profoods.png";
import wellwishers from "@/assets/wellwishers.png";
import nehaphysio from "@/assets/nehaphysio.png";
import {motion} from "framer-motion";
const FreelanceWorks = () => {
    const projects = [
        {
            id: 1,
            category: "Web Development & Design",
            title: "Wellwishers Website",
            description:
                "Developed and designed a comprehensive website for Wellwishers, focusing on user experience and modern design principles.",
            imageUrl: wellwishers,
            link: "https://www.wellwishers.tech",
        },
        {
            id: 2,
            category: "Web Development",
            title: "Neha Physiotherapist Website",
            description:
                "Developed a professional website for Neha Physiotherapist based on client-provided design specifications.",
            imageUrl: nehaphysio, // Add your screenshot here
            link: "https://www.nehaphysioclinic.com",
        },
        {
            id: 3,
            category: "Web Development & UI/UX Design",
            title: "Profoods Website",
            description:
                "Designed and developed a complete website solution for Profoods, including branding and user interface design.",
            imageUrl: profoods, // Add your screenshot here
            link: "https://www.profoods.in",
        },
    ];

    return (
        <section className="relative bg-card/20 py-16 w-full overflow-hidden">
            {/* Floating particles */}
            <div className="absolute inset-0 w-full overflow-hidden">
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

            <div className="z-10 relative mx-auto px-6 xl:px-0 max-w-screen-xl">
                <h2 className="font-bold text-3xl tracking-tight">
                    Freelance Works
                </h2>

                <div className="gap-10 grid sm:grid-cols-2 lg:grid-cols-3 mt-4">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="flex flex-col shadow-none"
                        >
                            <CardHeader className="p-2">
                                <div className="relative rounded-lg w-full aspect-video overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="rounded-lg w-full h-full object-cover"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow pt-4 pb-5">
                                <Badge className="w-fit">
                                    {project.category}
                                </Badge>

                                <h3 className="mt-4 font-semibold text-[1.35rem] tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="flex-grow mt-2 text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="mt-6">
                                    {/* Corrected usage: use asChild and pass the <a> tag as a child */}
                                    <Button asChild>
                                        <a href={project.link}>View Project</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FreelanceWorks;
