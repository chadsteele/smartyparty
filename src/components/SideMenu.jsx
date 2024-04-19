import InfoIcon from "@suid/icons-material/Info";
import LearnIcon from "@suid/icons-material/School";
import DiscussIcon from "@suid/icons-material/QuestionAnswer";
import { Show, createSignal, onMount, createEffect } from "solid-js"

import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography, Grow, ListSubheader, Container, Slide, Stack, BottomNavigation
} from "@suid/material";
import config from "./config.js"


{/* courses: [
					{
						label: `Resources 101`,
						menu: [
							{label:"📚 Study", url:""},
							{label:"🎓 Learn", menu:[]},
							{label:"⚡ Activities", menu:[]},
							{label:"💬 Discuss", menu:[]},
						],
					},
				], */}


function Menu (props) {
    const [show, setShow] = createSignal("")
    let myDiv

    return <List >
        <For each={props.menu}>{
            (item) => <div >
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        if (show().includes(item.label)) {
                            setShow(show().replaceAll(item.label, ""))
                        } else {
                            setShow([show(), item.label].join(" "))
                        }
                    }
                    }>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
                <Show when={show().includes(item.label)}>
                    <Grow direction="down" in={show().includes(item.label)} timeout={1000}  >
                        <Container>
                            <Menu menu={props.menu} />
                        </Container>
                    </Grow>
                </Show>
            </div>
        }</For >
    </List >
}


export default function () {


    const course = config.org.programs[0].menu[0]

    console.log(course.menu)

    return (


        <>

            <Drawer
                anchor="left"
                open={true}
                sx={{ flexGrow: 1, margin: "1em", display: 'flex', flexDirection: 'column' }}
            >

                <Box sx={{
                    top: 0,
                    margin: '1em',
                    position: 'fixed',
                    width: 'fit',
                    height: '1vh'
                }}>
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        {config.org.programs[0].label}
                    </Typography>

                    <Divider />

                    <Typography
                        component="div"
                        align="right"
                        sx={{ fontSize: ".6em", color: "grey", fontStyle: "italic" }}
                    >
                        {course.label}
                    </Typography>
                </Box>

                <List >



                    <Box sx={{ height: '2em' }} />
                    <Menu menu={course.menu} />
                    <Box sx={{ height: '1em' }} />

                </List>



                <Box sx={{
                    bottom: 0,
                    margin: '1em',
                    position: 'fixed',
                    width: '100%'
                }}>
                    <Show when={config.org.html} fallback={config.org?.name || "SmartyParty 🎉"}>
                        <div innerHTML={config.org.html} />
                    </Show>
                </Box>

            </Drawer>
        </>

    );
}
