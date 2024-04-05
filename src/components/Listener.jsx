import { Alert, Box, LinearProgress, TextField, } from "@suid/material"
import MicIcon from "@suid/icons-material/Mic"
import PauseIcon from "@suid/icons-material/PauseCircle"
import Button from "@suid/material/Button"
import { Show, createSignal, onMount, createEffect, } from "solid-js"
import { createStore } from "solid-js/store";
import { timestamp } from "./Helpers"
import ChatGpt, { ask } from "./ChatGpt"
import Reports, { Report } from './Reports'
import { Switch as Slider } from "@suid/material"
import config from './config'
import { openai, apiKey, setApiKey } from './ChatGpt'


export const [listening, setListening] = createSignal(false)
export const [report, setReport] = createSignal({})
export const [list, setList] = createSignal([]) // list of reports
export const [waiting, setWaiting] = createSignal(false)
const [auto, setAuto] = createSignal(true)




let msgs = [{ role: "system", content: config.instructions }]

export const listener = new (webkitSpeechRecognition || SpeechRecognition)()
listener.continuous = true


const addWords = async (raw) => {
	try {
		msgs.push({ role: "user", content: raw })
		const str = await ask(msgs)

		setWaiting(true)
		let json, content = str.message.content
		try {
			json = JSON.parse(content)
		} catch {
			json = { summary: content }
		}
		msgs.push({ role: "assistant", content })
		console.log({ chatgpt: json, msgs })
		setReport(json)
		const temp = list()
		temp.push(json)
		setList(temp)
		setWaiting(false)
	} catch {
		console.log({ error: content })
	}
}


export function ListenButton () {
	function toggle () {
		if (!listener) return
		if (listening()) {
			listener.stop()
			setListening(false)
			console.log("Speech recognition stopped.")
		} else {
			listener.start()
			setListening(true)
			setWaiting(true)
			console.log("Speech recognition started.")
		}
	}

	return (
		<>
			<Button color="inherit" onClick={toggle} variant="outlined" disabled={openai() == null}>
				<Switch>
					<Match when={!listening()}>
						<MicIcon />
						Start
					</Match>
					<Match when={listening()}>
						<PauseIcon />
						Pause
					</Match>
				</Switch>
			</Button>
		</>
	)
}

export default function () {
	const [text, setText] = createSignal("")

	listener.onresult = function (event) {
		const input = event.results[event.results.length - 1]
		let temp = input[0].transcript

		addWords(temp)

		// append new words
		setText(text() + temp + "\n")

		// auto scroll to bottom
		const textbox = document.getElementById("output")
		textbox.scrollTop = textbox.scrollHeight

		if (auto()) {
			const reports = document.getElementById("reports")
			reports.scrollTop = reports.scrollHeight
		}
	}

	listener.onend = function (event) {
		console.log({ ended: event })
		console.log("restarting...")

		setText(text() + "...")

		if (listening())
			setTimeout(() => {
				listener.start()
			}, 1000)
	}

	return (
		<>
			<Box>

				<Show when={!listening()}>
					<Alert severity="info" sx={{ marginBottom: 2 }}>
						<h2>About Dr.smartyparty</h2>
						This app will help you have more effective conversations with doctors, lawyers, friends, etc.
						<ul>
							<li>First, ask permission to use the app in the conversation.  Don't be creepy.</li>
							<li>Next, hit [start] and I will listen, summarize, answer questions
								and suggest questions during your conversation.</li>
							<li>Ask your doctor (whomever) the questions I suggest</li>
							<li>Repeat</li>
							<li>Have fun!</li>

						</ul>
						Also, Don't worry.  Nothing is recorded and your privacy is assured.

						<p>Enter your personal api key or the one provided by your administrator</p>

						<TextField
							label="Open Ai API Key"
							variant="outlined"
							fullWidth
							value={apiKey()}
							onChange={event => setApiKey(event.currentTarget.value)}
						/>
					</Alert>
				</Show>
				<Box margin={1}>
					<TextField
						id="output"
						fullWidth={true}
						color="primary"
						label="Transcription"
						placeholder={listening() ? "listening..." : "waiting..."}
						multiline
						value={text()}
						maxRows={5}
						disabled
					/>
				</Box>
				<div id="reports" style={"overflow:scroll; height:60vh;"}>
					<Show when={!waiting()} fallback={<LinearProgress />}>
						<Reports />
					</Show>
				</div>
				<Slider onChange={() => {
					setAuto(!auto())
					console.log({ auto: auto() })
				}} checked={auto()} /> {auto() ? "AutoScroll" : "Manual Scroll"}

			</Box>
		</>
	)
}


