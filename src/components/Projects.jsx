import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaMobileAlt, FaGlobe, FaCoffee, FaPython, FaLayerGroup } from 'react-icons/fa'

const categories = [
    { id: 'todos', label: 'Todos', icon: FaLayerGroup },
    { id: 'web', label: 'Web', icon: FaGlobe },
    { id: 'movil', label: 'Movil', icon: FaMobileAlt },
    { id: 'python', label: 'Python', icon: FaPython },
]

const projects = [
    {
        id: 1,
        title: 'Saas Hotel',
        description: 'Sitio web para reservar hoteles con animaciones fluidas y diseño responsivo.',
        category: 'web',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        images: [
            '/projects/Saas%20hotel/Inicio.png',
            '/projects/Saas%20hotel/Inicio%20de%20sesion.png',
            '/projects/Saas%20hotel/Registro.png',
            '/projects/Saas%20hotel/Buscar%20hoteles.png',
            '/projects/Saas%20hotel/Reservacion.png',
            '/projects/Saas%20hotel/Dashboard%20admin.png',
            '/projects/Saas%20hotel/Panel%20de%20administracion.png',
        ],
        github: 'https://github.com/davi007-lgtm',
        demo: 'https://saashotelcom.vercel.app/',
        color: 'accent-blue',
    },
    {
        id: 3,
        title: 'Sistema de Inventario',
        description: 'Aplicacion movil para gestionar inventario con interfaz optimizada para dispositivos moviles.',
        category: 'movil',
        tech: ['Kotlin', 'Android'],
        mediaFit: 'contain',
        mediaAspect: 'phone',
        images: [
            '/projects/SistemaDeInventario/Screenshot_20260210_205605.png',
            '/projects/SistemaDeInventario/Screenshot_20260210_211250.png',
            '/projects/SistemaDeInventario/Screenshot_20260210_211304.png',
            '/projects/SistemaDeInventario/Screenshot_20260210_211329.png',
            '/projects/SistemaDeInventario/Screenshot_20260210_211344.png',
            '/projects/SistemaDeInventario/Screenshot_20260210_211400.png',
            '/projects/SistemaDeInventario/Screenshot_20260210_211421.png',
        ],
        github: 'https://github.com/davi007-lgtm',
        color: 'accent-violet',
    },
    {
        id: 7,
        title: 'Gestor de tareas en Python',
        description: 'Aplicacion de escritorio para gestionar tareas, construida con Python y Tkinter.',
        category: 'python',
        tech: ['Python', 'Tkinter'],
        images: [
            '/projects/Gestor%20de%20tareas%20en%20python/Modulo%20de%20tareas.png',
            '/projects/Gestor%20de%20tareas%20en%20python/Notas.png',
            '/projects/Gestor%20de%20tareas%20en%20python/Estadisticas.png',
        ],
        github: 'https://github.com/davi007-lgtm',
        color: 'accent-indigo',
    },
    {
        id: 8,
        title: 'Sistema de cafeteria',
        description: 'Sistema web para gestion de cafeteria con backend en Flask y frontend con Bootstrap y JavaScript.',
        category: 'python',
        tech: ['Python', 'Flask', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
        images: [
            '/projects/Sistema%20de%20cafeteria/DashboardPrincipal.png',
            '/projects/Sistema%20de%20cafeteria/Perfil.png',
            '/projects/Sistema%20de%20cafeteria/ListaEstudiantes.png',
            '/projects/Sistema%20de%20cafeteria/RegistroAsistencia.png',
            '/projects/Sistema%20de%20cafeteria/Escaner.png',
            '/projects/Sistema%20de%20cafeteria/DashboardReportes.png',
        ],
        github: 'https://github.com/davi007-lgtm',
        color: 'accent-blue',
    },
    {
        id: 9,
        title: 'Venta de autos',
        description: 'Sitio web para mostrar catalogo de autos y secciones principales, con diseno responsivo.',
        category: 'web',
        tech: ['HTML', 'CSS', 'JavaScript'],
        images: [
            '/projects/Venta%20de%20autos/Principal.png',
            '/projects/Venta%20de%20autos/Catalogo.png',
        ],
        github: 'https://github.com/davi007-lgtm',
        color: 'accent-blue',
    },
    {
        id: 10,
        title: 'EcoFootPrint',
        description: 'Aplicacion movil Android para monitorear y reducir la huella ambiental.',
        category: 'movil',
        tech: ['Kotlin', 'Android'],
        mediaFit: 'contain',
        mediaAspect: 'phone',
        images: [
            '/projects/EcoFootPrint/Screenshot_20260210_204319.png',
            '/projects/EcoFootPrint/Screenshot_20260210_204433.png',
            '/projects/EcoFootPrint/Screenshot_20260210_204455.png',
            '/projects/EcoFootPrint/Screenshot_20260210_204512.png',
            '/projects/EcoFootPrint/Screenshot_20260210_204536.png',
            '/projects/EcoFootPrint/Screenshot_20260210_204601.png',
            '/projects/EcoFootPrint/Screenshot_20260210_204717.png',
            '/projects/EcoFootPrint/Screenshot_20260210_204758.png',
        ],
        github: 'https://github.com/davi007-lgtm',
        color: 'accent-indigo',
    },
]

const categoryColors = {
    web: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    movil: 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20',
    java: 'bg-accent-violet/10 text-accent-violet border-accent-violet/20',
    python: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
}

const categoryDot = {
    web: 'bg-accent-blue',
    movil: 'bg-accent-indigo',
    java: 'bg-accent-violet',
    python: 'bg-yellow-500',
}

const categoryLabels = {
    web: 'Web',
    movil: 'Movil',
    java: 'Java',
    python: 'Python',
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('todos')
    const scrollRef = useRef(null)
    const [activeImage, setActiveImage] = useState({})
    const [lightbox, setLightbox] = useState({ isOpen: false, src: '', title: '' })

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'todos') return projects
        return projects.filter((p) => p.category === activeFilter)
    }, [activeFilter])

    const stepImage = (project, direction) => {
        const idx = activeImage[project.id] || 0
        const next = (idx + direction + project.images.length) % project.images.length
        setActiveImage({ ...activeImage, [project.id]: next })
    }

    const setImageIndex = (projectId, index) => {
        setActiveImage({ ...activeImage, [projectId]: index })
    }

    const openLightbox = (src, title) => {
        setLightbox({ isOpen: true, src, title })
    }

    const closeLightbox = () => {
        setLightbox({ isOpen: false, src: '', title: '' })
    }

    return (
        <section id="proyectos" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Proyectos
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Una seleccion de proyectos en los que he trabajado, mostrando mis habilidades en desarrollo web, movil y de escritorio.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center gap-2 mb-12 flex-wrap"
                >
                    {categories.map((cat) => {
                        const Icon = cat.icon
                        const isActive = activeFilter === cat.id
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 ${isActive
                                    ? 'bg-white/10 text-white border border-white/20'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {cat.label}
                            </button>
                        )
                    })}
                </motion.div>

                {/* Projects grid */}
                <div className="relative">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col p-5"
                                >
                                    {/* Image carousel */}
                                    <div className={`relative w-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-lg overflow-hidden mb-4 ${project.mediaAspect === 'phone' ? 'aspect-[9/16] max-h-[500px]' : 'aspect-video'}`}>
                                        {(() => {
                                            const images = project.images || []
                                            const idx = activeImage[project.id] || 0
                                            const src = images[idx]
                                            const fitClass = project.mediaFit === 'contain' ? 'object-contain' : 'object-cover'

                                            return (
                                                <>
                                                    {src ? (
                                                        <AnimatePresence mode="wait">
                                                            <motion.img
                                                                key={src}
                                                                src={src}
                                                                alt={project.title}
                                                                initial={{ opacity: 0.0, scale: 1.02 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0.0, scale: 1.02 }}
                                                                transition={{ duration: 0.25 }}
                                                                className={`absolute inset-0 w-full h-full ${fitClass} cursor-pointer hover:scale-105 transition-transform duration-300`}
                                                                loading="lazy"
                                                                onClick={() => openLightbox(src, project.title)}
                                                            />
                                                        </AnimatePresence>
                                                    ) : (
                                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
                                                    )}

                                                    {(images.length > 1) && (
                                                        <>
                                                            <button
                                                                type="button"
                                                                onClick={(e) => { e.preventDefault(); stepImage(project, -1) }}
                                                                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-dark-700/70 border border-white/10 text-gray-200 flex items-center justify-center hover:text-white hover:border-white/20 hover:bg-dark-700 transition-all duration-300"
                                                                aria-label="Imagen anterior"
                                                            >
                                                                <FaChevronLeft className="w-3.5 h-3.5" />
                                                            </button>

                                                            <button
                                                                type="button"
                                                                onClick={(e) => { e.preventDefault(); stepImage(project, 1) }}
                                                                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-dark-700/70 border border-white/10 text-gray-200 flex items-center justify-center hover:text-white hover:border-white/20 hover:bg-dark-700 transition-all duration-300"
                                                                aria-label="Siguiente imagen"
                                                            >
                                                                <FaChevronRight className="w-3.5 h-3.5" />
                                                            </button>

                                                            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
                                                                {images.map((_, i) => (
                                                                    <button
                                                                        key={i}
                                                                        type="button"
                                                                        onClick={(e) => { e.preventDefault(); setImageIndex(project.id, i) }}
                                                                        className={`${i === idx ? 'bg-white/70' : 'bg-white/25 hover:bg-white/40'} w-1.5 h-1.5 rounded-full transition-colors duration-200`}
                                                                        aria-label={`Ir a imagen ${i + 1}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </>
                                            )
                                        })()}
                                    </div>

                                    {/* Category badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${categoryDot[project.category]}`} />
                                            {categoryLabels[project.category]}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-8 px-3 rounded-lg bg-white/5 border border-white/10 inline-flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                                    aria-label="Ver demo"
                                                >
                                                    <FaExternalLinkAlt className="w-3 h-3" />
                                                    <span className="text-xs font-medium">Demo</span>
                                                </a>
                                            )}
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-300"
                                                aria-label="Ver en GitHub"
                                            >
                                                <FaGithub className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 text-[11px] font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/davi007-lgtm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-300 group"
                    >
                        <FaGithub className="w-4 h-4" />
                        Ver mas proyectos en GitHub
                        <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {lightbox.isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                            onClick={closeLightbox}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
                                aria-label="Cerrar"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image container */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={lightbox.src}
                                    alt={lightbox.title}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                                
                                {/* Image title */}
                                {lightbox.title && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                                        <p className="text-white text-center font-medium">{lightbox.title}</p>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}