import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mi', href: '#sobre-mi' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const sections = navItems.map(item => item.href.slice(1))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e, href) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setIsOpen(false)
        }
    }

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-dark-900/90 backdrop-blur-xl shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#inicio" className="text-lg font-bold tracking-tight text-white hover:text-accent-indigo transition-colors duration-300">
                    JH
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navItems.filter(item => item.href !== '#contacto').map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${activeSection === item.href.slice(1) ? 'text-white' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 h-px bg-accent-indigo transition-all duration-300 ${activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contacto"
                        onClick={(e) => handleClick(e, '#contacto')}
                        className="px-5 py-2 border border-white/15 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                        Contacto
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-px bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                    <span className={`w-6 h-px bg-gray-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <ul className="px-6 py-4 space-y-3">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleClick(e, item.href)}
                                        className="block text-sm text-gray-400 hover:text-white transition-colors py-2"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
