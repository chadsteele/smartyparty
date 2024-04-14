import MenuIcon from "@suid/icons-material/Menu"
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@suid/material"
import { Box, TextField } from "@suid/material"
import SchoolIcon from "@suid/icons-material/School"
import ChatIcon from "@suid/icons-material/QuestionAnswer"
import PauseIcon from "@suid/icons-material/PauseCircle"
import Button from "@suid/material/Button"
import { Show, createSignal, onMount, createEffect } from "solid-js"
import { ListenButton } from "./Listener"
import logo from "./smartyparty.logo.png"
import BrainIcon from "./brain.png"

function Logo() {
	const emojis = "🧬🤓📚🎓🧠💡🎉🥳"
	return <>{"🧬"}</>
}

function Buttons() {
	return (
		<>
			<Stack direction="row" spacing={2}>
				<Button color="inherit" variant="outlined">
					<SchoolIcon />
					&nbsp; Learn
				</Button>

				<Button color="inherit" variant="outlined">
					<ChatIcon /> &nbsp; Q&A
				</Button>
			</Stack>
		</>
	)
}

export default function () {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="fixed"
					style={{ "background-color": "#131629", color: "white" }}
				>
					<Toolbar>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							<Logo />
							{" Elementals"}
						</Typography>

						<Buttons />
					</Toolbar>
				</AppBar>
			</Box>
			<div style={{ height: "5em" }} />
		</>
	)
}
