import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                        <p className="text-muted-foreground">
                            I work with Django, React, and MERN Stack to build high-performance web applications.
                        </p>
                        <p className="text-muted-foreground">
                            I thrive on problem-solving, crafting clean code, and designing intuitive user experiences. With a deep love for technology, I constantly explore new trends and frameworks to stay ahead.
                        </p>
                        {/* <p className="text-muted-foreground">
                            Beyond coding, I enjoy reading tech blogs, contributing to open-source projects, and engaging with the developer community.
                        </p> */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get-In-Touch
                            </a>
                            <a href="https://drive.google.com/file/d/1h15tyq9TbodiWOz2O-apEbBbaGhYEU-6/view?usp=drive_link" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Development</h4>
                                    <p className="text-muted-foreground">Developing intuitive user interfaces and seamless user experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}