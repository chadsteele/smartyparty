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
	Breadcrumbs, Link
} from "@suid/material"
import ProfileIcon from "@suid/icons-material/Person"
import { useLocation } from "@solidjs/router"


import { setOpen } from "./SideMenu"
import config from "./config.js"
import { Show, createSignal, createEffect } from "solid-js"

export const [alert, setAlert] = createSignal()
export const [path, setPath] = createSignal("")

export default function (props) {
	let count = 0
	console.log({ MenuBar: props })

	createEffect(() => {
		const loc = useLocation()
		setPath(loc.pathname)
	})

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
								setAlert({ severity: "info", message: "Not implemented yet.  You can beta test the app without an account.", timeout: 6000 })
							}}>
							{"sign in"}
						</Button>
					</Toolbar>
				</AppBar>
			</Box>

			<Box sx={{ height: "5em" }} />

			<Path path={path()} />

			<Show when={alert()}>
				<Grow in={alert()}>
					<Alert sx={{ margin: "1em" }} severity={alert().severity}>{alert().message}</Alert>
				</Grow>
			</Show>
		</>
	)
}


function Path (props) {
	const [list, setList] = createSignal()
	const [last, setLast] = createSignal()

	createEffect(() => {

		const loc = props.path
		const temp = loc.split('/')
		setLast(temp.pop()) // shortens temp
		setList(temp)
	})



	return <>
		<Breadcrumbs aria-label="breadcrumb" sx={{ mb: "2em" }}>

			<For each={list()}>{
				(folder, i) =>
					<Link
						underline="hover"
						color="inherit"
						href={[...list()].slice(0, i() + 1).join('/')}
					>
						{folder}
					</Link>
			}</For>

			<Typography color="text.primary">{last()}</Typography>
		</Breadcrumbs>
	</>


}
