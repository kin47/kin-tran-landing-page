import { Briefcase, CalendarRange } from "lucide-react";

const experiences = [
	{
		period: "09/2023 - 10/2024",
		company: "Rikkeisoft",
		role: "Mobile Developer",
		description:
			"Worked as a Mobile Developer in Division 1, mainly building Flutter applications with a focus on maintainability and product quality.",
	},
	{
		period: "10/2024 - 01/2026",
		company: "KiotViet",
		role: "Mobile Developer → Backend Contributor",
		description:
			"Joined as a Mobile Developer, then expanded into both mobile and backend development to become a key player in a Scrum team.",
	},
	{
		period: "01/2026 - Now",
		company: "AvePoint",
		role: "Backend Developer",
		description:
			"Building an IaaS + PaaS product for AvePoint Cloud Backup, focusing on reliable backend systems and scalable platform capabilities.",
	},
];

export default function Experience() {
	return (
		<section id="Experience" className="relative px-4 py-20 sm:py-24 snap-start">
			<div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
			<div className="absolute right-8 bottom-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

			<div className="relative mx-auto max-w-6xl">
				<div className="mb-12 text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
						<Briefcase className="h-4 w-4" />
						Career Journey
					</div>
					<h2 className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
						Experience
					</h2>
					<p className="mx-auto max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
						From mobile-first product work to backend systems, each role sharpened
						how I design reliable software, collaborate in teams, and ship with
						purpose.
					</p>
				</div>

				<div className="relative mx-auto max-w-4xl">
					<div className="absolute left-[21px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue-400/70 via-cyan-400/40 to-transparent md:block" />

					<div className="space-y-6">
						{experiences.map((item, _) => (
							<div
								key={`${item.period}-${item.role}`}
								className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10"
							>
								<div className="absolute left-8 top-8 hidden h-3 w-3 rounded-full border-4 border-slate-950 bg-gradient-to-br from-blue-400 to-cyan-400 md:block" />

								<div className="md:pl-10">
									<div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
										<div>
											<div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
												<CalendarRange className="h-3.5 w-3.5" />
												{item.period}
											</div>
											<h3 className="text-xl font-semibold text-white sm:text-2xl">
												{item.role}
											</h3>
											<p className="mt-1 text-sm text-blue-200/80 sm:text-base">
												{item.company}
											</p>
										</div>
									</div>

									<p className="text-sm leading-7 text-gray-300 sm:text-base">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}