"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {useToast} from "@/hooks/use-toast";
import {Send, Mail, MapPin, Clock, Github, Linkedin} from "lucide-react";
import {containerVariants, itemVariants} from "@/lib/animations";
import ContactInfo from "@/components/ContactInfo";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target as HTMLFormElement);

            // Add access key for web3forms
            formData.append(
                "access_key",
                "35751051-7418-4be8-8798-ec06aa119c85"
            );

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Message sent!",
                    description:
                        "Thanks for reaching out. I'll get back to you soon!",
                });
                (e.target as HTMLFormElement).reset();
            } else {
                toast({
                    title: "Error",
                    description:
                        data.message ||
                        "Something went wrong. Please try again.",
                    variant: "destructive",
                });
                console.error("Form submission error:", data);
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again later.",
                variant: "destructive",
            });
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-32">
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
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
                            Have a project in mind or just want to chat? I'd
                            love to hear from you!
                        </p>
                    </motion.div>

                    <div className="gap-6 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
                        {/* Contact form */}
                        <motion.div variants={itemVariants}>
                            <Card className="card-hover">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-jetbrains">
                                        <Send className="w-6 h-6 text-primary" />
                                        Send a Message
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {/* Hidden honey pot field to prevent spam */}
                                        <input
                                            type="hidden"
                                            name="botcheck"
                                            style={{display: "none"}}
                                        />

                                        <div className="gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor="name"
                                                    className="font-jetbrains"
                                                >
                                                    Name *
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder="Your name"
                                                    className="font-jetbrains"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor="email"
                                                    className="font-jetbrains"
                                                >
                                                    Email *
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder="your.email@example.com"
                                                    className="font-jetbrains"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="subject"
                                                className="font-jetbrains"
                                            >
                                                Subject *
                                            </Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                required
                                                placeholder="What's this about?"
                                                className="font-jetbrains"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="message"
                                                className="font-jetbrains"
                                            >
                                                Message *
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                placeholder="Tell me about your project or just say hello!"
                                                className="min-h-32 font-jetbrains resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full font-jetbrains hero-glow"
                                            size="lg"
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{rotate: 360}}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
                                                    className="mr-2 border-2 border-current border-t-transparent rounded-full w-5 h-5"
                                                />
                                            ) : (
                                                <Send className="mr-2 w-5 h-5" />
                                            )}
                                            {isSubmitting
                                                ? "Sending..."
                                                : "Send Message"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact information */}
                        <ContactInfo />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
