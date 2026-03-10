import { Award, BadgeCheck, Trophy } from "lucide-react";

const awards = [
	{
		year: "2021",
		title: "Applications of Algorithm",
		issuer: "Samsung Electronics Vietnam Co., Ltd",
		icon: Trophy,
	},
	{
		year: "2023",
		title: "Winner of D1 Code King",
		issuer: "Rikkeisoft",
		icon: Trophy,
	},
	{
		year: "2024",
		title: "TOEIC Certificate (Score: 925)",
		issuer: "IIG Vietnam",
		icon: BadgeCheck,
	},
	{
		year: "2024",
		title: "3rd place Rikkeisoft Code King",
		issuer: "Rikkeisoft",
		icon: Trophy,
	},
	{
		year: "2025",
		title: "Professional Scrum Master I",
		issuer: "Scrum.org Certification",
		icon: Award,
	},
];

export default function HonorAndAwards() {
	return (
		<section id="Awards" className="relative min-h-screen px-4 py-20 sm:py-24 snap-start">
			<div className="absolute right-0 top-20 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

			<div className="relative mx-auto max-w-6xl">
				<div className="mb-12 text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
						<Award className="h-4 w-4" />
						Milestones & Recognition
					</div>
					<h2 className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
						Honor & Awards
					</h2>
					<p className="mx-auto max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
						A few milestones that reflect continuous learning, technical growth,
						and a commitment to delivering meaningful results.
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-3">
					{awards.map((award) => {
						const Icon = award.icon;

						return (
							<article
								key={`${award.year}-${award.title}`}
								className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10"
							>
								<div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400/10 to-cyan-400/5 blur-2xl" />

								<div className="relative">
									<div className="mb-5 flex items-start justify-between gap-3">
										<div className="inline-flex rounded-2xl border border-white/10 bg-slate-900/60 p-3">
											<Icon className="h-6 w-6 text-yellow-300" />
										</div>
										<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
											{award.year}
										</span>
									</div>

									<h3 className="mb-3 text-xl font-semibold text-white">
										{award.title}
									</h3>
									<p className="text-sm leading-7 text-gray-300">
										{award.issuer}
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}