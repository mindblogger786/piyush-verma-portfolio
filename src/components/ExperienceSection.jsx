import TimelineItem from "./TImelineItem";


const experiences = [
    {
        id: 1,
        company: "Tech Solutions Inc.",
        designation: "Software Engineer",
        description: "Developed and maintained web applications using Java and Spring framework. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        duration: "2022/07 - Present",
        skills: ["Java", "Spring Framework", "RESTful APIs", "Agile", "Git"]
    },
    {
        id: 2,
        company: "Global Projects Development Ltd.",
        designation: "Web Developer ",
        description: "Designed, developed, and maintained responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Collaborated with designers to implement user interfaces and ensure optimal user experience.",
        duration: "2019/09 - 2024/05",
        skills: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "Responsive Design", "Git"]
    },
    {
        id: 3,
        company: "Acme Healthcare Group",
        designation: "Database Manager",
        description: "Managed and maintained critical database systems (SQL Server and PostgreSQL), ensuring data integrity, security, and performance. Implemented backup and recovery procedures and optimized database queries.",
        duration: "2020/01 - 2023/12",
        skills: ["SQL Server", "PostgreSQL", "Database Administration", "Data Security", "Performance Tuning", "Backup and Recovery"]
    }
]

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Experiences</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A collection of my professional journey, highlighting key roles, responsibilities, and accomplishments across various organizations and projects.
                </p>

                <div className="relative">
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            duration={exp.duration}
                            company={exp.company}
                            designation={exp.designation}
                            description={exp.description}
                            isEven={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}