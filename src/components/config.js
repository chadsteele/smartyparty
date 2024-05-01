import Defaults from "./Elementals/Defaults"
import ai from "./Elementals/Ai.js"

const config = {
	instructions: ``,
	menu: { indent: 2 },

	org: {
		label: "boldleaders",
		html: `<img width="100px" src="https://www.boldleaders.org/wp-content/uploads/2019/07/logo-B-Final-C.png"></img>`,
		url: "https://boldleaders.org",
		appname: `🧬 Elementals`,
		defaults: [...Defaults, ...ai],
		menu: [
			{
				opened: true,
				label: `🧬 Elementals`,
				menu: [
					{
						label: "About",
						path: "BoldLeaders/Elementals",
					},
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
								menu: [
									{
										label: "Restoring Trust Exercise",
										path: "BoldLeaders/Elementals/Resources101/Act/RestoringTrust",
									},
								],
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
