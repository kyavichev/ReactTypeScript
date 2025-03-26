"use client";


import Image from "next/image";
import AlbumOwner from "../vendor/AlbumOwner";
import ImageApp from "./components/ImageApp";
import Footer from "./components/Footer";
import client from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div className="m-4">
					<AlbumOwner />
					<ApolloProvider client={client}>
						<ImageApp />
					</ApolloProvider>
				</div>
			</main>
			<Footer />
		</div>
	);
}
