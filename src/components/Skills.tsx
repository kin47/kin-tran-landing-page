import { BrainCircuit, Cloud, Code2, Languages, Layers3, MessagesSquare, Workflow } from "lucide-react";

const skillGroups = [
	{
		title: "Languages",
		icon: Code2,
		items: ["C#", "Dart", "Java"],
	},
	{
		title: "Frameworks",
		icon: Layers3,
		items: [".NET", "Flutter"],
	},
	{
		title: "Architecture",
		icon: Workflow,
		items: ["Clean Architecture", "Offline-First"],
	},
	{
		title: "Principles",
		icon: BrainCircuit,
		items: ["SOLID", "Design Patterns"],
	},
	{
		title: "Cloud",
		icon: Cloud,
		items: ["Azure", "AWS"],
	},
	{
		title: "AI Tools",
		icon: BrainCircuit,
		items: ["Cursor", "Claude", "ChatGPT"],
	},
	{
		title: "Communication",
		icon: Languages,
		items: ["English", "Japanese (currently learning)"],
	},
	{
		title: "Project Frameworks",
		icon: MessagesSquare,
		items: ["Agile/Scrum", "Waterfall"],
	},
];

export default function Skills() {
	return (
		<section id="Skills" className="relative px-4 py-20 sm:py-24 snap-start">
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			<div className="absolute left-0 top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

			<div className="relative mx-auto max-w-6xl">
				<div className="mb-12 text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
						<BrainCircuit className="h-4 w-4" />
						Technical Toolkit
					</div>
					<h2 className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
						Skills
					</h2>
					<p className="mx-auto max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
						A balanced stack across backend, mobile, architecture, cloud, and
						collaboration — built through real product work and fast-moving teams.
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
					{skillGroups.map((group) => {
						const Icon = group.icon;

						return (
							<div
								key={group.title}
								className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
							>
								<div className="mb-5 flex items-center gap-3">
									<div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
										<Icon className="h-5 w-5 text-cyan-300" />
									</div>
									<h3 className="text-lg font-semibold text-white">
										{group.title}
									</h3>
								</div>

								<div className="flex flex-wrap gap-2.5">
									{group.items.map((item) => (
										<span
											key={item}
											className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-100"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}