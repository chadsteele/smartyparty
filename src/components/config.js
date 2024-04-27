import Defaults from "./Elementals/Defaults"

const config = {
	instructions: ``,
	menu: { indent: 2 },

	org: {
		label: "boldleaders",
		html: `<img width="100px" src="https://www.boldleaders.org/wp-content/uploads/2019/07/logo-B-Final-C.png"></img>`,
		url: "https://boldleaders.org",
		appname: `🧬 Elementals`,
		defaults: Defaults,
		menu: [
			{
				opened: true,
				label: `🧬 Elementals`,
				menu: [
					{
						opened: true,
						label: `Resources 101`,
						menu: [
							{ label: "📚 Study", url: "" },
							{
								opened: true,
								label: "🎓 Learn",
								menu: [
									{
										opened: true,
										label: "Elementals",
										menu: [
											{
												label: "Part 1",
												path: "BoldLeaders/Elementals/Resources101/Learn/Elementals/Part1",
											},
											{
												label: "Part 2",
												path: "BoldLeaders/Elementals/Resources101/Learn/Elementals/Part2",
											},
										],
									},
									{
										label: "Compounds",
										path: "BoldLeaders/Elementals/Resources101/Learn/Compounds",
									},
								],
							},
							{
								label: "⚡ Activities",
							},
							{
								label: "💬 Discuss",
							},
						],
					},
				],
			},
		],
	},
}

export default config
