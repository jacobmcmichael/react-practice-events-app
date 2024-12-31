"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
	const router = useRouter();

	const [searchText, setSearchText] = useState<string>("");
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!searchText.trim()) return;
		router.push(`/events/${searchText}`);
	};

	return (
		<form
			className="w-full sm:w-[580px]"
			action=""
			onSubmit={(event) => handleSubmit(event)}
		>
			<input
				className="w-full h-16 rounded-lg bg-white/[7%] focus:bg-white/10 px-6 outline-none ring-accent/50 focus:ring-2 transition"
				type="text"
				placeholder="Search events in any city..."
				spellCheck={false}
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			/>
		</form>
	);
}
