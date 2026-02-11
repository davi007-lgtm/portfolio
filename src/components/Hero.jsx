import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background orbs */}
            <div className="glow-orb w-[500px] h-[500px] bg-accent-indigo top-[-10%] right-[-5%]" style={{ animation: 'float 10s ease-in-out infinite, pulse-glow 6s ease-in-out infinite' }} />
            <div className="glow-orb w-[400px] h-[400px] bg-accent-blue bottom-[-5%] left-[-5%]" style={{ animation: 'float 8s ease-in-out infinite reverse, pulse-glow 8s ease-in-out infinite 2s' }} />
            <div className="glow-orb w-[200px] h-[200px] bg-accent-violet top-[40%] left-[20%]" style={{ animation: 'float 12s ease-in-out infinite 1s' }} />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(129, 140, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(129, 140, 248, 0.3) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            {/* Two-column content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 lg:pt-0">

                {/* Left: Text */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
                    >
                        <span className="gradient-text-accent">Aprendiz de</span>
                        <br />
                        <span className="text-white">Desarrollo de</span>
                        <br />
                        <span className="text-white">Software</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="mt-6 text-gray-400 text-base sm:text-lg max-w-md leading-relaxed"
                    >
                        Apasionado por la tecnologia, construyendo aplicaciones
                        web y moviles mientras aprendo nuevas habilidades cada dia.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <a
                            href="#sobre-mi"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#sobre-mi')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="inline-flex items-center gap-2 text-accent-indigo font-medium text-sm hover:text-accent-blue transition-colors duration-300 group"
                        >
                            Sobre mi
                            <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>

                {/* Right: Code window visual */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="hidden lg:block"
                >
                    <div className="glass-card p-0 overflow-hidden hover:transform-none">
                        {/* Window title bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                            </div>
                            <span className="text-[10px] text-gray-500 font-mono ml-2">portfolio.jsx</span>
                        </div>

                        {/* Code content */}
                        <div className="p-5 font-mono text-[13px] leading-relaxed">
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">01</span>
                                <span><span className="text-accent-violet">const</span> <span className="text-accent-blue">developer</span> <span className="text-gray-500">=</span> <span className="text-gray-500">{'{'}</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">02</span>
                                <span className="ml-6"><span className="text-gray-300">nombre</span><span className="text-gray-500">:</span> <span className="text-green-400">'Jeaustin Hernandez'</span><span className="text-gray-500">,</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">03</span>
                                <span className="ml-6"><span className="text-gray-300">rol</span><span className="text-gray-500">:</span> <span className="text-green-400">'Software Developer'</span><span className="text-gray-500">,</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">04</span>
                                <span className="ml-6"><span className="text-gray-300">skills</span><span className="text-gray-500">:</span> <span className="text-gray-500">[</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">05</span>
                                <span className="ml-12"><span className="text-green-400">'Kotlin'</span><span className="text-gray-500">,</span> <span className="text-green-400">'Java'</span><span className="text-gray-500">,</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">06</span>
                                <span className="ml-12"><span className="text-green-400">'Python'</span><span className="text-gray-500">,</span> <span className="text-green-400">'JavaScript'</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">07</span>
                                <span className="ml-6"><span className="text-gray-500">],</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">08</span>
                                <span className="ml-6"><span className="text-gray-300">pasion</span><span className="text-gray-500">:</span> <span className="text-green-400">'Aprender cada dia'</span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">09</span>
                                <span><span className="text-gray-500">{'}'}</span><span className="text-gray-500">;</span></span>
                            </div>
                            <div className="flex mt-1">
                                <span className="text-gray-600 w-8 text-right mr-4 select-none">10</span>
                                <span className="w-2 h-5 bg-accent-indigo/70 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500 tracking-widest uppercase font-mono">scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" style={{ animation: 'scroll-hint 2s ease-in-out infinite' }} />
            </motion.div>
        </section>
    )
}
