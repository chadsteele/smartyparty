import MenuIcon from "@suid/icons-material/Menu"
import {
	AppBar,
	IconButton,
	Stack,
	Toolbar,
	Typography,
	Button,
	Box,
	Alert,
	Grow,
} from "@suid/material"
import ProfileIcon from "@suid/icons-material/Person"

import { setOpen } from "./SideMenu"
import config from "./config.js"
import { Show, createSignal, createEffect } from "solid-js"

export const [alert, setAlert] = createSignal()

export default function () {
	let count = 0

	createEffect(() => {
		if (alert()?.timeout) {
			count++
			setTimeout(() => {
				--count
				if (count < 1) setAlert(null)
			}, alert()?.timeout)
		}
	})

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="fixed"
					style={{ "background-color": "#131629", color: "white" }}
				>
					<Toolbar>
						<Button
							color="inherit"
							onClick={() => {
								setOpen(true)
							}}
						>
							<MenuIcon />
						</Button>

						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							{config.org.appname}
						</Typography>

						<Button color="inherit" startIcon={<ProfileIcon />}
							onClick={() => {
								setAlert({ severity: "info", message: "Not implemented yet.  Stay tuned.", timeout: 3000 })
							}}>
							{"sign in"}
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<div style={{ height: "5em" }} />
			<Show when={alert()}>
				<Grow in={alert()}>
					<Alert sx={{ margin: "1em" }} severity={alert().severity}>{alert().message}</Alert>
				</Grow>
			</Show>
		</>
	)
}

