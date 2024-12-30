import Image from "next/image";

export default function Logo() {
	return (
		<Image
			src="/portrait.jpg"
			alt="Logo"
			width={100}
			height={100}
		/>
	);
}
