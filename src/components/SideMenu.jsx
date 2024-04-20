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


function Menu (props) {

    return < >
        <For each={props.menu}>{
            (item) => {
                return <div >
                    <ListItem disablePadding>
                        <ListItemButton >
                            <Show when={item.html} fallback={<ListItemText primary={item.label} sx={{ ml: 2 * props.indent }} />}>
                                <div innerHTML={item.html} />
                            </Show>
                        </ListItemButton>
                    </ListItem>

                    <Grow direction="down" in={item.menu} timeout={1000}  >
                        <div>
                            <Menu menu={item.menu} indent={props.indent + 1} />
                        </div>
                    </Grow>
                </div>
            }}</For >
    </ >
}


export default function (props) {

    const org = props.org || config.org

    return (
        <>
            <Drawer anchor="left" open={true}>
                <List >
                    <ListItem disablePadding>
                        <ListItemButton onClick={
                            window.open(org.url, org.label)
                        }>
                            <Show when={org.html} fallback={<ListItemText primary={org.label} sx={{ ml: 2 * props.indent }} />}>
                                <div innerHTML={org.html} />
                            </Show>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <Menu menu={org.menu} indent={0} />
                </List>
            </Drawer >
        </>
    );
}
