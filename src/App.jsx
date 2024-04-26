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
import { For, Show, createSignal, lazy } from "solid-js"
import ChatGpt, { ask } from "./components/ChatGpt"
import { Router, Route } from "@solidjs/router"

import QCards from "./components/QCards"

/* BoldLeaders/Elementals/Resources101/Learn/Elementals */

export default function App () {
	return (
		<>

			<MenuBar />
			<SideMenu />

			{/* <Route path="/" component={QCards} />
				<Route path="/open/*" component={QCards} /> */}

		</>
	)
}
