import React from "react";

import { cN } from "@/lib/utilities";
import { H1Props } from "@/lib/props";

export default function H1({ children, className }: H1Props) {
	return <h1 className={cN("text-4xl sm:text-6xl font-bold tracking-tight", className)}>{children}</h1>;
}
