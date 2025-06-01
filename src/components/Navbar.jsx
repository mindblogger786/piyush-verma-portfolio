import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

        setActiveNav("#hero");
    },[]);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300 bg-background", isScrolled ? "py-3 bg-background/80 backdrop-blur shadow-xs"  : "py-5")} >
            <div className='container flex items-center justify-between'>
                <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground mr-2'>Piyush</span>
                        Verma
                    </span>
                </a>

                { /* Desktop Nav */ }
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, key) => (
                        <a 
                          key={key} 
                          href={item.href}
                          onClick={() => setActiveNav(item.name)}
                          className={cn(
                            'font-bold text-foreground/80 transition-colors duration-300',
                            activeNav === item.name
                              ? "text-primary" 
                              : "text-secondary/80 hover:text-primary" 
                          )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                { /* Mobile Nav */ }
                <button 
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className='md:hidden p-2 text-foreground z-50 mr-8'
                  aria-label={ isMenuOpen ? "Close Menu" : "Open Menu" }
                >
                    { isMenuOpen ? <X size={24} /> : <Menu size={24} /> }
                </button>
                <div className={cn(
                    "fixed inset-0 background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                )}>
                    <div className='flex flex-col space-y-8 text-xl'>
                        {navItems.map((item, key) => (
                            <a
                              key={key}
                              href={item.href}
                              onClick={() => {setIsMenuOpen(false); setActiveNav(item.name)}}
                              className={cn(
                                'font-bold text-foreground/80 transition-colors duration-300',
                                activeNav === item.name
                                  ? "text-primary" 
                                  : "text-secondary/80 hover:text-primary" 
                              )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}