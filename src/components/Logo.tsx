import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link href="/">
			<Image
				className="brightness-0 invert opacity-75 hover:opacity-100 transition"
				src="/logo.svg"
				alt="Logo"
				width={100}
				height={100}
			/>
		</Link>
	);
}
