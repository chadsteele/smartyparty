import QA from "./Elementals/QA"

const config = {
	instructions: `You are reporting about a conversation.

	Invent a title,
	summarize the conversation and include any requests in the summary,
	choose an emoji that best represents the tone,
	and ask at least 3 new questions,
	and answer any questions implied in the conversation as well.

	format your responses in valid strict json like this
	{ "title":"", "summary":"", "emoji":"", "questions":[""]}
	`,
	menu: { indent: 2 },

	QA: QA.Elementals,

	org: {
		label: "boldleaders",
		html: `<img width="100px" src="https://www.boldleaders.org/wp-content/uploads/2019/07/logo-B-Final-C.png"></img>`,
		url: "https://boldleaders.org",
		appname: `🧬 Elementals`,
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
								label: "🎓 Learn",
								menu: [
									{
										label: "Solid Collapse automatically calculates the optimal duration according to the content height. You can opt-it by referencing the variable --sc-auto-duration in your transition property:",
										menu: [
											{ label: "Swim" },
											{ label: "Yoga" },
											{ label: "Nap" },
											{ label: "Crap" },
										],
									},
									{ label: "Two" },
									{ label: "Three" },
									{ label: "Four" },
								],
							},
							{
								label: "⚡ Activities",
								menu: [
									{ label: "Swim" },
									{ label: "Yoga" },
									{ label: "Nap" },
									{ label: "Crap" },
								],
							},
							{
								label: "💬 Discuss",
								menu: [
									{
										label: "One",
										opened: true,
										menu: [
											{ label: "Swim" },
											{ label: "Yoga" },
											{ label: "Nap" },
											{ label: "Crap" },
										],
									},
									{ label: "Two" },
									{ label: "Three" },
									{ label: "Four" },
								],
							},
						],
					},
				],
			},
		],
	},
}

export default config
