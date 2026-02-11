import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="sobre-mi" className="relative py-24 sm:py-32 bg-dark-800/50">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                        Sobre Mi
                    </h2>
                    <div className="section-divider mb-8" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-lg leading-relaxed"
                >
                    Actualmente me encuentro aprendiendo sobre desarrollo web y movil.
                    Me apasiona la tecnologia y tengo muchas ganas de seguir creciendo
                    y adquiriendo nuevas habilidades. Este portafolio es un espacio donde
                    comparto mis avances, proyectos y objetivos como programador.
                </motion.p>

            </div>
        </section>
    )
}
