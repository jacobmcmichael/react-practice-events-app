import { Metadata } from "next";
import Image from "next/image";

import { EventPageProps } from "@/lib/props";
import { getEvent } from "@/lib/server-utils";

import H1 from "@/components/h1";

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
	const slug = params.slug;
	const event = await getEvent(slug);

	return {
		title: event.name,
		description: `Event details for ${event.name}.`,
	};
}

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionParagraph({ children }: { children: React.ReactNode }) {
	return <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">{children}</p>;
}

export function generateStaticParams() {
	return [{ slug: "comedy-extravaganza" }, { slug: "dj-practice-session" }];
}

export default async function Event({ params }: EventPageProps) {
	const slug = params.slug;
	const event = await getEvent(slug);

	return (
		<main>
			<section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
				<Image
					src={event.imageUrl}
					className="object-cover z-0 blur-3xl"
					alt="Event background image"
					fill
					quality={50}
					sizes="(max-width: 1280px) 100vw, 1280px"
					priority
				/>

				<div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
					<Image
						src={event.imageUrl}
						alt={event.name}
						width={300}
						height={201}
						className="rounded-xl border-2 border-white/50 object-cover w-full"
					/>

					<div className="flex flex-col">
						<p className="text-white/75">
							{new Date(event.date).toLocaleDateString("en-US", {
								weekday: "long",
								month: "long",
								day: "numeric",
							})}
						</p>

						<H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">{event.name}</H1>

						<p className="whitespace-nowrap text-xl text-white/75">
							Organized by <span className="italic">{event.organizerName}</span>
						</p>

						<button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
							Get tickets
						</button>
					</div>
				</div>
			</section>

			<div className="min-h-[75vh] text-center px-5 py-16 space-y-12">
				<section>
					<SectionHeading>About this Event</SectionHeading>
					<SectionParagraph>{event.description}</SectionParagraph>
				</section>

				<section>
					<SectionHeading>Location</SectionHeading>
					<SectionParagraph>{event.location}</SectionParagraph>
				</section>
			</div>
		</main>
	);
}
