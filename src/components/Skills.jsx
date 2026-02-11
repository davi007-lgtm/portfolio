import { motion } from 'framer-motion'
import { FaAndroid, FaJava, FaPython, FaHtml5, FaJs, FaGitAlt, FaReact, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'

const skills = [
    { name: 'Kotlin', icon: FaAndroid },
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'HTML5 / CSS3', icon: FaHtml5 },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Vite', icon: SiVite },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Git', icon: FaGitAlt },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05 }
    }
}

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
}

export default function Skills() {
    return (
        <section id="habilidades" className="relative py-24 sm:py-32 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="text-3xl"></span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Principales habilidades
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={badgeVariants}
                            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                            className="flex items-center gap-2.5 px-5 py-3 rounded-lg border border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer"
                        >
                            <skill.icon className="w-5 h-5 text-white" />
                            <span className="font-medium text-white text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}