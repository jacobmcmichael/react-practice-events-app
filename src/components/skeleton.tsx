import { cN } from "@/lib/utilities";

export default function Skeleton({ className }: { className?: string }) {
	return <div className={cN("h-4 w-[550px] rounded-md bg-white/5", className)} />;
}
