#!/usr/bin/env node

import lithium from "lithium-cli"

const app = lithium()

app.command(
	"new",
	async ({ args: { root } }) => {
		const path = root ?? "."
		const spinner = app.spinner("Creating your project...").start()
		await app.execute(
			"git clone https://github.com/ranjithrd/nitrate",
			".",
			false
		)
		await app.execute("rm -Rf .git", path, false)
		await app.execute("rm -Rf cli", path, false)

		spinner.stop()
		console.log(app.colour.green(`Created a project at directory ${path}`))
	},
	[
		{
			optionArgument: "root",
			question:
				"Enter the directory in which you want to create the project",
			type: "string",
		},
	]
)

app.start()
