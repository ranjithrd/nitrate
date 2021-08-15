import React from "react"

function Home() {
	return (
		<div className="h-full w-full p-16">
			<h1 className="text-4xl font-bold tracking-tight">
				Nitrate Starter
			</h1>
			<div className="text-lg font-light mt-8">
				Nitrate helps you start a new React project with modern
				technology, such as Tailwind CSS, Vite, and React Router, in
				seconds.
				<br></br>
				Don't ever be delayed, even for a second, by{" "}
				<code>create-react-app</code> once again.
			</div>
			<h3 className="text-2xl font-bold tracking-tight mt-16">
				Technology used
			</h3>
			<ol>
				<li className="mt-2 font-light">ReactJS</li>
				<li className="mt-2 font-light">Tailwind</li>
				<li className="mt-2 font-light">React Router</li>
				<li className="mt-2 font-light">Vite</li>
			</ol>
		</div>
	)
}

export default Home
