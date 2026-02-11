import { FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="relative py-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="flex justify-center gap-4 mb-6">
                    <a
                        href="https://github.com/davi007-lgtm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-indigo/30 hover:bg-accent-indigo/10 transition-all duration-300"
                    >
                        <FaGithub className="w-4 h-4" />
                    </a>
                </div>

                <p className="text-sm text-gray-500">
                    2026 Jeaustin Hernandez. Casi todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
