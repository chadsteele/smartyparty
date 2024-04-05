import MenuIcon from "@suid/icons-material/Menu"
import { AppBar, IconButton, Toolbar, Typography } from "@suid/material"
import { Box, TextField } from "@suid/material"
import MicIcon from "@suid/icons-material/Mic"
import PauseIcon from "@suid/icons-material/PauseCircle"
import Button from "@suid/material/Button"
import { Show, createSignal, onMount, createEffect } from "solid-js"
import { ListenButton } from "./Listener"
import logo from "./anima.logo.png"

function Logo() {
	return (
		<img
			style={{
				height: "1.25em",
				position: "relative",
				top: ".2em",
			}}
			src={logo}
		/>
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
							Dr.smartyparty
						</Typography>

						<ListenButton />
					</Toolbar>
				</AppBar>
			</Box>
			<div style={{ height: "5em" }} />
		</>
	)
}
