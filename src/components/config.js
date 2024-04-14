export default {
	instructions: `You are reporting about a conversation.

	Invent a title,
	summarize the conversation and include any requests in the summary,
	choose an emoji that best represents the tone,
	and ask at least 3 new questions,
	and answer any questions implied in the conversation as well.

	format your responses in valid strict json like this
	{ "title":"", "summary":"", "emoji":"", "questions":[""]}
	`,

	// Create a list of 10 questions and answers about "How Maslows hiearchy of needs applies to donald trump and his supporters" in strict json format [{q,a}].  Answers should be 3 words or less.
	QA: [
		{
			q: "How does Maslow's hierarchy of needs apply to Donald Trump?",
			a: "Power, esteem, security",
		},
		{
			q: "What need might Trump's pursuit of political power align with?",
			a: "Self-actualization",
		},
		{
			q: "How might Trump's supporters relate to Maslow's hierarchy of needs?",
			a: "Safety, belonging, esteem",
		},
		{
			q: "What need could Trump's rhetoric fulfill for his supporters?",
			a: "Belonging",
		},
		{
			q: "In what ways does Trump's leadership style reflect his needs?",
			a: "Assertive, self-promoting",
		},
		{
			q: "How does Trump seek esteem?",
			a: "Public recognition",
		},
		{
			q: "What need might Trump's policies address?",
			a: "Security",
		},
		{
			q: "How does Trump's brand appeal to certain needs?",
			a: "Luxury, success",
		},
		{
			q: "What psychological aspects may drive Trump's behavior?",
			a: "Need for validation",
		},
		{
			q: "How might Trump's behavior change if his needs were met differently?",
			a: "Less aggressive",
		},
	],
}
