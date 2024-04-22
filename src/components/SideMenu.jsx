import { Show, createSignal } from "solid-js"

import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Grow
} from "@suid/material";
import OpenIcon from "@suid/icons-material/ArrowDropDown"
import config from "./config.js"
import "./SideMenu.css"


export default function (props) {
    const org = props.org || config.org

    return (
        <>
            <Drawer anchor="left" open={true}>
                <List class="menu">
                    <Label url={org.url} label={org.label} html={org.html} />
                    <Divider />
                    <Menu menu={org.menu} indent={0} />
                </List>
            </Drawer >
        </>
    );
}



function Label (props) {
    const { label, url, html, indent, opened, toggle, menu } = props

    return <>
        <ListItem disablePadding>
            <ListItemButton onClick={() => {
                url && window.open(url, label)
                toggle()
            }}>
                <Show when={!html && label} fallback={<div innerHTML={html} />}>
                    <ListItemText primary={label}
                        class="limit-label"
                        sx={{ ml: 2 * indent }} />
                    <Show when={menu?.length}>
                        <OpenIcon class="open-icon"
                            sx={{ transform: !props.opened ? "rotate(-180deg)" : "rotate(0deg)", }} />
                    </Show>
                </Show>
            </ListItemButton>
        </ListItem>
    </>
}

function MenuItem (props) {
    const { item } = props

    const [opened, setOpened] = createSignal(item.opened || false)
    function toggle () { setOpened(!opened()) }

    return <div >
        <Label html={item.html} label={item.label} indent={props.indent} menu={item.menu} opened={opened()} toggle={toggle} />
        <Show when={item.menu && opened()}>
            <Grow direction="down" in={item.menu && opened()} timeout={1000}  >
                <div>
                    <Menu menu={item.menu} indent={props.indent + 1} />
                </div>
            </Grow>
        </Show>
    </div>
}

function Menu (props) {
    return <  >
        <For each={props.menu}>{
            (item) => {
                return <MenuItem item={item} indent={props.indent} />
            }}</For >
    </ >
}