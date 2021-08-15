#!/usr/bin/env node

const lithium = require("lithium-cli")

const app = lithium()

app.command(
	"new",
	async ({ args: { root } }) => {
		console.log(
			app.colour.greenBright(
				app.box("Nitrate Starter", { margin: 1, padding: 1 })
			)
		)
		console.log(
			app.colour.greenBright(
				"The easiest way to start your new React project\n\n"
			)
		)
		const path = root ?? "."
		const spinner = app.spinner("Creating your project...").start()
		await app
			.execute(
				`git clone https://github.com/ranjithrd/nitrate ${path}`,
				".",
				false
			)
			.catch((e) => console.error(e))
		await app
			.execute("rm -Rf .git cli", path, false)
			.catch((e) => console.error(e))
		await app
			.execute("rm README.md LICENSE", path, false)
			.catch((e) => console.error(e))
		await app
			.execute("echo '' > README.md", path, false)
			.catch((e) => console.error(e))
		await app
			.execute("npm uninstall lithium-cli", path, false)
			.catch((e) => console.error(e))

		spinner.stop()
		console.log(
			`\n\nCreated a project at directory ${path}.\n\nTo start coding, type in\n\n${app.colour.green(
				`cd ${path}\n\nyarn\nyarn dev`
			)}\n\nin your command line. Happy coding!\n\n`
		)
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
