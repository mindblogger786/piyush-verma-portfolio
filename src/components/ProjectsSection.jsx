import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Doctor Appointment Booking System",
        description: "A web-based application designed to streamline the appointment booking process for clinics and patients.",
        image: "/projects/project1.png",
        tags:["MERN Stack", "Tailwind",],
        demoUrl : "https://quick-clinic-frontend.onrender.com/",
        githubUrl : "https://github.com/mindblogger786/quick-clinic",
    },
    {
        id: 2,
        title: "SaaS Landing Page",
        description: "A beautiful landing page app designed and developed using React and Tailwind CSS.",
        image: "/projects/project2.png",
        tags:["React", "Tailwind", "Superbase"],
        demoUrl : "#",
        githubUrl : "#",
    },
    {
        id: 3,
        title: "Personalized AI Meal Plan Generator",
        description: "Generate personalized meal plans tailored to your dietary needs and preferences using the power of artificial intelligence.",
        image: "/projects/project3.png",
        tags:["React", "Node.js", "Tailwind"],
        demoUrl : "#",
        githubUrl : "#",
    },
    {
        id: 4,
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/project4.png",
        tags:["React", "Node.js", "Stripe"],
        demoUrl : "#",
        githubUrl : "#",
    }
];  

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                          key={key} 
                          className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-50 overflow-hidden">
                                <img 
                                  src={project.image} 
                                  alt={project.title} 
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>

                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span 
                                          key={key}
                                          className="px-2 py-1 text-xs front-medium rounded-full bg-primary/30 text-secondary-foreground border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary trnasition-colors duration-300" target="_blank">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary trnasition-colors duration-300" target="_blank">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>

                <div className="text-center mt-12">
                    <a 
                      href="https://www.github.com/mindblogger786" 
                      className="cosmic-button w-fit flex items-center mx-auto gap-2"
                      target="_blank"
                    >
                        Check My Github Account <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}