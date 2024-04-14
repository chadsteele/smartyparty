import Listener from "./components/Listener"
import Waveform from "./components/Waveform.jsx"
import MenuBar from "./components/MenuBar"
import {
	Alert,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	TextField,
	Typography,
} from "@suid/material"
import { For, Show } from "solid-js"
import ChatGpt, { ask } from "./components/ChatGpt"
import QCards from "./components/QCards.jsx"

export default function App() {
	return (
		<>
			<MenuBar />
			<QCards />
		</>
	)
}
