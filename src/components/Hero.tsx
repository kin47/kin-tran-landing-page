import { shellCode, textTypeAnimation } from "@/data/shellcode";
import { ChevronDown, Code, Compass, ContactIcon } from "lucide-react";
import { useEffect, useState } from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [typed, setTyped] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove);
    })

    useEffect(() => {
        const currentText = textTypeAnimation[textIndex];

        const speed = 80

        const timeout = setTimeout(async () => {
            if (!isDeleting) {
                // typing
                setTyped(currentText.slice(0, typed.length + 1));

                if (typed.length + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), 3000)
                }
            } else {
                setTyped(currentText.slice(0, typed.length - 1));
                if (typed.length === 0) {
                    setTyped("");
                    setTimeout(() => {
                        setIsDeleting(false)
                        setTextIndex((prev) => (prev + 1) % textTypeAnimation.length);
                    }, 2000)
                }
            }
        }, speed);
        return () => clearTimeout(timeout);

    }, [typed, isDeleting, textIndex]);

    return <section id="Home" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm snap-start">
        <div
            className="absolute inset-0 opacity-30"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40px)`
            }}
        />
        <div className="absolute top-20 left-4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto text-center relative w-full">
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center relative">
                {/* text / intro  */}
                <div className="lg:flex lg:flex-col lg:items-start">
                    <div className="inline-flex flex-row items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 animate-in slide-in-from-bottom duration-700">
                        <Code className="w-4 h-4 text-blue-400" />
                        <span className="text-xs sm:text-sm text-blue-300">Introducing Kin Tran</span>
                    </div>
                    <h1 className="animate-in slide-in-from-bottom duration-700 delay-100 lg:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                        Hi, I'm Tran Quang Minh
                    </h1>
                    <div className="animate-in slide-in-from-bottom duration-700 delay-100 text-2xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                        Software Engineer at AvePoint
                    </div>
                    <p className="animate-in slide-in-from-bottom duration-700 delay-100 text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:text-left lg:mx-0 mb-6">
                    I build reliable software and scalable systems that solve real-world problems.
                    Passionate about clean architecture, performance, and creating meaningful digital products.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-100">
                        <a href="#Experience" className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                            <span>View My Experience</span>
                            <Compass/>
                        </a>
                        <a href="#Contact"  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/15 hover:bg-white/25 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                            <span>Contact Me</span>
                            <ContactIcon/>
                        </a>
                    </div>
                </div>

                {/* ide */}
                <div className="relative order-2 w-full">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                        <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5">
                            {/* ide header */}
                            <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm border-b border-white/10 px-3 sm:px-4 py-2 sm:py-3">
                                <div className="flex items-center space-x-1.5 sm:space-x-2">
                                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                                        <div className="bg-red-500 rounded-full h-2 w-2 sm:w-3 sm:h-3"></div>
                                        <div className="bg-yellow-500 rounded-full h-2 w-2 sm:w-3 sm:h-3"></div>
                                        <div className="bg-green-500 rounded-full h-2 w-2 sm:w-3 sm:h-3"></div>
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-300">minhtran.sh</span>
                                </div>
                                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"></ChevronDown>
                            </div>
                            {/* code content */}
                            <div className="relative overflow-hidden flex-grow">
                                <SyntaxHighlighter language="shell" style={vscDarkPlus}>
                                    {`${shellCode} ${typed}█`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}