import { createSignal, createEffect, Show } from "solid-js"
import OpenAI from "openai"
import { Alert } from "@suid/material"

export const [openai, setOpenAI] = createSignal(null)
export const [apiKey, setApiKey] = createSignal(
	window.location.hash.substring(1) || ""
)

const [err, setErr] = createSignal({} as any)

export async function ask(msgs) {
	try {
		if (!openai()) return
		const completion = await openai().chat.completions.create({
			messages: msgs,
			model: "gpt-3.5-turbo",
		})
		const result = completion.choices[0]
		return result
	} catch (e) {
		setErr(e)
	}
}

export default function (props: any) {
	createEffect(() => {
		if (!apiKey()) return
		setOpenAI(
			new OpenAI({
				apiKey: apiKey(),
				dangerouslyAllowBrowser: true,
			})
		)
	})

	return (
		<>
			<Show when={err()?.error?.message}>
				<Alert severity="error">{err()?.error?.message}</Alert>
			</Show>
			{props.children}
		</>
	)
}
