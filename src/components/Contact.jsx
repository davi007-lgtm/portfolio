import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaPaperPlane, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Aquí iría la lógica de envío
        
    }

    return (
        <section id="contacto" className="relative min-h-screen py-20">
            {/* Background con parallax effect */}
            <div 
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contacto</h2>
                    <p className="text-gray-300 text-lg">
                        Contactame en cualquier momento
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left Card - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">Escríbeme</h3>
                        <p className="text-gray-400 mb-8">
                            Abierto a oportunidades laborales y a colaborar en proyectos freelance.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        placeholder="Tu nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-300 mb-2">Mensaje</label>
                                <textarea
                                    name="mensaje"
                                    placeholder="Cuéntame qué necesitas..."
                                    rows="5"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-500/30 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                Enviar mensaje
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Card - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Disponible para</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-300">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Proyectos UI interactivos</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Tooling personalizado</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <span className="text-indigo-400 mt-1">•</span>
                                    <span>Desarrollo web con enfoque creativo</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Forma de trabajo</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-300">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Comunicación clara y directa</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Enfoque en resultados reales</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Compromiso con cada entrega</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-4 py-2 bg-black/30 border border-white/10 rounded-full text-sm text-gray-300">
                                    Remoto / híbrido
                                </span>
                                <span className="px-4 py-2 bg-black/30 border border-white/10 rounded-full text-sm text-gray-300">
                                    Costa Rica
                                </span>
                                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-300">
                                    Disponible
                                </span>
                            </div>

                            <div className="flex items-center justify-center">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-black/30 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                                >
                                    <FaLinkedin className="w-5 h-5 text-gray-300" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}