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
    ListItemText, Typography, Grow, ListSubheader
} from "@suid/material";
import config from "./config.js"



export default function () {

    const [show, setShow] = createSignal("")
    const course = config.org.programs[0].courses[0]

    console.log(course.menu)

    return (


        <>

            <Drawer
                anchor="left"
                open={true}
            >
                <List>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, margin: "1em" }}
                    >
                        {config.org.programs[0].name}
                    </Typography>

                    <Divider />

                    <Typography
                        component="div"
                        align="right"
                        sx={{ flexGrow: 1, margin: "1em", fontSize: "1em", color: "grey", fontStyle: "italic" }}
                    >
                        {course.name}
                    </Typography>

                    <For each={course.menu}>{
                        (item) => <div>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => {
                                    if (show().includes(item)) {
                                        setShow(show().replaceAll(item, ""))
                                    } else {
                                        setShow([show(), item].join(" "))
                                    }
                                }
                                }>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                            <Show when={show().includes(item)}>
                                <Grow in={show().includes(item)} ><div>
                                    <For each={[1, 2, 3, 4]}>{
                                        (i) => <ListItem disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary={" blah, blah"} />
                                            </ListItemButton>
                                        </ListItem>

                                    }</For>
                                </div>
                                </Grow>
                            </Show>
                        </div>
                    }</For>
                </List>
                <Box sx={{ position: "absolute", bottom: 0, margin: "1em" }}>
                    <div innerHTML={config.org.name} />
                </Box>
            </Drawer>
        </>

    );
}
