import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { PaginationControlsProps } from "@/lib/props";

const paginationButtonStyles =
	"flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity/-5 hover:opacity-100 transition text-sm";

export default function PaginationControls({ previousPath, nextPath }: PaginationControlsProps) {
	return (
		<section className="flex items-center justify-between w-full gap-2 mt-20">
			{previousPath ? (
				<Link
					href={previousPath}
					className={paginationButtonStyles}
				>
					<ArrowLeftIcon />
					Prev
				</Link>
			) : (
				<div />
			)}

			{nextPath ? (
				<Link
					href={nextPath}
					className={paginationButtonStyles}
				>
					Next
					<ArrowRightIcon />
				</Link>
			) : (
				<div />
			)}
		</section>
	);
}
