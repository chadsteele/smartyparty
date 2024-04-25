import Listener from "./components/Listener"
import Waveform from "./components/Waveform.jsx"
import MenuBar from "./components/MenuBar"
import SideMenu from "./components/SideMenu"

import {
	Alert,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	TextField,
	Typography,
	Grow,
} from "@suid/material"
import { For, Show, createSignal } from "solid-js"
import ChatGpt, { ask } from "./components/ChatGpt"
import QCards from "./components/QCards.jsx"

export default function App() {
	return (
		<>
			<MenuBar />
			<SideMenu />
			<QCards />
		</>
	)
}
