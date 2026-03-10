import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

const contactItems = [
	{
		label: "Email",
		value: "minhtq4702@gmail.com",
		href: "mailto:minhtq4702@gmail.com",
		icon: Mail,
	},
	{
		label: "Phone",
		value: "0986153247",
		href: "tel:0986153247",
		icon: Phone,
	},
	{
		label: "Location",
		value: "Lo Duc, Hanoi, Vietnam",
		href: undefined,
		icon: MapPin,
	},
];

export default function Contact() {
	return (
		<section id="Contact" className="relative px-4 py-20 sm:py-24 snap-start">
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			<div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

			<div className="relative mx-auto max-w-6xl">
				<div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
							<MessageCircleMore className="h-4 w-4" />
							Let&apos;s Connect
						</div>
						<h2 className="mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
							Contact Me
						</h2>
						<p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
							I&apos;m always open to discussing backend engineering, product ideas,
							and opportunities to build impactful software with great teams.
						</p>

						<div className="mt-8 flex flex-col gap-4 sm:flex-row">
							<a
								href="mailto:minhtq4702@gmail.com"
								className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
							>
								<Mail className="h-4 w-4" />
								Email Me
							</a>
							<a
								href="tel:0986153247"
								className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-100 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
							>
								<Phone className="h-4 w-4" />
								Call Me
							</a>
						</div>
					</div>

					<div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
						<div className="mb-6 flex items-center gap-3">
							<div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
								<MessageCircleMore className="h-5 w-5 text-cyan-300" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-white">
									Reach out directly
								</h3>
								<p className="text-sm text-gray-400">
									Fastest ways to get in touch
								</p>
							</div>
						</div>

						<div className="space-y-4">
							{contactItems.map((item) => {
								const Icon = item.icon;
								const content = (
									<div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-slate-900/60">
										<div className="rounded-xl bg-white/5 p-3">
											<Icon className="h-5 w-5 text-cyan-300" />
										</div>
										<div className="min-w-0">
											<p className="text-sm text-gray-400">{item.label}</p>
											<p className="break-words text-base font-medium text-white">
												{item.value}
											</p>
										</div>
									</div>
								);

								return item.href ? (
									<a key={item.label} href={item.href} className="block">
										{content}
									</a>
								) : (
									<div key={item.label}>{content}</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}