"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { EventifierEventType } from "@/lib/types";

const MotionLink = motion(Link);

export default function EventCard({ event }: { event: EventifierEventType }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.5 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	return (
		<MotionLink
			ref={ref}
			className="flex-1 basis-80 h-[380px] max-w-[500px]"
			href={`/event/${event.slug}`}
			// @ts-ignore
			style={{ scale: scaleProgress, opacity: scaleOpacity }}
			initial={{ scale: 0.8, opacity: 0 }}
		>
			<section className="w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden state-effects">
				<Image
					className="h-[60%] object-cover"
					src={event.imageUrl}
					alt={event.name}
					width={500}
					height={250}
				/>

				<div className="flex flex-col flex-1 justify-center items-center">
					<h2 className="text-2xl font-semibold">{event.name}</h2>
					<p className="italic opacity-75">By {event.organizerName}</p>
					<p className="text-sm text-white/50 mt-4">{event.location}</p>
				</div>

				<section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
					<p className="text-xl font-bold -mb-[5px]">
						{new Date(event.date).toLocaleDateString("en-US", { day: "2-digit" })}
					</p>
					<p className="text-xs uppercase text-accent">
						{new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
					</p>
				</section>
			</section>
		</MotionLink>
	);
}
