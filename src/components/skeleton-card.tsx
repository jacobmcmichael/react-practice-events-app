import Skeleton from "@/components/skeleton";

export default function SkeletonCard() {
	return (
		<div className="space-y-4 flex-1">
			<Skeleton className="h-[200px] w-full rounded-xl" />
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[250px]" />
		</div>
	);
}
