"use client";

import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Mail, Phone, MapPin, Clock, Github, Linkedin} from "lucide-react";

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
};

const ContactInfo = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "kumarsinghvikas2552003@gmail.com",
            href: "mailto:kumarsinghvikas2552003@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 95828 37108",
            href: "tel:+919582837108",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "India",
            href: null,
        },
        {
            icon: Clock,
            label: "Response Time",
            value: "Usually within 24 hours",
            href: null,
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/Vice-108",
            color: "text-accent",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kumarsinghvikas/",
            color: "text-accent",
        },
        {
            icon: Mail,
            label: "Email Me",
            href: "mailto:kumarsinghvikas2552003@gmail.com",
            color: "text-accent",
        },
    ];

    return (
        <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            {/* Contact details */}
            <Card className="card-hover">
                <CardHeader>
                    <CardTitle className="font-jetbrains">
                        Get in Touch
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6">
                    {contactInfo.map((info) => (
                        <motion.div
                            key={info.label}
                            variants={itemVariants}
                            className="flex items-center gap-3 lg:gap-4"
                        >
                            <div className="bg-primary/10 p-2 lg:p-3 rounded-lg">
                                <info.icon className="w-4 lg:w-5 h-4 lg:h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-jetbrains font-medium text-sm lg:text-base">
                                    {info.label}
                                </p>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="text-muted-foreground hover:text-primary text-xs lg:text-sm break-all transition-colors"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-muted-foreground text-xs lg:text-sm">
                                        {info.value}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </CardContent>
            </Card>

            {/* Social links */}
            <Card className="card-hover">
                <CardHeader>
                    <CardTitle className="font-jetbrains">
                        Connect With Me
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex md:flex-row flex-col lg:justify-between gap-3 lg:gap-4">
                        {socialLinks.map((social) => (
                            <Button
                                key={social.label}
                                variant="outline"
                                size="sm"
                                asChild
                                className="justify-center md:justify-start w-full font-jetbrains"
                            >
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 lg:gap-3"
                                >
                                    <social.icon className="w-4 lg:w-5 h-4 lg:h-5" />
                                    <span className="text-xs lg:text-sm">
                                        {social.label}
                                    </span>
                                </a>
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ContactInfo;
