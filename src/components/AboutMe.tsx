import {
    Calendar,
    GraduationCap,
    Briefcase,
    Phone,
    Mail,
    MapPin,
    User2,
} from "lucide-react";

export default function AboutMe() {
    return <section id="AboutMe" className="relative min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 px-4 sm snap-start">
        <h1 className="animate-in slide-in-from-bottom duration-700 delay-100 lg:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
            About Me
        </h1>
        <div className="max-w-7xl flex flex-col lg:flex-row py-4 md:py-6 items-center justify-center lg:space-x-16 space-y-4">
            <img
                src="assets/self-photo.jpg"
                className="w-2/3 md:w-1/3 rounded"
                alt="Minh Tran"
            />


            {/* Information */}
            <div className="w-full lg:w-2/3">
                {/* Introduction */}
                <div className="text-md sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl py-4">
                    A graduated student from Posts and Telecommunications Institute of Technology. A software engineer with 3 years of experience
                    Started my career as a Mobile Developer, later transitioning into a Backend
                    Developer specializing in .NET to become a proficient Software Engineer.
                </div>

                {/* Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200 py-8">
                    <div className="flex items-center gap-3">
                        <User2 className="w-5 h-5 bg-slate-950 text-white-900 fill-white/50" />
                        <span><b>Fullname:</b> Tran Quang Minh</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-white-900 fill-white/50" />
                        <span><b>Date of birth:</b> July 4th, 2002</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-white-900 fill-white/50" />
                        <span>
                            <b>Alma mater:</b> PTIT (2020 - 2025)
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-white-900 fill-white/50" />
                        <span><b>Role:</b> Software Engineer</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-white-900 fill-white/50" />
                        <span><b>Contact:</b> 098 615 3247</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-white-900 fill-white/50" />
                        <span><b>Email:</b> minhtq4702@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-white-900 fill-white/50" />
                        <span><b>Location:</b> Hanoi, Vietnam</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
}