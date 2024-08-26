import Link from "next/link";

import Header from "@/components/Header";

const Home = () => {
	return (
		<main>
			<Header/>
			<p>🔥 Let&apos;s get started! 🔥</p>
			<p><Link href="/about">About</Link></p>
		</main>
	);
};

export default Home;
